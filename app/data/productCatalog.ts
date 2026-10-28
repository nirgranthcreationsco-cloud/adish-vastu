export interface ProductVariant {
  option: string;
  b2b?: string | number | null;
  b2c: string | number | null;
  sourceRow?: number;
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
  b2b?: string | number | null;
  b2c: string | number | null;
  variants: ProductVariant[];
  info?: ProductEducationalInfo;
  sourceRow?: number;
  driveUrls?: string[];
}

export const productCatalog: CatalogProduct[] = [
  {
    "id": "prod-1",
    "name": "Copper L rod",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 1550,
    "variants": [],
    "imageId": "1ke6czWC40pUUdM4zRB2pjqdlGNrzQJm5",
    "image": "https://drive.google.com/thumbnail?id=1ke6czWC40pUUdM4zRB2pjqdlGNrzQJm5&sz=w800",
    "sourceRow": 4,
    "driveUrls": [
      "https://drive.google.com/file/d/1ke6czWC40pUUdM4zRB2pjqdlGNrzQJm5/view?usp=drive_link",
      "https://drive.google.com/file/d/1n2YTLibMCI9DDwfoc9hLYheG2JHkJRY_/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-2",
    "name": "Copper L rod with bering handle",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 2550,
    "variants": [],
    "imageId": "1Ip787UBf0HwXcp8LWPmUCPzkE4tocWHm",
    "image": "https://drive.google.com/thumbnail?id=1Ip787UBf0HwXcp8LWPmUCPzkE4tocWHm&sz=w800",
    "sourceRow": 5,
    "driveUrls": [
      "https://drive.google.com/file/d/1Ip787UBf0HwXcp8LWPmUCPzkE4tocWHm/view?usp=drive_link",
      "https://drive.google.com/file/d/1SpKK21Kbyz4Ukt5tR128gOHrfs9rJ1Nl/view?usp=drive_link",
      "https://drive.google.com/file/d/1mkZSfLuAciWDaph0C9IdkVF3MoaTr-pK/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-3",
    "name": "Brass L rod with bering handle",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 2550,
    "variants": [],
    "imageId": "179jtGykhXe2JJzRQ0YPff4a_sOb-E5tZ",
    "image": "https://drive.google.com/thumbnail?id=179jtGykhXe2JJzRQ0YPff4a_sOb-E5tZ&sz=w800",
    "sourceRow": 6,
    "driveUrls": [
      "https://drive.google.com/file/d/179jtGykhXe2JJzRQ0YPff4a_sOb-E5tZ/view?usp=drive_link",
      "https://drive.google.com/file/d/19HxNO6_9SCkET9l_yyUd6ujkDPmeHS8R/view?usp=drive_link",
      "https://drive.google.com/file/d/1bugKNDd1V3KCewciCHh6LUXE_Fu00XYc/view?usp=drive_link",
      "https://drive.google.com/file/d/1f3mLAXF8JBMlVCU572VAmbIdDfa50l2n/view?usp=drive_link",
      "https://drive.google.com/file/d/1yq71DYaSzpBQOoidCyWjHA7QHOgsw92z/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-4",
    "name": "Brass L rod with bering handle set",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 2400,
    "variants": [],
    "imageId": "1_hkufNIQMcRZyp_-5X4FNoVfEe85d2IC",
    "image": "https://drive.google.com/thumbnail?id=1_hkufNIQMcRZyp_-5X4FNoVfEe85d2IC&sz=w800",
    "sourceRow": 7,
    "driveUrls": [
      "https://drive.google.com/file/d/1_hkufNIQMcRZyp_-5X4FNoVfEe85d2IC/view?usp=drive_link",
      "https://drive.google.com/file/d/1fcov5gO5xKuoszbpJNrpSWz9ss9Dv9-z/view?usp=drive_link",
      "https://drive.google.com/file/d/1hwB9WPUWEp2R_FVKpPD2HyYv51dG83QA/view?usp=drive_link",
      "https://drive.google.com/file/d/1yBKsheE4mZfXao2ojaTdSx-ltHz2dKIG/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-5",
    "name": "Lecher antenna",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 5050,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 8,
    "driveUrls": []
  },
  {
    "id": "prod-6",
    "name": "Copper pyramid",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": null,
    "variants": [
      {
        "option": "1\u201d",
        "b2b": null,
        "b2c": 50,
        "sourceRow": 11
      },
      {
        "option": "2\u201d",
        "b2b": null,
        "b2c": 75,
        "sourceRow": 12
      },
      {
        "option": "4\u201d",
        "b2b": null,
        "b2c": 155,
        "sourceRow": 13
      },
      {
        "option": "6\u201d",
        "b2b": null,
        "b2c": 680,
        "sourceRow": 14
      },
      {
        "option": "8\u201d",
        "b2b": null,
        "b2c": 950,
        "sourceRow": 15
      },
      {
        "option": "9\u201d",
        "b2b": null,
        "b2c": 1750,
        "sourceRow": 16
      }
    ],
    "imageId": "11_FVURw_AbcErzH_efTif447QmcZSKwQ",
    "image": "https://drive.google.com/thumbnail?id=11_FVURw_AbcErzH_efTif447QmcZSKwQ&sz=w800",
    "sourceRow": 9,
    "driveUrls": [
      "https://drive.google.com/file/d/11_FVURw_AbcErzH_efTif447QmcZSKwQ/view?usp=drive_link",
      "https://drive.google.com/file/d/14yKdy6jQVUIoyMxZ9yxbTYMv86KDhopk/view?usp=drive_link",
      "https://drive.google.com/file/d/1wjUPHRk-eiaq-LM0pnO_VrFoO9v8n5nW/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-7",
    "name": "Brass pyramid",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": null,
    "variants": [
      {
        "option": "1\u201d",
        "b2b": null,
        "b2c": 50,
        "sourceRow": 19
      },
      {
        "option": "2\u201d",
        "b2b": null,
        "b2c": 75,
        "sourceRow": 20
      },
      {
        "option": "4\u201d",
        "b2b": null,
        "b2c": 155,
        "sourceRow": 21
      },
      {
        "option": "6\u201d",
        "b2b": null,
        "b2c": 680,
        "sourceRow": 22
      },
      {
        "option": "8\u201d",
        "b2b": null,
        "b2c": 950,
        "sourceRow": 23
      }
    ],
    "imageId": "1Qi_XpicLmPIM2nDkV1MpfREPzlj89S0f",
    "image": "https://drive.google.com/thumbnail?id=1Qi_XpicLmPIM2nDkV1MpfREPzlj89S0f&sz=w800",
    "sourceRow": 17,
    "driveUrls": [
      "https://drive.google.com/file/d/1Qi_XpicLmPIM2nDkV1MpfREPzlj89S0f/view?usp=drive_link",
      "https://drive.google.com/file/d/1oAtR0OlFrpdxmCIo2tRykuS7iRmti5Tj/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-8",
    "name": "Copper Virtual entry rod",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 1450,
    "variants": [],
    "imageId": "14GONJYsN_9X-y3iE-AegzLTZAEdVZ1B7",
    "image": "https://drive.google.com/thumbnail?id=14GONJYsN_9X-y3iE-AegzLTZAEdVZ1B7&sz=w800",
    "sourceRow": 24,
    "driveUrls": [
      "https://drive.google.com/file/d/14GONJYsN_9X-y3iE-AegzLTZAEdVZ1B7/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-9",
    "name": "Brass Virtual entry rod",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 1420,
    "variants": [],
    "imageId": "14GONJYsN_9X-y3iE-AegzLTZAEdVZ1B7",
    "image": "https://drive.google.com/thumbnail?id=14GONJYsN_9X-y3iE-AegzLTZAEdVZ1B7&sz=w800",
    "sourceRow": 25,
    "driveUrls": [
      "https://drive.google.com/file/d/14GONJYsN_9X-y3iE-AegzLTZAEdVZ1B7/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-10",
    "name": "Iron Virtual entry rod",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 900,
    "variants": [],
    "imageId": "14GONJYsN_9X-y3iE-AegzLTZAEdVZ1B7",
    "image": "https://drive.google.com/thumbnail?id=14GONJYsN_9X-y3iE-AegzLTZAEdVZ1B7&sz=w800",
    "sourceRow": 26,
    "driveUrls": [
      "https://drive.google.com/file/d/14GONJYsN_9X-y3iE-AegzLTZAEdVZ1B7/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-11",
    "name": "SS Virtual entry rod",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 900,
    "variants": [],
    "imageId": "14GONJYsN_9X-y3iE-AegzLTZAEdVZ1B7",
    "image": "https://drive.google.com/thumbnail?id=14GONJYsN_9X-y3iE-AegzLTZAEdVZ1B7&sz=w800",
    "sourceRow": 27,
    "driveUrls": [
      "https://drive.google.com/file/d/14GONJYsN_9X-y3iE-AegzLTZAEdVZ1B7/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-12",
    "name": "Aluminium Virtual entry rod",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 900,
    "variants": [],
    "imageId": "14GONJYsN_9X-y3iE-AegzLTZAEdVZ1B7",
    "image": "https://drive.google.com/thumbnail?id=14GONJYsN_9X-y3iE-AegzLTZAEdVZ1B7&sz=w800",
    "sourceRow": 28,
    "driveUrls": [
      "https://drive.google.com/file/d/14GONJYsN_9X-y3iE-AegzLTZAEdVZ1B7/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-13",
    "name": "Tridhatu pyramid",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": null,
    "variants": [
      {
        "option": "2\u201d",
        "b2b": null,
        "b2c": 260,
        "sourceRow": 33
      },
      {
        "option": "4\u201d",
        "b2b": null,
        "b2c": 390,
        "sourceRow": 34
      }
    ],
    "imageId": "14T7fOtBupqjKzYWKgTKT6NqBUx0ADb-a",
    "image": "https://drive.google.com/thumbnail?id=14T7fOtBupqjKzYWKgTKT6NqBUx0ADb-a&sz=w800",
    "sourceRow": 31,
    "driveUrls": [
      "https://drive.google.com/file/d/14T7fOtBupqjKzYWKgTKT6NqBUx0ADb-a/view?usp=drive_link",
      "https://drive.google.com/file/d/1C_ADsQxejlN1jFIXOgzjGHkbzrHf7mL_/view?usp=drive_link",
      "https://drive.google.com/file/d/1Pru8vgunpOMNvGkuNLb2bPIs3KFiv6N0/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-14",
    "name": "Liquid Mercury / parad",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 820000,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 36,
    "driveUrls": []
  },
  {
    "id": "prod-15",
    "name": "Mercury / parad pyramid",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 1400,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 37,
    "driveUrls": []
  },
  {
    "id": "prod-16",
    "name": "Mercury / parad swastika",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 1450,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 39,
    "driveUrls": []
  },
  {
    "id": "prod-17",
    "name": "Mercury / parad killak / nail",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 530,
    "variants": [],
    "imageId": "17PWkuOXnIowihMN6092t5mhq3sSFg082",
    "image": "https://drive.google.com/thumbnail?id=17PWkuOXnIowihMN6092t5mhq3sSFg082&sz=w800",
    "sourceRow": 40,
    "driveUrls": [
      "https://drive.google.com/file/d/17PWkuOXnIowihMN6092t5mhq3sSFg082/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-18",
    "name": "Nandavarta swastika copper",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": null,
    "variants": [
      {
        "option": "25mm",
        "b2b": null,
        "b2c": 60,
        "sourceRow": 43
      },
      {
        "option": "30mm",
        "b2b": null,
        "b2c": 70,
        "sourceRow": 44
      },
      {
        "option": "35mm",
        "b2b": null,
        "b2c": 80,
        "sourceRow": 45
      }
    ],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 41,
    "driveUrls": []
  },
  {
    "id": "prod-19",
    "name": "Tridhatu nandavarta swastika",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": null,
    "variants": [
      {
        "option": "25mm",
        "b2b": null,
        "b2c": 75,
        "sourceRow": 48
      },
      {
        "option": "30mm",
        "b2b": null,
        "b2c": 85,
        "sourceRow": 49
      },
      {
        "option": "35mm",
        "b2b": null,
        "b2c": 100,
        "sourceRow": 50
      }
    ],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 46,
    "driveUrls": []
  },
  {
    "id": "prod-20",
    "name": "Silver nandavarta swastika",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": null,
    "variants": [
      {
        "option": "25mm",
        "b2b": null,
        "b2c": 1000,
        "sourceRow": 53
      },
      {
        "option": "30mm",
        "b2b": null,
        "b2c": 1100,
        "sourceRow": 54
      }
    ],
    "imageId": "1Uw0yStqyUIQuhVz5tpmb1322QvAFvadO",
    "image": "https://drive.google.com/thumbnail?id=1Uw0yStqyUIQuhVz5tpmb1322QvAFvadO&sz=w800",
    "sourceRow": 51,
    "driveUrls": [
      "https://drive.google.com/file/d/1Uw0yStqyUIQuhVz5tpmb1322QvAFvadO/view?usp=drive_link",
      "https://drive.google.com/file/d/1_87Yu4UINLXpTkLGrKGa4ioqYJPqJM9k/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-21",
    "name": "Aura Booster",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 310,
    "variants": [],
    "imageId": "1F-qtu4lyPx83llVEOemaXaY5rn2hy6cB",
    "image": "https://drive.google.com/thumbnail?id=1F-qtu4lyPx83llVEOemaXaY5rn2hy6cB&sz=w800",
    "sourceRow": 55,
    "driveUrls": [
      "https://drive.google.com/file/d/1F-qtu4lyPx83llVEOemaXaY5rn2hy6cB/view?usp=drive_link",
      "https://drive.google.com/file/d/12zoIDaNb8yPCedIZepPTjQwyL_RcpvfD/view?usp=drive_link",
      "https://drive.google.com/file/d/17IERVmNrEyjJOvmMEEytqrR3XrWlapR-/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-22",
    "name": "Eaching Aura Booster",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 650,
    "variants": [],
    "imageId": "1f_qM0M6T6Br9rdH200spGimUsAqeMt5X",
    "image": "https://drive.google.com/thumbnail?id=1f_qM0M6T6Br9rdH200spGimUsAqeMt5X&sz=w800",
    "sourceRow": 56,
    "driveUrls": [
      "https://drive.google.com/file/d/1f_qM0M6T6Br9rdH200spGimUsAqeMt5X/view?usp=drive_link",
      "https://drive.google.com/file/d/1X07gcjNo9lCcjSRuz8_4AFeU2_bVAO-L/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-23",
    "name": "Hanuman Aura Booster",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 520,
    "variants": [],
    "imageId": "1uLh-W-sRHXdtY5Nb2TvF5fEiIOj6iSku",
    "image": "https://drive.google.com/thumbnail?id=1uLh-W-sRHXdtY5Nb2TvF5fEiIOj6iSku&sz=w800",
    "sourceRow": 57,
    "driveUrls": [
      "https://drive.google.com/file/d/1uLh-W-sRHXdtY5Nb2TvF5fEiIOj6iSku/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-24",
    "name": "Aura Booster.",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 420,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 58,
    "driveUrls": []
  },
  {
    "id": "prod-25",
    "name": "Vastu Toilet Blocker with 9 prymid plate",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 750,
    "variants": [],
    "imageId": "1R6nB1TKJNOazKvP7PtdrzBqVn7EzTZgX",
    "image": "https://drive.google.com/thumbnail?id=1R6nB1TKJNOazKvP7PtdrzBqVn7EzTZgX&sz=w800",
    "sourceRow": 59,
    "driveUrls": [
      "https://drive.google.com/file/d/1R6nB1TKJNOazKvP7PtdrzBqVn7EzTZgX/view?usp=drive_link",
      "https://drive.google.com/file/d/1mGfBa--4oD0uP9FSBzw3HWcRyn5MkN8h/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-26",
    "name": "Vastu Toilet Pacifier, Negative Energy Blocker, Toilet Negative Energy Blocker, full brass body.",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 680,
    "variants": [],
    "imageId": "13wbRNmNf5LK7d9YfBMt-0NUVptGOGigl",
    "image": "https://drive.google.com/thumbnail?id=13wbRNmNf5LK7d9YfBMt-0NUVptGOGigl&sz=w800",
    "sourceRow": 61,
    "driveUrls": [
      "https://drive.google.com/file/d/13wbRNmNf5LK7d9YfBMt-0NUVptGOGigl/view?usp=drive_link",
      "https://drive.google.com/file/d/1GwPtpZqPckTarN2YW7Y6cBpxGQ1RSjXp/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-27",
    "name": "Vastu Entry Blocker",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 670,
    "variants": [],
    "imageId": "1EabQTHUv7rsKdZAldtfN0etzic9D4Uzx",
    "image": "https://drive.google.com/thumbnail?id=1EabQTHUv7rsKdZAldtfN0etzic9D4Uzx&sz=w800",
    "sourceRow": 63,
    "driveUrls": [
      "https://drive.google.com/file/d/1EabQTHUv7rsKdZAldtfN0etzic9D4Uzx/view?usp=drive_link",
      "https://drive.google.com/file/d/1GjYFCRHXZ3kQWpsx1I95nwegAiKNyzva/view?usp=drive_link",
      "https://drive.google.com/file/d/1r9Mu-f47RrdQsJyL-pzfu-YQnQkR68n9/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-28",
    "name": "Copper geopathic stress rod",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 1000,
    "variants": [],
    "imageId": "1_Nq5dca9B44IfMZ2GzpM2f9t3LIAg46u",
    "image": "https://drive.google.com/thumbnail?id=1_Nq5dca9B44IfMZ2GzpM2f9t3LIAg46u&sz=w800",
    "sourceRow": 64,
    "driveUrls": [
      "https://drive.google.com/file/d/1_Nq5dca9B44IfMZ2GzpM2f9t3LIAg46u/view?usp=drive_link",
      "https://drive.google.com/file/d/1hIo-ZabUiUKGD2q8i9ZQu7qba7xMEFeM/view?usp=drive_link",
      "https://drive.google.com/file/d/1hoRWBohz8M17vtGS4J1VgGqfVLnO6l_A/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-29",
    "name": "Brass geopathic stress rod",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 1000,
    "variants": [],
    "imageId": "1_Nq5dca9B44IfMZ2GzpM2f9t3LIAg46u",
    "image": "https://drive.google.com/thumbnail?id=1_Nq5dca9B44IfMZ2GzpM2f9t3LIAg46u&sz=w800",
    "sourceRow": 65,
    "driveUrls": [
      "https://drive.google.com/file/d/1_Nq5dca9B44IfMZ2GzpM2f9t3LIAg46u/view?usp=drive_link",
      "https://drive.google.com/file/d/1sHhFbuw6PMsnG8mHkKqbrzD4XpTDXrge/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-30",
    "name": "Iron geopathic stress rod",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 870,
    "variants": [],
    "imageId": "1_Nq5dca9B44IfMZ2GzpM2f9t3LIAg46u",
    "image": "https://drive.google.com/thumbnail?id=1_Nq5dca9B44IfMZ2GzpM2f9t3LIAg46u&sz=w800",
    "sourceRow": 66,
    "driveUrls": [
      "https://drive.google.com/file/d/1_Nq5dca9B44IfMZ2GzpM2f9t3LIAg46u/view?usp=drive_link",
      "https://drive.google.com/file/d/1RoqQTFzIR_FNtBwITs1PUREzaLYDTUJ3/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-31",
    "name": "SS geopathic stress rod",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 900,
    "variants": [],
    "imageId": "1_Nq5dca9B44IfMZ2GzpM2f9t3LIAg46u",
    "image": "https://drive.google.com/thumbnail?id=1_Nq5dca9B44IfMZ2GzpM2f9t3LIAg46u&sz=w800",
    "sourceRow": 67,
    "driveUrls": [
      "https://drive.google.com/file/d/1_Nq5dca9B44IfMZ2GzpM2f9t3LIAg46u/view?usp=drive_link",
      "https://drive.google.com/file/d/1lJcC60sQ2eoMpwoyUlvDTOAz6QCPZYFX/view?usp=drive_link",
      "https://drive.google.com/file/d/1WyzVdMwf7LdcrZcSgYYVYECG7Bjd6nyr/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-32",
    "name": "Aluminium geopathic stress rod",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 900,
    "variants": [],
    "imageId": "1_Nq5dca9B44IfMZ2GzpM2f9t3LIAg46u",
    "image": "https://drive.google.com/thumbnail?id=1_Nq5dca9B44IfMZ2GzpM2f9t3LIAg46u&sz=w800",
    "sourceRow": 68,
    "driveUrls": [
      "https://drive.google.com/file/d/1_Nq5dca9B44IfMZ2GzpM2f9t3LIAg46u/view?usp=drive_link",
      "https://drive.google.com/file/d/1Bz_rtk1zis1Nx9_ZWglpBFVpyEwlK2zM/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-33",
    "name": "8 direction rod",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 4800,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 69,
    "driveUrls": []
  },
  {
    "id": "prod-34",
    "name": "Vastu Toilet blocker",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 750,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 70,
    "driveUrls": []
  },
  {
    "id": "prod-35",
    "name": "Vastu Fire Balancer",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 750,
    "variants": [],
    "imageId": "1Tu3omJ-2tzBkC8-7OyoLQZflUHgKXqBo",
    "image": "https://drive.google.com/thumbnail?id=1Tu3omJ-2tzBkC8-7OyoLQZflUHgKXqBo&sz=w800",
    "sourceRow": 71,
    "driveUrls": [
      "https://drive.google.com/file/d/1Tu3omJ-2tzBkC8-7OyoLQZflUHgKXqBo/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-36",
    "name": "Copper strips 30 gauge",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": null,
    "variants": [
      {
        "option": "1 Inch",
        "b2b": null,
        "b2c": 45,
        "sourceRow": 73
      }
    ],
    "imageId": "1ovTlc2tp5ZeZT9g_vAOHxzxSMJhJkKBP",
    "image": "https://drive.google.com/thumbnail?id=1ovTlc2tp5ZeZT9g_vAOHxzxSMJhJkKBP&sz=w800",
    "sourceRow": 72,
    "driveUrls": [
      "https://drive.google.com/file/d/1ovTlc2tp5ZeZT9g_vAOHxzxSMJhJkKBP/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-37",
    "name": "Copper strips 34 gauge",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": null,
    "variants": [
      {
        "option": "1 Inch",
        "b2b": null,
        "b2c": 40,
        "sourceRow": 75
      },
      {
        "option": "0.5 Inch",
        "b2b": null,
        "b2c": 35,
        "sourceRow": 76
      }
    ],
    "imageId": "1ovTlc2tp5ZeZT9g_vAOHxzxSMJhJkKBP",
    "image": "https://drive.google.com/thumbnail?id=1ovTlc2tp5ZeZT9g_vAOHxzxSMJhJkKBP&sz=w800",
    "sourceRow": 74,
    "driveUrls": [
      "https://drive.google.com/file/d/1ovTlc2tp5ZeZT9g_vAOHxzxSMJhJkKBP/view?usp=drive_link",
      "https://drive.google.com/file/d/1G85zVUmFxm9ao_XKIcnXCb2_y6JlmtBP/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-38",
    "name": "Brass Strip 30 gauge",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": null,
    "variants": [
      {
        "option": "1 incH",
        "b2b": null,
        "b2c": 45,
        "sourceRow": 78
      }
    ],
    "imageId": "1o07mY2Sx2irI0rv5R5wQjLAnrhpCRA3j",
    "image": "https://drive.google.com/thumbnail?id=1o07mY2Sx2irI0rv5R5wQjLAnrhpCRA3j&sz=w800",
    "sourceRow": 77,
    "driveUrls": [
      "https://drive.google.com/file/d/1o07mY2Sx2irI0rv5R5wQjLAnrhpCRA3j/view?usp=drive_link",
      "https://drive.google.com/file/d/1G85zVUmFxm9ao_XKIcnXCb2_y6JlmtBP/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-39",
    "name": "Brass Strip 34 gauge",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": null,
    "variants": [
      {
        "option": "1 incH",
        "b2b": null,
        "b2c": 40,
        "sourceRow": 80
      },
      {
        "option": "0.5 inch",
        "b2b": null,
        "b2c": 35,
        "sourceRow": 81
      }
    ],
    "imageId": "1o07mY2Sx2irI0rv5R5wQjLAnrhpCRA3j",
    "image": "https://drive.google.com/thumbnail?id=1o07mY2Sx2irI0rv5R5wQjLAnrhpCRA3j&sz=w800",
    "sourceRow": 79,
    "driveUrls": [
      "https://drive.google.com/file/d/1o07mY2Sx2irI0rv5R5wQjLAnrhpCRA3j/view?usp=drive_link",
      "https://drive.google.com/file/d/1G85zVUmFxm9ao_XKIcnXCb2_y6JlmtBP/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-40",
    "name": "Stainless steel strip",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": null,
    "variants": [
      {
        "option": "1 inch.",
        "b2b": null,
        "b2c": 35,
        "sourceRow": 83
      },
      {
        "option": "0.5 inch",
        "b2b": null,
        "b2c": 30,
        "sourceRow": 84
      }
    ],
    "imageId": "1G85zVUmFxm9ao_XKIcnXCb2_y6JlmtBP",
    "image": "https://drive.google.com/thumbnail?id=1G85zVUmFxm9ao_XKIcnXCb2_y6JlmtBP&sz=w800",
    "sourceRow": 82,
    "driveUrls": [
      "https://drive.google.com/file/d/1G85zVUmFxm9ao_XKIcnXCb2_y6JlmtBP/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-41",
    "name": "Aluminium Strip",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": null,
    "variants": [
      {
        "option": "1 inch",
        "b2b": null,
        "b2c": 35,
        "sourceRow": 86
      },
      {
        "option": "0.5 inch",
        "b2b": null,
        "b2c": 30,
        "sourceRow": 87
      }
    ],
    "imageId": "1G85zVUmFxm9ao_XKIcnXCb2_y6JlmtBP",
    "image": "https://drive.google.com/thumbnail?id=1G85zVUmFxm9ao_XKIcnXCb2_y6JlmtBP&sz=w800",
    "sourceRow": 85,
    "driveUrls": [
      "https://drive.google.com/file/d/1G85zVUmFxm9ao_XKIcnXCb2_y6JlmtBP/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-42",
    "name": "Iron Strip",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": null,
    "variants": [
      {
        "option": "1 inch",
        "b2b": null,
        "b2c": 35,
        "sourceRow": 89
      },
      {
        "option": "0.5inch",
        "b2b": null,
        "b2c": 30,
        "sourceRow": 90
      }
    ],
    "imageId": "1G85zVUmFxm9ao_XKIcnXCb2_y6JlmtBP",
    "image": "https://drive.google.com/thumbnail?id=1G85zVUmFxm9ao_XKIcnXCb2_y6JlmtBP&sz=w800",
    "sourceRow": 88,
    "driveUrls": [
      "https://drive.google.com/file/d/1G85zVUmFxm9ao_XKIcnXCb2_y6JlmtBP/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-43",
    "name": "Tridhatu strip",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": null,
    "variants": [
      {
        "option": "1 inch",
        "b2b": null,
        "b2c": 155,
        "sourceRow": 92
      }
    ],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 91,
    "driveUrls": []
  },
  {
    "id": "prod-44",
    "name": "All metal strip with muscovite",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": null,
    "variants": [
      {
        "option": "Copper",
        "b2b": null,
        "b2c": 95,
        "sourceRow": 94
      },
      {
        "option": "Brass",
        "b2b": null,
        "b2c": 95,
        "sourceRow": 95
      },
      {
        "option": "Iron",
        "b2b": null,
        "b2c": 80,
        "sourceRow": 96
      },
      {
        "option": "Aluminium",
        "b2b": null,
        "b2c": 80,
        "sourceRow": 97
      },
      {
        "option": "S.S.",
        "b2b": null,
        "b2c": 80,
        "sourceRow": 98
      }
    ],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 93,
    "driveUrls": []
  },
  {
    "id": "prod-45",
    "name": "Copper Helix",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": null,
    "variants": [
      {
        "option": "4\u201d",
        "b2b": null,
        "b2c": 520,
        "sourceRow": 101
      },
      {
        "option": "6\u201d",
        "b2b": null,
        "b2c": 680,
        "sourceRow": 102
      }
    ],
    "imageId": "19aGOdXaEaxMX0uoUvMuKGvMQ5aCo8Uoo",
    "image": "https://drive.google.com/thumbnail?id=19aGOdXaEaxMX0uoUvMuKGvMQ5aCo8Uoo&sz=w800",
    "sourceRow": 100,
    "driveUrls": [
      "https://drive.google.com/file/d/19aGOdXaEaxMX0uoUvMuKGvMQ5aCo8Uoo/view?usp=drive_link",
      "https://drive.google.com/file/d/1v9aswgxOne8udn8AREsovl98sg8JhVO9/view?usp=drive_link",
      "https://drive.google.com/file/d/1ylCFbSFSUiTSqHCHNYE6LM-QMMc6v8ie/view?usp=drive_link",
      "https://drive.google.com/file/d/15dcKvjJHP5UU7uDvqpeHEYbZuGj_QyA7/view?usp=drive_link",
      "https://drive.google.com/file/d/1BIcSKyIh3D0Iy9NXrOsc4SB3s_n9dwhb/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-46",
    "name": "Brass Helix",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": null,
    "variants": [
      {
        "option": "4\u201d",
        "b2b": null,
        "b2c": 480,
        "sourceRow": 104
      },
      {
        "option": "6\u201d",
        "b2b": null,
        "b2c": 660,
        "sourceRow": 105
      }
    ],
    "imageId": "19aGOdXaEaxMX0uoUvMuKGvMQ5aCo8Uoo",
    "image": "https://drive.google.com/thumbnail?id=19aGOdXaEaxMX0uoUvMuKGvMQ5aCo8Uoo&sz=w800",
    "sourceRow": 103,
    "driveUrls": [
      "https://drive.google.com/file/d/19aGOdXaEaxMX0uoUvMuKGvMQ5aCo8Uoo/view?usp=drive_link",
      "https://drive.google.com/file/d/1v9aswgxOne8udn8AREsovl98sg8JhVO9/view?usp=drive_link",
      "https://drive.google.com/file/d/1ylCFbSFSUiTSqHCHNYE6LM-QMMc6v8ie/view?usp=drive_link",
      "https://drive.google.com/file/d/1twt4s6zjz58d8rnoZ1x-lEkhN0zOtIdC/view?usp=drive_link",
      "https://drive.google.com/file/d/1QplK6mAcnf_a_CgAyCgPma6rEbYAgJwu/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-47",
    "name": "Zinc Helix",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": null,
    "variants": [
      {
        "option": "4\u201d",
        "b2b": null,
        "b2c": 300,
        "sourceRow": 107
      },
      {
        "option": "6\u201d",
        "b2b": null,
        "b2c": 530,
        "sourceRow": 108
      }
    ],
    "imageId": "19aGOdXaEaxMX0uoUvMuKGvMQ5aCo8Uoo",
    "image": "https://drive.google.com/thumbnail?id=19aGOdXaEaxMX0uoUvMuKGvMQ5aCo8Uoo&sz=w800",
    "sourceRow": 106,
    "driveUrls": [
      "https://drive.google.com/file/d/19aGOdXaEaxMX0uoUvMuKGvMQ5aCo8Uoo/view?usp=drive_link",
      "https://drive.google.com/file/d/1v9aswgxOne8udn8AREsovl98sg8JhVO9/view?usp=drive_link",
      "https://drive.google.com/file/d/1ylCFbSFSUiTSqHCHNYE6LM-QMMc6v8ie/view?usp=drive_link",
      "https://drive.google.com/file/d/1FTbdFq83kRMiDFb-aButAQm0WFoBc28I/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-48",
    "name": "Aluminium Helix",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": null,
    "variants": [
      {
        "option": "4\u201d",
        "b2b": null,
        "b2c": 230,
        "sourceRow": 110
      },
      {
        "option": "6\u201d",
        "b2b": null,
        "b2c": 420,
        "sourceRow": 111
      }
    ],
    "imageId": "19aGOdXaEaxMX0uoUvMuKGvMQ5aCo8Uoo",
    "image": "https://drive.google.com/thumbnail?id=19aGOdXaEaxMX0uoUvMuKGvMQ5aCo8Uoo&sz=w800",
    "sourceRow": 109,
    "driveUrls": [
      "https://drive.google.com/file/d/19aGOdXaEaxMX0uoUvMuKGvMQ5aCo8Uoo/view?usp=drive_link",
      "https://drive.google.com/file/d/1v9aswgxOne8udn8AREsovl98sg8JhVO9/view?usp=drive_link",
      "https://drive.google.com/file/d/1ylCFbSFSUiTSqHCHNYE6LM-QMMc6v8ie/view?usp=drive_link",
      "https://drive.google.com/file/d/1FTbdFq83kRMiDFb-aButAQm0WFoBc28I/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-49",
    "name": "Lead Helix",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": null,
    "variants": [
      {
        "option": "4\u201d",
        "b2b": null,
        "b2c": 350,
        "sourceRow": 113
      },
      {
        "option": "6\u201d",
        "b2b": null,
        "b2c": 550,
        "sourceRow": 114
      }
    ],
    "imageId": "19aGOdXaEaxMX0uoUvMuKGvMQ5aCo8Uoo",
    "image": "https://drive.google.com/thumbnail?id=19aGOdXaEaxMX0uoUvMuKGvMQ5aCo8Uoo&sz=w800",
    "sourceRow": 112,
    "driveUrls": [
      "https://drive.google.com/file/d/19aGOdXaEaxMX0uoUvMuKGvMQ5aCo8Uoo/view?usp=drive_link",
      "https://drive.google.com/file/d/1v9aswgxOne8udn8AREsovl98sg8JhVO9/view?usp=drive_link",
      "https://drive.google.com/file/d/1ylCFbSFSUiTSqHCHNYE6LM-QMMc6v8ie/view?usp=drive_link",
      "https://drive.google.com/file/d/1VFVDuq4nHHt3lfzitawwsu0bmFGTCltj/view?usp=drive_link",
      "https://drive.google.com/file/d/1oG5C2-52jYnSwDDLtfUcvVJw5bSB4kGq/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-50",
    "name": "Advance English Shakti Chakra",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": null,
    "variants": [
      {
        "option": "12 inch",
        "b2b": null,
        "b2c": 750,
        "sourceRow": 116
      },
      {
        "option": "9 inch",
        "b2b": null,
        "b2c": 550,
        "sourceRow": 117
      },
      {
        "option": "6 inch",
        "b2b": null,
        "b2c": 300,
        "sourceRow": 118
      }
    ],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 115,
    "driveUrls": []
  },
  {
    "id": "prod-51",
    "name": "English Shakti Chakra",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": null,
    "variants": [
      {
        "option": "12 inch",
        "b2b": null,
        "b2c": 750,
        "sourceRow": 120
      },
      {
        "option": "9 inch",
        "b2b": null,
        "b2c": 550,
        "sourceRow": 121
      },
      {
        "option": "6 inch",
        "b2b": null,
        "b2c": 300,
        "sourceRow": 122
      }
    ],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 119,
    "driveUrls": []
  },
  {
    "id": "prod-52",
    "name": "Vastu Disha Shakti Chakra Hindi",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": null,
    "variants": [
      {
        "option": "6 inch",
        "b2b": null,
        "b2c": 300,
        "sourceRow": 124
      }
    ],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 123,
    "driveUrls": []
  },
  {
    "id": "prod-53",
    "name": "Dowsing board",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 300,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 125,
    "driveUrls": []
  },
  {
    "id": "prod-54",
    "name": "Brass pendulums",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 300,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 126,
    "driveUrls": []
  },
  {
    "id": "prod-55",
    "name": "Stone pendulums",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 180,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 127,
    "driveUrls": []
  },
  {
    "id": "prod-56",
    "name": "Copper 3 layer pyramid",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 1050,
    "variants": [],
    "imageId": "1mSq9nKZobstG_Wc5Koh5hAp9fc5Baz6a",
    "image": "https://drive.google.com/thumbnail?id=1mSq9nKZobstG_Wc5Koh5hAp9fc5Baz6a&sz=w800",
    "sourceRow": 129,
    "driveUrls": [
      "https://drive.google.com/file/d/1mSq9nKZobstG_Wc5Koh5hAp9fc5Baz6a/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-57",
    "name": "Brass 3 layer pyramid",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 1050,
    "variants": [],
    "imageId": "1NbF7Yhd-U8rEnO9ytuMtVUzD3SF5eEgl",
    "image": "https://drive.google.com/thumbnail?id=1NbF7Yhd-U8rEnO9ytuMtVUzD3SF5eEgl&sz=w800",
    "sourceRow": 130,
    "driveUrls": [
      "https://drive.google.com/file/d/1NbF7Yhd-U8rEnO9ytuMtVUzD3SF5eEgl/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-58",
    "name": "Lead 3 layer pyramid",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 650,
    "variants": [],
    "imageId": "1_lf2YtiMMT5Ez-IJtZvxHaGglcpYQxwW",
    "image": "https://drive.google.com/thumbnail?id=1_lf2YtiMMT5Ez-IJtZvxHaGglcpYQxwW&sz=w800",
    "sourceRow": 131,
    "driveUrls": [
      "https://drive.google.com/file/d/1_lf2YtiMMT5Ez-IJtZvxHaGglcpYQxwW/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-59",
    "name": "Aluminium 3 layer pyramid",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 600,
    "variants": [],
    "imageId": "1g9sesVGEnvAmeVqf-PtWy1WJL6t7anmp",
    "image": "https://drive.google.com/thumbnail?id=1g9sesVGEnvAmeVqf-PtWy1WJL6t7anmp&sz=w800",
    "sourceRow": 132,
    "driveUrls": [
      "https://drive.google.com/file/d/1g9sesVGEnvAmeVqf-PtWy1WJL6t7anmp/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-60",
    "name": "Zinc 3 layer pyramid",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 620,
    "variants": [],
    "imageId": "1g9sesVGEnvAmeVqf-PtWy1WJL6t7anmp",
    "image": "https://drive.google.com/thumbnail?id=1g9sesVGEnvAmeVqf-PtWy1WJL6t7anmp&sz=w800",
    "sourceRow": 133,
    "driveUrls": [
      "https://drive.google.com/file/d/1g9sesVGEnvAmeVqf-PtWy1WJL6t7anmp/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-61",
    "name": "Zinc 2 layer pyramid",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1tWpj3PBodSweoMx3nDX625WkFNNTvVKZ",
    "image": "https://drive.google.com/thumbnail?id=1tWpj3PBodSweoMx3nDX625WkFNNTvVKZ&sz=w800",
    "sourceRow": 134,
    "driveUrls": [
      "https://drive.google.com/file/d/1tWpj3PBodSweoMx3nDX625WkFNNTvVKZ/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-62",
    "name": "Copper 2 layer pyramid",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 1050,
    "variants": [],
    "imageId": "1Z9hg39OPoh4EbFum5Qp42mhKdO7kpAgp",
    "image": "https://drive.google.com/thumbnail?id=1Z9hg39OPoh4EbFum5Qp42mhKdO7kpAgp&sz=w800",
    "sourceRow": 135,
    "driveUrls": [
      "https://drive.google.com/file/d/1Z9hg39OPoh4EbFum5Qp42mhKdO7kpAgp/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-63",
    "name": "Brass 2 layer pyramid",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 1050,
    "variants": [],
    "imageId": "1be3ecyW7gOjYe2IHmyo2-0TSwcweRwso",
    "image": "https://drive.google.com/thumbnail?id=1be3ecyW7gOjYe2IHmyo2-0TSwcweRwso&sz=w800",
    "sourceRow": 136,
    "driveUrls": [
      "https://drive.google.com/file/d/1be3ecyW7gOjYe2IHmyo2-0TSwcweRwso/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-64",
    "name": "Lead 2 layer pyramid",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 650,
    "variants": [],
    "imageId": "1tWpj3PBodSweoMx3nDX625WkFNNTvVKZ",
    "image": "https://drive.google.com/thumbnail?id=1tWpj3PBodSweoMx3nDX625WkFNNTvVKZ&sz=w800",
    "sourceRow": 137,
    "driveUrls": [
      "https://drive.google.com/file/d/1tWpj3PBodSweoMx3nDX625WkFNNTvVKZ/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-65",
    "name": "Aluminium 2 layer pyramid",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 620,
    "variants": [],
    "imageId": "1AiVHTTct4lTiQQnPkKsLAWCPkv_BNiUM",
    "image": "https://drive.google.com/thumbnail?id=1AiVHTTct4lTiQQnPkKsLAWCPkv_BNiUM&sz=w800",
    "sourceRow": 138,
    "driveUrls": [
      "https://drive.google.com/file/d/1AiVHTTct4lTiQQnPkKsLAWCPkv_BNiUM/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-66",
    "name": "Ss",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 139,
    "driveUrls": []
  },
  {
    "id": "prod-67",
    "name": "Red elephant",
    "category": "Vastu Statue",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 140,
    "driveUrls": []
  },
  {
    "id": "prod-68",
    "name": "Red horse",
    "category": "Vastu Statue",
    "b2b": null,
    "b2c": 900,
    "variants": [],
    "imageId": "1e_WOecVcUzCrFW46C-0te3rwv_330-OF",
    "image": "https://drive.google.com/thumbnail?id=1e_WOecVcUzCrFW46C-0te3rwv_330-OF&sz=w800",
    "sourceRow": 141,
    "driveUrls": [
      "https://drive.google.com/file/d/1e_WOecVcUzCrFW46C-0te3rwv_330-OF/view?usp=drive_link",
      "https://drive.google.com/file/d/19w9fJCKyQf5e18tF7tkdJCtabC5bNPZA/view?usp=drive_link",
      "https://drive.google.com/file/d/1Z_gxUrRzBQMxxjHhNy0GNKuVwxRmRaN3/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-69",
    "name": "White horse",
    "category": "Vastu Statue",
    "b2b": null,
    "b2c": 900,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 142,
    "driveUrls": []
  },
  {
    "id": "prod-70",
    "name": "Golden horse",
    "category": "Vastu Statue",
    "b2b": null,
    "b2c": 900,
    "variants": [],
    "imageId": "1aoZetLw2mARr11kxZCoEjRbSX-70PxA5",
    "image": "https://drive.google.com/thumbnail?id=1aoZetLw2mARr11kxZCoEjRbSX-70PxA5&sz=w800",
    "sourceRow": 143,
    "driveUrls": [
      "https://drive.google.com/file/d/1aoZetLw2mARr11kxZCoEjRbSX-70PxA5/view?usp=drive_link",
      "https://drive.google.com/file/d/1iYaV7o_gckCXcS3jOX0I8psAiNspSnb5/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-71",
    "name": "Love birds",
    "category": "Vastu Statue",
    "b2b": null,
    "b2c": 1650,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 144,
    "driveUrls": []
  },
  {
    "id": "prod-72",
    "name": "Yellow kodi",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 2500,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 146,
    "driveUrls": []
  },
  {
    "id": "prod-73",
    "name": "Black kodi",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 1600,
    "variants": [],
    "imageId": "1lPQ4gxAUIXo9GEv25faQiJcq7JXyApCD",
    "image": "https://drive.google.com/thumbnail?id=1lPQ4gxAUIXo9GEv25faQiJcq7JXyApCD&sz=w800",
    "sourceRow": 147,
    "driveUrls": [
      "https://drive.google.com/file/d/1lPQ4gxAUIXo9GEv25faQiJcq7JXyApCD/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-74",
    "name": "White kodi",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 800,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 148,
    "driveUrls": []
  },
  {
    "id": "prod-75",
    "name": "Shakti chakra",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 149,
    "driveUrls": []
  },
  {
    "id": "prod-76",
    "name": "Red Gomchi",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 1000,
    "variants": [],
    "imageId": "1FjyczTFft_NkZ7nyZ7EQkkfihRhl_Xh-",
    "image": "https://drive.google.com/thumbnail?id=1FjyczTFft_NkZ7nyZ7EQkkfihRhl_Xh-&sz=w800",
    "sourceRow": 150,
    "driveUrls": [
      "https://drive.google.com/file/d/1FjyczTFft_NkZ7nyZ7EQkkfihRhl_Xh-/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-77",
    "name": "White Gomchi",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 2200,
    "variants": [],
    "imageId": "1dlAYdgqxQdKlIw56BnEjgdct1C26mxSV",
    "image": "https://drive.google.com/thumbnail?id=1dlAYdgqxQdKlIw56BnEjgdct1C26mxSV&sz=w800",
    "sourceRow": 151,
    "driveUrls": [
      "https://drive.google.com/file/d/1dlAYdgqxQdKlIw56BnEjgdct1C26mxSV/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-78",
    "name": "Black Gomchi",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 2400,
    "variants": [],
    "imageId": "1GuDxUbHptakFnuYi6Nu52Xu2z7VQZYBK",
    "image": "https://drive.google.com/thumbnail?id=1GuDxUbHptakFnuYi6Nu52Xu2z7VQZYBK&sz=w800",
    "sourceRow": 152,
    "driveUrls": [
      "https://drive.google.com/file/d/1GuDxUbHptakFnuYi6Nu52Xu2z7VQZYBK/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-79",
    "name": "Safed sarso",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 2800,
    "variants": [],
    "imageId": "1CIGa0phmBqaxuDW-SzZSQA5oIpPw78oq",
    "image": "https://drive.google.com/thumbnail?id=1CIGa0phmBqaxuDW-SzZSQA5oIpPw78oq&sz=w800",
    "sourceRow": 153,
    "driveUrls": [
      "https://drive.google.com/file/d/1CIGa0phmBqaxuDW-SzZSQA5oIpPw78oq/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-80",
    "name": "Pilli sarso",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 350,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 154,
    "driveUrls": []
  },
  {
    "id": "prod-81",
    "name": "Business dhoop",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 1200,
    "variants": [],
    "imageId": "1SFSsajj1WgAgwxUUuwSFdBEwBgMWeYK4",
    "image": "https://drive.google.com/thumbnail?id=1SFSsajj1WgAgwxUUuwSFdBEwBgMWeYK4&sz=w800",
    "sourceRow": 155,
    "driveUrls": [
      "https://drive.google.com/file/d/1SFSsajj1WgAgwxUUuwSFdBEwBgMWeYK4/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-82",
    "name": "Land energy dhoop",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 1200,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 156,
    "driveUrls": []
  },
  {
    "id": "prod-83",
    "name": "Clear quartz small size",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 1000,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 157,
    "driveUrls": []
  },
  {
    "id": "prod-84",
    "name": "Clear quartz medium size",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 1300,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 158,
    "driveUrls": []
  },
  {
    "id": "prod-85",
    "name": "Clear quartz big size",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 1400,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 159,
    "driveUrls": []
  },
  {
    "id": "prod-86",
    "name": "Brass padam plate",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 1100,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 160,
    "driveUrls": []
  },
  {
    "id": "prod-87",
    "name": "Copper padam plate",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 1100,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 161,
    "driveUrls": []
  },
  {
    "id": "prod-88",
    "name": "Red tape",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 390,
    "variants": [],
    "imageId": "1jAURFXTcwtMuyEaH6dukvzW6JwJ1ofdd",
    "image": "https://drive.google.com/thumbnail?id=1jAURFXTcwtMuyEaH6dukvzW6JwJ1ofdd&sz=w800",
    "sourceRow": 162,
    "driveUrls": [
      "https://drive.google.com/file/d/1jAURFXTcwtMuyEaH6dukvzW6JwJ1ofdd/view?usp=drive_link",
      "https://drive.google.com/file/d/1gGSwK1vYQPf6N4X03OhNg8BuJIFlZr65/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-89",
    "name": "Blue tape",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 390,
    "variants": [],
    "imageId": "1gGSwK1vYQPf6N4X03OhNg8BuJIFlZr65",
    "image": "https://drive.google.com/thumbnail?id=1gGSwK1vYQPf6N4X03OhNg8BuJIFlZr65&sz=w800",
    "sourceRow": 163,
    "driveUrls": [
      "https://drive.google.com/file/d/1gGSwK1vYQPf6N4X03OhNg8BuJIFlZr65/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-90",
    "name": "Yellow tape",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 390,
    "variants": [],
    "imageId": "1gGSwK1vYQPf6N4X03OhNg8BuJIFlZr65",
    "image": "https://drive.google.com/thumbnail?id=1gGSwK1vYQPf6N4X03OhNg8BuJIFlZr65&sz=w800",
    "sourceRow": 164,
    "driveUrls": [
      "https://drive.google.com/file/d/1gGSwK1vYQPf6N4X03OhNg8BuJIFlZr65/view?usp=drive_link",
      "https://drive.google.com/file/d/1WwfKFK88NWXd9rAnvv8hVPRLweeE36iO/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-91",
    "name": "White tape",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 390,
    "variants": [],
    "imageId": "1gGSwK1vYQPf6N4X03OhNg8BuJIFlZr65",
    "image": "https://drive.google.com/thumbnail?id=1gGSwK1vYQPf6N4X03OhNg8BuJIFlZr65&sz=w800",
    "sourceRow": 165,
    "driveUrls": [
      "https://drive.google.com/file/d/1gGSwK1vYQPf6N4X03OhNg8BuJIFlZr65/view?usp=drive_link",
      "https://drive.google.com/file/d/1VM03d2Fjgsb6SE3jbtSJD00FPUqaXKJy/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-92",
    "name": "Green tape",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 390,
    "variants": [],
    "imageId": "1gGSwK1vYQPf6N4X03OhNg8BuJIFlZr65",
    "image": "https://drive.google.com/thumbnail?id=1gGSwK1vYQPf6N4X03OhNg8BuJIFlZr65&sz=w800",
    "sourceRow": 166,
    "driveUrls": [
      "https://drive.google.com/file/d/1gGSwK1vYQPf6N4X03OhNg8BuJIFlZr65/view?usp=drive_link",
      "https://drive.google.com/file/d/16bCTYqXMNyFIwIS8pkut_XgspVDrc_qL/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-93",
    "name": "(W \u2013 4\u201d / L \u2013 25m)",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 400,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 167,
    "driveUrls": []
  },
  {
    "id": "prod-94",
    "name": "Muscovite powder",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 180,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 168,
    "driveUrls": []
  },
  {
    "id": "prod-95",
    "name": "Muscovite sheet",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 1050,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 169,
    "driveUrls": []
  },
  {
    "id": "prod-96",
    "name": "Dowsing board",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 500,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 170,
    "driveUrls": []
  },
  {
    "id": "prod-97",
    "name": "Compass",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 850,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 171,
    "driveUrls": []
  },
  {
    "id": "prod-98",
    "name": "Village scenery",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 1300,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 172,
    "driveUrls": []
  },
  {
    "id": "prod-99",
    "name": "Citrine",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": 3800,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 174,
    "driveUrls": []
  },
  {
    "id": "prod-100",
    "name": "Amethyst",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": 1200,
    "variants": [],
    "imageId": "1hMrn_69RzEpu5W0gVWuxLiSkuAoKFpLl",
    "image": "https://drive.google.com/thumbnail?id=1hMrn_69RzEpu5W0gVWuxLiSkuAoKFpLl&sz=w800",
    "sourceRow": 175,
    "driveUrls": [
      "https://drive.google.com/file/d/1hMrn_69RzEpu5W0gVWuxLiSkuAoKFpLl/view?usp=drive_link",
      "https://drive.google.com/file/d/198yG1zvLbLyn18U6c4BZfXeSzqNtgeby/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-101",
    "name": "Red jasper",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": 800,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 176,
    "driveUrls": []
  },
  {
    "id": "prod-102",
    "name": "Lapis lazuli",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 177,
    "driveUrls": []
  },
  {
    "id": "prod-103",
    "name": "Clear quartz",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": 700,
    "variants": [],
    "imageId": "1YjYRWzcdRvmUav0DTb_bbZrd0zRU_N9z",
    "image": "https://drive.google.com/thumbnail?id=1YjYRWzcdRvmUav0DTb_bbZrd0zRU_N9z&sz=w800",
    "sourceRow": 178,
    "driveUrls": [
      "https://drive.google.com/file/d/1YjYRWzcdRvmUav0DTb_bbZrd0zRU_N9z/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-104",
    "name": "yellow aventurine",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": 700,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 179,
    "driveUrls": []
  },
  {
    "id": "prod-105",
    "name": "Green aventurine",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": 700,
    "variants": [],
    "imageId": "1dV2wDRwV2wLU6tJcEk3HO0l_Q-MpeivV",
    "image": "https://drive.google.com/thumbnail?id=1dV2wDRwV2wLU6tJcEk3HO0l_Q-MpeivV&sz=w800",
    "sourceRow": 180,
    "driveUrls": [
      "https://drive.google.com/file/d/1dV2wDRwV2wLU6tJcEk3HO0l_Q-MpeivV/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-106",
    "name": "Serpentine rough stone",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1I39KVNIvuXkZYmO9iEIMkIUFEC4dtqE3",
    "image": "https://drive.google.com/thumbnail?id=1I39KVNIvuXkZYmO9iEIMkIUFEC4dtqE3&sz=w800",
    "sourceRow": 181,
    "driveUrls": [
      "https://drive.google.com/file/d/1I39KVNIvuXkZYmO9iEIMkIUFEC4dtqE3/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-107",
    "name": "Gray aventurine",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": 700,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 182,
    "driveUrls": []
  },
  {
    "id": "prod-108",
    "name": "Red aventurine",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": 700,
    "variants": [],
    "imageId": "15TF4WiQ3bx0jFzqkxtRnplQhWdYvbg1t",
    "image": "https://drive.google.com/thumbnail?id=15TF4WiQ3bx0jFzqkxtRnplQhWdYvbg1t&sz=w800",
    "sourceRow": 183,
    "driveUrls": [
      "https://drive.google.com/file/d/15TF4WiQ3bx0jFzqkxtRnplQhWdYvbg1t/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-109",
    "name": "Rose quartz",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": 1200,
    "variants": [],
    "imageId": "13atcA_jgXXRFTP8jMQDbRJ4r4cd1QLg9",
    "image": "https://drive.google.com/thumbnail?id=13atcA_jgXXRFTP8jMQDbRJ4r4cd1QLg9&sz=w800",
    "sourceRow": 184,
    "driveUrls": [
      "https://drive.google.com/file/d/13atcA_jgXXRFTP8jMQDbRJ4r4cd1QLg9/view?usp=drive_link",
      "https://drive.google.com/file/d/1aZCa7Hg_sF40tKfbHUlAyHRLYZisWsmp/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-110",
    "name": "Tiger eye",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": 1250,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 185,
    "driveUrls": []
  },
  {
    "id": "prod-111",
    "name": "rainbow moonstone",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": 1250,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 186,
    "driveUrls": []
  },
  {
    "id": "prod-112",
    "name": "red carnelian",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1U4m838QRbKS80E4i6qby3tzOuCzXTTHX",
    "image": "https://drive.google.com/thumbnail?id=1U4m838QRbKS80E4i6qby3tzOuCzXTTHX&sz=w800",
    "sourceRow": 187,
    "driveUrls": [
      "https://drive.google.com/file/d/1U4m838QRbKS80E4i6qby3tzOuCzXTTHX/view?usp=drive_link",
      "https://drive.google.com/file/d/17-FMwNpRCgvxuxHHLRRHMd2cKLMSRoUk/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-113",
    "name": "black tourmaline",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": 800,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 188,
    "driveUrls": []
  },
  {
    "id": "prod-114",
    "name": "Selenite",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": 800,
    "variants": [],
    "imageId": "1bn4g7cTwXylzfaZCmOqhl3GMCvrmNKnh",
    "image": "https://drive.google.com/thumbnail?id=1bn4g7cTwXylzfaZCmOqhl3GMCvrmNKnh&sz=w800",
    "sourceRow": 189,
    "driveUrls": [
      "https://drive.google.com/file/d/1bn4g7cTwXylzfaZCmOqhl3GMCvrmNKnh/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-115",
    "name": "Sunstone rough stone",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1fEWhoi2PdJQzNVXyex6VDNBjQJmRU9fA",
    "image": "https://drive.google.com/thumbnail?id=1fEWhoi2PdJQzNVXyex6VDNBjQJmRU9fA&sz=w800",
    "sourceRow": 190,
    "driveUrls": [
      "https://drive.google.com/file/d/1fEWhoi2PdJQzNVXyex6VDNBjQJmRU9fA/view?usp=drive_link",
      "https://drive.google.com/file/d/1nfw2XS5jzYZat963esYSX7hteOSd_y-A/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-116",
    "name": "Sodelite",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 191,
    "driveUrls": []
  },
  {
    "id": "prod-117",
    "name": "Opal",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 192,
    "driveUrls": []
  },
  {
    "id": "prod-118",
    "name": "Citrine",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 194,
    "driveUrls": []
  },
  {
    "id": "prod-119",
    "name": "Amethyst",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1--O7SGOhn1Z-wY6iUq_zivXYmxTbkCse",
    "image": "https://drive.google.com/thumbnail?id=1--O7SGOhn1Z-wY6iUq_zivXYmxTbkCse&sz=w800",
    "sourceRow": 195,
    "driveUrls": [
      "https://drive.google.com/file/d/1--O7SGOhn1Z-wY6iUq_zivXYmxTbkCse/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-120",
    "name": "Red jasper",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "17AFdom9BbkiaapcYJfvNH2KtZLKleLmM",
    "image": "https://drive.google.com/thumbnail?id=17AFdom9BbkiaapcYJfvNH2KtZLKleLmM&sz=w800",
    "sourceRow": 196,
    "driveUrls": [
      "https://drive.google.com/file/d/17AFdom9BbkiaapcYJfvNH2KtZLKleLmM/view?usp=drive_link",
      "https://drive.google.com/file/d/1NibsAA--GVJiSC4Gxm8_nOtSy8MfVXMW/view?usp=drive_link",
      "https://drive.google.com/file/d/1rcHmERIPusip2a67UGVJfT5FupMc2KhG/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-121",
    "name": "Lapis lazuli",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 197,
    "driveUrls": []
  },
  {
    "id": "prod-122",
    "name": "Clear quartz",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1hkV46bi78XCjQfeGyquJ92fTlgW3LxTq",
    "image": "https://drive.google.com/thumbnail?id=1hkV46bi78XCjQfeGyquJ92fTlgW3LxTq&sz=w800",
    "sourceRow": 198,
    "driveUrls": [
      "https://drive.google.com/file/d/1hkV46bi78XCjQfeGyquJ92fTlgW3LxTq/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-123",
    "name": "yellow aventurine",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1XLVAIDqHtlPUqBq3wf2fVELiVvottZKZ",
    "image": "https://drive.google.com/thumbnail?id=1XLVAIDqHtlPUqBq3wf2fVELiVvottZKZ&sz=w800",
    "sourceRow": 199,
    "driveUrls": [
      "https://drive.google.com/file/d/1XLVAIDqHtlPUqBq3wf2fVELiVvottZKZ/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-124",
    "name": "Green aventurine",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1n0zG_uMJloLObUZNd4oa8S2nA6TS6ghm",
    "image": "https://drive.google.com/thumbnail?id=1n0zG_uMJloLObUZNd4oa8S2nA6TS6ghm&sz=w800",
    "sourceRow": 200,
    "driveUrls": [
      "https://drive.google.com/file/d/1n0zG_uMJloLObUZNd4oa8S2nA6TS6ghm/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-125",
    "name": "Gray aventurine",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 201,
    "driveUrls": []
  },
  {
    "id": "prod-126",
    "name": "Ruby zoisite tumble",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "15XEt0_IH_0aHqqvnmqysgrql_-fyEfdl",
    "image": "https://drive.google.com/thumbnail?id=15XEt0_IH_0aHqqvnmqysgrql_-fyEfdl&sz=w800",
    "sourceRow": 202,
    "driveUrls": [
      "https://drive.google.com/file/d/15XEt0_IH_0aHqqvnmqysgrql_-fyEfdl/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-127",
    "name": "Red aventurine",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1eNfLvpsq0X-hH6JgOft1HK0ou4oeF2sh",
    "image": "https://drive.google.com/thumbnail?id=1eNfLvpsq0X-hH6JgOft1HK0ou4oeF2sh&sz=w800",
    "sourceRow": 203,
    "driveUrls": [
      "https://drive.google.com/file/d/1eNfLvpsq0X-hH6JgOft1HK0ou4oeF2sh/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-128",
    "name": "Rose quartz",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1Rk8vvn8Te4_2RO7AphnMukkajRRiNJ4U",
    "image": "https://drive.google.com/thumbnail?id=1Rk8vvn8Te4_2RO7AphnMukkajRRiNJ4U&sz=w800",
    "sourceRow": 204,
    "driveUrls": [
      "https://drive.google.com/file/d/1Rk8vvn8Te4_2RO7AphnMukkajRRiNJ4U/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-129",
    "name": "Tiger eye",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1GvBPg_OobtQbTian_vTOljKMy1K60zNC",
    "image": "https://drive.google.com/thumbnail?id=1GvBPg_OobtQbTian_vTOljKMy1K60zNC&sz=w800",
    "sourceRow": 205,
    "driveUrls": [
      "https://drive.google.com/file/d/1GvBPg_OobtQbTian_vTOljKMy1K60zNC/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-130",
    "name": "rainbow moonstone",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 206,
    "driveUrls": []
  },
  {
    "id": "prod-131",
    "name": "red carnelian",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1Yl2svLq6_cv6CvAwX6vQ9Hx7MrHGbweL",
    "image": "https://drive.google.com/thumbnail?id=1Yl2svLq6_cv6CvAwX6vQ9Hx7MrHGbweL&sz=w800",
    "sourceRow": 207,
    "driveUrls": [
      "https://drive.google.com/file/d/1Yl2svLq6_cv6CvAwX6vQ9Hx7MrHGbweL/view?usp=drive_link",
      "https://drive.google.com/file/d/1_ZWVyoaFstNZfZVNdtEtmETrWN8oZ0Dm/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-132",
    "name": "black tourmaline",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 208,
    "driveUrls": []
  },
  {
    "id": "prod-133",
    "name": "Swlenite",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 209,
    "driveUrls": []
  },
  {
    "id": "prod-134",
    "name": "Sulemani",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 210,
    "driveUrls": []
  },
  {
    "id": "prod-135",
    "name": "Sodelite",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 211,
    "driveUrls": []
  },
  {
    "id": "prod-136",
    "name": "Pyrite",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "19pH76pYKUXkyaYnxmduW7g3Sd1q7s8xT",
    "image": "https://drive.google.com/thumbnail?id=19pH76pYKUXkyaYnxmduW7g3Sd1q7s8xT&sz=w800",
    "sourceRow": 212,
    "driveUrls": [
      "https://drive.google.com/file/d/19pH76pYKUXkyaYnxmduW7g3Sd1q7s8xT/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-137",
    "name": "Opal",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1QxWFsSyaW4qrDYiIhmAjLm9Soa9HvRJL",
    "image": "https://drive.google.com/thumbnail?id=1QxWFsSyaW4qrDYiIhmAjLm9Soa9HvRJL&sz=w800",
    "sourceRow": 213,
    "driveUrls": [
      "https://drive.google.com/file/d/1QxWFsSyaW4qrDYiIhmAjLm9Soa9HvRJL/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-138",
    "name": "Citrine",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": 1500,
    "variants": [],
    "imageId": "1bd2AQt9W_cndIJrGK_UUb1tU3Ai0RCmn",
    "image": "https://drive.google.com/thumbnail?id=1bd2AQt9W_cndIJrGK_UUb1tU3Ai0RCmn&sz=w800",
    "sourceRow": 215,
    "driveUrls": [
      "https://drive.google.com/file/d/1bd2AQt9W_cndIJrGK_UUb1tU3Ai0RCmn/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-139",
    "name": "Amethyst",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": 800,
    "variants": [],
    "imageId": "17S7Dk58BFgmpECb6gvl-73oq9rYqdh_k",
    "image": "https://drive.google.com/thumbnail?id=17S7Dk58BFgmpECb6gvl-73oq9rYqdh_k&sz=w800",
    "sourceRow": 216,
    "driveUrls": [
      "https://drive.google.com/file/d/17S7Dk58BFgmpECb6gvl-73oq9rYqdh_k/view?usp=drive_link",
      "https://drive.google.com/file/d/1Ay-imQ3PTbtOPuu7RUU8xvQ1ITW95o8y/view?usp=drive_link",
      "https://drive.google.com/file/d/1bzmRs3rAD-MH9qf99K6ksPyJeIYrRCfp/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-140",
    "name": "Red jasper",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": 600,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 217,
    "driveUrls": []
  },
  {
    "id": "prod-141",
    "name": "Lapis lazuli",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": 800,
    "variants": [],
    "imageId": "1QeoGctVb8ONnJQz8aM8oz3zcPlHuRH9m",
    "image": "https://drive.google.com/thumbnail?id=1QeoGctVb8ONnJQz8aM8oz3zcPlHuRH9m&sz=w800",
    "sourceRow": 218,
    "driveUrls": [
      "https://drive.google.com/file/d/1QeoGctVb8ONnJQz8aM8oz3zcPlHuRH9m/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-142",
    "name": "Clear quartz",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": 750,
    "variants": [],
    "imageId": "1JjO2AE3XedTkyI2tXPEzs4nxn1PrLlFD",
    "image": "https://drive.google.com/thumbnail?id=1JjO2AE3XedTkyI2tXPEzs4nxn1PrLlFD&sz=w800",
    "sourceRow": 219,
    "driveUrls": [
      "https://drive.google.com/file/d/1JjO2AE3XedTkyI2tXPEzs4nxn1PrLlFD/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-143",
    "name": "yellow aventurine",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": 650,
    "variants": [],
    "imageId": "11mcf1kUdc8vlCKjmPI-eBXpEtL29hdB4",
    "image": "https://drive.google.com/thumbnail?id=11mcf1kUdc8vlCKjmPI-eBXpEtL29hdB4&sz=w800",
    "sourceRow": 220,
    "driveUrls": [
      "https://drive.google.com/file/d/11mcf1kUdc8vlCKjmPI-eBXpEtL29hdB4/view?usp=drive_link",
      "https://drive.google.com/file/d/1bXQYi6zB4Yc_UA13kBAIAs8s3XnIyAbV/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-144",
    "name": "Green aventurine",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": 650,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 221,
    "driveUrls": []
  },
  {
    "id": "prod-145",
    "name": "Gray aventurine",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": 650,
    "variants": [],
    "imageId": "1RZCJYwjKiQW0rQUCExfWlcskF-PtNG-1",
    "image": "https://drive.google.com/thumbnail?id=1RZCJYwjKiQW0rQUCExfWlcskF-PtNG-1&sz=w800",
    "sourceRow": 222,
    "driveUrls": [
      "https://drive.google.com/file/d/1RZCJYwjKiQW0rQUCExfWlcskF-PtNG-1/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-146",
    "name": "Rose quartz",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": 750,
    "variants": [],
    "imageId": "1x4v5O7CNr7VONW4dkmbxAEiWxYmYQlxl",
    "image": "https://drive.google.com/thumbnail?id=1x4v5O7CNr7VONW4dkmbxAEiWxYmYQlxl&sz=w800",
    "sourceRow": 223,
    "driveUrls": [
      "https://drive.google.com/file/d/1x4v5O7CNr7VONW4dkmbxAEiWxYmYQlxl/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-147",
    "name": "Tiger eye",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": 800,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 224,
    "driveUrls": []
  },
  {
    "id": "prod-148",
    "name": "rainbow moonstone",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": 800,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 225,
    "driveUrls": []
  },
  {
    "id": "prod-149",
    "name": "red carnelian",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": 750,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 226,
    "driveUrls": []
  },
  {
    "id": "prod-150",
    "name": "black tourmaline",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": 800,
    "variants": [],
    "imageId": "1NwGoBLKbfsdrldKzGNE8XiuT99KKcDUa",
    "image": "https://drive.google.com/thumbnail?id=1NwGoBLKbfsdrldKzGNE8XiuT99KKcDUa&sz=w800",
    "sourceRow": 227,
    "driveUrls": [
      "https://drive.google.com/file/d/1NwGoBLKbfsdrldKzGNE8XiuT99KKcDUa/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-151",
    "name": "Citrine",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 233,
    "driveUrls": []
  },
  {
    "id": "prod-152",
    "name": "Amethyst",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": 750,
    "variants": [],
    "imageId": "1RqQ8goSu5Z0GybpFtTQD3vbCFYB2CIoo",
    "image": "https://drive.google.com/thumbnail?id=1RqQ8goSu5Z0GybpFtTQD3vbCFYB2CIoo&sz=w800",
    "sourceRow": 234,
    "driveUrls": [
      "https://drive.google.com/file/d/1RqQ8goSu5Z0GybpFtTQD3vbCFYB2CIoo/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-153",
    "name": "Red jasper",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": 750,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 235,
    "driveUrls": []
  },
  {
    "id": "prod-154",
    "name": "Lapis lazuli",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 236,
    "driveUrls": []
  },
  {
    "id": "prod-155",
    "name": "Clear quartz",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": 750,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 237,
    "driveUrls": []
  },
  {
    "id": "prod-156",
    "name": "yellow aventurine",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": 750,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 238,
    "driveUrls": []
  },
  {
    "id": "prod-157",
    "name": "Green aventurine",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": 750,
    "variants": [],
    "imageId": "1z9AYTol5WCEa5puABkhUuTBO5PZYMEgr",
    "image": "https://drive.google.com/thumbnail?id=1z9AYTol5WCEa5puABkhUuTBO5PZYMEgr&sz=w800",
    "sourceRow": 239,
    "driveUrls": [
      "https://drive.google.com/file/d/1z9AYTol5WCEa5puABkhUuTBO5PZYMEgr/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-158",
    "name": "Gray aventurine",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 240,
    "driveUrls": []
  },
  {
    "id": "prod-159",
    "name": "Rose quartz",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": 750,
    "variants": [],
    "imageId": "1-o_zw47tiqQ2pARZNSHSh-NPpaC5myTF",
    "image": "https://drive.google.com/thumbnail?id=1-o_zw47tiqQ2pARZNSHSh-NPpaC5myTF&sz=w800",
    "sourceRow": 241,
    "driveUrls": [
      "https://drive.google.com/file/d/1-o_zw47tiqQ2pARZNSHSh-NPpaC5myTF/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-160",
    "name": "Tiger eye",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 242,
    "driveUrls": []
  },
  {
    "id": "prod-161",
    "name": "Seven chakrash",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": 750,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 243,
    "driveUrls": []
  },
  {
    "id": "prod-162",
    "name": "red carnelian",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": 800,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 244,
    "driveUrls": []
  },
  {
    "id": "prod-163",
    "name": "black tourmaline",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 245,
    "driveUrls": []
  },
  {
    "id": "prod-164",
    "name": "Money magnet tree",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1GQu3fd-aV97FtMwiws4GjXktWSjB8URj",
    "image": "https://drive.google.com/thumbnail?id=1GQu3fd-aV97FtMwiws4GjXktWSjB8URj&sz=w800",
    "sourceRow": 246,
    "driveUrls": [
      "https://drive.google.com/file/d/1GQu3fd-aV97FtMwiws4GjXktWSjB8URj/view?usp=drive_link",
      "https://drive.google.com/file/d/1KXeltl6MXud45AIi5r2YDfF6pibbJNxW/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-165",
    "name": "Greene zibu coins",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1yTTjWoclAHDG4tm8PpglPt5VEoTwD9kH",
    "image": "https://drive.google.com/thumbnail?id=1yTTjWoclAHDG4tm8PpglPt5VEoTwD9kH&sz=w800",
    "sourceRow": 248,
    "driveUrls": [
      "https://drive.google.com/file/d/1yTTjWoclAHDG4tm8PpglPt5VEoTwD9kH/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-166",
    "name": "Green aventurine Zibu coins",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": 150,
    "variants": [],
    "imageId": "1_lvCRnnfmUXyL-mJl40rijCMtzQ95kTE",
    "image": "https://drive.google.com/thumbnail?id=1_lvCRnnfmUXyL-mJl40rijCMtzQ95kTE&sz=w800",
    "sourceRow": 249,
    "driveUrls": [
      "https://drive.google.com/file/d/1_lvCRnnfmUXyL-mJl40rijCMtzQ95kTE/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-167",
    "name": "Selenite plate",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": 350,
    "variants": [],
    "imageId": "1CIGa0phmBqaxuDW-SzZSQA5oIpPw78oq",
    "image": "https://drive.google.com/thumbnail?id=1CIGa0phmBqaxuDW-SzZSQA5oIpPw78oq&sz=w800",
    "sourceRow": 250,
    "driveUrls": [
      "https://drive.google.com/file/d/1CIGa0phmBqaxuDW-SzZSQA5oIpPw78oq/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-168",
    "name": "Laxmi pyramid",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": 480,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 252,
    "driveUrls": []
  },
  {
    "id": "prod-169",
    "name": "Pyrite plate",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": 650,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 253,
    "driveUrls": []
  },
  {
    "id": "prod-170",
    "name": "All stone mala",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": null,
    "variants": [
      {
        "option": "Spathic mala",
        "b2b": null,
        "b2c": null,
        "sourceRow": 256
      }
    ],
    "imageId": "1F2WeXSIxtEAfaEVFA1wSrf8Cl1K3-_U2",
    "image": "https://drive.google.com/thumbnail?id=1F2WeXSIxtEAfaEVFA1wSrf8Cl1K3-_U2&sz=w800",
    "sourceRow": 255,
    "driveUrls": [
      "https://drive.google.com/file/d/1F2WeXSIxtEAfaEVFA1wSrf8Cl1K3-_U2/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-171",
    "name": "Bagua mirror",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 300,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 257,
    "driveUrls": []
  },
  {
    "id": "prod-172",
    "name": "Ashok stambh",
    "category": "Vastu Statue",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 258,
    "driveUrls": []
  },
  {
    "id": "prod-173",
    "name": "Vastu colour spring",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 45,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 259,
    "driveUrls": []
  },
  {
    "id": "prod-174",
    "name": "Vastu metal spring",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": null,
    "variants": [
      {
        "option": "Copper",
        "b2b": null,
        "b2c": 80,
        "sourceRow": 261
      },
      {
        "option": "Brass",
        "b2b": null,
        "b2c": 80,
        "sourceRow": 262
      },
      {
        "option": "Aluminium",
        "b2b": null,
        "b2c": 70,
        "sourceRow": 263
      },
      {
        "option": "Steel",
        "b2b": null,
        "b2c": 70,
        "sourceRow": 264
      },
      {
        "option": "Iron",
        "b2b": null,
        "b2c": 65,
        "sourceRow": 265
      }
    ],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 260,
    "driveUrls": []
  },
  {
    "id": "prod-175",
    "name": "Vastu purusha",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 420,
    "variants": [],
    "imageId": "1svq-sBjOemG2lmdcOZLtKw8YUYvlVKQO",
    "image": "https://drive.google.com/thumbnail?id=1svq-sBjOemG2lmdcOZLtKw8YUYvlVKQO&sz=w800",
    "sourceRow": 266,
    "driveUrls": [
      "https://drive.google.com/file/d/1svq-sBjOemG2lmdcOZLtKw8YUYvlVKQO/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-176",
    "name": "Bram Nabhi",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 450,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 267,
    "driveUrls": []
  },
  {
    "id": "prod-177",
    "name": "Rudraksh",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": null,
    "image": "/sacred_remedies.png",
    "sourceRow": 269,
    "driveUrls": []
  },
  {
    "id": "prod-178",
    "name": "Vastu Devta\u2019s divs",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 350,
    "variants": [],
    "imageId": "1aS_o67hDiX7dJ0u3Ujo4tRNWZDbaOI1r",
    "image": "https://drive.google.com/thumbnail?id=1aS_o67hDiX7dJ0u3Ujo4tRNWZDbaOI1r&sz=w800",
    "sourceRow": 270,
    "driveUrls": [
      "https://drive.google.com/file/d/1aS_o67hDiX7dJ0u3Ujo4tRNWZDbaOI1r/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-179",
    "name": "Brass shree yantra",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1ULSEhE7Z-GLYFFY0T0lJGNjnMAjiIXxT",
    "image": "https://drive.google.com/thumbnail?id=1ULSEhE7Z-GLYFFY0T0lJGNjnMAjiIXxT&sz=w800",
    "sourceRow": 273,
    "driveUrls": [
      "https://drive.google.com/file/d/1ULSEhE7Z-GLYFFY0T0lJGNjnMAjiIXxT/view?usp=drive_link",
      "https://drive.google.com/file/d/1rBew6ZZddRgMUK__mxZ2LDV-N0nsAi-S/view?usp=drive_link",
      "https://drive.google.com/file/d/1rBew6ZZddRgMUK__mxZ2LDV-N0nsAi-S/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-180",
    "name": "All stone balls",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "16N7leYeszCw0sUbcE4hAUYDRdcuOzLsJ",
    "image": "https://drive.google.com/thumbnail?id=16N7leYeszCw0sUbcE4hAUYDRdcuOzLsJ&sz=w800",
    "sourceRow": 275,
    "driveUrls": [
      "https://drive.google.com/file/d/16N7leYeszCw0sUbcE4hAUYDRdcuOzLsJ/view?usp=drive_link",
      "https://drive.google.com/file/d/1_r7iPgbU44SdhSmFW7EtcQP58uq5E4Wr/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-181",
    "name": "black tourmaline pyramid",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "15UoitD4RGxbLYDpID44wsd1erBtiNf9l",
    "image": "https://drive.google.com/thumbnail?id=15UoitD4RGxbLYDpID44wsd1erBtiNf9l&sz=w800",
    "sourceRow": 276,
    "driveUrls": [
      "https://drive.google.com/file/d/15UoitD4RGxbLYDpID44wsd1erBtiNf9l/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-182",
    "name": "black tourmaline Tower",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1UjRbCDMBHBPNEDfze0RKWMEILb1ZLA5A",
    "image": "https://drive.google.com/thumbnail?id=1UjRbCDMBHBPNEDfze0RKWMEILb1ZLA5A&sz=w800",
    "sourceRow": 277,
    "driveUrls": [
      "https://drive.google.com/file/d/1UjRbCDMBHBPNEDfze0RKWMEILb1ZLA5A/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-183",
    "name": "Brass brahmsthal plate  9\"",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 4500,
    "variants": [],
    "imageId": "1Cgpi2aeUXiWIR7oj89eoH_8ZKGjN9Q7t",
    "image": "https://drive.google.com/thumbnail?id=1Cgpi2aeUXiWIR7oj89eoH_8ZKGjN9Q7t&sz=w800",
    "sourceRow": 278,
    "driveUrls": [
      "https://drive.google.com/file/d/1Cgpi2aeUXiWIR7oj89eoH_8ZKGjN9Q7t/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-184",
    "name": "Manjusha box field",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 8100,
    "variants": [],
    "imageId": "1McK6V6rFf0nFGWFvLIwKwbW2DLf734oo",
    "image": "https://drive.google.com/thumbnail?id=1McK6V6rFf0nFGWFvLIwKwbW2DLf734oo&sz=w800",
    "sourceRow": 279,
    "driveUrls": [
      "https://drive.google.com/file/d/1McK6V6rFf0nFGWFvLIwKwbW2DLf734oo/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-185",
    "name": "Manjusha box",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 2000,
    "variants": [],
    "imageId": "1McK6V6rFf0nFGWFvLIwKwbW2DLf734oo",
    "image": "https://drive.google.com/thumbnail?id=1McK6V6rFf0nFGWFvLIwKwbW2DLf734oo&sz=w800",
    "sourceRow": 280,
    "driveUrls": [
      "https://drive.google.com/file/d/1McK6V6rFf0nFGWFvLIwKwbW2DLf734oo/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-186",
    "name": "Brass brahmnabhi",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 450,
    "variants": [],
    "imageId": "1zNC9ZtkuSQ4A_TpFMWLHBzlqKvXxJKos",
    "image": "https://drive.google.com/thumbnail?id=1zNC9ZtkuSQ4A_TpFMWLHBzlqKvXxJKos&sz=w800",
    "sourceRow": 281,
    "driveUrls": [
      "https://drive.google.com/file/d/1zNC9ZtkuSQ4A_TpFMWLHBzlqKvXxJKos/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-187",
    "name": "Brass pyramid strip",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 820,
    "variants": [],
    "imageId": "1DS4ZsUsQxjhRUDVIldOdAjClubulo3jQ",
    "image": "https://drive.google.com/thumbnail?id=1DS4ZsUsQxjhRUDVIldOdAjClubulo3jQ&sz=w800",
    "sourceRow": 282,
    "driveUrls": [
      "https://drive.google.com/file/d/1DS4ZsUsQxjhRUDVIldOdAjClubulo3jQ/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-188",
    "name": "Brass sun",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 2200,
    "variants": [],
    "imageId": "1ZdfoCrLomeuk_s-75_LKcWyCmN3U4ww-",
    "image": "https://drive.google.com/thumbnail?id=1ZdfoCrLomeuk_s-75_LKcWyCmN3U4ww-&sz=w800",
    "sourceRow": 283,
    "driveUrls": [
      "https://drive.google.com/file/d/1ZdfoCrLomeuk_s-75_LKcWyCmN3U4ww-/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-189",
    "name": "Brass swastik",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 1050,
    "variants": [],
    "imageId": "1tejltT0lRqgNKLIosyKPrH8YaALj3sTa",
    "image": "https://drive.google.com/thumbnail?id=1tejltT0lRqgNKLIosyKPrH8YaALj3sTa&sz=w800",
    "sourceRow": 284,
    "driveUrls": [
      "https://drive.google.com/file/d/1tejltT0lRqgNKLIosyKPrH8YaALj3sTa/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-190",
    "name": "Clear quartz crystal pyramid",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1-MaP9qro7xyqQREW9cl8iwq1SON-pyM8",
    "image": "https://drive.google.com/thumbnail?id=1-MaP9qro7xyqQREW9cl8iwq1SON-pyM8&sz=w800",
    "sourceRow": 285,
    "driveUrls": [
      "https://drive.google.com/file/d/1-MaP9qro7xyqQREW9cl8iwq1SON-pyM8/view?usp=drive_link",
      "https://drive.google.com/file/d/1PW490D8z8nCTPDUQVDOV0JTjBt_cgiM_/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-191",
    "name": "Copper pyramid strip",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 880,
    "variants": [],
    "imageId": "1DHdzVJZow9d6kARr12OKTuMpKY652bT-",
    "image": "https://drive.google.com/thumbnail?id=1DHdzVJZow9d6kARr12OKTuMpKY652bT-&sz=w800",
    "sourceRow": 286,
    "driveUrls": [
      "https://drive.google.com/file/d/1DHdzVJZow9d6kARr12OKTuMpKY652bT-/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-192",
    "name": "Copper swastik pyramid",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 1100,
    "variants": [],
    "imageId": "1aH0-8SmRPbX-kpzRu2JRCKM51IyicRD2",
    "image": "https://drive.google.com/thumbnail?id=1aH0-8SmRPbX-kpzRu2JRCKM51IyicRD2&sz=w800",
    "sourceRow": 287,
    "driveUrls": [
      "https://drive.google.com/file/d/1aH0-8SmRPbX-kpzRu2JRCKM51IyicRD2/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-193",
    "name": "Copper wire",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 30,
    "variants": [],
    "imageId": "1pGFXESGtIsnOD8FvQz7IseN6TgZHFXz4",
    "image": "https://drive.google.com/thumbnail?id=1pGFXESGtIsnOD8FvQz7IseN6TgZHFXz4&sz=w800",
    "sourceRow": 288,
    "driveUrls": [
      "https://drive.google.com/file/d/1pGFXESGtIsnOD8FvQz7IseN6TgZHFXz4/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-194",
    "name": "Stone heart pendant",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1rK2TF9HRaWX6gpb_XTrenzsoz8NPnXjL",
    "image": "https://drive.google.com/thumbnail?id=1rK2TF9HRaWX6gpb_XTrenzsoz8NPnXjL&sz=w800",
    "sourceRow": 289,
    "driveUrls": [
      "https://drive.google.com/file/d/1rK2TF9HRaWX6gpb_XTrenzsoz8NPnXjL/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-195",
    "name": "Evel eye tree",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1uAJExH86aG0x_28doQSBtb2ZCnT0_e3H",
    "image": "https://drive.google.com/thumbnail?id=1uAJExH86aG0x_28doQSBtb2ZCnT0_e3H&sz=w800",
    "sourceRow": 290,
    "driveUrls": [
      "https://drive.google.com/file/d/1uAJExH86aG0x_28doQSBtb2ZCnT0_e3H/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-196",
    "name": "Gomti chakra per KG",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 700,
    "variants": [],
    "imageId": "1YShNfFmQjxTk6NmWfIY3Mb8YVqsY4T7K",
    "image": "https://drive.google.com/thumbnail?id=1YShNfFmQjxTk6NmWfIY3Mb8YVqsY4T7K&sz=w800",
    "sourceRow": 291,
    "driveUrls": [
      "https://drive.google.com/file/d/1YShNfFmQjxTk6NmWfIY3Mb8YVqsY4T7K/view?usp=drive_link",
      "https://drive.google.com/file/d/1z_cMq0ZtUYAcan1B7I-4oHQq8YYDXifr/view?usp=drive_link",
      "https://drive.google.com/file/d/1yRpksWOtE-ZiZWww61kohcEnwv7PaxAY/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-197",
    "name": "Gomti chakra per KG",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 950,
    "variants": [],
    "imageId": "1YShNfFmQjxTk6NmWfIY3Mb8YVqsY4T7K",
    "image": "https://drive.google.com/thumbnail?id=1YShNfFmQjxTk6NmWfIY3Mb8YVqsY4T7K&sz=w800",
    "sourceRow": 292,
    "driveUrls": [
      "https://drive.google.com/file/d/1YShNfFmQjxTk6NmWfIY3Mb8YVqsY4T7K/view?usp=drive_link",
      "https://drive.google.com/file/d/1z_cMq0ZtUYAcan1B7I-4oHQq8YYDXifr/view?usp=drive_link",
      "https://drive.google.com/file/d/1yRpksWOtE-ZiZWww61kohcEnwv7PaxAY/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-198",
    "name": "Gomti chakra per KG",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 1200,
    "variants": [],
    "imageId": "1YShNfFmQjxTk6NmWfIY3Mb8YVqsY4T7K",
    "image": "https://drive.google.com/thumbnail?id=1YShNfFmQjxTk6NmWfIY3Mb8YVqsY4T7K&sz=w800",
    "sourceRow": 293,
    "driveUrls": [
      "https://drive.google.com/file/d/1YShNfFmQjxTk6NmWfIY3Mb8YVqsY4T7K/view?usp=drive_link",
      "https://drive.google.com/file/d/1z_cMq0ZtUYAcan1B7I-4oHQq8YYDXifr/view?usp=drive_link",
      "https://drive.google.com/file/d/1yRpksWOtE-ZiZWww61kohcEnwv7PaxAY/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-199",
    "name": "Gomti chakra per KG",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 1500,
    "variants": [],
    "imageId": "1YShNfFmQjxTk6NmWfIY3Mb8YVqsY4T7K",
    "image": "https://drive.google.com/thumbnail?id=1YShNfFmQjxTk6NmWfIY3Mb8YVqsY4T7K&sz=w800",
    "sourceRow": 294,
    "driveUrls": [
      "https://drive.google.com/file/d/1YShNfFmQjxTk6NmWfIY3Mb8YVqsY4T7K/view?usp=drive_link",
      "https://drive.google.com/file/d/1z_cMq0ZtUYAcan1B7I-4oHQq8YYDXifr/view?usp=drive_link",
      "https://drive.google.com/file/d/1yRpksWOtE-ZiZWww61kohcEnwv7PaxAY/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-200",
    "name": "Gomti chkra tree",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1MpOeZiQB6k5D0P57EIWrwaaRw0pLk2DK",
    "image": "https://drive.google.com/thumbnail?id=1MpOeZiQB6k5D0P57EIWrwaaRw0pLk2DK&sz=w800",
    "sourceRow": 295,
    "driveUrls": [
      "https://drive.google.com/file/d/1MpOeZiQB6k5D0P57EIWrwaaRw0pLk2DK/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-201",
    "name": "Green aventurine pyramid",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "19X6qFk9YiC76cjgWuk7o8o7yCyPl1gFF",
    "image": "https://drive.google.com/thumbnail?id=19X6qFk9YiC76cjgWuk7o8o7yCyPl1gFF&sz=w800",
    "sourceRow": 296,
    "driveUrls": [
      "https://drive.google.com/file/d/19X6qFk9YiC76cjgWuk7o8o7yCyPl1gFF/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-202",
    "name": "Green jade tumble",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1zWJkglIMiG3QoY5ZKEJb7QSCunUANkVk",
    "image": "https://drive.google.com/thumbnail?id=1zWJkglIMiG3QoY5ZKEJb7QSCunUANkVk&sz=w800",
    "sourceRow": 297,
    "driveUrls": [
      "https://drive.google.com/file/d/1zWJkglIMiG3QoY5ZKEJb7QSCunUANkVk/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-203",
    "name": "Lead pyrami strip",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 750,
    "variants": [],
    "imageId": "1CIFGRnx6AB43MfjVMStiSgWM77Tp965z",
    "image": "https://drive.google.com/thumbnail?id=1CIFGRnx6AB43MfjVMStiSgWM77Tp965z&sz=w800",
    "sourceRow": 298,
    "driveUrls": [
      "https://drive.google.com/file/d/1CIFGRnx6AB43MfjVMStiSgWM77Tp965z/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-204",
    "name": "Copper pyrami strip",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 800,
    "variants": [],
    "imageId": "1_vKgIPIGlfcZYKjFSM5_SX0IFEYI9Ls8",
    "image": "https://drive.google.com/thumbnail?id=1_vKgIPIGlfcZYKjFSM5_SX0IFEYI9Ls8&sz=w800",
    "sourceRow": 299,
    "driveUrls": [
      "https://drive.google.com/file/d/1_vKgIPIGlfcZYKjFSM5_SX0IFEYI9Ls8/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-205",
    "name": "Brass pyrami strip",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 800,
    "variants": [],
    "imageId": "1_vKgIPIGlfcZYKjFSM5_SX0IFEYI9Ls8",
    "image": "https://drive.google.com/thumbnail?id=1_vKgIPIGlfcZYKjFSM5_SX0IFEYI9Ls8&sz=w800",
    "sourceRow": 300,
    "driveUrls": [
      "https://drive.google.com/file/d/1_vKgIPIGlfcZYKjFSM5_SX0IFEYI9Ls8/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-206",
    "name": "Zinc pyrami strip",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": 740,
    "variants": [],
    "imageId": "1_vKgIPIGlfcZYKjFSM5_SX0IFEYI9Ls8",
    "image": "https://drive.google.com/thumbnail?id=1_vKgIPIGlfcZYKjFSM5_SX0IFEYI9Ls8&sz=w800",
    "sourceRow": 301,
    "driveUrls": [
      "https://drive.google.com/file/d/1_vKgIPIGlfcZYKjFSM5_SX0IFEYI9Ls8/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-207",
    "name": "Citrine tree",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1ueRUpuwdhcBF7qNtjkocnzNwI-44pVix",
    "image": "https://drive.google.com/thumbnail?id=1ueRUpuwdhcBF7qNtjkocnzNwI-44pVix&sz=w800",
    "sourceRow": 302,
    "driveUrls": [
      "https://drive.google.com/file/d/1ueRUpuwdhcBF7qNtjkocnzNwI-44pVix/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-208",
    "name": "Peach moonstone crystal pyramid",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1dEKhjBlgrWtz5fhXLUXzGIHuxa2Lsrrw",
    "image": "https://drive.google.com/thumbnail?id=1dEKhjBlgrWtz5fhXLUXzGIHuxa2Lsrrw&sz=w800",
    "sourceRow": 303,
    "driveUrls": [
      "https://drive.google.com/file/d/1dEKhjBlgrWtz5fhXLUXzGIHuxa2Lsrrw/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-209",
    "name": "Pyrite crystal pyramid",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1HkChk4KDVCn7lIItOarlH9ftTa29v2YC",
    "image": "https://drive.google.com/thumbnail?id=1HkChk4KDVCn7lIItOarlH9ftTa29v2YC&sz=w800",
    "sourceRow": 304,
    "driveUrls": [
      "https://drive.google.com/file/d/1HkChk4KDVCn7lIItOarlH9ftTa29v2YC/view?usp=drive_link",
      "https://drive.google.com/file/d/1cFM2M9EgLIIBGkdeTtZw2UCIfgaYDGgS/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-210",
    "name": "Pyrite zibu coins",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1DfyyXTUT2x5hpz73kT4VBwFZEmnLvYSc",
    "image": "https://drive.google.com/thumbnail?id=1DfyyXTUT2x5hpz73kT4VBwFZEmnLvYSc&sz=w800",
    "sourceRow": 305,
    "driveUrls": [
      "https://drive.google.com/file/d/1DfyyXTUT2x5hpz73kT4VBwFZEmnLvYSc/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-211",
    "name": "Red jaspar crystal pyramid",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1tSYQ6FBxYA09h0GGtgfvOaZNrcBjvITc",
    "image": "https://drive.google.com/thumbnail?id=1tSYQ6FBxYA09h0GGtgfvOaZNrcBjvITc&sz=w800",
    "sourceRow": 306,
    "driveUrls": [
      "https://drive.google.com/file/d/1tSYQ6FBxYA09h0GGtgfvOaZNrcBjvITc/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-212",
    "name": "Rose quartz zibu coin",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1w14QsjrvBJWD91aWOb1VpsofbT_CF6GD",
    "image": "https://drive.google.com/thumbnail?id=1w14QsjrvBJWD91aWOb1VpsofbT_CF6GD&sz=w800",
    "sourceRow": 307,
    "driveUrls": [
      "https://drive.google.com/file/d/1w14QsjrvBJWD91aWOb1VpsofbT_CF6GD/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-213",
    "name": "Sunstone crystal pyramid",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1fVmMTFFxPRA51m950_mrPk9bBxw2TpK_",
    "image": "https://drive.google.com/thumbnail?id=1fVmMTFFxPRA51m950_mrPk9bBxw2TpK_&sz=w800",
    "sourceRow": 308,
    "driveUrls": [
      "https://drive.google.com/file/d/1fVmMTFFxPRA51m950_mrPk9bBxw2TpK_/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-214",
    "name": "Unakite crystal pyramid",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1Xrc4BSPmb_0i7PJX_mN6jYyqHAtOPT2r",
    "image": "https://drive.google.com/thumbnail?id=1Xrc4BSPmb_0i7PJX_mN6jYyqHAtOPT2r&sz=w800",
    "sourceRow": 309,
    "driveUrls": [
      "https://drive.google.com/file/d/1Xrc4BSPmb_0i7PJX_mN6jYyqHAtOPT2r/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-215",
    "name": "Vatu yantra",
    "category": "Vastu Remedies",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1BSl5mon9xqN-OuRQK_iuCd6Ia2ZnVSFv",
    "image": "https://drive.google.com/thumbnail?id=1BSl5mon9xqN-OuRQK_iuCd6Ia2ZnVSFv&sz=w800",
    "sourceRow": 310,
    "driveUrls": [
      "https://drive.google.com/file/d/1BSl5mon9xqN-OuRQK_iuCd6Ia2ZnVSFv/view?usp=drive_link",
      "https://drive.google.com/file/d/1aOsBh54axXjivOKNL1d_rnsSmfKLuTyU/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-216",
    "name": "yellow aventurine crystal pyramid",
    "category": "Gem Stone",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "10HD-b-WtBThhbE04nNUZoVMFy02eWLKb",
    "image": "https://drive.google.com/thumbnail?id=10HD-b-WtBThhbE04nNUZoVMFy02eWLKb&sz=w800",
    "sourceRow": 311,
    "driveUrls": [
      "https://drive.google.com/file/d/10HD-b-WtBThhbE04nNUZoVMFy02eWLKb/view?usp=drive_link",
      "https://drive.google.com/file/d/10au4EEH_USM0ERn8tT7nmLD-j7I_pwR7/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-217",
    "name": "Blood stone barcelet",
    "category": "Stone Bracelets",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1g0kn631M_L9lDxLhpaGC1LQbzPKUTfLn",
    "image": "https://drive.google.com/thumbnail?id=1g0kn631M_L9lDxLhpaGC1LQbzPKUTfLn&sz=w800",
    "sourceRow": 317,
    "driveUrls": [
      "https://drive.google.com/file/d/1g0kn631M_L9lDxLhpaGC1LQbzPKUTfLn/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-218",
    "name": "Blue aventurine bracelet",
    "category": "Stone Bracelets",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1atQdDaoZ9T6VpHxI2MhtbbHsDAdrqZfE",
    "image": "https://drive.google.com/thumbnail?id=1atQdDaoZ9T6VpHxI2MhtbbHsDAdrqZfE&sz=w800",
    "sourceRow": 318,
    "driveUrls": [
      "https://drive.google.com/file/d/1atQdDaoZ9T6VpHxI2MhtbbHsDAdrqZfE/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-219",
    "name": "Bracelet for Insomnia",
    "category": "Stone Bracelets",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1ZMD5h_5pKe1jdV-ZPSG8dL4Q5jJWVn3t",
    "image": "https://drive.google.com/thumbnail?id=1ZMD5h_5pKe1jdV-ZPSG8dL4Q5jJWVn3t&sz=w800",
    "sourceRow": 319,
    "driveUrls": [
      "https://drive.google.com/file/d/1ZMD5h_5pKe1jdV-ZPSG8dL4Q5jJWVn3t/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-220",
    "name": "Business success bracelet",
    "category": "Stone Bracelets",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1FEYZAl985_xP5EZdZBy-MmWBlrV_TM7W",
    "image": "https://drive.google.com/thumbnail?id=1FEYZAl985_xP5EZdZBy-MmWBlrV_TM7W&sz=w800",
    "sourceRow": 320,
    "driveUrls": [
      "https://drive.google.com/file/d/1FEYZAl985_xP5EZdZBy-MmWBlrV_TM7W/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-221",
    "name": "Business success bracelet",
    "category": "Stone Bracelets",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1gZI-EXNMKoUFebPJc6Tu4wB_OiUfqSlS",
    "image": "https://drive.google.com/thumbnail?id=1gZI-EXNMKoUFebPJc6Tu4wB_OiUfqSlS&sz=w800",
    "sourceRow": 321,
    "driveUrls": [
      "https://drive.google.com/file/d/1gZI-EXNMKoUFebPJc6Tu4wB_OiUfqSlS/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-222",
    "name": "Citrine bracelet",
    "category": "Stone Bracelets",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1Ml0LxW2bVqHOvqGvHvEBwpl4bUx0WNI_",
    "image": "https://drive.google.com/thumbnail?id=1Ml0LxW2bVqHOvqGvHvEBwpl4bUx0WNI_&sz=w800",
    "sourceRow": 322,
    "driveUrls": [
      "https://drive.google.com/file/d/1Ml0LxW2bVqHOvqGvHvEBwpl4bUx0WNI_/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-223",
    "name": "Education bracelet",
    "category": "Stone Bracelets",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1D7oV4RCbd0o1sAG1AN4nWBIh8QViHhsq",
    "image": "https://drive.google.com/thumbnail?id=1D7oV4RCbd0o1sAG1AN4nWBIh8QViHhsq&sz=w800",
    "sourceRow": 323,
    "driveUrls": [
      "https://drive.google.com/file/d/1D7oV4RCbd0o1sAG1AN4nWBIh8QViHhsq/view?usp=drive_link",
      "https://drive.google.com/file/d/1aZEF7655w3imYvd9yfaZ7yV1qlTXbqvb/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-224",
    "name": "Green aventurine bracelet",
    "category": "Stone Bracelets",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1BqHNDAAvrUJIYvAJ1r7DarFLo_scZHfE",
    "image": "https://drive.google.com/thumbnail?id=1BqHNDAAvrUJIYvAJ1r7DarFLo_scZHfE&sz=w800",
    "sourceRow": 324,
    "driveUrls": [
      "https://drive.google.com/file/d/1BqHNDAAvrUJIYvAJ1r7DarFLo_scZHfE/view?usp=drive_link",
      "https://drive.google.com/file/d/1LyUuQL3u3itqUoGf7qxis2W-RVOk4Klg/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-225",
    "name": "Green jade bracelet",
    "category": "Stone Bracelets",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1c-alr4M0DsnnGksk5gvGi0K0us4hsT0o",
    "image": "https://drive.google.com/thumbnail?id=1c-alr4M0DsnnGksk5gvGi0K0us4hsT0o&sz=w800",
    "sourceRow": 325,
    "driveUrls": [
      "https://drive.google.com/file/d/1c-alr4M0DsnnGksk5gvGi0K0us4hsT0o/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-226",
    "name": "Green tiger eye bracelet",
    "category": "Stone Bracelets",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1UFzdi7T5ZVAtdx2bHbeU026bF_mgUXRe",
    "image": "https://drive.google.com/thumbnail?id=1UFzdi7T5ZVAtdx2bHbeU026bF_mgUXRe&sz=w800",
    "sourceRow": 326,
    "driveUrls": [
      "https://drive.google.com/file/d/1UFzdi7T5ZVAtdx2bHbeU026bF_mgUXRe/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-227",
    "name": "Health & protection bracelet",
    "category": "Stone Bracelets",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1UfU5TNX7nBB4sYllwhlxlpIAXys-6W8K",
    "image": "https://drive.google.com/thumbnail?id=1UfU5TNX7nBB4sYllwhlxlpIAXys-6W8K&sz=w800",
    "sourceRow": 327,
    "driveUrls": [
      "https://drive.google.com/file/d/1UfU5TNX7nBB4sYllwhlxlpIAXys-6W8K/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-228",
    "name": "Health & protection bracelet",
    "category": "Stone Bracelets",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1Y5cHoURsu-FIvvbpkv6emrjdxye1XH9g",
    "image": "https://drive.google.com/thumbnail?id=1Y5cHoURsu-FIvvbpkv6emrjdxye1XH9g&sz=w800",
    "sourceRow": 328,
    "driveUrls": [
      "https://drive.google.com/file/d/1Y5cHoURsu-FIvvbpkv6emrjdxye1XH9g/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-229",
    "name": "Health & protection bracelet and tumbles kit",
    "category": "Stone Bracelets",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1K8mOmu8-dY_GENOb-wS2CZidMVqBXIUZ",
    "image": "https://drive.google.com/thumbnail?id=1K8mOmu8-dY_GENOb-wS2CZidMVqBXIUZ&sz=w800",
    "sourceRow": 329,
    "driveUrls": [
      "https://drive.google.com/file/d/1K8mOmu8-dY_GENOb-wS2CZidMVqBXIUZ/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-230",
    "name": "Marriage bracelet",
    "category": "Stone Bracelets",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1n811otG7ezbwvXZF06mM08lTzhyVc3F4",
    "image": "https://drive.google.com/thumbnail?id=1n811otG7ezbwvXZF06mM08lTzhyVc3F4&sz=w800",
    "sourceRow": 330,
    "driveUrls": [
      "https://drive.google.com/file/d/1n811otG7ezbwvXZF06mM08lTzhyVc3F4/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-231",
    "name": "Money magnet bracelet",
    "category": "Stone Bracelets",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1-BYNO8cjm9lNTIQa4OW2wEVTAZz_EXZn",
    "image": "https://drive.google.com/thumbnail?id=1-BYNO8cjm9lNTIQa4OW2wEVTAZz_EXZn&sz=w800",
    "sourceRow": 331,
    "driveUrls": [
      "https://drive.google.com/file/d/1-BYNO8cjm9lNTIQa4OW2wEVTAZz_EXZn/view?usp=drive_link",
      "https://drive.google.com/file/d/1hf5d525TjzuAwADjiyfEnCqi8TFB7eFa/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-232",
    "name": "Money magnet bracelet",
    "category": "Stone Bracelets",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1_f6-iIV9JcCuhsWYikMCVzc1VhwcRkL5",
    "image": "https://drive.google.com/thumbnail?id=1_f6-iIV9JcCuhsWYikMCVzc1VhwcRkL5&sz=w800",
    "sourceRow": 332,
    "driveUrls": [
      "https://drive.google.com/file/d/1_f6-iIV9JcCuhsWYikMCVzc1VhwcRkL5/view?usp=drive_link",
      "https://drive.google.com/file/d/1lgsQjoDgNtWfGrpdku3TO5R4Gk5AwK4P/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-233",
    "name": "Moss agate bracelet",
    "category": "Stone Bracelets",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1ImvslK9X7w7vDo0BntqvHdcemS7TcSVx",
    "image": "https://drive.google.com/thumbnail?id=1ImvslK9X7w7vDo0BntqvHdcemS7TcSVx&sz=w800",
    "sourceRow": 333,
    "driveUrls": [
      "https://drive.google.com/file/d/1ImvslK9X7w7vDo0BntqvHdcemS7TcSVx/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-234",
    "name": "Serpentine bracelet",
    "category": "Stone Bracelets",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "13vegd1Z8F5024EKJWn1-APaZ8IrAj7We",
    "image": "https://drive.google.com/thumbnail?id=13vegd1Z8F5024EKJWn1-APaZ8IrAj7We&sz=w800",
    "sourceRow": 334,
    "driveUrls": [
      "https://drive.google.com/file/d/13vegd1Z8F5024EKJWn1-APaZ8IrAj7We/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-235",
    "name": "Smoky quartz bracelet",
    "category": "Stone Bracelets",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1kXkXUJe4olKbZrcuzfBjzX5KkmwY8DfZ",
    "image": "https://drive.google.com/thumbnail?id=1kXkXUJe4olKbZrcuzfBjzX5KkmwY8DfZ&sz=w800",
    "sourceRow": 335,
    "driveUrls": [
      "https://drive.google.com/file/d/1kXkXUJe4olKbZrcuzfBjzX5KkmwY8DfZ/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-236",
    "name": "job interview opportunity bracelet",
    "category": "Stone Bracelets",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1eOPCsen5nOdueLxhh7pv2J3iRKHU_w2F",
    "image": "https://drive.google.com/thumbnail?id=1eOPCsen5nOdueLxhh7pv2J3iRKHU_w2F&sz=w800",
    "sourceRow": 336,
    "driveUrls": [
      "https://drive.google.com/file/d/1eOPCsen5nOdueLxhh7pv2J3iRKHU_w2F/view?usp=drive_link",
      "https://drive.google.com/file/d/1usURqoa60LA5VvXIca9H-WU0sqTIutLB/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-237",
    "name": "love & relationship bracelet",
    "category": "Stone Bracelets",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1ednLwqBA_2XwWh3ucx5GP7OAd5smLVF1",
    "image": "https://drive.google.com/thumbnail?id=1ednLwqBA_2XwWh3ucx5GP7OAd5smLVF1&sz=w800",
    "sourceRow": 337,
    "driveUrls": [
      "https://drive.google.com/file/d/1ednLwqBA_2XwWh3ucx5GP7OAd5smLVF1/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-238",
    "name": "weight loss bracelet",
    "category": "Stone Bracelets",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1kcASioWHl1BefKpIBcB3np9bwg0Q2rNF",
    "image": "https://drive.google.com/thumbnail?id=1kcASioWHl1BefKpIBcB3np9bwg0Q2rNF&sz=w800",
    "sourceRow": 338,
    "driveUrls": [
      "https://drive.google.com/file/d/1kcASioWHl1BefKpIBcB3np9bwg0Q2rNF/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-239",
    "name": "gambling luck bracelet",
    "category": "Stone Bracelets",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1v5X4MIPntJI-EW3Ha4Q_rj8GXr1dO08Q",
    "image": "https://drive.google.com/thumbnail?id=1v5X4MIPntJI-EW3Ha4Q_rj8GXr1dO08Q&sz=w800",
    "sourceRow": 339,
    "driveUrls": [
      "https://drive.google.com/file/d/1v5X4MIPntJI-EW3Ha4Q_rj8GXr1dO08Q/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-240",
    "name": "Tiger eye bracelet",
    "category": "Stone Bracelets",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1r-VczJVsvEOIewE7TRnhZgyvme3j4H2n",
    "image": "https://drive.google.com/thumbnail?id=1r-VczJVsvEOIewE7TRnhZgyvme3j4H2n&sz=w800",
    "sourceRow": 340,
    "driveUrls": [
      "https://drive.google.com/file/d/1r-VczJVsvEOIewE7TRnhZgyvme3j4H2n/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-241",
    "name": "Turquoise bracelet",
    "category": "Stone Bracelets",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1t8V-YxejJsNRKArz5ja3og_JiO2JfqbW",
    "image": "https://drive.google.com/thumbnail?id=1t8V-YxejJsNRKArz5ja3og_JiO2JfqbW&sz=w800",
    "sourceRow": 341,
    "driveUrls": [
      "https://drive.google.com/file/d/1t8V-YxejJsNRKArz5ja3og_JiO2JfqbW/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-242",
    "name": "Yellow aventurine bracelet",
    "category": "Stone Bracelets",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "19t9ziv4Nzc7HPDJt2LKbKH2FQUpwqGfW",
    "image": "https://drive.google.com/thumbnail?id=19t9ziv4Nzc7HPDJt2LKbKH2FQUpwqGfW&sz=w800",
    "sourceRow": 342,
    "driveUrls": [
      "https://drive.google.com/file/d/19t9ziv4Nzc7HPDJt2LKbKH2FQUpwqGfW/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-243",
    "name": "Brass eagle statue",
    "category": "Vastu Statue",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1wyRva93CL-aYnfBm8Sd_oHOtwWGbrzuF",
    "image": "https://drive.google.com/thumbnail?id=1wyRva93CL-aYnfBm8Sd_oHOtwWGbrzuF&sz=w800",
    "sourceRow": 345,
    "driveUrls": [
      "https://drive.google.com/file/d/1wyRva93CL-aYnfBm8Sd_oHOtwWGbrzuF/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-244",
    "name": "Brass kamdhenu statue",
    "category": "Vastu Statue",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1IREnYpfAqcxCWw9mURf4N613dxLVY2Zj",
    "image": "https://drive.google.com/thumbnail?id=1IREnYpfAqcxCWw9mURf4N613dxLVY2Zj&sz=w800",
    "sourceRow": 346,
    "driveUrls": [
      "https://drive.google.com/file/d/1IREnYpfAqcxCWw9mURf4N613dxLVY2Zj/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-245",
    "name": "Brass nandi ji",
    "category": "Vastu Statue",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "18RhkSDlHm5vaF65egMcCoNgrbDY7GFtX",
    "image": "https://drive.google.com/thumbnail?id=18RhkSDlHm5vaF65egMcCoNgrbDY7GFtX&sz=w800",
    "sourceRow": 347,
    "driveUrls": [
      "https://drive.google.com/file/d/18RhkSDlHm5vaF65egMcCoNgrbDY7GFtX/view?usp=drive_link",
      "https://drive.google.com/file/d/1BZaY8gY-T_04f816gdgmVIwxaVjvbEj5/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-246",
    "name": "Brass Owl statue",
    "category": "Vastu Statue",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1HUwW_YNf-8F8ao7Ybmt5gGZcl9T_mnsx",
    "image": "https://drive.google.com/thumbnail?id=1HUwW_YNf-8F8ao7Ybmt5gGZcl9T_mnsx&sz=w800",
    "sourceRow": 348,
    "driveUrls": [
      "https://drive.google.com/file/d/1HUwW_YNf-8F8ao7Ybmt5gGZcl9T_mnsx/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-247",
    "name": "Brass Rabbit pair",
    "category": "Vastu Statue",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1AeKJ19IsK7QR7J3w2B0iFgeBzw1VjgkY",
    "image": "https://drive.google.com/thumbnail?id=1AeKJ19IsK7QR7J3w2B0iFgeBzw1VjgkY&sz=w800",
    "sourceRow": 349,
    "driveUrls": [
      "https://drive.google.com/file/d/1AeKJ19IsK7QR7J3w2B0iFgeBzw1VjgkY/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-248",
    "name": "Brass statue Dhanvantari jii",
    "category": "Vastu Statue",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "18yQNQDKuBHYlgXmAduZvbUFiAXJvLnCp",
    "image": "https://drive.google.com/thumbnail?id=18yQNQDKuBHYlgXmAduZvbUFiAXJvLnCp&sz=w800",
    "sourceRow": 350,
    "driveUrls": [
      "https://drive.google.com/file/d/18yQNQDKuBHYlgXmAduZvbUFiAXJvLnCp/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-249",
    "name": "Brass talwar",
    "category": "Vastu Statue",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1HbpL6QKljfEREGFDbaGyO9blgOlzM91d",
    "image": "https://drive.google.com/thumbnail?id=1HbpL6QKljfEREGFDbaGyO9blgOlzM91d&sz=w800",
    "sourceRow": 351,
    "driveUrls": [
      "https://drive.google.com/file/d/1HbpL6QKljfEREGFDbaGyO9blgOlzM91d/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-250",
    "name": "Brass tortoise",
    "category": "Vastu Statue",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1mRXGY1ZX3Sz3hxfDGYEt897QCSBNZQ4P",
    "image": "https://drive.google.com/thumbnail?id=1mRXGY1ZX3Sz3hxfDGYEt897QCSBNZQ4P&sz=w800",
    "sourceRow": 352,
    "driveUrls": [
      "https://drive.google.com/file/d/1mRXGY1ZX3Sz3hxfDGYEt897QCSBNZQ4P/view?usp=drive_link"
    ]
  },
  {
    "id": "prod-251",
    "name": "Brass tortoise",
    "category": "Vastu Statue",
    "b2b": null,
    "b2c": null,
    "variants": [],
    "imageId": "1vZtUASse9Z1OAjbYowSDM9DzVjeiKGl2",
    "image": "https://drive.google.com/thumbnail?id=1vZtUASse9Z1OAjbYowSDM9DzVjeiKGl2&sz=w800",
    "sourceRow": 353,
    "driveUrls": [
      "https://drive.google.com/file/d/1vZtUASse9Z1OAjbYowSDM9DzVjeiKGl2/view?usp=drive_link"
    ]
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
    if (variant) return { b2c: variant.b2c, b2b: variant.b2b ?? null };
  }
  
  return { b2c: product.b2c, b2b: product.b2b ?? null };
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
