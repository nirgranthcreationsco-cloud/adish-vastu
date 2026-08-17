export interface ProductVariant {
  option: string;
  b2b: string | number | null;
  b2c: string | number | null;
}

export interface ProductEducationalInfo {
  whatIsIt: string;
  whyUsed: string;
  suitableFor: string;
  howUsed: string;
  crossSellIds?: string[];
}

export type ProductStatus = 'DIRECT_PURCHASE' | 'ENQUIRE_PRICE' | 'VARIABLE_PRICE' | 'CONSULTATION_REQUIRED';

export interface CatalogProduct {
  name: string;
  category: string;
  b2b: string | number | null;
  b2c: string | number | null;
  variants: ProductVariant[];
  info?: ProductEducationalInfo;
}

export const productCatalog: CatalogProduct[] = [
  {
    "name": "Copper L rod",
    "category": "Metals / Strips / Helix",
    "b2b": 1400,
    "b2c": 1550,
    "variants": []
  },
  {
    "name": "Copper L rod with bering handle",
    "category": "Metals / Strips / Helix",
    "b2b": 2350,
    "b2c": 2550,
    "variants": []
  },
  {
    "name": "Brass L rod with bering handle",
    "category": "Metals / Strips / Helix",
    "b2b": 2350,
    "b2c": 2550,
    "variants": []
  },
  {
    "name": "Lecher antenna",
    "category": "Other Vastu Products",
    "b2b": 4800,
    "b2c": 5050,
    "variants": []
  },
  {
    "name": "Copper pyramid",
    "category": "Pyramids",
    "b2b": null,
    "b2c": null,
    "variants": [
      {
        "option": "1”",
        "b2b": 45,
        "b2c": 50
      },
      {
        "option": "2”",
        "b2b": 55,
        "b2c": 75
      },
      {
        "option": "4”",
        "b2b": 140,
        "b2c": 155
      },
      {
        "option": "6”",
        "b2b": 580,
        "b2c": 680
      },
      {
        "option": "8”",
        "b2b": 850,
        "b2c": 950
      },
      {
        "option": "9”",
        "b2b": 1600,
        "b2c": 1750
      }
    ]
  },
  {
    "name": "Brass pyramid",
    "category": "Pyramids",
    "b2b": null,
    "b2c": null,
    "variants": [
      {
        "option": "1”",
        "b2b": 45,
        "b2c": 50
      },
      {
        "option": "2”",
        "b2b": 55,
        "b2c": 75
      },
      {
        "option": "4”",
        "b2b": 140,
        "b2c": 155
      },
      {
        "option": "6”",
        "b2b": 580,
        "b2c": 680
      },
      {
        "option": "8”",
        "b2b": 850,
        "b2c": 950
      }
    ]
  },
  {
    "name": "Tridhatu pyramid",
    "category": "Pyramids",
    "b2b": null,
    "b2c": null,
    "variants": [
      {
        "option": "2”",
        "b2b": 210,
        "b2c": 260
      },
      {
        "option": "4”",
        "b2b": 320,
        "b2c": 390
      }
    ]
  },
  {
    "name": "Liquid Mercury / parad",
    "category": "Other Vastu Products",
    "b2b": 750000,
    "b2c": 820000,
    "variants": []
  },
  {
    "name": "Mercury / parad pyramid",
    "category": "Pyramids",
    "b2b": 1250,
    "b2c": 1400,
    "variants": []
  },
  {
    "name": "Mercury / parad swastika",
    "category": "Swastika / Chakra",
    "b2b": 1350,
    "b2c": 1450,
    "variants": []
  },
  {
    "name": "Mercury / parad killak / nail",
    "category": "Other Vastu Products",
    "b2b": 480,
    "b2c": 530,
    "variants": []
  },
  {
    "name": "Nandavarta swastika copper",
    "category": "Swastika / Chakra",
    "b2b": null,
    "b2c": null,
    "variants": [
      {
        "option": "25mm",
        "b2b": 50,
        "b2c": 60
      },
      {
        "option": "30mm",
        "b2b": 65,
        "b2c": 70
      },
      {
        "option": "35mm",
        "b2b": 75,
        "b2c": 80
      }
    ]
  },
  {
    "name": "Tridhatu nandavarta swastika",
    "category": "Swastika / Chakra",
    "b2b": null,
    "b2c": null,
    "variants": [
      {
        "option": "25mm",
        "b2b": 65,
        "b2c": 75
      },
      {
        "option": "30mm",
        "b2b": 75,
        "b2c": 85
      },
      {
        "option": "35mm",
        "b2b": 90,
        "b2c": 100
      }
    ]
  },
  {
    "name": "Silver nandavarta swastika",
    "category": "Swastika / Chakra",
    "b2b": null,
    "b2c": null,
    "variants": [
      {
        "option": "25mm",
        "b2b": 950,
        "b2c": 1000
      },
      {
        "option": "30mm",
        "b2b": 1050,
        "b2c": 1100
      }
    ]
  },
  {
    "name": "Eaching Aura Booster",
    "category": "Other Vastu Products",
    "b2b": 600,
    "b2c": 650,
    "variants": []
  },
  {
    "name": "Hanuman Aura Booster",
    "category": "Other Vastu Products",
    "b2b": 450,
    "b2c": 520,
    "variants": []
  },
  {
    "name": "Aura Booster.",
    "category": "Other Vastu Products",
    "b2b": 380,
    "b2c": 420,
    "variants": []
  },
  {
    "name": "Vastu Toilet Blocker with 9 prymid plate",
    "category": "Pyramids",
    "b2b": 600,
    "b2c": 750,
    "variants": []
  },
  {
    "name": "Vastu Toilet Pacifier, Negative Energy Blocker, Toilet Negative Energy Blocker, full brass body.",
    "category": "Other Vastu Products",
    "b2b": 600,
    "b2c": 750,
    "variants": []
  },
  {
    "name": "Vastu Entry Blocker",
    "category": "Other Vastu Products",
    "b2b": 470,
    "b2c": 670,
    "variants": []
  },
  {
    "name": "Al metal geopathic stress rod",
    "category": "Metals / Strips / Helix",
    "b2b": "600 - 1400",
    "b2c": "700 - 1700",
    "variants": []
  },
  {
    "name": "8 direction rod",
    "category": "Metals / Strips / Helix",
    "b2b": 4500,
    "b2c": 4800,
    "variants": []
  },
  {
    "name": "Vastu Toilet blocker",
    "category": "Other Vastu Products",
    "b2b": 600,
    "b2c": 750,
    "variants": []
  },
  {
    "name": "Vastu Fire Balancer",
    "category": "Other Vastu Products",
    "b2b": 600,
    "b2c": 750,
    "variants": []
  },
  {
    "name": "Copper strips",
    "category": "Metals / Strips / Helix",
    "b2b": null,
    "b2c": null,
    "variants": [
      {
        "option": "1 Inch",
        "b2b": "35 / 40",
        "b2c": "40 / 45"
      },
      {
        "option": "0.5 Inch",
        "b2b": 28,
        "b2c": 35
      }
    ]
  },
  {
    "name": "Brass Strip",
    "category": "Metals / Strips / Helix",
    "b2b": null,
    "b2c": null,
    "variants": [
      {
        "option": "1 incH",
        "b2b": "35 / 40",
        "b2c": "40 / 45"
      },
      {
        "option": "0.5 inch",
        "b2b": 28,
        "b2c": 35
      }
    ]
  },
  {
    "name": "Stainless steel strip",
    "category": "Metals / Strips / Helix",
    "b2b": null,
    "b2c": null,
    "variants": [
      {
        "option": "1 inch.",
        "b2b": 30,
        "b2c": 35
      },
      {
        "option": "0.5 inch",
        "b2b": 25,
        "b2c": 30
      }
    ]
  },
  {
    "name": "Aluminium Strip",
    "category": "Metals / Strips / Helix",
    "b2b": null,
    "b2c": null,
    "variants": [
      {
        "option": "1 inch",
        "b2b": 30,
        "b2c": 35
      },
      {
        "option": "0.5 inch",
        "b2b": 25,
        "b2c": 30
      }
    ]
  },
  {
    "name": "Iron Strip",
    "category": "Metals / Strips / Helix",
    "b2b": null,
    "b2c": null,
    "variants": [
      {
        "option": "1 inch",
        "b2b": 30,
        "b2c": 35
      },
      {
        "option": "0.5inch",
        "b2b": 25,
        "b2c": 30
      }
    ]
  },
  {
    "name": "Tridhatu strip",
    "category": "Metals / Strips / Helix",
    "b2b": null,
    "b2c": null,
    "variants": [
      {
        "option": "1 inch",
        "b2b": 145,
        "b2c": 155
      }
    ]
  },
  {
    "name": "All metal strip with muscovite",
    "category": "Metals / Strips / Helix",
    "b2b": null,
    "b2c": null,
    "variants": [
      {
        "option": "Copper",
        "b2b": 85,
        "b2c": 95
      },
      {
        "option": "Brass",
        "b2b": 85,
        "b2c": 95
      },
      {
        "option": "Iron",
        "b2b": 70,
        "b2c": 80
      },
      {
        "option": "Aluminium",
        "b2b": 70,
        "b2c": 80
      },
      {
        "option": "S.S.",
        "b2b": 70,
        "b2c": 80
      }
    ]
  },
  {
    "name": "Copper Helix",
    "category": "Metals / Strips / Helix",
    "b2b": null,
    "b2c": null,
    "variants": [
      {
        "option": "4”",
        "b2b": 450,
        "b2c": 520
      },
      {
        "option": "6”",
        "b2b": 580,
        "b2c": 680
      }
    ]
  },
  {
    "name": "Brass Helix",
    "category": "Metals / Strips / Helix",
    "b2b": null,
    "b2c": null,
    "variants": [
      {
        "option": "4”",
        "b2b": 420,
        "b2c": 480
      },
      {
        "option": "6”",
        "b2b": 549,
        "b2c": 660
      }
    ]
  },
  {
    "name": "Zinc Helix",
    "category": "Metals / Strips / Helix",
    "b2b": null,
    "b2c": null,
    "variants": [
      {
        "option": "4”",
        "b2b": 250,
        "b2c": 300
      },
      {
        "option": "6”",
        "b2b": 450,
        "b2c": 530
      }
    ]
  },
  {
    "name": "Aluminium Helix",
    "category": "Metals / Strips / Helix",
    "b2b": null,
    "b2c": null,
    "variants": [
      {
        "option": "4”",
        "b2b": 180,
        "b2c": 230
      },
      {
        "option": "6”",
        "b2b": 350,
        "b2c": 420
      }
    ]
  },
  {
    "name": "Lead Helix",
    "category": "Metals / Strips / Helix",
    "b2b": null,
    "b2c": null,
    "variants": [
      {
        "option": "4”",
        "b2b": 300,
        "b2c": 350
      },
      {
        "option": "6”",
        "b2b": 480,
        "b2c": 550
      }
    ]
  },
  {
    "name": "Advance English Shakti Chakra",
    "category": "Swastika / Chakra",
    "b2b": null,
    "b2c": null,
    "variants": [
      {
        "option": "12 inch",
        "b2b": 600,
        "b2c": 750
      },
      {
        "option": "9 inch",
        "b2b": 450,
        "b2c": 550
      },
      {
        "option": "6 inch",
        "b2b": 220,
        "b2c": 300
      }
    ]
  },
  {
    "name": "English Shakti Chakra",
    "category": "Swastika / Chakra",
    "b2b": null,
    "b2c": null,
    "variants": [
      {
        "option": "12 inch",
        "b2b": 600,
        "b2c": 750
      },
      {
        "option": "9 inch",
        "b2b": 450,
        "b2c": 550
      },
      {
        "option": "6 inch",
        "b2b": 220,
        "b2c": 300
      }
    ]
  },
  {
    "name": "Vastu Disha Shakti Chakra Hindi",
    "category": "Swastika / Chakra",
    "b2b": null,
    "b2c": null,
    "variants": [
      {
        "option": "6 inch",
        "b2b": 220,
        "b2c": 300
      }
    ]
  },
  {
    "name": "Dowsing board",
    "category": "Other Vastu Products",
    "b2b": 220,
    "b2c": 300,
    "variants": []
  },
  {
    "name": "Brass pendulums",
    "category": "Other Vastu Products",
    "b2b": 220,
    "b2c": 300,
    "variants": []
  },
  {
    "name": "Stone pendulums",
    "category": "Crystals & Stones",
    "b2b": 120,
    "b2c": null,
    "variants": []
  },
  {
    "name": "All metal 3 layer pyramid",
    "category": "Pyramids",
    "b2b": null,
    "b2c": null,
    "variants": [
      {
        "option": "Copper",
        "b2b": 950,
        "b2c": 1050
      },
      {
        "option": "Brass",
        "b2b": 950,
        "b2c": 1050
      },
      {
        "option": "Lead",
        "b2b": 550,
        "b2c": 650
      },
      {
        "option": "Aluminium",
        "b2b": 500,
        "b2c": 600
      },
      {
        "option": "Ss",
        "b2b": 520,
        "b2c": 620
      }
    ]
  },
  {
    "name": "All metal 2 layer pyramid",
    "category": "Pyramids",
    "b2b": null,
    "b2c": null,
    "variants": [
      {
        "option": "Copper",
        "b2b": 930,
        "b2c": 1050
      },
      {
        "option": "Brass",
        "b2b": 930,
        "b2c": 1050
      },
      {
        "option": "Lead",
        "b2b": 520,
        "b2c": 650
      },
      {
        "option": "Aluminium",
        "b2b": 500,
        "b2c": 620
      },
      {
        "option": "Ss",
        "b2b": null,
        "b2c": null
      }
    ]
  },
  {
    "name": "Red elephant",
    "category": "Decorative Items",
    "b2b": null,
    "b2c": null,
    "variants": []
  },
  {
    "name": "Red horse",
    "category": "Decorative Items",
    "b2b": 800,
    "b2c": 900,
    "variants": []
  },
  {
    "name": "Love birds",
    "category": "Decorative Items",
    "b2b": 1500,
    "b2c": 1650,
    "variants": []
  },
  {
    "name": "All brass statue",
    "category": "Decorative Items",
    "b2b": null,
    "b2c": null,
    "variants": []
  },
  {
    "name": "Yellow kodi, Black kodi, White kodi",
    "category": "Vastu Remedies",
    "b2b": "2300/1400/600",
    "b2c": "2500/1600/800",
    "variants": []
  },
  {
    "name": "Shakti chakra",
    "category": "Swastika / Chakra",
    "b2b": null,
    "b2c": null,
    "variants": []
  },
  {
    "name": "Black, White, Red Gomchi",
    "category": "Vastu Remedies",
    "b2b": "2200/2000/900",
    "b2c": "2400/2200/1000",
    "variants": []
  },
  {
    "name": "Safed sarso",
    "category": "Vastu Remedies",
    "b2b": 2350,
    "b2c": 2800,
    "variants": []
  },
  {
    "name": "Pilli sarso",
    "category": "Vastu Remedies",
    "b2b": 240,
    "b2c": 350,
    "variants": []
  },
  {
    "name": "Business dhoop",
    "category": "Vastu Remedies",
    "b2b": 1000,
    "b2c": 1200,
    "variants": []
  },
  {
    "name": "Land energy dhoop",
    "category": "Vastu Remedies",
    "b2b": 1000,
    "b2c": 1200,
    "variants": []
  },
  {
    "name": "Clear quartz small size",
    "category": "Crystals & Stones",
    "b2b": 850,
    "b2c": 1000,
    "variants": []
  },
  {
    "name": "Clear quartz medium size",
    "category": "Crystals & Stones",
    "b2b": 1150,
    "b2c": 1300,
    "variants": []
  },
  {
    "name": "Clear quartz big size",
    "category": "Crystals & Stones",
    "b2b": 1250,
    "b2c": 1400,
    "variants": []
  },
  {
    "name": "Brass padam plate",
    "category": "Other Vastu Products",
    "b2b": 980,
    "b2c": 1100,
    "variants": []
  },
  {
    "name": "Copper padam plate",
    "category": "Other Vastu Products",
    "b2b": 950,
    "b2c": 1100,
    "variants": []
  },
  {
    "name": "All coulor taps",
    "category": "Other Vastu Products",
    "b2b": null,
    "b2c": null,
    "variants": []
  },
  {
    "name": "(W – 4” / L – 25m)",
    "category": "Other Vastu Products",
    "b2b": 330,
    "b2c": 400,
    "variants": []
  },
  {
    "name": "Muscovite powder",
    "category": "Other Vastu Products",
    "b2b": 140,
    "b2c": 180,
    "variants": []
  },
  {
    "name": "Muscovite sheet",
    "category": "Other Vastu Products",
    "b2b": 900,
    "b2c": 1050,
    "variants": []
  },
  {
    "name": "Dowsing board",
    "category": "Other Vastu Products",
    "b2b": null,
    "b2c": null,
    "variants": []
  },
  {
    "name": "Compass",
    "category": "Other Vastu Products",
    "b2b": 750,
    "b2c": 850,
    "variants": []
  },
  {
    "name": "Village scenery",
    "category": "Other Vastu Products",
    "b2b": 1100,
    "b2c": 1300,
    "variants": []
  },
  {
    "name": "All rough stone",
    "category": "Crystals & Stones",
    "b2b": "rate in kg",
    "b2c": null,
    "variants": []
  },
  {
    "name": "Citrine",
    "category": "Crystals & Stones",
    "b2b": 3200,
    "b2c": 3800,
    "variants": []
  },
  {
    "name": "Amethyst",
    "category": "Crystals & Stones",
    "b2b": 900,
    "b2c": 1200,
    "variants": []
  },
  {
    "name": "Red jasper",
    "category": "Crystals & Stones",
    "b2b": 500,
    "b2c": 800,
    "variants": []
  },
  {
    "name": "Lapis lazuli",
    "category": "Crystals & Stones",
    "b2b": null,
    "b2c": null,
    "variants": [
      {
        "option": "Clear quartz",
        "b2b": 550,
        "b2c": 700
      },
      {
        "option": "yellow aventurine",
        "b2b": 450,
        "b2c": 700
      },
      {
        "option": "Green aventurine",
        "b2b": 450,
        "b2c": 700
      },
      {
        "option": "Gray aventurine",
        "b2b": 450,
        "b2c": 700
      },
      {
        "option": "Rose quartz",
        "b2b": 750,
        "b2c": 1200
      },
      {
        "option": "Tiger eye",
        "b2b": 850,
        "b2c": 1250
      },
      {
        "option": "rainbow moonstone",
        "b2b": 800,
        "b2c": 1250
      },
      {
        "option": "red carnelian",
        "b2b": null,
        "b2c": null
      },
      {
        "option": "black tourmaline",
        "b2b": 500,
        "b2c": 800
      },
      {
        "option": "Swlenite",
        "b2b": 550,
        "b2c": 800
      },
      {
        "option": "Sulemani",
        "b2b": null,
        "b2c": null
      },
      {
        "option": "Sodelite",
        "b2b": null,
        "b2c": null
      },
      {
        "option": "Opal",
        "b2b": null,
        "b2c": null
      }
    ]
  },
  {
    "name": "All stone tumbles",
    "category": "Crystals & Stones",
    "b2b": "Rate in 200g.",
    "b2c": null,
    "variants": []
  },
  {
    "name": "Citrine",
    "category": "Crystals & Stones",
    "b2b": null,
    "b2c": null,
    "variants": [
      {
        "option": "Amethyst",
        "b2b": null,
        "b2c": null
      },
      {
        "option": "Red jasper",
        "b2b": null,
        "b2c": null
      },
      {
        "option": "Lapis lazuli",
        "b2b": null,
        "b2c": null
      },
      {
        "option": "Clear quartz",
        "b2b": null,
        "b2c": null
      },
      {
        "option": "yellow aventurine",
        "b2b": null,
        "b2c": null
      },
      {
        "option": "Green aventurine",
        "b2b": null,
        "b2c": null
      },
      {
        "option": "Gray aventurine",
        "b2b": null,
        "b2c": null
      },
      {
        "option": "Rose quartz",
        "b2b": null,
        "b2c": null
      },
      {
        "option": "Tiger eye",
        "b2b": null,
        "b2c": null
      },
      {
        "option": "rainbow moonstone",
        "b2b": null,
        "b2c": null
      },
      {
        "option": "red carnelian",
        "b2b": null,
        "b2c": null
      },
      {
        "option": "black tourmaline",
        "b2b": null,
        "b2c": null
      },
      {
        "option": "Swlenite",
        "b2b": null,
        "b2c": null
      },
      {
        "option": "Sulemani",
        "b2b": null,
        "b2c": null
      },
      {
        "option": "Sodelite",
        "b2b": null,
        "b2c": null
      },
      {
        "option": "Opal",
        "b2b": null,
        "b2c": null
      }
    ]
  },
  {
    "name": "All stone chips",
    "category": "Crystals & Stones",
    "b2b": "rate in kg",
    "b2c": null,
    "variants": []
  },
  {
    "name": "Citrine",
    "category": "Crystals & Stones",
    "b2b": 1250,
    "b2c": 1500,
    "variants": []
  },
  {
    "name": "Amethyst",
    "category": "Crystals & Stones",
    "b2b": 600,
    "b2c": 800,
    "variants": []
  },
  {
    "name": "Red jasper",
    "category": "Crystals & Stones",
    "b2b": 420,
    "b2c": 600,
    "variants": []
  },
  {
    "name": "Lapis lazuli",
    "category": "Crystals & Stones",
    "b2b": 650,
    "b2c": 800,
    "variants": []
  },
  {
    "name": "Clear quartz",
    "category": "Crystals & Stones",
    "b2b": 550,
    "b2c": 750,
    "variants": []
  },
  {
    "name": "yellow aventurine",
    "category": "Crystals & Stones",
    "b2b": 450,
    "b2c": 650,
    "variants": []
  },
  {
    "name": "Green aventurine",
    "category": "Crystals & Stones",
    "b2b": 450,
    "b2c": 650,
    "variants": []
  },
  {
    "name": "Gray aventurine",
    "category": "Crystals & Stones",
    "b2b": 450,
    "b2c": 650,
    "variants": []
  },
  {
    "name": "Rose quartz",
    "category": "Crystals & Stones",
    "b2b": 550,
    "b2c": 750,
    "variants": []
  },
  {
    "name": "Tiger eye",
    "category": "Crystals & Stones",
    "b2b": 580,
    "b2c": 800,
    "variants": []
  },
  {
    "name": "rainbow moonstone",
    "category": "Crystals & Stones",
    "b2b": 650,
    "b2c": 800,
    "variants": []
  },
  {
    "name": "red carnelian",
    "category": "Crystals & Stones",
    "b2b": 500,
    "b2c": 750,
    "variants": []
  },
  {
    "name": "black tourmaline",
    "category": "Crystals & Stones",
    "b2b": 580,
    "b2c": 800,
    "variants": []
  },
  {
    "name": "All stone tree",
    "category": "Crystals & Stones",
    "b2b": null,
    "b2c": null,
    "variants": [
      {
        "option": "Citrine",
        "b2b": null,
        "b2c": null
      },
      {
        "option": "Amethyst",
        "b2b": 520,
        "b2c": 750
      },
      {
        "option": "Red jasper",
        "b2b": 480,
        "b2c": 750
      },
      {
        "option": "Lapis lazuli",
        "b2b": null,
        "b2c": null
      },
      {
        "option": "Clear quartz",
        "b2b": 500,
        "b2c": 750
      },
      {
        "option": "yellow aventurine",
        "b2b": 480,
        "b2c": 750
      },
      {
        "option": "Green aventurine",
        "b2b": 450,
        "b2c": 750
      },
      {
        "option": "Gray aventurine",
        "b2b": null,
        "b2c": null
      },
      {
        "option": "Rose quartz",
        "b2b": 450,
        "b2c": 750
      },
      {
        "option": "Tiger eye",
        "b2b": null,
        "b2c": null
      }
    ]
  },
  {
    "name": "Seven chakrash",
    "category": "Swastika / Chakra",
    "b2b": 420,
    "b2c": 750,
    "variants": []
  },
  {
    "name": "red carnelian",
    "category": "Crystals & Stones",
    "b2b": 470,
    "b2c": 800,
    "variants": []
  },
  {
    "name": "black tourmaline",
    "category": "Crystals & Stones",
    "b2b": null,
    "b2c": null,
    "variants": []
  },
  {
    "name": "Greene zibu coins",
    "category": "Other Vastu Products",
    "b2b": 100,
    "b2c": 150,
    "variants": []
  },
  {
    "name": "Selenite plate",
    "category": "Crystals & Stones",
    "b2b": 300,
    "b2c": 350,
    "variants": []
  },
  {
    "name": "All stone pyramid",
    "category": "Pyramids",
    "b2b": null,
    "b2c": null,
    "variants": [
      {
        "option": "Laxmi pyramid",
        "b2b": 410,
        "b2c": 480
      }
    ]
  },
  {
    "name": "Pyrite plate",
    "category": "Crystals & Stones",
    "b2b": 550,
    "b2c": 650,
    "variants": []
  },
  {
    "name": "Stone bracelet",
    "category": "Crystals & Stones",
    "b2b": null,
    "b2c": null,
    "variants": []
  },
  {
    "name": "All stone mala",
    "category": "Crystals & Stones",
    "b2b": null,
    "b2c": null,
    "variants": [
      {
        "option": "Spathic mala",
        "b2b": null,
        "b2c": null
      }
    ]
  },
  {
    "name": "Bagua mirror",
    "category": "Other Vastu Products",
    "b2b": 220,
    "b2c": 300,
    "variants": []
  },
  {
    "name": "Ashok stambh",
    "category": "Decorative Items",
    "b2b": null,
    "b2c": null,
    "variants": []
  },
  {
    "name": "Vastu colour spring",
    "category": "Other Vastu Products",
    "b2b": 40,
    "b2c": 45,
    "variants": []
  },
  {
    "name": "Vastu metal spring",
    "category": "Other Vastu Products",
    "b2b": null,
    "b2c": null,
    "variants": [
      {
        "option": "Copper",
        "b2b": 70,
        "b2c": 80
      },
      {
        "option": "Brass",
        "b2b": 70,
        "b2c": 80
      },
      {
        "option": "Aluminium",
        "b2b": 60,
        "b2c": 70
      },
      {
        "option": "Steel",
        "b2b": 60,
        "b2c": 70
      },
      {
        "option": "Iron",
        "b2b": 55,
        "b2c": 65
      }
    ]
  },
  {
    "name": "Vastu purusha",
    "category": "Other Vastu Products",
    "b2b": 320,
    "b2c": 420,
    "variants": []
  },
  {
    "name": "Bram Nabhi",
    "category": "Other Vastu Products",
    "b2b": null,
    "b2c": null,
    "variants": []
  },
  {
    "name": "All gemstones",
    "category": "Crystals & Stones",
    "b2b": null,
    "b2c": null,
    "variants": [
      {
        "option": "Rudraksh",
        "b2b": null,
        "b2c": null
      }
    ]
  },
  {
    "name": "Vastu Devta’s divs",
    "category": "Other Vastu Products",
    "b2b": 250,
    "b2c": 350,
    "variants": []
  },
  {
    "name": "California sage",
    "category": "Other Vastu Products",
    "b2b": null,
    "b2c": null,
    "variants": []
  }
];

