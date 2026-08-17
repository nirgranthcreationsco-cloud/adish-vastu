"use client";

import { ArrowLeft, Loader2, Package, ShoppingCart, Search, Sparkles } from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import FloatingCart from "../../components/floatingcart";
import { useCart } from "../../context/cartcontext";
import { productCatalog, CatalogProduct, matchDriveItemToCatalog } from "@/app/data/productCatalog";

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

  const categoryId = params.categoryId as string;
  const categoryName = decodeURIComponent(categoryId).replace(/-/g, ' ');

  useEffect(() => {
    fetchProducts();
  }, [categoryId]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch the main folder to get category folders
      const mainResponse = await fetch('/api/drive');
      const mainData = await mainResponse.json();

      if (!mainData.success) {
        throw new Error(mainData.error);
      }

      // Find the matching category folder
      const categoryFolder = mainData.items.find(
        (item: DriveItem) =>
          item.mimeType === 'application/vnd.google-apps.folder' &&
          item.name.toLowerCase() === categoryName.toLowerCase()
      );

      if (!categoryFolder) {
        throw new Error('Category not found');
      }

      // Fetch products from this category folder
      const productsResponse = await fetch(`/api/drive?folderId=${categoryFolder.id}`);
      const productsData = await productsResponse.json();

      if (!productsData.success) {
        throw new Error(productsData.error);
      }

      // Common image extensions
      const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp', '.svg', '.heic', '.heif'];
      
      const transformedProducts: Product[] = productsData.items
        .filter((item: DriveItem) => {
          const fileName = item.name.toLowerCase();
          const isImage = imageExtensions.some(ext => fileName.endsWith(ext)) || 
                         item.mimeType.startsWith('image/');
          return isImage;
        })
        .map((item: DriveItem) => {
          const imageUrl = `https://drive.google.com/thumbnail?id=${item.id}&sz=w800`;
          const baseName = item.name.replace(/\.[^/.]+$/, '').trim();
          
          // Match Drive item with structured catalog
          const match = matchDriveItemToCatalog(baseName);

          return {
            id: item.id,
            name: match.product ? match.product.name : baseName,
            image: imageUrl,
            price: "", // Will be formatted dynamically
            category: categoryName,
            catalogItem: match.product || undefined,
          };
        });

      setProducts(transformedProducts);
      
      // Initialize selected variants with first option
      const initialVariants: Record<string, string> = {};
      transformedProducts.forEach(p => {
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

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
      {/* Header */}
      <div className="bg-white/50 backdrop-blur-sm border-b border-amber-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <button
            onClick={() => router.push('/')}
            className="flex items-center gap-2 text-slate-700 hover:text-amber-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Remedies</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Category Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 capitalize">
            {categoryName}
          </h1>
          <p className="text-slate-700 text-lg max-w-2xl mx-auto mb-6">
            Discover our curated collection of {categoryName.toLowerCase()} products
          </p>
          <div className="inline-block px-4 py-2 bg-amber-100 border border-amber-300 rounded-full">
            <span className="text-amber-900 font-semibold">
              {filteredProducts.length} Products Available
            </span>
          </div>
        </div>

        {/* Real-time Search Bar */}
        <div className="max-w-md mx-auto mb-12 relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-amber-600 transition-colors group-focus-within:text-amber-500" />
          </div>
          <input
            type="text"
            placeholder={`Search in ${categoryName.toLowerCase()}...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-12 pr-4 py-4 bg-amber-50/30 border-2 border-amber-200/80 rounded-2xl text-slate-800 font-bold placeholder:text-slate-400 outline-none focus:border-amber-500 focus:bg-white focus:shadow-[0_15px_30px_-10px_rgba(245,158,11,0.2)] transition-all duration-300 shadow-sm"
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
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl sm:rounded-2xl border border-amber-200 hover:border-amber-400 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 overflow-hidden group flex flex-col h-full"
              >
                {/* Product Image & Elegant Placeholder Fallback */}
                <div className="relative h-36 sm:h-64 bg-gradient-to-br from-amber-950 via-slate-900 to-amber-900 overflow-hidden flex-shrink-0 flex items-center justify-center">
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
                      {/* Ambient Golden Radial Glow */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.22)_0%,transparent_70%)] pointer-events-none" />
                      
                      {/* Sacred Geometric Line Art SVG */}
                      <svg className="w-16 h-16 sm:w-24 sm:h-24 text-amber-400/70 mb-2 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700 animate-pulse" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                        <polygon points="50,10 90,90 10,90" strokeWidth="1.5" className="text-amber-500" />
                        <polygon points="50,90 90,10 10,10" strokeWidth="1" strokeDasharray="3 3" className="text-amber-400/50" />
                        <circle cx="50" cy="50" r="28" strokeWidth="1.2" className="text-amber-300" />
                        <circle cx="50" cy="50" r="14" strokeWidth="1" className="text-amber-400" />
                        <circle cx="50" cy="50" r="4" fill="currentColor" className="text-amber-400" />
                      </svg>

                      {/* Professional Sacred Badge */}
                      <div className="flex items-center gap-1.5 px-2.5 py-1 bg-amber-500/10 border border-amber-400/30 rounded-full backdrop-blur-md">
                        <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-400" />
                        <span className="text-[8px] sm:text-[10px] font-black text-amber-200 uppercase tracking-widest">
                          Authentic Vedic Remedy
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="absolute top-2 right-2 sm:top-3 sm:right-3 px-1.5 py-0.5 sm:px-3 sm:py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[8px] sm:text-xs font-bold rounded-full z-10 shadow-md">
                    GENUINE
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-3 sm:p-5 flex flex-col flex-1">
                  <p className="text-amber-700 text-[9px] sm:text-sm font-medium uppercase tracking-wide">
                    {product.category}
                  </p>
                  <h3 className="text-xs sm:text-lg font-bold text-slate-900 mt-1 sm:mt-2 line-clamp-2 leading-tight">
                    {product.name}
                  </h3>

                  {product.catalogItem && product.catalogItem.variants.length > 0 && (
                    <div className="mt-2 text-left">
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                        Select Option
                      </label>
                      <select
                        value={selectedVariants[product.id] || ""}
                        onChange={(e) => setSelectedVariants(prev => ({ ...prev, [product.id]: e.target.value }))}
                        className="w-full px-2 py-1.5 bg-amber-50/50 border border-amber-200 rounded-lg text-slate-800 text-xs font-bold outline-none focus:border-amber-500 transition-colors"
                      >
                        {product.catalogItem.variants.map((v: any) => (
                          <option key={v.option} value={v.option}>
                            {v.option}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* Price and Button pushed to bottom */}
                  <div className="mt-auto pt-3 sm:pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm sm:text-2xl font-bold text-amber-600">
                        {formatPrice(product)}
                      </span>
                    </div>

                    <button
                      onClick={() => handleAddToCart(product)}
                      className="w-full mt-2 sm:mt-4 px-2 sm:px-4 py-2 sm:py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-lg sm:rounded-xl hover:scale-105 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 text-[10px] sm:text-base"
                    >
                      <ShoppingCart className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Floating Cart Button */}
      <FloatingCart />
    </div>
  );
}
