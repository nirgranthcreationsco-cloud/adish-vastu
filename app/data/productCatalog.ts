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
  id: string;
  name: string;
  category: string;
  image: string;
  imageId: string | null;
  b2b: string | number | null;
  b2c: string | number | null;
  variants: ProductVariant[];
  info?: ProductEducationalInfo;
}

export const productCatalog: CatalogProduct[] = [
  {
    "id": "prod-1",
    "name": "Copper L rod",
    "category": "Vastu Remedies",
    "b2b": 1400,
    "b2c": 1550,
    "variants": [],
    "imageId": "1n2YTLibMCI9DDwfoc9hLYheG2JHkJRY_",
    "image": "https://drive.google.com/thumbnail?id=1n2YTLibMCI9DDwfoc9hLYheG2JHkJRY_&sz=w800"
  },
  {
    "id": "prod-2",
    "name": "Copper L rod with bering handle",
    "category": "Vastu Remedies",
    "b2b": 2350,
    "b2c": 2550,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png"
  },
  {
    "id": "prod-3",
    "name": "Brass L rod with bering handle",
    "category": "Vastu Remedies",
    "b2b": 2350,
    "b2c": 2550,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png"
  },
  {
    "id": "prod-4",
    "name": "Lecher antenna",
    "category": "Vastu Remedies",
    "b2b": 4800,
    "b2c": 5050,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png"
  },
  {
    "id": "prod-5",
    "name": "Copper pyramid",
    "category": "Vastu Remedies",
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
    ],
    "imageId": "1wjUPHRk-eiaq-LM0pnO_VrFoO9v8n5nW",
    "image": "https://drive.google.com/thumbnail?id=1wjUPHRk-eiaq-LM0pnO_VrFoO9v8n5nW&sz=w800"
  },
  {
    "id": "prod-6",
    "name": "Brass pyramid",
    "category": "Vastu Remedies",
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
    ],
    "imageId": "1Qi_XpicLmPIM2nDkV1MpfREPzlj89S0f",
    "image": "https://drive.google.com/thumbnail?id=1Qi_XpicLmPIM2nDkV1MpfREPzlj89S0f&sz=w800"
  },
  {
    "id": "prod-7",
    "name": "Tridhatu pyramid",
    "category": "Vastu Remedies",
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
    ],
    "imageId": "1C_ADsQxejlN1jFIXOgzjGHkbzrHf7mL_",
    "image": "https://drive.google.com/thumbnail?id=1C_ADsQxejlN1jFIXOgzjGHkbzrHf7mL_&sz=w800"
  },
  {
    "id": "prod-8",
    "name": "Liquid Mercury / parad",
    "category": "Vastu Remedies",
    "b2b": 750000,
    "b2c": 820000,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png"
  },
  {
    "id": "prod-9",
    "name": "Mercury / parad pyramid",
    "category": "Vastu Remedies",
    "b2b": 1250,
    "b2c": 1400,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png"
  },
  {
    "id": "prod-10",
    "name": "Mercury / parad swastika",
    "category": "Vastu Remedies",
    "b2b": 1350,
    "b2c": 1450,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png"
  },
  {
    "id": "prod-11",
    "name": "Mercury / parad killak / nail",
    "category": "Vastu Remedies",
    "b2b": 480,
    "b2c": 530,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png"
  },
  {
    "id": "prod-12",
    "name": "Nandavarta swastika copper",
    "category": "Vastu Remedies",
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
    ],
    "imageId": null,
    "image": "/sacred_remedies.png"
  },
  {
    "id": "prod-13",
    "name": "Tridhatu nandavarta swastika",
    "category": "Vastu Remedies",
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
    ],
    "imageId": null,
    "image": "/sacred_remedies.png"
  },
  {
    "id": "prod-14",
    "name": "Silver nandavarta swastika",
    "category": "Vastu Remedies",
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
    ],
    "imageId": null,
    "image": "/sacred_remedies.png"
  },
  {
    "id": "prod-15",
    "name": "Eaching Aura Booster",
    "category": "Vastu Remedies",
    "b2b": 600,
    "b2c": 650,
    "variants": [],
    "imageId": "1X07gcjNo9lCcjSRuz8_4AFeU2_bVAO-L",
    "image": "https://drive.google.com/thumbnail?id=1X07gcjNo9lCcjSRuz8_4AFeU2_bVAO-L&sz=w800"
  },
  {
    "id": "prod-16",
    "name": "Hanuman Aura Booster",
    "category": "Vastu Remedies",
    "b2b": 450,
    "b2c": 520,
    "variants": [],
    "imageId": "1X07gcjNo9lCcjSRuz8_4AFeU2_bVAO-L",
    "image": "https://drive.google.com/thumbnail?id=1X07gcjNo9lCcjSRuz8_4AFeU2_bVAO-L&sz=w800"
  },
  {
    "id": "prod-17",
    "name": "Aura Booster.",
    "category": "Vastu Remedies",
    "b2b": 380,
    "b2c": 420,
    "variants": [],
    "imageId": "1X07gcjNo9lCcjSRuz8_4AFeU2_bVAO-L",
    "image": "https://drive.google.com/thumbnail?id=1X07gcjNo9lCcjSRuz8_4AFeU2_bVAO-L&sz=w800"
  },
  {
    "id": "prod-18",
    "name": "Vastu Toilet Blocker with 9 prymid plate",
    "category": "Vastu Remedies",
    "b2b": 600,
    "b2c": 750,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png"
  },
  {
    "id": "prod-19",
    "name": "Vastu Toilet Pacifier, Negative Energy Blocker, Toilet Negative Energy Blocker, full brass body.",
    "category": "Vastu Remedies",
    "b2b": 600,
    "b2c": 750,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png"
  },
  {
    "id": "prod-20",
    "name": "Vastu Entry Blocker",
    "category": "Vastu Remedies",
    "b2b": 470,
    "b2c": 670,
    "variants": [],
    "imageId": "1EabQTHUv7rsKdZAldtfN0etzic9D4Uzx",
    "image": "https://drive.google.com/thumbnail?id=1EabQTHUv7rsKdZAldtfN0etzic9D4Uzx&sz=w800"
  },
  {
    "id": "prod-21",
    "name": "Al metal geopathic stress rod",
    "category": "Vastu Remedies",
    "b2b": "600 - 1400",
    "b2c": "700 - 1700",
    "variants": [],
    "imageId": "1WyzVdMwf7LdcrZcSgYYVYECG7Bjd6nyr",
    "image": "https://drive.google.com/thumbnail?id=1WyzVdMwf7LdcrZcSgYYVYECG7Bjd6nyr&sz=w800"
  },
  {
    "id": "prod-22",
    "name": "8 direction rod",
    "category": "Vastu Remedies",
    "b2b": 4500,
    "b2c": 4800,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png"
  },
  {
    "id": "prod-23",
    "name": "Vastu Toilet blocker",
    "category": "Vastu Remedies",
    "b2b": 600,
    "b2c": 750,
    "variants": [],
    "imageId": "1EabQTHUv7rsKdZAldtfN0etzic9D4Uzx",
    "image": "https://drive.google.com/thumbnail?id=1EabQTHUv7rsKdZAldtfN0etzic9D4Uzx&sz=w800"
  },
  {
    "id": "prod-24",
    "name": "Vastu Fire Balancer",
    "category": "Vastu Remedies",
    "b2b": 600,
    "b2c": 750,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png"
  },
  {
    "id": "prod-25",
    "name": "Copper strips",
    "category": "Vastu Remedies",
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
    ],
    "imageId": "1n2YTLibMCI9DDwfoc9hLYheG2JHkJRY_",
    "image": "https://drive.google.com/thumbnail?id=1n2YTLibMCI9DDwfoc9hLYheG2JHkJRY_&sz=w800"
  },
  {
    "id": "prod-26",
    "name": "Brass Strip",
    "category": "Vastu Remedies",
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
    ],
    "imageId": "1o07mY2Sx2irI0rv5R5wQjLAnrhpCRA3j",
    "image": "https://drive.google.com/thumbnail?id=1o07mY2Sx2irI0rv5R5wQjLAnrhpCRA3j&sz=w800"
  },
  {
    "id": "prod-27",
    "name": "Stainless steel strip",
    "category": "Vastu Remedies",
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
    ],
    "imageId": null,
    "image": "/sacred_remedies.png"
  },
  {
    "id": "prod-28",
    "name": "Aluminium Strip",
    "category": "Vastu Remedies",
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
    ],
    "imageId": "1Bz_rtk1zis1Nx9_ZWglpBFVpyEwlK2zM",
    "image": "https://drive.google.com/thumbnail?id=1Bz_rtk1zis1Nx9_ZWglpBFVpyEwlK2zM&sz=w800"
  },
  {
    "id": "prod-29",
    "name": "Iron Strip",
    "category": "Vastu Remedies",
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
    ],
    "imageId": "1RoqQTFzIR_FNtBwITs1PUREzaLYDTUJ3",
    "image": "https://drive.google.com/thumbnail?id=1RoqQTFzIR_FNtBwITs1PUREzaLYDTUJ3&sz=w800"
  },
  {
    "id": "prod-30",
    "name": "Tridhatu strip",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": null,
    "variants": [
      {
        "option": "1 inch",
        "b2b": 145,
        "b2c": 155
      }
    ],
    "imageId": "1C_ADsQxejlN1jFIXOgzjGHkbzrHf7mL_",
    "image": "https://drive.google.com/thumbnail?id=1C_ADsQxejlN1jFIXOgzjGHkbzrHf7mL_&sz=w800"
  },
  {
    "id": "prod-31",
    "name": "All metal strip with muscovite",
    "category": "Vastu Remedies",
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
    ],
    "imageId": "1_vKgIPIGlfcZYKjFSM5_SX0IFEYI9Ls8",
    "image": "https://drive.google.com/thumbnail?id=1_vKgIPIGlfcZYKjFSM5_SX0IFEYI9Ls8&sz=w800"
  },
  {
    "id": "prod-32",
    "name": "Copper Helix",
    "category": "Vastu Remedies",
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
    ],
    "imageId": "15dcKvjJHP5UU7uDvqpeHEYbZuGj_QyA7",
    "image": "https://drive.google.com/thumbnail?id=15dcKvjJHP5UU7uDvqpeHEYbZuGj_QyA7&sz=w800"
  },
  {
    "id": "prod-33",
    "name": "Brass Helix",
    "category": "Vastu Remedies",
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
    ],
    "imageId": "1twt4s6zjz58d8rnoZ1x-lEkhN0zOtIdC",
    "image": "https://drive.google.com/thumbnail?id=1twt4s6zjz58d8rnoZ1x-lEkhN0zOtIdC&sz=w800"
  },
  {
    "id": "prod-34",
    "name": "Zinc Helix",
    "category": "Vastu Remedies",
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
    ],
    "imageId": "1twt4s6zjz58d8rnoZ1x-lEkhN0zOtIdC",
    "image": "https://drive.google.com/thumbnail?id=1twt4s6zjz58d8rnoZ1x-lEkhN0zOtIdC&sz=w800"
  },
  {
    "id": "prod-35",
    "name": "Aluminium Helix",
    "category": "Vastu Remedies",
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
    ],
    "imageId": "1Bz_rtk1zis1Nx9_ZWglpBFVpyEwlK2zM",
    "image": "https://drive.google.com/thumbnail?id=1Bz_rtk1zis1Nx9_ZWglpBFVpyEwlK2zM&sz=w800"
  },
  {
    "id": "prod-36",
    "name": "Lead Helix",
    "category": "Vastu Remedies",
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
    ],
    "imageId": "1twt4s6zjz58d8rnoZ1x-lEkhN0zOtIdC",
    "image": "https://drive.google.com/thumbnail?id=1twt4s6zjz58d8rnoZ1x-lEkhN0zOtIdC&sz=w800"
  },
  {
    "id": "prod-37",
    "name": "Advance English Shakti Chakra",
    "category": "Vastu Remedies",
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
    ],
    "imageId": null,
    "image": "/sacred_remedies.png"
  },
  {
    "id": "prod-38",
    "name": "English Shakti Chakra",
    "category": "Vastu Remedies",
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
    ],
    "imageId": null,
    "image": "/sacred_remedies.png"
  },
  {
    "id": "prod-39",
    "name": "Vastu Disha Shakti Chakra Hindi",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": null,
    "variants": [
      {
        "option": "6 inch",
        "b2b": 220,
        "b2c": 300
      }
    ],
    "imageId": null,
    "image": "/sacred_remedies.png"
  },
  {
    "id": "prod-40",
    "name": "Dowsing board",
    "category": "Vastu Remedies",
    "b2b": 220,
    "b2c": 300,
    "variants": [],
    "imageId": "1yBKsheE4mZfXao2ojaTdSx-ltHz2dKIG",
    "image": "https://drive.google.com/thumbnail?id=1yBKsheE4mZfXao2ojaTdSx-ltHz2dKIG&sz=w800"
  },
  {
    "id": "prod-41",
    "name": "Brass pendulums",
    "category": "Vastu Remedies",
    "b2b": 220,
    "b2c": 300,
    "variants": [],
    "imageId": "1yBKsheE4mZfXao2ojaTdSx-ltHz2dKIG",
    "image": "https://drive.google.com/thumbnail?id=1yBKsheE4mZfXao2ojaTdSx-ltHz2dKIG&sz=w800"
  },
  {
    "id": "prod-42",
    "name": "Stone pendulums",
    "category": "Vastu Remedies",
    "b2b": 120,
    "b2c": null,
    "variants": [],
    "imageId": "1g0kn631M_L9lDxLhpaGC1LQbzPKUTfLn",
    "image": "https://drive.google.com/thumbnail?id=1g0kn631M_L9lDxLhpaGC1LQbzPKUTfLn&sz=w800"
  },
  {
    "id": "prod-43",
    "name": "All metal 3 layer pyramid",
    "category": "Vastu Remedies",
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
    ],
    "imageId": "1aH0-8SmRPbX-kpzRu2JRCKM51IyicRD2",
    "image": "https://drive.google.com/thumbnail?id=1aH0-8SmRPbX-kpzRu2JRCKM51IyicRD2&sz=w800"
  },
  {
    "id": "prod-44",
    "name": "All metal 2 layer pyramid",
    "category": "Vastu Remedies",
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
    ],
    "imageId": "1aH0-8SmRPbX-kpzRu2JRCKM51IyicRD2",
    "image": "https://drive.google.com/thumbnail?id=1aH0-8SmRPbX-kpzRu2JRCKM51IyicRD2&sz=w800"
  },
  {
    "id": "prod-45",
    "name": "Red elephant",
    "category": "Vastu Statue",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1lynSGXXSsP_LkQ9DMUFlA0MzLEHO7136_stat",
    "image": "https://drive.google.com/thumbnail?id=1lynSGXXSsP_LkQ9DMUFlA0MzLEHO7136_stat&sz=w800"
  },
  {
    "id": "prod-46",
    "name": "Red horse",
    "category": "Vastu Statue",
    "b2b": 800,
    "b2c": 900,
    "variants": [],
    "imageId": "19w9fJCKyQf5e18tF7tkdJCtabC5bNPZA",
    "image": "https://drive.google.com/thumbnail?id=19w9fJCKyQf5e18tF7tkdJCtabC5bNPZA&sz=w800"
  },
  {
    "id": "prod-47",
    "name": "Love birds",
    "category": "Vastu Statue",
    "b2b": 1500,
    "b2c": 1650,
    "variants": [],
    "imageId": "1lynSGXXSsP_LkQ9DMUFlA0MzLEHO7136_stat",
    "image": "https://drive.google.com/thumbnail?id=1lynSGXXSsP_LkQ9DMUFlA0MzLEHO7136_stat&sz=w800"
  },
  {
    "id": "prod-48",
    "name": "All brass statue",
    "category": "Vastu Statue",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "18yQNQDKuBHYlgXmAduZvbUFiAXJvLnCp",
    "image": "https://drive.google.com/thumbnail?id=18yQNQDKuBHYlgXmAduZvbUFiAXJvLnCp&sz=w800"
  },
  {
    "id": "prod-49",
    "name": "Yellow kodi, Black kodi, White kodi",
    "category": "Vastu Remedies",
    "b2b": "2300/1400/600",
    "b2c": "2500/1600/800",
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png"
  },
  {
    "id": "prod-50",
    "name": "Shakti chakra",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1z_cMq0ZtUYAcan1B7I-4oHQq8YYDXifr",
    "image": "https://drive.google.com/thumbnail?id=1z_cMq0ZtUYAcan1B7I-4oHQq8YYDXifr&sz=w800"
  },
  {
    "id": "prod-51",
    "name": "Black, White, Red Gomchi",
    "category": "Vastu Remedies",
    "b2b": "2200/2000/900",
    "b2c": "2400/2200/1000",
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png"
  },
  {
    "id": "prod-52",
    "name": "Safed sarso",
    "category": "Vastu Remedies",
    "b2b": 2350,
    "b2c": 2800,
    "variants": [],
    "imageId": "1CIGa0phmBqaxuDW-SzZSQA5oIpPw78oq",
    "image": "https://drive.google.com/thumbnail?id=1CIGa0phmBqaxuDW-SzZSQA5oIpPw78oq&sz=w800"
  },
  {
    "id": "prod-53",
    "name": "Pilli sarso",
    "category": "Vastu Remedies",
    "b2b": 240,
    "b2c": 350,
    "variants": [],
    "imageId": "1CIGa0phmBqaxuDW-SzZSQA5oIpPw78oq",
    "image": "https://drive.google.com/thumbnail?id=1CIGa0phmBqaxuDW-SzZSQA5oIpPw78oq&sz=w800"
  },
  {
    "id": "prod-54",
    "name": "Business dhoop",
    "category": "Vastu Remedies",
    "b2b": 1000,
    "b2c": 1200,
    "variants": [],
    "imageId": "1SFSsajj1WgAgwxUUuwSFdBEwBgMWeYK4",
    "image": "https://drive.google.com/thumbnail?id=1SFSsajj1WgAgwxUUuwSFdBEwBgMWeYK4&sz=w800"
  },
  {
    "id": "prod-55",
    "name": "Land energy dhoop",
    "category": "Vastu Remedies",
    "b2b": 1000,
    "b2c": 1200,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png"
  },
  {
    "id": "prod-56",
    "name": "Clear quartz small size",
    "category": "Vastu Remedies",
    "b2b": 850,
    "b2c": 1000,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png"
  },
  {
    "id": "prod-57",
    "name": "Clear quartz medium size",
    "category": "Vastu Remedies",
    "b2b": 1150,
    "b2c": 1300,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png"
  },
  {
    "id": "prod-58",
    "name": "Clear quartz big size",
    "category": "Vastu Remedies",
    "b2b": 1250,
    "b2c": 1400,
    "variants": [],
    "imageId": "1hkV46bi78XCjQfeGyquJ92fTlgW3LxTq",
    "image": "https://drive.google.com/thumbnail?id=1hkV46bi78XCjQfeGyquJ92fTlgW3LxTq&sz=w800"
  },
  {
    "id": "prod-59",
    "name": "Brass padam plate",
    "category": "Vastu Remedies",
    "b2b": 980,
    "b2c": 1100,
    "variants": [],
    "imageId": "1yBKsheE4mZfXao2ojaTdSx-ltHz2dKIG",
    "image": "https://drive.google.com/thumbnail?id=1yBKsheE4mZfXao2ojaTdSx-ltHz2dKIG&sz=w800"
  },
  {
    "id": "prod-60",
    "name": "Copper padam plate",
    "category": "Vastu Remedies",
    "b2b": 950,
    "b2c": 1100,
    "variants": [],
    "imageId": "1n2YTLibMCI9DDwfoc9hLYheG2JHkJRY_",
    "image": "https://drive.google.com/thumbnail?id=1n2YTLibMCI9DDwfoc9hLYheG2JHkJRY_&sz=w800"
  },
  {
    "id": "prod-61",
    "name": "All coulor taps",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png"
  },
  {
    "id": "prod-62",
    "name": "(W – 4” / L – 25m)",
    "category": "Vastu Remedies",
    "b2b": 330,
    "b2c": 400,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png"
  },
  {
    "id": "prod-63",
    "name": "Muscovite powder",
    "category": "Vastu Remedies",
    "b2b": 140,
    "b2c": 180,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png"
  },
  {
    "id": "prod-64",
    "name": "Muscovite sheet",
    "category": "Vastu Remedies",
    "b2b": 900,
    "b2c": 1050,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png"
  },
  {
    "id": "prod-65",
    "name": "Dowsing board",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1yBKsheE4mZfXao2ojaTdSx-ltHz2dKIG",
    "image": "https://drive.google.com/thumbnail?id=1yBKsheE4mZfXao2ojaTdSx-ltHz2dKIG&sz=w800"
  },
  {
    "id": "prod-66",
    "name": "Compass",
    "category": "Vastu Remedies",
    "b2b": 750,
    "b2c": 850,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png"
  },
  {
    "id": "prod-67",
    "name": "Village scenery",
    "category": "Vastu Remedies",
    "b2b": 1100,
    "b2c": 1300,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png"
  },
  {
    "id": "prod-68",
    "name": "All rough stone",
    "category": "Vastu Remedies",
    "b2b": "rate in kg",
    "b2c": null,
    "variants": [],
    "imageId": "1dV2wDRwV2wLU6tJcEk3HO0l_Q-MpeivV",
    "image": "https://drive.google.com/thumbnail?id=1dV2wDRwV2wLU6tJcEk3HO0l_Q-MpeivV&sz=w800"
  },
  {
    "id": "prod-69",
    "name": "Citrine",
    "category": "Vastu Remedies",
    "b2b": 3200,
    "b2c": 3800,
    "variants": [],
    "imageId": "1Ml0LxW2bVqHOvqGvHvEBwpl4bUx0WNI_",
    "image": "https://drive.google.com/thumbnail?id=1Ml0LxW2bVqHOvqGvHvEBwpl4bUx0WNI_&sz=w800"
  },
  {
    "id": "prod-70",
    "name": "Amethyst",
    "category": "Vastu Remedies",
    "b2b": 900,
    "b2c": 1200,
    "variants": [],
    "imageId": "1--O7SGOhn1Z-wY6iUq_zivXYmxTbkCse",
    "image": "https://drive.google.com/thumbnail?id=1--O7SGOhn1Z-wY6iUq_zivXYmxTbkCse&sz=w800"
  },
  {
    "id": "prod-71",
    "name": "Red jasper",
    "category": "Vastu Remedies",
    "b2b": 500,
    "b2c": 800,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png"
  },
  {
    "id": "prod-72",
    "name": "Lapis lazuli",
    "category": "Vastu Remedies",
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
    ],
    "imageId": null,
    "image": "/sacred_remedies.png"
  },
  {
    "id": "prod-73",
    "name": "All stone tumbles",
    "category": "Vastu Remedies",
    "b2b": "Rate in 200g.",
    "b2c": null,
    "variants": [],
    "imageId": "1g0kn631M_L9lDxLhpaGC1LQbzPKUTfLn",
    "image": "https://drive.google.com/thumbnail?id=1g0kn631M_L9lDxLhpaGC1LQbzPKUTfLn&sz=w800"
  },
  {
    "id": "prod-74",
    "name": "Citrine",
    "category": "Vastu Remedies",
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
    ],
    "imageId": "1Ml0LxW2bVqHOvqGvHvEBwpl4bUx0WNI_",
    "image": "https://drive.google.com/thumbnail?id=1Ml0LxW2bVqHOvqGvHvEBwpl4bUx0WNI_&sz=w800"
  },
  {
    "id": "prod-75",
    "name": "All stone chips",
    "category": "Vastu Remedies",
    "b2b": "rate in kg",
    "b2c": null,
    "variants": [],
    "imageId": "1g0kn631M_L9lDxLhpaGC1LQbzPKUTfLn",
    "image": "https://drive.google.com/thumbnail?id=1g0kn631M_L9lDxLhpaGC1LQbzPKUTfLn&sz=w800"
  },
  {
    "id": "prod-76",
    "name": "Citrine",
    "category": "Vastu Remedies",
    "b2b": 1250,
    "b2c": 1500,
    "variants": [],
    "imageId": "1Ml0LxW2bVqHOvqGvHvEBwpl4bUx0WNI_",
    "image": "https://drive.google.com/thumbnail?id=1Ml0LxW2bVqHOvqGvHvEBwpl4bUx0WNI_&sz=w800"
  },
  {
    "id": "prod-77",
    "name": "Amethyst",
    "category": "Vastu Remedies",
    "b2b": 600,
    "b2c": 800,
    "variants": [],
    "imageId": "1--O7SGOhn1Z-wY6iUq_zivXYmxTbkCse",
    "image": "https://drive.google.com/thumbnail?id=1--O7SGOhn1Z-wY6iUq_zivXYmxTbkCse&sz=w800"
  },
  {
    "id": "prod-78",
    "name": "Red jasper",
    "category": "Vastu Remedies",
    "b2b": 420,
    "b2c": 600,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png"
  },
  {
    "id": "prod-79",
    "name": "Lapis lazuli",
    "category": "Vastu Remedies",
    "b2b": 650,
    "b2c": 800,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png"
  },
  {
    "id": "prod-80",
    "name": "Clear quartz",
    "category": "Vastu Remedies",
    "b2b": 550,
    "b2c": 750,
    "variants": [],
    "imageId": "1hkV46bi78XCjQfeGyquJ92fTlgW3LxTq",
    "image": "https://drive.google.com/thumbnail?id=1hkV46bi78XCjQfeGyquJ92fTlgW3LxTq&sz=w800"
  },
  {
    "id": "prod-81",
    "name": "yellow aventurine",
    "category": "Vastu Remedies",
    "b2b": 450,
    "b2c": 650,
    "variants": [],
    "imageId": "19t9ziv4Nzc7HPDJt2LKbKH2FQUpwqGfW",
    "image": "https://drive.google.com/thumbnail?id=19t9ziv4Nzc7HPDJt2LKbKH2FQUpwqGfW&sz=w800"
  },
  {
    "id": "prod-82",
    "name": "Green aventurine",
    "category": "Vastu Remedies",
    "b2b": 450,
    "b2c": 650,
    "variants": [],
    "imageId": "1LyUuQL3u3itqUoGf7qxis2W-RVOk4Klg",
    "image": "https://drive.google.com/thumbnail?id=1LyUuQL3u3itqUoGf7qxis2W-RVOk4Klg&sz=w800"
  },
  {
    "id": "prod-83",
    "name": "Gray aventurine",
    "category": "Vastu Remedies",
    "b2b": 450,
    "b2c": 650,
    "variants": [],
    "imageId": "1LyUuQL3u3itqUoGf7qxis2W-RVOk4Klg",
    "image": "https://drive.google.com/thumbnail?id=1LyUuQL3u3itqUoGf7qxis2W-RVOk4Klg&sz=w800"
  },
  {
    "id": "prod-84",
    "name": "Rose quartz",
    "category": "Vastu Remedies",
    "b2b": 550,
    "b2c": 750,
    "variants": [],
    "imageId": "1w14QsjrvBJWD91aWOb1VpsofbT_CF6GD",
    "image": "https://drive.google.com/thumbnail?id=1w14QsjrvBJWD91aWOb1VpsofbT_CF6GD&sz=w800"
  },
  {
    "id": "prod-85",
    "name": "Tiger eye",
    "category": "Vastu Remedies",
    "b2b": 580,
    "b2c": 800,
    "variants": [],
    "imageId": "1UFzdi7T5ZVAtdx2bHbeU026bF_mgUXRe",
    "image": "https://drive.google.com/thumbnail?id=1UFzdi7T5ZVAtdx2bHbeU026bF_mgUXRe&sz=w800"
  },
  {
    "id": "prod-86",
    "name": "rainbow moonstone",
    "category": "Vastu Remedies",
    "b2b": 650,
    "b2c": 800,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png"
  },
  {
    "id": "prod-87",
    "name": "red carnelian",
    "category": "Vastu Remedies",
    "b2b": 500,
    "b2c": 750,
    "variants": [],
    "imageId": "1_ZWVyoaFstNZfZVNdtEtmETrWN8oZ0Dm",
    "image": "https://drive.google.com/thumbnail?id=1_ZWVyoaFstNZfZVNdtEtmETrWN8oZ0Dm&sz=w800"
  },
  {
    "id": "prod-88",
    "name": "black tourmaline",
    "category": "Vastu Remedies",
    "b2b": 580,
    "b2c": 800,
    "variants": [],
    "imageId": "1lPQ4gxAUIXo9GEv25faQiJcq7JXyApCD",
    "image": "https://drive.google.com/thumbnail?id=1lPQ4gxAUIXo9GEv25faQiJcq7JXyApCD&sz=w800"
  },
  {
    "id": "prod-89",
    "name": "All stone tree",
    "category": "Vastu Remedies",
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
    ],
    "imageId": "1g0kn631M_L9lDxLhpaGC1LQbzPKUTfLn",
    "image": "https://drive.google.com/thumbnail?id=1g0kn631M_L9lDxLhpaGC1LQbzPKUTfLn&sz=w800"
  },
  {
    "id": "prod-90",
    "name": "Seven chakrash",
    "category": "Vastu Remedies",
    "b2b": 420,
    "b2c": 750,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png"
  },
  {
    "id": "prod-91",
    "name": "red carnelian",
    "category": "Vastu Remedies",
    "b2b": 470,
    "b2c": 800,
    "variants": [],
    "imageId": "1_ZWVyoaFstNZfZVNdtEtmETrWN8oZ0Dm",
    "image": "https://drive.google.com/thumbnail?id=1_ZWVyoaFstNZfZVNdtEtmETrWN8oZ0Dm&sz=w800"
  },
  {
    "id": "prod-92",
    "name": "black tourmaline",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1lPQ4gxAUIXo9GEv25faQiJcq7JXyApCD",
    "image": "https://drive.google.com/thumbnail?id=1lPQ4gxAUIXo9GEv25faQiJcq7JXyApCD&sz=w800"
  },
  {
    "id": "prod-93",
    "name": "Greene zibu coins",
    "category": "Vastu Remedies",
    "b2b": 100,
    "b2c": 150,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png"
  },
  {
    "id": "prod-94",
    "name": "Selenite plate",
    "category": "Vastu Remedies",
    "b2b": 300,
    "b2c": 350,
    "variants": [],
    "imageId": "1Uqsi4mNKb0vLgK11J0VD06_bzY1siiep",
    "image": "https://drive.google.com/thumbnail?id=1Uqsi4mNKb0vLgK11J0VD06_bzY1siiep&sz=w800"
  },
  {
    "id": "prod-95",
    "name": "All stone pyramid",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": null,
    "variants": [
      {
        "option": "Laxmi pyramid",
        "b2b": 410,
        "b2c": 480
      }
    ],
    "imageId": "1g0kn631M_L9lDxLhpaGC1LQbzPKUTfLn",
    "image": "https://drive.google.com/thumbnail?id=1g0kn631M_L9lDxLhpaGC1LQbzPKUTfLn&sz=w800"
  },
  {
    "id": "prod-96",
    "name": "Pyrite plate",
    "category": "Vastu Remedies",
    "b2b": 550,
    "b2c": 650,
    "variants": [],
    "imageId": "1DfyyXTUT2x5hpz73kT4VBwFZEmnLvYSc",
    "image": "https://drive.google.com/thumbnail?id=1DfyyXTUT2x5hpz73kT4VBwFZEmnLvYSc&sz=w800"
  },
  {
    "id": "prod-97",
    "name": "Stone bracelet",
    "category": "Stone Bracelets",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1hf5d525TjzuAwADjiyfEnCqi8TFB7eFa",
    "image": "https://drive.google.com/thumbnail?id=1hf5d525TjzuAwADjiyfEnCqi8TFB7eFa&sz=w800"
  },
  {
    "id": "prod-98",
    "name": "All stone mala",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": null,
    "variants": [
      {
        "option": "Spathic mala",
        "b2b": null,
        "b2c": null
      }
    ],
    "imageId": "1g0kn631M_L9lDxLhpaGC1LQbzPKUTfLn",
    "image": "https://drive.google.com/thumbnail?id=1g0kn631M_L9lDxLhpaGC1LQbzPKUTfLn&sz=w800"
  },
  {
    "id": "prod-99",
    "name": "Bagua mirror",
    "category": "Vastu Remedies",
    "b2b": 220,
    "b2c": 300,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png"
  },
  {
    "id": "prod-100",
    "name": "Ashok stambh",
    "category": "Vastu Statue",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1MjKC88ln4xyh1toLiUZBrf6uvnXep31n",
    "image": "https://drive.google.com/thumbnail?id=1MjKC88ln4xyh1toLiUZBrf6uvnXep31n&sz=w800"
  },
  {
    "id": "prod-101",
    "name": "Vastu colour spring",
    "category": "Vastu Remedies",
    "b2b": 40,
    "b2c": 45,
    "variants": [],
    "imageId": "1gGSwK1vYQPf6N4X03OhNg8BuJIFlZr65",
    "image": "https://drive.google.com/thumbnail?id=1gGSwK1vYQPf6N4X03OhNg8BuJIFlZr65&sz=w800"
  },
  {
    "id": "prod-102",
    "name": "Vastu metal spring",
    "category": "Vastu Remedies",
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
    ],
    "imageId": null,
    "image": "/sacred_remedies.png"
  },
  {
    "id": "prod-103",
    "name": "Vastu purusha",
    "category": "Vastu Remedies",
    "b2b": 320,
    "b2c": 420,
    "variants": [],
    "imageId": "1svq-sBjOemG2lmdcOZLtKw8YUYvlVKQO",
    "image": "https://drive.google.com/thumbnail?id=1svq-sBjOemG2lmdcOZLtKw8YUYvlVKQO&sz=w800"
  },
  {
    "id": "prod-104",
    "name": "Bram Nabhi",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1zNC9ZtkuSQ4A_TpFMWLHBzlqKvXxJKos",
    "image": "https://drive.google.com/thumbnail?id=1zNC9ZtkuSQ4A_TpFMWLHBzlqKvXxJKos&sz=w800"
  },
  {
    "id": "prod-105",
    "name": "All gemstones",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": null,
    "variants": [
      {
        "option": "Rudraksh",
        "b2b": null,
        "b2c": null
      }
    ],
    "imageId": "1RmZcCrLBh3iZuHXVEFIsDn_1Kjey5qU4_gem",
    "image": "https://drive.google.com/thumbnail?id=1RmZcCrLBh3iZuHXVEFIsDn_1Kjey5qU4_gem&sz=w800"
  },
  {
    "id": "prod-106",
    "name": "Vastu Devta’s divs",
    "category": "Vastu Remedies",
    "b2b": 250,
    "b2c": 350,
    "variants": [],
    "imageId": "1aS_o67hDiX7dJ0u3Ujo4tRNWZDbaOI1r",
    "image": "https://drive.google.com/thumbnail?id=1aS_o67hDiX7dJ0u3Ujo4tRNWZDbaOI1r&sz=w800"
  },
  {
    "id": "prod-107",
    "name": "California sage",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png"
  }
];

export function getProductByName(name: string): CatalogProduct | undefined {
  const norm = name.toLowerCase().replace(/\s+/g, '');
  return productCatalog.find(p => p.name.toLowerCase().replace(/\s+/g, '') === norm);
}

export function getProductsByCategory(categoryName: string): CatalogProduct[] {
  const norm = categoryName.toLowerCase().replace(/[-_\s]/g, '');
  return productCatalog.filter(p => {
    const pNorm = p.category.toLowerCase().replace(/[-_\s]/g, '');
    return pNorm === norm || pNorm.includes(norm) || norm.includes(pNorm);
  });
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

  return {
    whatIsIt: `Authentic Vastu remedy curated for energetic space alignment and prosperity in ${category}.`,
    whyUsed: "Assists in transmuting stagnant or negative environmental energies into harmonious life-force frequencies.",
    suitableFor: "Residential homes, commercial establishments, and renovation projects seeking Vedic energetic harmony.",
    howUsed: "Place in the recommended directional zone following personal space consultation."
  };
}