export function getProductByName(name: string): CatalogProduct | undefined {
  const norm = name.toLowerCase().replace(/\s+/g, '');
  return productCatalog.find(p => p.name.toLowerCase().replace(/\s+/g, '') === norm);
}

export function getPriceForVariant(productName: string, variantOption?: string): { b2c: number | string | null; b2b: number | string | null } {
  const product = getProductByName(productName);
  if (!product) return { b2c: null, b2b: null };
  
  if (product.variants.length > 0 && variantOption) {
    const vNorm = variantOption.toLowerCase().replace(/\s+/g, '');
    const variant = product.variants.find(v => v.option.toLowerCase().replace(/\s+/g, '') === vNorm);
    if (variant) return { b2c: variant.b2c, b2b: variant.b2b };
  }
  
  return { b2c: product.b2c, b2b: product.b2b };
}

export function matchDriveItemToCatalog(fileName: string): { product: CatalogProduct | null; variant: ProductVariant | null } {
  const cleanName = fileName.replace(/\.[^/.]+$/, '').trim().toLowerCase();

  // 1. Direct matching
  for (const product of productCatalog) {
    if (product.name.toLowerCase() === cleanName) {
      return { product, variant: null };
    }
  }

  // 2. Variant matching
  for (const product of productCatalog) {
    const parentNameLower = product.name.toLowerCase();
    
    if (product.variants.length > 0) {
      for (const variant of product.variants) {
        const optionLower = variant.option.toLowerCase();
        
        const normOption = optionLower.replace(/”/g, '"').replace(/inch/g, 'inch');
        const normCleanName = cleanName.replace(/”/g, '"').replace(/inch/g, 'inch');

        if (parentNameLower.includes("tumbles") && normCleanName.includes("tumble") && normCleanName.includes(optionLower)) {
          return { product, variant };
        }
        if (parentNameLower.includes("rough stone") && normCleanName.includes("rough") && normCleanName.includes(optionLower)) {
          return { product, variant };
        }
        if (parentNameLower.includes("chips") && normCleanName.includes("chips") && normCleanName.includes(optionLower)) {
          return { product, variant };
        }
        if (parentNameLower.includes("tree") && normCleanName.includes("tree") && normCleanName.includes(optionLower)) {
          return { product, variant };
        }
        
        const cleanParent = parentNameLower.replace(/all /g, '').trim();
        if (normCleanName.includes(cleanParent) && (normCleanName.includes(optionLower) || normCleanName.includes(normOption))) {
          return { product, variant };
        }
      }
    }
  }
  
  // 3. Fallback fuzzy search
  for (const product of productCatalog) {
    const pName = product.name.toLowerCase();
    if (cleanName.includes(pName) || pName.includes(cleanName)) {
      return { product, variant: null };
    }
  }

  return { product: null, variant: null };
}

