"use client";

import { ArrowLeft, Loader2, Package, ShoppingCart, Search, Sparkles, HelpCircle, MessageCircle, Info, ChevronRight, Compass, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import FloatingCart from "../../components/floatingcart";
import { useCart } from "../../context/cartcontext";
import { productCatalog, CatalogProduct, matchDriveItemToCatalog, getProductStatus, ProductStatus, getProductsByCategory } from "@/app/data/productCatalog";
import ProductEnquiryModal from "../../components/productenquirymodal";
import ProductDetailModal from "../../components/productdetailmodal";
import HomeEnergyScoreModal from "../../components/homeenergyscoremodal";

interface DriveItem {
  id: string;
  name: string;
  mimeType: string;
  thumbnailLink?: string;
  webViewLink?: string;
  webContentLink?: string;
}

interface Product {
  id: string;
  name: string;
  image: string;
  price: string;
  category: string;
  catalogItem?: CatalogProduct;
}

export default function CategoryPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({});
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  // Modals state
  const [detailModalProduct, setDetailModalProduct] = useState<Product | null>(null);
  const [enquiryModalData, setEnquiryModalData] = useState<{
    isOpen: boolean;
    productName: string;
    categoryName: string;
    selectedVariant?: string;
    enquiryType: "price_request" | "consultation_request";
  }>({
    isOpen: false,
    productName: "",
    categoryName: "",
    enquiryType: "price_request",
  });
  const [isEnergyModalOpen, setIsEnergyModalOpen] = useState(false);
  const [allCategories, setAllCategories] = useState<{ id: string; name: string }[]>([]);

  const categoryId = params.categoryId as string;
  const categoryName = decodeURIComponent(categoryId).replace(/-/g, ' ');

  useEffect(() => {
    fetchProducts();
  }, [categoryId]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch category folders from drive API
      const mainResponse = await fetch('/api/drive');
      const mainData = await mainResponse.json();

      let driveItems: DriveItem[] = [];

      if (mainData.success && mainData.items) {
        // Store all category folders for quick switching
        const catFolders = mainData.items
          .filter((item: DriveItem) => item.mimeType === 'application/vnd.google-apps.folder')
          .map((item: DriveItem) => ({ id: item.id, name: item.name }));
        setAllCategories(catFolders);

        // Find the matching category folder
        const categoryFolder = mainData.items.find(
          (item: DriveItem) =>
            item.mimeType === 'application/vnd.google-apps.folder' &&
            item.name.toLowerCase() === categoryName.toLowerCase()
        );

        if (categoryFolder) {
          // Fetch products from this category folder
          const productsResponse = await fetch(`/api/drive?folderId=${categoryFolder.id}`);
          const productsData = await productsResponse.json();
          if (productsData.success && productsData.items) {
            driveItems = productsData.items;
          }
        }
      }

      // Filter drive items to only valid images
      const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp', '.svg', '.heic', '.heif'];
      const driveImages = driveItems.filter((item: DriveItem) => {
        const fileName = item.name.toLowerCase();
        return imageExtensions.some(ext => fileName.endsWith(ext)) || item.mimeType.startsWith('image/');
      });

      // 1. Get all Excel Master Catalog products belonging to this category
      const catalogProductsForCategory = getProductsByCategory(categoryName);
      
      const reconciledMap = new Map<string, Product>();

      // First, map every master Excel catalog product to ensure 100% presence
      catalogProductsForCategory.forEach((catProd, idx) => {
        reconciledMap.set(catProd.name.toLowerCase(), {
          id: catProd.id || `cat-prod-${idx}`,
          name: catProd.name,
          image: catProd.image || "/sacred_remedies.png",
          price: "",
          category: categoryName,
          catalogItem: catProd,
        });
      });

      // Second, overlay Drive images & items into the catalog
      driveImages.forEach((item: DriveItem) => {
        const baseName = item.name.replace(/\.[^/.]+$/, '').trim();
        const match = matchDriveItemToCatalog(baseName);
        const imageUrl = `https://drive.google.com/thumbnail?id=${item.id}&sz=w800`;

        if (match.product) {
          const key = match.product.name.toLowerCase();
          const existing = reconciledMap.get(key);
          if (existing) {
            existing.image = imageUrl;
            existing.id = item.id;
          } else {
            reconciledMap.set(key, {
              id: item.id,
              name: match.product.name,
              image: imageUrl,
              price: "",
              category: categoryName,
              catalogItem: match.product,
            });
          }
        } else {
          // Additional Drive item not in structured list
          const key = baseName.toLowerCase();
          if (!reconciledMap.has(key)) {
            reconciledMap.set(key, {
              id: item.id,
              name: baseName,
              image: imageUrl,
              price: "",
              category: categoryName,
              catalogItem: undefined,
            });
          }
        }
      });

      const finalProductList = Array.from(reconciledMap.values());
      setProducts(finalProductList);

      // Initialize selected variants with first option
      const initialVariants: Record<string, string> = {};
      finalProductList.forEach(p => {
        if (p.catalogItem && p.catalogItem.variants.length > 0) {
          initialVariants[p.id] = p.catalogItem.variants[0].option;
        }
      });
      setSelectedVariants(initialVariants);
    } catch (err: any) {
      console.error('❌ Error fetching products:', err);
      setError(err.message || 'Failed to load products');
    } finally {
      setLoading(false);
    }
  };

  const formatPrice = (product: Product) => {
    let b2c: number | string | null = null;
    let unit = "";
    
    if (product.catalogItem) {
      if (product.catalogItem.variants.length > 0) {
        const opt = selectedVariants[product.id] || product.catalogItem.variants[0].option;
        const matchVar = product.catalogItem.variants.find((v: any) => v.option === opt);
        if (matchVar) b2c = matchVar.b2c;
      } else {
        b2c = product.catalogItem.b2c;
      }

      if (b2c !== null && b2c !== undefined) {
        const b2cStr = String(b2c);
        if (b2cStr.includes("-") || b2cStr.includes("/")) {
          return `₹${b2cStr}`;
        }
        
        const nameLower = product.catalogItem.name.toLowerCase();
        if (nameLower.includes("rough stone") || nameLower.includes("chips")) {
          unit = " / kg";
        } else if (nameLower.includes("tumbles")) {
          unit = " / 200g";
        }
        
        return `₹${b2c}${unit}`;
      }
    }
    
    return "Contact for Price";
  };

  const handleAddToCart = (product: Product) => {
    const option = selectedVariants[product.id];
    let cartName = product.name;
    let priceStr = formatPrice(product);

    if (option) {
      cartName = `${product.name} - ${option}`;
    }

    addToCart({
      name: cartName,
      price: priceStr,
      image: product.image,
    });
  };

  const filteredProducts = products.filter((product) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    const nameMatch = product.name.toLowerCase().includes(q);
    const catMatch = product.category.toLowerCase().includes(q);
    const variantMatch = Boolean(
      product.catalogItem?.variants.some(v => v.option.toLowerCase().includes(q))
    );
    return nameMatch || catMatch || variantMatch;
  });

  // SEO schemas definition
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `${categoryName} Remedies - Jain Vastu Solution`,
    "description": `Shop dynamic and energised ${categoryName.toLowerCase()} products for vastu rectification, wealth, and wellness.`,
    "numberOfItems": filteredProducts.length,
    "itemListElement": filteredProducts.map((p, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "item": {
        "@type": "Product",
        "name": p.name,
        "image": p.image,
        "offers": {
          "@type": "Offer",
          "price": p.price.replace(/\D/g, ""),
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "priceValidUntil": "2027-12-31",
          "shippingDetails": {
            "@type": "OfferShippingDetails",
            "shippingRate": {
              "@type": "MonetaryAmount",
              "value": "0",
              "currency": "INR"
            },
            "destinationCountries": "IN"
          }
        }
      }
    }))
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Jain Vastu Solution Remedies",
    "image": "https://vastuacademy.com/logo.png",
    "telephone": "+91-9999999999",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jain Vastu Solution HQ",
      "addressLocality": "Delhi",
      "addressRegion": "Delhi",
      "postalCode": "110001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.6139",
      "longitude": "77.2090"
    },
    "url": "https://vastuacademy.com",
    "areaServed": ["IN", "US", "AE", "GB"],
    "priceRange": "$$"
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-orange-100 via-amber-50 to-orange-100 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-amber-600 animate-spin mx-auto mb-4" />
          <p className="text-slate-700 text-lg">Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-orange-100 via-amber-50 to-orange-100 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <Package className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Oops!</h2>
          <p className="text-slate-700 mb-6">{error}</p>
          <button
            onClick={() => router.push('/')}
            className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-lg hover:scale-105 transition-all"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Dynamic SEO JSON-LD Structured Metadata */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Decorative Background */}
      <div className="fixed inset-0 pointer-events-none opacity-5 scroll-smooth">
        <Image src="/sacred_remedies.png" alt="background" fill className="object-cover" />
      </div>
      {/* Header with Back Anchor and Category Switcher */}
      <div className="bg-white/80 backdrop-blur-md border-b border-amber-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <button
            onClick={() => router.push('/#remedies')}
            className="flex items-center gap-2 text-slate-700 hover:text-amber-600 font-bold transition-colors w-fit group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm">Back to Remedies Section</span>
          </button>

          {/* Quick Category Switcher Pills */}
          {allCategories.length > 0 && (
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mr-1 hidden md:inline">
                Categories:
              </span>
              {allCategories.map((cat) => {
                const isCurrent = cat.name.toLowerCase() === categoryName.toLowerCase();
                return (
                  <button
                    key={cat.id}
                    onClick={() => router.push(`/remedies/${encodeURIComponent(cat.name.replace(/\s+/g, '-'))}`)}
                    className={`px-3 py-1.5 rounded-full text-xs font-black tracking-tight whitespace-nowrap transition-all border ${
                      isCurrent
                        ? "bg-amber-500 text-slate-950 border-amber-400 shadow-sm font-black"
                        : "bg-amber-50/60 text-slate-700 hover:bg-amber-100/80 border-amber-200/80"
                    }`}
                  >
                    {cat.name}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Category Header */}
        <div className="text-center mb-8 sm:mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-3 capitalize">
            {categoryName}
          </h1>
          <p className="text-slate-700 text-sm sm:text-lg max-w-2xl mx-auto mb-4">
            Discover our curated collection of {categoryName.toLowerCase()} products
          </p>
          <div className="inline-block px-4 py-1.5 bg-amber-100 border border-amber-300 rounded-full">
            <span className="text-amber-900 text-xs sm:text-sm font-bold">
              {filteredProducts.length} Products Available
            </span>
          </div>
        </div>

        {/* Real-time Search Bar */}
        <div className="max-w-md mx-auto mb-10 sm:mb-12 relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-amber-600 transition-colors group-focus-within:text-amber-500" />
          </div>
          <input
            type="text"
            placeholder={`Search in ${categoryName.toLowerCase()}...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-12 pr-4 py-3.5 bg-amber-50/30 border-2 border-amber-200/80 rounded-2xl text-slate-800 font-bold placeholder:text-slate-400 outline-none focus:border-amber-500 focus:bg-white focus:shadow-[0_15px_30px_-10px_rgba(245,158,11,0.2)] transition-all duration-300 shadow-sm text-sm sm:text-base"
          />
        </div>

        {/* Products Grid (2 Columns on Mobile, 3/4 Columns on Desktop) */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <Package className="w-16 h-16 text-slate-400 mx-auto mb-4" />
            <p className="text-slate-600 text-lg">No products found matching your search</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
            {filteredProducts.map((product) => {
              const currentVariant = selectedVariants[product.id];
              const status: ProductStatus = getProductStatus(product.catalogItem, currentVariant);
              const priceText = formatPrice(product);
              const isPriced = status === "DIRECT_PURCHASE";

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl border border-amber-200/90 hover:border-amber-400 hover:shadow-2xl hover:scale-[1.015] transition-all duration-300 overflow-hidden group flex flex-col h-full relative"
                >
                  {/* Product Image & Elegant Placeholder Fallback */}
                  <div 
                    onClick={() => setDetailModalProduct(product)}
                    className="relative h-40 sm:h-64 bg-gradient-to-br from-amber-950 via-slate-900 to-amber-900 overflow-hidden flex-shrink-0 flex items-center justify-center cursor-pointer"
                  >
                    {!imageErrors[product.id] && product.image ? (
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={() => setImageErrors((prev) => ({ ...prev, [product.id]: true }))}
                      />
                    ) : (
                      <div className="relative w-full h-full flex flex-col items-center justify-center p-4 text-center overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.22)_0%,transparent_70%)] pointer-events-none" />
                        <svg className="w-16 h-16 sm:w-24 sm:h-24 text-amber-400/70 mb-2 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700 animate-pulse" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                          <polygon points="50,10 90,90 10,90" strokeWidth="1.5" className="text-amber-500" />
                          <polygon points="50,90 90,10 10,10" strokeWidth="1" strokeDasharray="3 3" className="text-amber-400/50" />
                          <circle cx="50" cy="50" r="28" strokeWidth="1.2" className="text-amber-300" />
                          <circle cx="50" cy="50" r="14" strokeWidth="1" className="text-amber-400" />
                          <circle cx="50" cy="50" r="4" fill="currentColor" className="text-amber-400" />
                        </svg>
                        <div className="flex items-center gap-1.5 px-2.5 py-1 bg-amber-500/10 border border-amber-400/30 rounded-full backdrop-blur-md">
                          <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-400" />
                          <span className="text-[8px] sm:text-[10px] font-black text-amber-200 uppercase tracking-widest">
                            Authentic Vedic Remedy
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Status Badge */}
                    <div className="absolute top-2 right-2 sm:top-3 sm:right-3 px-2 py-0.5 sm:px-3 sm:py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[8px] sm:text-xs font-black rounded-full z-10 shadow-md">
                      {status === "CONSULTATION_REQUIRED" ? "GUIDANCE" : isPriced ? "IN STOCK" : "CUSTOM"}
                    </div>

                    {/* Quick View overlay */}
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setDetailModalProduct(product);
                      }}
                      className="absolute bottom-2 right-2 px-2.5 py-1 bg-slate-900/70 hover:bg-slate-900 text-white text-[9px] sm:text-[11px] font-bold rounded-lg backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 z-10"
                    >
                      <Info className="w-3 h-3 text-amber-400" />
                      <span>Learn More</span>
                    </button>
                  </div>

                  {/* Product Info */}
                  <div className="p-3 sm:p-5 flex flex-col flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-amber-700 text-[9px] sm:text-xs font-black uppercase tracking-wider">
                        {product.category}
                      </p>
                      <button
                        onClick={() => setDetailModalProduct(product)}
                        className="text-slate-400 hover:text-amber-600 transition-colors"
                        title="View Remedy Guidance"
                      >
                        <HelpCircle className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <h3 
                      onClick={() => setDetailModalProduct(product)}
                      className="text-xs sm:text-base font-black text-slate-900 mt-1 line-clamp-2 leading-tight cursor-pointer hover:text-amber-600 transition-colors"
                    >
                      {product.name}
                    </h3>

                    {/* Variant Option Dropdown */}
                    {product.catalogItem && product.catalogItem.variants.length > 0 && (
                      <div className="mt-2 text-left">
                        <label className="block text-[9px] sm:text-[10px] font-black text-slate-500 uppercase tracking-wider mb-1">
                          Select Specification
                        </label>
                        <select
                          value={selectedVariants[product.id] || ""}
                          onChange={(e) => setSelectedVariants(prev => ({ ...prev, [product.id]: e.target.value }))}
                          className="w-full px-2 py-1.5 bg-amber-50/50 border border-amber-200 rounded-lg text-slate-800 text-[11px] sm:text-xs font-bold outline-none focus:border-amber-500 transition-colors"
                        >
                          {product.catalogItem.variants.map((v: any) => (
                            <option key={v.option} value={v.option}>
                              {v.option} {v.b2c ? `(₹${v.b2c})` : "(On Request)"}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}

                    {/* Price and Smart Action Button */}
                    <div className="mt-auto pt-3 sm:pt-4 border-t border-slate-100">
                      <div className="flex items-center justify-between mb-2">
                        {isPriced ? (
                          <span className="text-sm sm:text-xl font-black text-amber-600">
                            {priceText}
                          </span>
                        ) : (
                          <span className="text-[10px] sm:text-xs font-black text-amber-800 uppercase tracking-wider bg-amber-100/70 px-2 py-0.5 rounded-md">
                            {status === "CONSULTATION_REQUIRED" ? "Recommended after consultation" : "Price on Request"}
                          </span>
                        )}
                      </div>

                      {/* Smart Contextual CTAs */}
                      {isPriced ? (
                        <div className="space-y-1.5">
                          <button
                            onClick={() => handleAddToCart(product)}
                            className="w-full px-2 sm:px-4 py-2 sm:py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-black rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 text-[10px] sm:text-sm"
                          >
                            <ShoppingCart className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            Add to Cart
                          </button>
                          <button
                            onClick={() => setEnquiryModalData({
                              isOpen: true,
                              productName: product.name,
                              categoryName: product.category,
                              selectedVariant: currentVariant,
                              enquiryType: "consultation_request"
                            })}
                            className="w-full text-center text-[9px] sm:text-[10px] font-bold text-slate-500 hover:text-amber-600 py-0.5 transition-colors"
                          >
                            Need help choosing? Ask an Expert →
                          </button>
                        </div>
                      ) : status === "CONSULTATION_REQUIRED" ? (
                        <div className="space-y-1.5">
                          <button
                            onClick={() => setEnquiryModalData({
                              isOpen: true,
                              productName: product.name,
                              categoryName: product.category,
                              selectedVariant: currentVariant,
                              enquiryType: "consultation_request"
                            })}
                            className="w-full px-2 sm:px-4 py-2 sm:py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-black rounded-xl shadow-md transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 text-[10px] sm:text-sm"
                          >
                            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
                            Talk to an Expert
                          </button>
                          <button
                            onClick={() => setDetailModalProduct(product)}
                            className="w-full text-center text-[9px] sm:text-[10px] font-bold text-slate-500 hover:text-amber-600 py-0.5 transition-colors"
                          >
                            Understand this Remedy →
                          </button>
                        </div>
                      ) : (
                        <div className="space-y-1.5">
                          <button
                            onClick={() => setEnquiryModalData({
                              isOpen: true,
                              productName: product.name,
                              categoryName: product.category,
                              selectedVariant: currentVariant,
                              enquiryType: "price_request"
                            })}
                            className="w-full px-2 sm:px-4 py-2 sm:py-2.5 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-black rounded-xl shadow-md transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 text-[10px] sm:text-sm"
                          >
                            <MessageCircle className="w-3.5 h-3.5 fill-current" />
                            Get Latest Price →
                          </button>
                          <button
                            onClick={() => setEnquiryModalData({
                              isOpen: true,
                              productName: product.name,
                              categoryName: product.category,
                              selectedVariant: currentVariant,
                              enquiryType: "consultation_request"
                            })}
                            className="w-full text-center text-[9px] sm:text-[10px] font-bold text-slate-500 hover:text-amber-600 py-0.5 transition-colors"
                          >
                            Ask a Vastu Consultant →
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* 11. "NOT SURE WHAT YOU NEED?" STORE-WIDE SALES FUNNEL SECTION */}
        <div className="mt-16 md:mt-24 max-w-4xl mx-auto">
          <div className="relative rounded-3xl bg-gradient-to-br from-amber-900 via-slate-900 to-amber-950 text-white p-8 sm:p-12 overflow-hidden shadow-2xl border border-amber-400/30">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[60px] rounded-full pointer-events-none" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div className="space-y-3 max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 border border-amber-400/30 rounded-full text-[10px] font-black text-amber-300 uppercase tracking-widest">
                  <Compass className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: "12s" }} />
                  Holistic Space Analysis
                </div>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                  Not Sure Which Vastu Remedy Is Right For You?
                </h3>
                <p className="text-amber-100/90 text-sm sm:text-base font-normal leading-relaxed">
                  Every home and commercial premise has unique directional energies. If you are unsure which specific metal, stone, or geometric remedy fits your layout, our certified consultants will map your space before you invest.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto flex-shrink-0">
                <button
                  onClick={() => setEnquiryModalData({
                    isOpen: true,
                    productName: `General Consultation (${categoryName})`,
                    categoryName: categoryName,
                    enquiryType: "consultation_request"
                  })}
                  className="px-6 py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-black text-xs sm:text-sm uppercase tracking-wider rounded-2xl shadow-xl shadow-amber-500/25 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Talk to a Vastu Expert</span>
                </button>

                <button
                  onClick={() => setIsEnergyModalOpen(true)}
                  className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-amber-200 border border-amber-300/30 font-black text-xs sm:text-sm uppercase tracking-wider rounded-2xl backdrop-blur-md transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Check Home Energy</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Cart Button */}
      <FloatingCart />

      {/* Product Detail Education Modal */}
      <ProductDetailModal
        isOpen={Boolean(detailModalProduct)}
        onClose={() => setDetailModalProduct(null)}
        product={detailModalProduct}
        selectedVariant={detailModalProduct ? selectedVariants[detailModalProduct.id] : undefined}
        onSelectVariant={(v) => {
          if (detailModalProduct) {
            setSelectedVariants(prev => ({ ...prev, [detailModalProduct.id]: v }));
          }
        }}
        onAddToCart={() => {
          if (detailModalProduct) handleAddToCart(detailModalProduct);
        }}
        onOpenEnquiry={(type) => {
          if (detailModalProduct) {
            setEnquiryModalData({
              isOpen: true,
              productName: detailModalProduct.name,
              categoryName: detailModalProduct.category,
              selectedVariant: selectedVariants[detailModalProduct.id],
              enquiryType: type,
            });
          }
        }}
        formattedPrice={detailModalProduct ? formatPrice(detailModalProduct) : ""}
      />

      {/* Product Enquiry / WhatsApp Funnel Modal */}
      <ProductEnquiryModal
        isOpen={enquiryModalData.isOpen}
        onClose={() => setEnquiryModalData(prev => ({ ...prev, isOpen: false }))}
        productName={enquiryModalData.productName}
        categoryName={enquiryModalData.categoryName}
        selectedVariant={enquiryModalData.selectedVariant}
        enquiryType={enquiryModalData.enquiryType}
      />

      {/* Interactive Home Energy Score Modal */}
      <HomeEnergyScoreModal
        isOpen={isEnergyModalOpen}
        onClose={() => setIsEnergyModalOpen(false)}
      />
    </div>
  );
}