// Technical tools that strictly require expert consultation before installation
const CONSULTATION_KEYWORDS = [
  'lecher antenna',
  'dowsing rod',
  'geopathic',
  'bram nabhi',
  'toilet pacifier',
  'fire balancer',
  'entry blocker',
  'shakti chakra',
  'dowsing board',
  'liquid mercury',
  'mercury / parad pyramid'
];

export function getProductStatus(product: CatalogProduct | null | undefined, selectedOption?: string): ProductStatus {
  if (!product) return 'ENQUIRE_PRICE';
  
  const nameLower = product.name.toLowerCase();
  
  // 1. Consultation required for high-precision or complex energetic diagnostic tools
  if (CONSULTATION_KEYWORDS.some(k => nameLower.includes(k))) {
    return 'CONSULTATION_REQUIRED';
  }
  
  // 2. Products with multiple variants
  if (product.variants && product.variants.length > 0) {
    if (selectedOption) {
      const v = product.variants.find(item => item.option.toLowerCase() === selectedOption.toLowerCase());
      if (v && v.b2c !== null && v.b2c !== undefined && v.b2c !== '' && v.b2c !== 0) {
        return 'DIRECT_PURCHASE';
      }
      return 'ENQUIRE_PRICE';
    }
    return 'VARIABLE_PRICE';
  }
  
  // 3. Single product with price check
  if (product.b2c !== null && product.b2c !== undefined && product.b2c !== '' && product.b2c !== 0) {
    return 'DIRECT_PURCHASE';
  }
  
  return 'ENQUIRE_PRICE';
}

export function getEducationalInfo(productName: string, category: string): ProductEducationalInfo {
  const norm = productName.toLowerCase();
  
  if (norm.includes('pyramid')) {
    return {
      whatIsIt: "Sacred geometric energy harmonizer engineered according to classical Vedic Vastu proportions.",
      whyUsed: "Used to amplify directional positive vibrations, neutralize energy faults, and balance bio-resonance in residential and commercial premises.",
      suitableFor: "Homes, apartments, offices, and plots with directional cuts, extended corners, or energetic imbalances.",
      howUsed: "Placed in the designated directional zone (such as North-East for clarity or South-East for fire balance) after orientation alignment."
    };
  }
  
  if (norm.includes('swastika') || norm.includes('swastik') || norm.includes('nandavarta')) {
    return {
      whatIsIt: "Ancient Vedic auspicious energy emblem fabricated in resonant metals like pure copper, tridhatu, and silver.",
      whyUsed: "Creates an energetic shield against negative environmental influences while welcoming abundance, peace, and auspicious vibrations.",
      suitableFor: "Main entrances, pooja rooms, thresholds, safes, cash counters, and study spaces.",
      howUsed: "Affixed at eye-level on the main entrance threshold or consecrated in the spiritual corner facing East or North."
    };
  }
  
  if (norm.includes('helix')) {
    return {
      whatIsIt: "Spiral metal energy vortex device designed to correct directional defects and activate planetary energies.",
      whyUsed: "Balances gravitational and magnetic field distortions caused by incorrect room placements or structural defects.",
      suitableFor: "Properties with missing zones, misplaced staircases, toilets in sensitive directions, or low-energy zones.",
      howUsed: "Installed near the floor or concealed within the wall/flooring at the specific elemental corner matching the metal."
    };
  }
  
  if (norm.includes('rod') || norm.includes('antenna') || norm.includes('dowsing')) {
    return {
      whatIsIt: "Precision energetic diagnosis and grounding instrument for earth radiation and sub-soil grid line detection.",
      whyUsed: "Identifies and neutralizes harmful geopathic stress lines, underground water veins, and grid intersections that cause persistent disturbances.",
      suitableFor: "Spaces with chronic unexplained sleep issues, heaviness, or ongoing energetic resistance.",
      howUsed: "Must be calibrated and installed under expert guidance following energetic mapping of the premises."
    };
  }
  
  if (norm.includes('stone') || norm.includes('tumble') || norm.includes('rough') || norm.includes('tree') || norm.includes('pyrite') || norm.includes('citrine') || norm.includes('amethyst') || norm.includes('selenite') || norm.includes('quartz')) {
    return {
      whatIsIt: "Natural, high-grade crystalline mineral energized for vibrational elevation and space purification.",
      whyUsed: "Absorbs ambient disharmony, enhances wealth frequency, mental tranquility, and spiritual aura.",
      suitableFor: "Workstations, living areas, bedroom nightstands, meditation rooms, and wealth corners.",
      howUsed: "Keep cleansed in natural daylight and place in the relevant Vastu quadrant (e.g. Citrine/Pyrite in North/South-East, Amethyst in West)."
    };
  }

  // General fallback
  return {
    whatIsIt: `Authentic Vastu remedy curated for energetic space alignment and prosperity in ${category}.`,
    whyUsed: "Assists in transmuting stagnant or negative environmental energies into harmonious life-force frequencies.",
    suitableFor: "Residential homes, commercial establishments, and renovation projects seeking Vedic energetic harmony.",
    howUsed: "Place in the recommended directional zone following personal space consultation."
  };
}
