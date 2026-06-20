import { MenuCategory, Restaurant } from '../types/menu';

export const restaurant: Restaurant = {
  name: "Mensaano & The Shawarma Shark",
  description: "MEALS YOUR TASTE BUDS CAN'T RESIST🤤",
  address: "Anevon Crescent, Spintex Rd, Tema",
  phone: "059-148-3073 OR 055-778-0035",
  website: "www.mensaanogh.com"
};

export const menuCategories: MenuCategory[] = [
  {
    id: "chicken-wings",
    name: "Chicken Wings",
    items: [
      {
        id: "wings-5pcs",
        name: "5 PCS Chicken Wings",
        description: "Flavours: Hot & Spicy | Sweet & Chili | Honey Glazed | Honey Mustard Sweet & Spicy",
        price: 65,
        category: "chicken-wings"
      },
      {
        id: "wings-10pcs",
        name: "10 PCS Chicken Wings",
        description: "Flavours: Hot & Spicy | Sweet & Chili | Honey Glazed | Honey Mustard Sweet & Spicy",
        price: 110,
        category: "chicken-wings"
      },
      {
        id: "wings-15pcs",
        name: "15 PCS Chicken Wings",
        description: "Flavours: Hot & Spicy | Sweet & Chili | Honey Glazed | Honey Mustard Sweet & Spicy",
        price: 150,
        category: "chicken-wings"
      },
      {
        id: "wings-20pcs",
        name: "20 PCS Chicken Wings",
        description: "Flavours: Hot & Spicy | Sweet & Chili | Honey Glazed | Honey Mustard Sweet & Spicy",
        price: 185,
        category: "chicken-wings"
      },
      {
        id: "wings-40pcs",
        name: "40 PCS Chicken Wings",
        description: "Flavours: Hot & Spicy | Sweet & Chili | Honey Glazed | Honey Mustard Sweet & Spicy",
        price: 365,
        category: "chicken-wings"
      }
    ]
  },
  {
    id: "chek-chek",
    name: "Chek Chek - Jollof/Fried Rice",
    items: [
      {
        id: "fried-chicken-2pieces",
        name: "Fried Chicken (2 Pieces)",
        description: "TWO PIECES OF CHICKEN + 1 EGG + SALAD + RICE",
        price: 100,
        category: "chek-chek"
      },
      {
        id: "fried-chicken-3pieces",
        name: "Fried Chicken (3 Pieces)",
        description: "THREE PIECES OF CHICKEN + 1 EGG + SALAD + RICE",
        price: 130,
        category: "chek-chek"
      },
      {
        id: "grilled-chicken-2pieces",
        name: "Grilled Chicken (2 Pieces)",
        description: "TWO PIECES OF CHICKEN + 1 EGG + SALAD + RICE",
        price: 120,
        category: "chek-chek"
      },
      {
        id: "grilled-chicken-3pieces",
        name: "Grilled Chicken (3 Pieces)",
        description: "THREE PIECES OF CHICKEN + 1 EGG + SALAD + RICE",
        price: 150,
        category: "chek-chek"
      },
      {
        id: "spicy-turkey-goat-beef",
        name: "Spicy Turkey/Goat/Beef",
        description: "2-3 PIECES OF GOAT + 2 EGG + SALAD + RICE",
        price: 180,
        category: "chek-chek",
        isSpicy: true
      },
      {
        id: "chek-chek-zoo",
        name: "Chek Chek Zoo",
        description: "(ASSORTED PROTEINS) - CHICKEN, GIZZARD, SAUSAGE, BOILED EGGS, TURKEY, GOAT) + FRIED PLANTAIN (Feeds 2-3 Heads)",
        price: 300,
        category: "chek-chek"
      },
      {
        id: "chek-chek-zoo-promax",
        name: "Chek Chek Zoo Promax",
        description: "(CHEKCHEK ZOO + SPICY PORK CHOPS) (Feeds 2-3 Heads)",
        price: 350,
        category: "chek-chek",
        isSpicy: true
      }
    ]
  },
  {
    id: "carb-cup",
    name: "Carb Cup",
    items: [
      {
        id: "assorted-noodles-small",
        name: "Assorted Noodles (Small)",
        description: "Small cup of assorted noodles",
        price: 65,
        category: "carb-cup"
      },
      {
        id: "assorted-noodles-medium",
        name: "Assorted Noodles (Medium)",
        description: "Medium cup of assorted noodles",
        price: 100,
        category: "carb-cup"
      },
      {
        id: "assorted-noodles-large",
        name: "Assorted Noodles (Large)",
        description: "Large cup of assorted noodles",
        price: 135,
        category: "carb-cup"
      },
      {
        id: "assorted-noodles-extra-large",
        name: "Assorted Noodles (Extra Large)",
        description: "Extra large cup of assorted noodles",
        price: 200,
        category: "carb-cup"
      },
      {
        id: "chicken-noodles-small",
        name: "Chicken Noodles (Small)",
        description: "Small cup of chicken noodles",
        price: 65,
        category: "carb-cup"
      },
      {
        id: "chicken-noodles-medium",
        name: "Chicken Noodles (Medium)",
        description: "Medium cup of chicken noodles",
        price: 100,
        category: "carb-cup"
      },
      {
        id: "chicken-noodles-large",
        name: "Chicken Noodles (Large)",
        description: "Large cup of chicken noodles",
        price: 135,
        category: "carb-cup"
      },
      {
        id: "chicken-noodles-extra-large",
        name: "Chicken Noodles (Extra Large)",
        description: "Extra large cup of chicken noodles",
        price: 200,
        category: "carb-cup"
      },
      {
        id: "pork-noodles-small",
        name: "Pork Noodles (Small)",
        description: "Small cup of pork noodles",
        price: 65,
        category: "carb-cup"
      },
      {
        id: "pork-noodles-medium",
        name: "Pork Noodles (Medium)",
        description: "Medium cup of pork noodles",
        price: 100,
        category: "carb-cup"
      },
      {
        id: "pork-noodles-large",
        name: "Pork Noodles (Large)",
        description: "Large cup of pork noodles",
        price: 135,
        category: "carb-cup"
      },
      {
        id: "pork-noodles-extra-large",
        name: "Pork Noodles (Extra Large)",
        description: "Extra large cup of pork noodles",
        price: 200,
        category: "carb-cup"
      },
      {
        id: "beef-noodles-small",
        name: "Beef Noodles (Small)",
        description: "Small cup of beef noodles",
        price: 65,
        category: "carb-cup"
      },
      {
        id: "beef-noodles-medium",
        name: "Beef Noodles (Medium)",
        description: "Medium cup of beef noodles",
        price: 100,
        category: "carb-cup"
      },
      {
        id: "beef-noodles-large",
        name: "Beef Noodles (Large)",
        description: "Large cup of beef noodles",
        price: 135,
        category: "carb-cup"
      },
      {
        id: "beef-noodles-extra-large",
        name: "Beef Noodles (Extra Large)",
        description: "Extra large cup of beef noodles",
        price: 200,
        category: "carb-cup"
      },
      {
        id: "plain-friedrice-small",
        name: "Plain Fried Rice (Small)",
        description: "Small cup of plain fried rice",
        price: 40,
        category: "carb-cup"
      },
      {
        id: "plain-friedrice-medium",
        name: "Plain Fried Rice (Medium)",
        description: "Medium cup of plain fried rice",
        price: 65,
        category: "carb-cup"
      },
      {
        id: "plain-friedrice-large",
        name: "Plain Fried Rice (Large)",
        description: "Large cup of plain fried rice",
        price: 90,
        category: "carb-cup"
      },
      {
        id: "plain-friedrice-extra-large",
        name: "Plain Fried Rice (Extra Large)",
        description: "Extra large cup of plain fried rice",
        price: 120,
        category: "carb-cup"
      },
      {
        id: "chicken-friedrice-small",
        name: "Chicken Fried Rice (Small)",
        description: "Small cup of chicken fried rice",
        price: 65,
        category: "carb-cup"
      },
      {
        id: "chicken-friedrice-medium",
        name: "Chicken Fried Rice (Medium)",
        description: "Medium cup of chicken fried rice",
        price: 100,
        category: "carb-cup"
      },
      {
        id: "chicken-friedrice-large",
        name: "Chicken Fried Rice (Large)",
        description: "Large cup of chicken fried rice",
        price: 135,
        category: "carb-cup"
      },
      {
        id: "chicken-friedrice-extra-large",
        name: "Chicken Fried Rice (Extra Large)",
        description: "Extra large cup of chicken fried rice",
        price: 200,
        category: "carb-cup"
      },
      {
        id: "pork-friedrice-small",
        name: "Pork Fried Rice (Small)",
        description: "Small cup of pork fried rice",
        price: 65,
        category: "carb-cup"
      },
      {
        id: "pork-friedrice-medium",
        name: "Pork Fried Rice (Medium)",
        description: "Medium cup of pork fried rice",
        price: 100,
        category: "carb-cup"
      },
      {
        id: "pork-friedrice-large",
        name: "Pork Fried Rice (Large)",
        description: "Large cup of pork fried rice",
        price: 135,
        category: "carb-cup"
      },
      {
        id: "pork-friedrice-extra-large",
        name: "Pork Fried Rice (Extra Large)",
        description: "Extra large cup of pork fried rice",
        price: 200,
        category: "carb-cup"
      },
      {
        id: "beef-friedrice-small",
        name: "Beef Fried Rice (Small)",
        description: "Small cup of beef fried rice",
        price: 65,
        category: "carb-cup"
      },
      {
        id: "beef-friedrice-medium",
        name: "Beef Fried Rice (Medium)",
        description: "Medium cup of beef fried rice",
        price: 100,
        category: "carb-cup"
      },
      {
        id: "beef-friedrice-large",
        name: "Beef Fried Rice (Large)",
        description: "Large cup of beef fried rice",
        price: 135,
        category: "carb-cup"
      },
      {
        id: "beef-friedrice-extra-large",
        name: "Beef Fried Rice (Extra Large)",
        description: "Extra large cup of beef fried rice",
        price: 200,
        category: "carb-cup"
      },
      {
        id: "assorted-friedrice-small",
        name: "Assorted Fried Rice (Small)",
        description: "Small cup of assorted fried rice",
        price: 65,
        category: "carb-cup"
      },
      {
        id: "assorted-friedrice-medium",
        name: "Assorted Fried Rice (Medium)",
        description: "Medium cup of assorted fried rice",
        price: 100,
        category: "carb-cup"
      },
      {
        id: "assorted-friedrice-large",
        name: "Assorted Fried Rice (Large)",
        description: "Large cup of assorted fried rice",
        price: 135,
        category: "carb-cup"
      },
      {
        id: "assorted-friedrice-extra-large",
        name: "Assorted Fried Rice (Extra Large)",
        description: "Extra large cup of assorted fried rice",
        price: 200,
        category: "carb-cup"
      },
      {
        id: "chicken-jollof-small",
        name: "Chicken Jollof (Small)",
        description: "Small cup of chicken jollof",
        price: 40,
        category: "carb-cup"
      },
      {
        id: "chicken-jollof-medium",
        name: "Chicken Jollof (Medium)",
        description: "Medium cup of chicken jollof",
        price: 65,
        category: "carb-cup"
      },
      {
        id: "chicken-jollof-large",
        name: "Chicken Jollof (Large)",
        description: "Large cup of chicken jollof",
        price: 90,
        category: "carb-cup"
      },
      {
        id: "chicken-jollof-extra-large",
        name: "Chicken Jollof (Extra Large)",
        description: "Extra large cup of chicken jollof",
        price: 120,
        category: "carb-cup"
      },
      {
        id: "pork-jollof-small",
        name: "Pork Jollof (Small)",
        description: "Small cup of pork jollof",
        price: 65,
        category: "carb-cup"
      },
      {
        id: "pork-jollof-medium",
        name: "Pork Jollof (Medium)",
        description: "Medium cup of pork jollof",
        price: 100,
        category: "carb-cup"
      },
      {
        id: "pork-jollof-large",
        name: "Pork Jollof (Large)",
        description: "Large cup of pork jollof",
        price: 135,
        category: "carb-cup"
      },
      {
        id: "pork-jollof-extra-large",
        name: "Pork Jollof (Extra Large)",
        description: "Extra large cup of pork jollof",
        price: 200,
        category: "carb-cup"
      },
      {
        id: "beef-jollof-small",
        name: "Beef Jollof (Small)",
        description: "Small cup of beef jollof",
        price: 65,
        category: "carb-cup"
      },
      {
        id: "beef-jollof-medium",
        name: "Beef Jollof (Medium)",
        description: "Medium cup of beef jollof",
        price: 100,
        category: "carb-cup"
      },
      {
        id: "beef-jollof-large",
        name: "Beef Jollof (Large)",
        description: "Large cup of beef jollof",
        price: 135,
        category: "carb-cup"
      },
      {
        id: "beef-jollof-extra-large",
        name: "Beef Jollof (Extra Large)",
        description: "Extra large cup of beef jollof",
        price: 200,
        category: "carb-cup"
      },
      {
        id: "plain-jollof-small",
        name: "Plain Jollof (Small)",
        description: "Small cup of plain jollof",
        price: 40,
        category: "carb-cup"
      },
      {
        id: "plain-jollof-medium",
        name: "Plain Jollof (Medium)",
        description: "Medium cup of plain jollof",
        price: 65,
        category: "carb-cup"
      },
      {
        id: "plain-jollof-large",
        name: "Plain Jollof (Large)",
        description: "Large cup of plain jollof",
        price: 90,
        category: "carb-cup"
      },
      {
        id: "plain-jollof-extra-large",
        name: "Plain Jollof (Extra Large)",
        description: "Extra large cup of plain jollof",
        price: 120,
        category: "carb-cup"
      },
      {
        id: "assorted-jollof-small",
        name: "Assorted Jollof (Small)",
        description: "Small cup of assorted jollof",
        price: 65,
        category: "carb-cup"
      },
      {
        id: "assorted-jollof-medium",
        name: "Assorted Jollof (Medium)",
        description: "Medium cup of assorted jollof",
        price: 100,
        category: "carb-cup"
      },
      {
        id: "assorted-jollof-large",
        name: "Assorted Jollof (Large)",
        description: "Large cup of assorted jollof",
        price: 135,
        category: "carb-cup"
      },
      {
        id: "assorted-jollof-extra-large",
        name: "Assorted Jollof (Extra Large)",
        description: "Extra large cup of assorted jollof",
        price: 200,
        category: "carb-cup"
      }
    ]
  },
  {
    id: "shark-meal-combos",
    name: "Shark Meal Combos",
    items: [
      {
        id: "wings-shawarma-combo",
        name: "5 Pieces Wings + Chicken/Beef Shawarma + Drink",
        description: "5 PIECES WINGS (FLAVOUR OF YOUR CHOICE) + CHICKEN/BEEF SHAWARMA + A DRINK",
        price: 144,
        category: "shark-meal-combos"
      },
      {
        id: "wings-burger-combo",
        name: "5 Pieces Wings + Burger + Drink",
        description: "5 PIECES WINGS (FLAVOUR OF YOUR CHOICE) + BURGER + A DRINK",
        price: 158,
        category: "shark-meal-combos"
      },
      {
        id: "wings-friedrice-combo",
        name: "5 Pieces Wings + Fried Rice + Drink",
        description: "5 PIECES WINGS (FLAVOUR OF YOUR CHOICE) + FRIED RICE + A DRINK",
        price: 113,
        category: "shark-meal-combos"
      },
      {
        id: "wings-jollof-combo",
        name: "5 Pieces Wings + Jollof + Drink",
        description: "5 PIECES WINGS (FLAVOUR OF YOUR CHOICE) + JOLLOF + A DRINK",
        price: 103,
        category: "shark-meal-combos"
      },
      {
        id: "wings-assorted-friedrice-combo",
        name: "5 Pieces Wings + Assorted Fried Rice + Drink",
        description: "5 PIECES WINGS (FLAVOUR OF YOUR CHOICE) + ASSORTED FRIED RICE + A DRINK",
        price: 138,
        category: "shark-meal-combos"
      },
      {
        id: "wings-assorted-jollof-combo",
        name: "5 Pieces Wings + Assorted Jollof + Drink",
        description: "5 PIECES WINGS (FLAVOUR OF YOUR CHOICE) + ASSORTED JOLLOF + A DRINK",
        price: 138,
        category: "shark-meal-combos"
      },
      {
        id: "wings-assorted-noodles-combo",
        name: "5 Pieces Wings + Assorted Noodles + Drink",
        description: "5 PIECES WINGS (FLAVOUR OF YOUR CHOICE) + ASSORTED NOODLES + A DRINK",
        price: 138,
        category: "shark-meal-combos"
      },
      {
        id: "wings-mixed-shawarma-combo",
        name: "5 Pieces Wings + Mixed Shawarma + Drink",
        description: "5 PIECES WINGS (FLAVOUR OF YOUR CHOICE) + MIXED SHAWARMA + A DRINK",
        price: 158,
        category: "shark-meal-combos"
      }
    ]
  },
  {
    id: "shawarma",
    name: "Shawarma",
    items: [
      {
        id: "chicken-shawarma-regular",
        name: "Chicken Shawarma (Regular)",
        description: "Cabbage/lettuce, onion, chicken",
        price: 70,
        category: "shawarma"
      },
      {
        id: "chicken-shawarma-large",
        name: "Chicken Shawarma (Large)",
        description: "Cabbage/lettuce, onion, chicken",
        price: 85,
        category: "shawarma"
      },
      {
        id: "beef-shawarma-regular",
        name: "Beef Shawarma (Regular)",
        description: "Cabbage/lettuce, onion, beef",
        price: 70,
        category: "shawarma"
      },
      {
        id: "beef-shawarma-large",
        name: "Beef Shawarma (Large)",
        description: "Cabbage/lettuce, onion, beef",
        price: 85,
        category: "shawarma"
      },
      {
        id: "pork-shawarma-regular",
        name: "Pork Shawarma (Regular)",
        description: "Cabbage/lettuce, onion, pork",
        price: 85,
        category: "shawarma"
      },
      {
        id: "pork-shawarma-large",
        name: "Pork Shawarma (Large)",
        description: "Cabbage/lettuce, onion, pork",
        price: 100,
        category: "shawarma"
      },
      {
        id: "shark-special-regular",
        name: "Shark Special (Regular)",
        description: "Cabbage/lettuce, beef, sausage, chicken",
        price: 85,
        category: "shawarma"
      },
      {
        id: "shark-special-large",
        name: "Shark Special (Large)",
        description: "Cabbage/lettuce, beef, sausage, chicken",
        price: 100,
        category: "shawarma"
      },
      {
        id: "cheesy-loaded-shawarma-regular",
        name: "Cheesy Loaded Shawarma (Regular)",
        description: "Beef, sausage, chicken, fries, cheese, Shark sauce",
        price: 130,
        category: "shawarma"
      },
      {
        id: "cheesy-loaded-shawarma-large",
        name: "Cheesy Loaded Shawarma (Large)",
        description: "Beef, sausage, chicken, fries, cheese, Shark sauce",
        price: 150,
        category: "shawarma"
      },
      {
        id: "fries-loaded-shawarma-regular",
        name: "Fries Loaded Shawarma (Regular)",
        description: "Beef, sausage, chicken, fries, Shark sauce",
        price: 110,
        category: "shawarma"
      },
      {
        id: "fries-loaded-shawarma-large",
        name: "Fries Loaded Shawarma (Large)",
        description: "Beef, sausage, chicken, fries, Shark sauce",
        price: 130,
        category: "shawarma"
      },
      {
        id: "fully-loaded-shawarma-regular",
        name: "Fully Loaded Shawarma (Regular)",
        description: "Beef, sausage, chicken, fries, cheese, bacon, pepper sauce & Shark sauce",
        price: 150,
        category: "shawarma"
      },
      {
        id: "fully-loaded-shawarma-large",
        name: "Fully Loaded Shawarma (Large)",
        description: "Beef, sausage, chicken, fries, cheese, bacon, pepper sauce & Shark sauce",
        price: 180,
        category: "shawarma"
      },
      {
        id: "fully-loaded-shawarma-extra-large",
        name: "Fully Loaded Shawarma (Extra Large)",
        description: "Beef, sausage, chicken, fries, cheese, bacon, pepper sauce & Shark sauce",
        price: 250,
        category: "shawarma"
      }
    ]
  },
  {
    id: "muutuu-kenkey",
    name: "Muutuu Kenkey",
    items: [
      {
        id: "package-1",
        name: "Package 1",
        description: "1 BIG BALL | MARINATED FISH | SPICY CHICKEN SAUSAGE | FRIED EGG | 3 PEPPER SAUCES | CHOPPED VEGETABLES | WINGS",
        price: 75,
        category: "muutuu-kenkey"
      },
      {
        id: "package-2",
        name: "Package 2",
        description: "2 BIG BALLS | MARINATED FISH | SPICY CHICKEN SAUSAGE | FRIED EGG | SPICY WINGS | 3 PEPPER SAUCES | CHOPPED VEGETABLES",
        price: 90,
        category: "muutuu-kenkey"
      },
      {
        id: "package-3",
        name: "Package 3",
        description: "2 BIG BALLS | MARINATED FISH | SPICY BEEF SAUSAGE | FRIED EGG | SPICY GIZZARD | SPICY WINGS | 3 PEPPER SAUCES | CHOPPED VEGETABLES",
        price: 110,
        category: "muutuu-kenkey",
        isSpicy: true
      },
      {
        id: "package-4",
        name: "Package 4",
        description: "2 BIG BALLS | MARINATED FISH | SPICY BEEF SAUSAGE | FRIED EGG | GIZZARD | SPICY WINGS | PORK | 3 PEPPER SAUCES | CHOPPED VEGETABLES",
        price: 120,
        category: "muutuu-kenkey",
        isSpicy: true
      },
      {
        id: "package-5",
        name: "Package 5",
        description: "2 BIG BALLS | MARINATED FISH | SPICY BEEF SAUSAGE | FRIED EGG | SPICY GIZZARD | SPICY WINGS | TURKEY CHOPS | 3 PEPPER SAUCES | CHOPPED VEGETABLES",
        price: 120,
        category: "muutuu-kenkey",
        isSpicy: true
      },
      {
        id: "package-6",
        name: "Package 6",
        description: "2 BIG BALLS | MARINATED FISH | SPICY BEEF SAUSAGE | FRIED EGG | SPICY WINGS | TURKEY TAIL | SHRIMPS | 3 PEPPER SAUCES | CHOPPED VEGETABLES",
        price: 150,
        category: "muutuu-kenkey",
        isSpicy: true
      }
    ]
  },
  {
    id: "acheke-attieke",
    name: "Acheke/Attieke",
    items: [
      {
        id: "tilapia-small",
        name: "Full Size Tilapia (Small)",
        description: "Attieke/acheke (1 large cup) fried plantain, red pepper sauce, green pepper sauce, sautéed veges & fried egg",
        price: 150,
        category: "acheke-attieke"
      },
      {
        id: "tilapia-medium",
        name: "Full Size Tilapia (Medium)",
        description: "Attieke/acheke (1 large cup), fried plantain, red pepper sauce, green pepper sauce, sautéed veges & fried egg",
        price: 170,
        category: "acheke-attieke"
      },
      {
        id: "tilapia-large",
        name: "Full Size Tilapia (Large)",
        description: "Attieke/acheke (1 large cup), fried plantain, red pepper sauce, green pepper sauce, sautéed veges & fried eggs(2)",
        price: 200,
        category: "acheke-attieke"
      }
    ]
  },
  {
    id: "extras",
    name: "Extras",
    items: [
      {
        id: "kenkey-balls",
        name: "Kenkey Balls",
        description: "Additional kenkey balls",
        price: 7,
        category: "extras"
      },
      {
        id: "red-fish",
        name: "Red Fish",
        description: "Additional red fish",
        price: 30,
        category: "extras"
      },
      {
        id: "spicy-chicken-sausage",
        name: "Spicy Chicken Sausage",
        description: "Additional spicy chicken sausage",
        price: 5,
        category: "extras",
        isSpicy: true
      },
      {
        id: "spicy-beef-sausage",
        name: "Spicy Beef Sausage",
        description: "Additional spicy beef sausage",
        price: 15,
        category: "extras",
        isSpicy: true
      },
      {
        id: "fried-egg",
        name: "Fried Egg",
        description: "Additional fried egg",
        price: 5,
        category: "extras"
      },
      {
        id: "chicken-wings-extra",
        name: "Chicken Wings",
        description: "Additional chicken wings",
        price: 20,
        category: "extras"
      },
      {
        id: "chicken-extra",
        name: "Chicken",
        description: "Additional chicken portion",
        price: 25,
        category: "extras"
      },
      {
        id: "shrimp-extra",
        name: "Shrimp",
        description: "Additional shrimp",
        price: 25,
        category: "extras"
      },
      {
        id: "octopus",
        name: "Octopus",
        description: "Additional octopus",
        price: 25,
        category: "extras"
      },
      {
        id: "turkey-tail",
        name: "Turkey Tail",
        description: "Additional turkey tail",
        price: 30,
        category: "extras"
      },
      {
        id: "pork-extra",
        name: "Pork",
        description: "Additional pork",
        price: 30,
        category: "extras"
      },
      {
        id: "tilapia-fried-grilled",
        name: "Tilapia (Fried/Grilled)",
        description: "Additional tilapia (fried or grilled)",
        price: 65,
        category: "extras"
      },
      {
        id: "sardine",
        name: "Sardine",
        description: "Additional sardine",
        price: 12,
        category: "extras"
      },
      {
        id: "one-man-thousand",
        name: "One Man Thousand",
        description: "One man thousand",
        price: 10,
        category: "extras"
      },
      {
        id: "okro-wele-beef",
        name: "Okro (Wele and Beef)",
        description: "Okro with wele and beef",
        price: 25,
        category: "extras"
      },
      {
        id: "peppered-gizzard",
        name: "Peppered Gizzard",
        description: "Additional peppered gizzard",
        price: 10,
        category: "extras",
        isSpicy: true
      },
      {
        id: "ketchup",
        name: "Ketchup",
        description: "Additional ketchup",
        price: 3,
        category: "extras"
      },
      {
        id: "acheke-extra",
        name: "Acheke",
        description: "Additional acheke",
        price: 40,
        category: "extras"
      },
      {
        id: "avocado",
        name: "Avocado",
        description: "Additional avocado",
        price: 20,
        category: "extras"
      },
      {
        id: "pepper-extra",
        name: "Pepper",
        description: "Additional pepper",
        price: 10,
        category: "extras",
        isSpicy: true
      },
      {
        id: "egg-extra",
        name: "Egg",
        description: "Additional egg",
        price: 5,
        category: "extras"
      },
      {
        id: "extra-veges",
        name: "Extra Veges",
        description: "Additional vegetables",
        price: 20,
        category: "extras"
      },
      {
        id: "plantain",
        name: "Plantain",
        description: "Additional plantain",
        price: 20,
        category: "extras"
      },
      {
        id: "extra-chicken-chek-chek",
        name: "Extra Chicken (Chek Chek)",
        description: "Additional chicken portion for Chek Chek",
        price: 40,
        category: "extras"
      },
      {
        id: "extra-shito",
        name: "Extra Shito",
        description: "Additional shito sauce",
        price: 10,
        category: "extras",
        isSpicy: true
      },
      {
        id: "extra-rice",
        name: "Extra Rice",
        description: "Additional rice portion",
        price: 15,
        category: "extras"
      },
      {
        id: "extra-egg-chek-chek",
        name: "Extra Egg (Chek Chek)",
        description: "Additional egg for Chek Chek",
        price: 5,
        category: "extras"
      },
      {
        id: "green-chilli-sauce",
        name: "Green Chilli Sauce",
        description: "Spicy green chilli sauce",
        price: 5,
        category: "extras",
        isSpicy: true
      },
      {
        id: "sausage-extra",
        name: "Sausage",
        description: "Additional sausage",
        price: 5,
        category: "extras"
      },
      {
        id: "coleslaw",
        name: "Coleslaw",
        description: "Fresh coleslaw side",
        price: 10,
        category: "extras"
      },
      {
        id: "extra-protein",
        name: "Extra Chicken/Beef/Pork",
        description: "Additional protein serving (for Carb Cup)",
        price: 40,
        category: "extras"
      }
    ]
  },
  {
    id: "sunday-locals",
    name: "Sunday Locals",
    items: [
      {
        id: "sunday-wele",
        name: "Wele",
        description: "Sunday Locals protein",
        price: 10,
        category: "sunday-locals"
      },
      {
        id: "sunday-salted-beef",
        name: "Salted Beef",
        description: "Sunday Locals protein",
        price: 25,
        category: "sunday-locals"
      },
      {
        id: "sunday-tilapia",
        name: "Tilapia",
        description: "Sunday Locals protein (GHC50-70)",
        price: 60,
        category: "sunday-locals"
      },
      {
        id: "sunday-goat",
        name: "Goat",
        description: "Sunday Locals protein",
        price: 50,
        category: "sunday-locals"
      },
      {
        id: "sunday-cow-meat",
        name: "Cow Meat",
        description: "Sunday Locals protein",
        price: 50,
        category: "sunday-locals"
      },
      {
        id: "sunday-intestine",
        name: "Intestine",
        description: "Sunday Locals protein",
        price: 35,
        category: "sunday-locals"
      },
      {
        id: "sunday-chicken-layer",
        name: "Chicken (Layer)",
        description: "Sunday Locals protein (GHC45-60)",
        price: 52,
        category: "sunday-locals"
      },
      {
        id: "sunday-tuna",
        name: "Tuna",
        description: "Sunday Locals protein (GHC35-60)",
        price: 47,
        category: "sunday-locals"
      },
      {
        id: "sunday-snail",
        name: "Snail",
        description: "Sunday Locals protein (GHC50-150)",
        price: 100,
        category: "sunday-locals"
      },
      {
        id: "sunday-pig-feet",
        name: "Pig Feet",
        description: "Sunday Locals protein",
        price: 35,
        category: "sunday-locals"
      },
      {
        id: "sunday-dry-fish",
        name: "Dry Fish",
        description: "Sunday Locals protein (GHC60-150)",
        price: 105,
        category: "sunday-locals"
      },
      {
        id: "sunday-salmon",
        name: "Salmon",
        description: "Sunday Locals protein",
        price: 35,
        category: "sunday-locals"
      },
      {
        id: "sunday-fufu",
        name: "Fufu",
        description: "Sunday Locals carb",
        price: 20,
        category: "sunday-locals"
      },
      {
        id: "sunday-banku",
        name: "Banku",
        description: "Sunday Locals carb",
        price: 5,
        category: "sunday-locals"
      },
      {
        id: "sunday-omotuo",
        name: "Omotuo",
        description: "Sunday Locals carb",
        price: 5,
        category: "sunday-locals"
      },
      {
        id: "sunday-konkonte",
        name: "Konkonte",
        description: "Sunday Locals carb",
        price: 5,
        category: "sunday-locals"
      }
    ]
  },
  {
    id: "carbs-in-pans",
    name: "Carbs in Pans",
    items: [
      {
        id: "plain-jollof-small-tray",
        name: "Plain Jollof/Friedrice - Small Tray",
        description: "5-7 heads",
        price: 350,
        category: "carbs-in-pans"
      },
      {
        id: "plain-jollof-medium",
        name: "Plain Jollof/Friedrice - Medium",
        description: "7-12 heads",
        price: 400,
        category: "carbs-in-pans"
      },
      {
        id: "plain-jollof-large-tray",
        name: "Plain Jollof/Friedrice - Large Tray",
        description: "10-15 heads",
        price: 500,
        category: "carbs-in-pans"
      },
      {
        id: "plain-jollof-extra-large",
        name: "Plain Jollof/Friedrice - Extra Large",
        description: "15-25 heads",
        price: 700,
        category: "carbs-in-pans"
      },
      {
        id: "assorted-jollof-small-tray",
        name: "Assorted Jollof/Friedrice/Noodles - Small Tray",
        description: "5-7 heads",
        price: 450,
        category: "carbs-in-pans"
      },
      {
        id: "assorted-jollof-medium",
        name: "Assorted Jollof/Friedrice/Noodles - Medium",
        description: "7-12 heads",
        price: 650,
        category: "carbs-in-pans"
      },
      {
        id: "assorted-jollof-large-tray",
        name: "Assorted Jollof/Friedrice/Noodles - Large Tray",
        description: "10-15 heads",
        price: 850,
        category: "carbs-in-pans"
      },
      {
        id: "assorted-jollof-extra-large",
        name: "Assorted Jollof/Friedrice/Noodles - Extra Large",
        description: "15-25 heads",
        price: 1350,
        category: "carbs-in-pans"
      }
    ]
  },
  {
    id: "seafood-meals",
    name: "Seafood Meals",
    items: [
      {
        id: "seafood-only-regular",
        name: "Seafood Only - Regular Pack",
        description: "Carb pack",
        price: 330,
        category: "seafood-meals"
      },
      {
        id: "seafood-only-large",
        name: "Seafood Only - Large Pack",
        description: "Carb pack",
        price: 420,
        category: "seafood-meals"
      },
      {
        id: "assorted-meat-seafood-regular",
        name: "Assorted Meat & Seafood Jollof/Noodles/Fried Rice - Regular Pack",
        description: "Carb pack",
        price: 350,
        category: "seafood-meals"
      },
      {
        id: "assorted-meat-seafood-large",
        name: "Assorted Meat & Seafood Jollof/Noodles/Fried Rice - Large Pack",
        description: "Carb pack",
        price: 450,
        category: "seafood-meals"
      },
      {
        id: "seafood-tray-small",
        name: "Seafood Meals Carb Tray - Small",
        description: "Seafood tray",
        price: 680,
        category: "seafood-meals"
      },
      {
        id: "seafood-tray-medium",
        name: "Seafood Meals Carb Tray - Medium",
        description: "Seafood tray",
        price: 880,
        category: "seafood-meals"
      },
      {
        id: "seafood-tray-large",
        name: "Seafood Meals Carb Tray - Large",
        description: "Seafood tray",
        price: 1500,
        category: "seafood-meals"
      },
      {
        id: "seafood-tray-extra-large",
        name: "Seafood Meals Carb Tray - Extra Large",
        description: "Seafood tray",
        price: 1800,
        category: "seafood-meals"
      },
      {
        id: "assorted-meat-seafood-tray-small",
        name: "Assorted Meat and Seafood Tray - Small",
        description: "Assorted tray",
        price: 800,
        category: "seafood-meals"
      },
      {
        id: "assorted-meat-seafood-tray-medium",
        name: "Assorted Meat and Seafood Tray - Medium",
        description: "Assorted tray",
        price: 1050,
        category: "seafood-meals"
      },
      {
        id: "assorted-meat-seafood-tray-large",
        name: "Assorted Meat and Seafood Tray - Large",
        description: "Assorted tray",
        price: 1600,
        category: "seafood-meals"
      },
      {
        id: "assorted-meat-seafood-tray-extra-large",
        name: "Assorted Meat and Seafood Tray - Extra Large",
        description: "Assorted tray",
        price: 2000,
        category: "seafood-meals"
      }
    ]
  },
  {
    id: "burger-family",
    name: "The Shark's Burger Family",
    items: [
      {
        id: "baby-shark-burger",
        name: "Baby Shark",
        description: "Huge Burger bun, 1 beef patty, cheese, 1 fried egg, Shark sauce spicy sauce, onion & lettuce",
        price: 85,
        category: "burger-family"
      },
      {
        id: "sister-shark-burger",
        name: "Sister Shark",
        description: "Huge Burger bun, 2 beef patty, cheese, 1 fried egg, Shark sauce spicy sauce, onion & lettuce",
        price: 95,
        category: "burger-family"
      },
      {
        id: "brother-shark-burger",
        name: "Brother Shark",
        description: "Huge Burger bun, 1 beef patty, bacon, 1 fried egg, Shark sauce, spicy sauce, onion & lettuce",
        price: 95,
        category: "burger-family"
      },
      {
        id: "mummy-shark-burger",
        name: "Mummy Shark",
        description: "Huge Burger bun, 1 beef patty, cheese, bacon, 1 fried egg, Shark sauce, spicy sauce, onion & lettuce",
        price: 110,
        category: "burger-family"
      },
      {
        id: "daddy-shark-burger",
        name: "Daddy Shark",
        description: "Huge Burger bun, 2 beef patty, cheese, bacon, 1 fried egg, Shark sauce spicy sauce, onion & lettuce",
        price: 120,
        category: "burger-family"
      },
      {
        id: "grandma-shark-burger",
        name: "Grandma Shark",
        description: "Huge Burger bun, 2 beef patty, double cheese, bacon, sausage, 1 fried egg, Shark sauce, spicy sauce, onion & lettuce",
        price: 135,
        category: "burger-family"
      },
      {
        id: "grandpa-shark-burger",
        name: "Grandpa Shark",
        description: "Huge Burger bun, 2 beef patty, double cheese, bacon, sausage, 2 fried eggs, Shark sauce, spicy sauce, onion & lettuce",
        price: 145,
        category: "burger-family"
      }
    ]
  },
  {
    id: "burger-extras",
    name: "Burger Extras",
    items: [
      {
        id: "burger-fried-egg",
        name: "Fried Egg (Burger)",
        description: "Additional fried egg for burger",
        price: 5,
        category: "burger-extras"
      },
      {
        id: "burger-cheese",
        name: "Cheese (Burger)",
        description: "Additional cheese for burger",
        price: 10,
        category: "burger-extras"
      },
      {
        id: "burger-chicken-sausage",
        name: "Chicken Sausage (Burger)",
        description: "Additional chicken sausage for burger",
        price: 5,
        category: "burger-extras"
      },
      {
        id: "burger-bacon",
        name: "Bacon (Burger)",
        description: "Additional bacon for burger",
        price: 15,
        category: "burger-extras"
      },
      {
        id: "burger-hot-dog-pork",
        name: "Hot Dog (Pork) (Burger)",
        description: "Additional hot dog for burger",
        price: 20,
        category: "burger-extras"
      }
    ]
  },
  {
    id: "drinks",
    name: "Drinks",
    items: [
      {
        id: "cocktail",
        name: "Cocktail",
        description: "Non-alcoholic cocktail",
        price: 20,
        category: "drinks"
      },
      {
        id: "fanta-coke-sprite",
        name: "Fanta/Coke/Sprite",
        description: "Soft drink",
        price: 10,
        category: "drinks"
      },
      {
        id: "malt",
        name: "Malt",
        description: "Non-alcoholic malt drink",
        price: 20,
        category: "drinks"
      },
      {
        id: "iced-tea-large",
        name: "Iced Tea (Large)",
        description: "Large iced tea",
        price: 45,
        category: "drinks"
      },
      {
        id: "iced-tea-small",
        name: "Iced Tea (Small)",
        description: "Small iced tea",
        price: 25,
        category: "drinks"
      },
      {
        id: "alvaro",
        name: "Alvaro",
        description: "Non-alcoholic drink",
        price: 15,
        category: "drinks"
      },
      {
        id: "sobolo",
        name: "Sobolo",
        description: "Hibiscus drink",
        price: 30,
        category: "drinks"
      },
      {
        id: "mashed-kenkey-300ml",
        name: "Mashed Kenkey (300ML)",
        description: "Mashed kenkey drink",
        price: 25,
        category: "drinks"
      },
      {
        id: "mashed-kenkey-500ml",
        name: "Mashed Kenkey (500ML)",
        description: "Mashed kenkey drink",
        price: 40,
        category: "drinks"
      },
      {
        id: "water-small",
        name: "Water (Small)",
        description: "Small bottle of water",
        price: 5,
        category: "drinks"
      },
      {
        id: "water-big",
        name: "Water (Big)",
        description: "Large bottle of water",
        price: 10,
        category: "drinks"
      },
      {
        id: "fresh-juice-300ml",
        name: "Fresh Juice (300ML)",
        description: "Fresh fruit juice",
        price: 30,
        category: "drinks"
      },
      {
        id: "fresh-juice-500ml",
        name: "Fresh Juice (500ML)",
        description: "Tropical, pine ginger, minty pine, orapine, pineapple",
        price: 40,
        category: "drinks"
      },
      {
        id: "club-beer-small",
        name: "Club Beer (Small)",
        description: "Small bottle of Club beer",
        price: 25,
        category: "drinks"
      },
      {
        id: "club-beer-big",
        name: "Club Beer (Big)",
        description: "Large bottle of Club beer",
        price: 35,
        category: "drinks"
      },
      {
        id: "smirnoff",
        name: "Smirnoff",
        description: "Smirnoff drink",
        price: 25,
        category: "drinks"
      },
      {
        id: "shandy-small",
        name: "Shandy (Small)",
        description: "Small shandy",
        price: 25,
        category: "drinks"
      },
      {
        id: "shandy-big",
        name: "Shandy (Big)",
        description: "Large shandy",
        price: 35,
        category: "drinks"
      },
      {
        id: "vody",
        name: "Vody",
        description: "Vodka drink",
        price: 30,
        category: "drinks"
      },
      {
        id: "hunters",
        name: "Hunters",
        description: "Hunters drink",
        price: 35,
        category: "drinks"
      },
      {
        id: "savanna",
        name: "Savanna",
        description: "Savanna cider",
        price: 35,
        category: "drinks"
      },
      {
        id: "origin-small",
        name: "Origin (Small)",
        description: "Small Origin drink",
        price: 25,
        category: "drinks"
      },
      {
        id: "origin-big",
        name: "Origin (Big)",
        description: "Large Origin drink",
        price: 35,
        category: "drinks"
      },
      {
        id: "kiss",
        name: "Kiss",
        description: "Kiss drink",
        price: 35,
        category: "drinks"
      },
      {
        id: "guinness",
        name: "Guinness",
        description: "Guinness stout",
        price: 25,
        category: "drinks"
      },
      {
        id: "smirnoff-gurana",
        name: "Smirnoff Gurana",
        description: "Smirnoff Gurana",
        price: 35,
        category: "drinks"
      },
      {
        id: "alcohol-packets",
        name: "Alcohol Packets",
        description: "Alcohol packets",
        price: 15,
        category: "drinks"
      }
    ]
  },
  {
    id: "stews",
    name: "Stews",
    items: [
      {
        id: "assorted-meat-garden-eggs-5l",
        name: "Assorted Meat Garden Eggs (5 Litres)",
        description: "Beef/goat, wele, salmon/tuna",
        price: 780,
        category: "stews"
      },
      {
        id: "assorted-meat-palava-5l",
        name: "Assorted Meat Palava Sauce/Kontomire (5 Litres)",
        description: "Palava sauce with kontomire",
        price: 780,
        category: "stews"
      },
      {
        id: "assorted-meat-beans-5l",
        name: "Assorted Meat Beans Stew (5 Litres)",
        description: "Beans stew with assorted meat",
        price: 780,
        category: "stews"
      },
      {
        id: "chicken-stew-5l",
        name: "Chicken Stew (5 Litres)",
        description: "Chicken stew",
        price: 750,
        category: "stews"
      },
      {
        id: "turkey-stew-5l",
        name: "Turkey Stew (5 Litres)",
        description: "Turkey stew",
        price: 780,
        category: "stews"
      },
      {
        id: "goat-stew-5l",
        name: "Goat Stew (5 Litres)",
        description: "Goat meat stew",
        price: 780,
        category: "stews"
      },
      {
        id: "beef-stew-5l",
        name: "Beef Stew (5 Litres)",
        description: "Beef stew",
        price: 750,
        category: "stews"
      },
      {
        id: "egg-corned-beef-stew-5l",
        name: "Egg Stew & Corned Beef Stew (5 Litres)",
        description: "Egg and corned beef stew",
        price: 780,
        category: "stews"
      },
      {
        id: "cassava-red-fish-5l",
        name: "Cassava/Red Fish in Tomato Sauce (5 Litres)",
        description: "Cassava or red fish in tomato sauce",
        price: 850,
        category: "stews"
      },
      {
        id: "assorted-meat-garden-eggs-3l",
        name: "Assorted Meat Garden Eggs (3 Litres)",
        description: "Beef/goat, wele, salmon/tuna",
        price: 550,
        category: "stews"
      },
      {
        id: "assorted-meat-palava-3l",
        name: "Assorted Meat Palava Sauce/Kontomire (3 Litres)",
        description: "Palava sauce with kontomire",
        price: 550,
        category: "stews"
      },
      {
        id: "assorted-meat-beans-3l",
        name: "Assorted Meat Beans Stew (3 Litres)",
        description: "Beans stew with assorted meat",
        price: 550,
        category: "stews"
      },
      {
        id: "chicken-stew-3l",
        name: "Chicken Stew (3 Litres)",
        description: "Chicken stew",
        price: 530,
        category: "stews"
      },
      {
        id: "turkey-stew-3l",
        name: "Turkey Stew (3 Litres)",
        description: "Turkey stew",
        price: 550,
        category: "stews"
      },
      {
        id: "goat-stew-3l",
        name: "Goat Stew (3 Litres)",
        description: "Goat meat stew",
        price: 550,
        category: "stews"
      },
      {
        id: "beef-stew-3l",
        name: "Beef Stew (3 Litres)",
        description: "Beef stew",
        price: 530,
        category: "stews"
      },
      {
        id: "egg-corned-beef-stew-3l",
        name: "Egg Stew & Corned Beef Stew (3 Litres)",
        description: "Egg and corned beef stew",
        price: 550,
        category: "stews"
      },
      {
        id: "cassava-red-fish-3l",
        name: "Cassava/Red Fish in Tomato Sauce (3 Litres)",
        description: "Cassava or red fish in tomato sauce",
        price: 650,
        category: "stews"
      }
    ]
  },
  {
    id: "banku-okro",
    name: "Banku & Okro Stew",
    items: [
      {
        id: "banku-okro-option-1",
        name: "Banku & Okro Stew (Option 1)",
        description: "2 balls of banku | Crab | Wele | Salted beef | Cow/goat meat | Salmon",
        price: 130,
        category: "banku-okro"
      },
      {
        id: "banku-okro-option-2",
        name: "Banku & Okro Stew (Option 2)",
        description: "2 balls of banku | Crab | Wele | Salted beef | Cow/Goat meat | Tilapia",
        price: 180,
        category: "banku-okro"
      }
    ]
  },
  {
    id: "zongo-saturdays",
    name: "Zongo Saturdays",
    items: [
      {
        id: "waakye",
        name: "Waakye",
        description: "WAAKYE, FISH, WELE, EGG, MEAT, SAUSAGES, SALAD, SPAGHETTI, GARI, SHITO, STEW, PLANTAIN",
        price: 150,
        category: "zongo-saturdays"
      },
      {
        id: "zongo-rice",
        name: "Zongo Rice",
        description: "RICE, FISH, WELE, EGG, MEAT, SAUSAGE, SALAD, SPAGHETTI, SHITO, STEW PLANTAIN",
        price: 150,
        category: "zongo-saturdays"
      },
      {
        id: "tuo-zaafi",
        name: "Tuo Zaafi",
        description: "TWO BALLS OF TZ, STEW, GREEN SOUP INTESTINE, MEAT, WELE, FISH",
        price: 150,
        category: "zongo-saturdays"
      },
      {
        id: "zongo-meat",
        name: "Meat (Extra)",
        description: "Additional meat for Zongo Saturdays",
        price: 40,
        category: "zongo-saturdays"
      },
      {
        id: "zongo-fried-boiled-egg",
        name: "Fried/Boiled Egg (Extra)",
        description: "Additional egg for Zongo Saturdays",
        price: 5,
        category: "zongo-saturdays"
      },
      {
        id: "zongo-sausage",
        name: "Sausage (Extra)",
        description: "Additional sausage for Zongo Saturdays",
        price: 5,
        category: "zongo-saturdays"
      },
      {
        id: "zongo-intestine",
        name: "Intestine (Extra)",
        description: "Additional intestine for Zongo Saturdays",
        price: 30,
        category: "zongo-saturdays"
      },
      {
        id: "zongo-tz",
        name: "T.Z (Extra)",
        description: "Additional Tuo Zaafi for Zongo Saturdays",
        price: 5,
        category: "zongo-saturdays"
      },
      {
        id: "zongo-chicken",
        name: "Chicken (Extra)",
        description: "Additional chicken for Zongo Saturdays",
        price: 30,
        category: "zongo-saturdays"
      },
      {
        id: "zongo-wele",
        name: "Wele (Extra)",
        description: "Additional wele for Zongo Saturdays",
        price: 10,
        category: "zongo-saturdays"
      },
      {
        id: "zongo-fish",
        name: "Fish (Extra)",
        description: "Additional fish for Zongo Saturdays",
        price: 30,
        category: "zongo-saturdays"
      },
      {
        id: "zongo-dry-salad",
        name: "Dry Salad (Extra)",
        description: "Additional dry salad for Zongo Saturdays",
        price: 5,
        category: "zongo-saturdays"
      },
      {
        id: "zongo-gizzard",
        name: "Gizzard (Extra)",
        description: "Additional gizzard for Zongo Saturdays",
        price: 15,
        category: "zongo-saturdays"
      },
      {
        id: "zongo-ghana-salad",
        name: "Ghana Salad (Extra)",
        description: "Additional Ghana salad for Zongo Saturdays",
        price: 40,
        category: "zongo-saturdays"
      },
      {
        id: "zongo-fried-plantain",
        name: "Fried Plantain (Extra)",
        description: "Additional fried plantain for Zongo Saturdays",
        price: 10,
        category: "zongo-saturdays"
      }
    ]
  },
  {
    id: "party-trays",
    name: "Party Trays",
    items: [
      {
        id: "fried-yam-tray",
        name: "Fried Yam Tray",
        description: "Feeds 5-10 people",
        price: 200,
        category: "party-trays"
      },
      {
        id: "kelewele-tray",
        name: "Kelewele Tray",
        description: "Feeds 5-10 people",
        price: 250,
        category: "party-trays"
      },
      {
        id: "fried-chicken-6pcs",
        name: "Fried Chicken/Turkey (6 Pieces)",
        description: "6 pieces of fried chicken or turkey",
        price: 240,
        category: "party-trays"
      },
      {
        id: "fried-chicken-12pcs",
        name: "Fried Chicken/Turkey (12 Pieces)",
        description: "12 pieces of fried chicken or turkey",
        price: 480,
        category: "party-trays"
      },
      {
        id: "fried-chicken-18pcs",
        name: "Fried Chicken/Turkey (18 Pieces)",
        description: "18 pieces of fried chicken or turkey",
        price: 720,
        category: "party-trays"
      },
      {
        id: "fried-chicken-24pcs",
        name: "Fried Chicken/Turkey (24 Pieces)",
        description: "24 pieces of fried chicken or turkey",
        price: 960,
        category: "party-trays"
      },
      {
        id: "fried-chicken-48pcs",
        name: "Fried Chicken/Turkey (48 Pieces)",
        description: "48 pieces of fried chicken or turkey",
        price: 1920,
        category: "party-trays"
      },
      {
        id: "fish-tilapia",
        name: "Tilapia (Fried/Grilled)",
        description: "Fried or grilled tilapia",
        price: 70,
        category: "party-trays"
      },
      {
        id: "fish-cassava",
        name: "Cassava Fish",
        description: "Cassava fish",
        price: 85,
        category: "party-trays"
      },
      {
        id: "fish-salmon-mackerel",
        name: "Salmon/Mackerel",
        description: "Salmon or mackerel",
        price: 70,
        category: "party-trays"
      },
      {
        id: "fish-red-fish",
        name: "Red Fish",
        description: "Red fish",
        price: 85,
        category: "party-trays"
      },
      {
        id: "party-wings-5pcs",
        name: "Chicken Wings (5 Pieces) - Party Tray",
        description: "5 pieces of chicken wings (fried/grilled)",
        price: 65,
        category: "party-trays"
      },
      {
        id: "party-wings-10pcs",
        name: "Chicken Wings (10 Pieces) - Party Tray",
        description: "10 pieces of chicken wings (fried/grilled)",
        price: 110,
        category: "party-trays"
      },
      {
        id: "party-wings-15pcs",
        name: "Chicken Wings (15 Pieces) - Party Tray",
        description: "15 pieces of chicken wings (fried/grilled)",
        price: 150,
        category: "party-trays"
      },
      {
        id: "party-wings-20pcs",
        name: "Chicken Wings (20 Pieces) - Party Tray",
        description: "20 pieces of chicken wings (fried/grilled)",
        price: 185,
        category: "party-trays"
      },
      {
        id: "party-wings-40pcs",
        name: "Chicken Wings (40 Pieces) - Party Tray",
        description: "40 pieces of chicken wings (fried/grilled)",
        price: 365,
        category: "party-trays"
      },
      {
        id: "kebab-beef",
        name: "Beef Kebab",
        description: "Beef kebab",
        price: 20,
        category: "party-trays"
      },
      {
        id: "kebab-goat",
        name: "Goat Kebab",
        description: "Goat kebab",
        price: 20,
        category: "party-trays"
      },
      {
        id: "kebab-pork",
        name: "Pork Kebab",
        description: "Pork kebab",
        price: 20,
        category: "party-trays"
      },
      {
        id: "kebab-chicken",
        name: "Chicken Kebab",
        description: "Chicken kebab",
        price: 20,
        category: "party-trays"
      },
      {
        id: "kebab-sausage",
        name: "Sausage Kebab",
        description: "Sausage kebab",
        price: 20,
        category: "party-trays"
      },
      {
        id: "grilled-chicken-6pcs",
        name: "Grilled Chicken/Turkey (6 Pieces)",
        description: "6 pieces of grilled chicken or turkey",
        price: 240,
        category: "party-trays"
      },
      {
        id: "grilled-chicken-12pcs",
        name: "Grilled Chicken/Turkey (12 Pieces)",
        description: "12 pieces of grilled chicken or turkey",
        price: 480,
        category: "party-trays"
      },
      {
        id: "grilled-chicken-18pcs",
        name: "Grilled Chicken/Turkey (18 Pieces)",
        description: "18 pieces of grilled chicken or turkey",
        price: 720,
        category: "party-trays"
      },
      {
        id: "grilled-chicken-24pcs",
        name: "Grilled Chicken/Turkey (24 Pieces)",
        description: "24 pieces of grilled chicken or turkey",
        price: 960,
        category: "party-trays"
      },
      {
        id: "grilled-chicken-48pcs",
        name: "Grilled Chicken/Turkey (48 Pieces)",
        description: "48 pieces of grilled chicken or turkey",
        price: 1920,
        category: "party-trays"
      },
      {
        id: "gizzard-tray",
        name: "Gizzard Tray",
        description: "Gizzard party tray",
        price: 300,
        category: "party-trays"
      },
      {
        id: "sausage-tray",
        name: "Sausage Tray",
        description: "Sausage party tray",
        price: 250,
        category: "party-trays"
      },
      {
        id: "peppered-snail",
        name: "Peppered Snail",
        description: "Peppered snail (GHC150-350)",
        price: 250,
        category: "party-trays",
        isSpicy: true
      },
      {
        id: "yam-balls",
        name: "Yam Balls",
        description: "Yam balls",
        price: 15,
        category: "party-trays"
      },
      {
        id: "meat-balls",
        name: "Meat Balls",
        description: "Meat balls",
        price: 20,
        category: "party-trays"
      },
      {
        id: "spring-rolls-party",
        name: "Spring Rolls",
        description: "Spring rolls",
        price: 5,
        category: "party-trays"
      },
      {
        id: "samosa-party",
        name: "Samosa",
        description: "Samosa",
        price: 5,
        category: "party-trays"
      }
    ]
  },
  {
    id: "soups",
    name: "Soups",
    items: [
      {
        id: "groundnut-soup-chicken-5l",
        name: "Groundnut Soup - Local Chicken (5 Litres)",
        description: "Groundnut soup with local chicken",
        price: 800,
        category: "soups"
      },
      {
        id: "groundnut-soup-beef-5l",
        name: "Groundnut Soup - Beef (5 Litres)",
        description: "Groundnut soup with beef",
        price: 750,
        category: "soups"
      },
      {
        id: "groundnut-soup-goat-5l",
        name: "Groundnut Soup - Goat Meat (5 Litres)",
        description: "Groundnut soup with goat meat",
        price: 800,
        category: "soups"
      },
      {
        id: "groundnut-soup-dry-fish-5l",
        name: "Groundnut Soup - Dry Fish (5 Litres)",
        description: "Groundnut soup with dry fish",
        price: 950,
        category: "soups"
      },
      {
        id: "groundnut-soup-assorted-5l",
        name: "Groundnut Soup - Assorted (5 Litres)",
        description: "Beef/goat, wele, salmon/tuna",
        price: 950,
        category: "soups"
      },
      {
        id: "light-soup-chicken-5l",
        name: "Light Soup - Local Chicken (5 Litres)",
        description: "Light soup with local chicken",
        price: 750,
        category: "soups"
      },
      {
        id: "light-soup-beef-5l",
        name: "Light Soup - Beef (5 Litres)",
        description: "Light soup with beef",
        price: 680,
        category: "soups"
      },
      {
        id: "light-soup-goat-5l",
        name: "Light Soup - Goat Meat (5 Litres)",
        description: "Light soup with goat meat",
        price: 750,
        category: "soups"
      },
      {
        id: "light-soup-dry-fish-5l",
        name: "Light Soup - Dry Fish (5 Litres)",
        description: "Light soup with dry fish",
        price: 900,
        category: "soups"
      },
      {
        id: "light-soup-efie-nkwan-5l",
        name: "Light Soup - Efie Nkwan (5 Litres)",
        description: "Snail, pig feet, salted beef & salmon",
        price: 950,
        category: "soups"
      },
      {
        id: "light-soup-assorted-5l",
        name: "Light Soup - Assorted (5 Litres)",
        description: "Beef/goat, wele, salmon/tuna",
        price: 800,
        category: "soups"
      },
      {
        id: "palm-nut-soup-chicken-5l",
        name: "Palm Nut Soup - Local Chicken (5 Litres)",
        description: "Palm nut soup with local chicken",
        price: 800,
        category: "soups"
      },
      {
        id: "palm-nut-soup-beef-5l",
        name: "Palm Nut Soup - Beef (5 Litres)",
        description: "Palm nut soup with beef",
        price: 750,
        category: "soups"
      },
      {
        id: "palm-nut-soup-goat-5l",
        name: "Palm Nut Soup - Goat Meat (5 Litres)",
        description: "Palm nut soup with goat meat",
        price: 800,
        category: "soups"
      },
      {
        id: "palm-nut-soup-dry-fish-5l",
        name: "Palm Nut Soup - Dry Fish (5 Litres)",
        description: "Palm nut soup with dry fish",
        price: 950,
        category: "soups"
      },
      {
        id: "palm-nut-soup-assorted-5l",
        name: "Palm Nut Soup - Assorted (5 Litres)",
        description: "Beef/goat, wele, salmon/tuna",
        price: 950,
        category: "soups"
      },
      {
        id: "okro-soup-assorted-5l",
        name: "Assorted Meat Okro Soup (5 Litres)",
        description: "Beef/goat, wele, salmon/tuna & crab & with 10 balls of banku (complimentary)",
        price: 900,
        category: "soups"
      },
      {
        id: "ebun3bunu-5l",
        name: "Ebun3bunu (5 Litres)",
        description: "Snail, dry fish, crab, salted beef & salmon",
        price: 900,
        category: "soups"
      },
      {
        id: "groundnut-soup-chicken-3l",
        name: "Groundnut Soup - Local Chicken (3 Litres)",
        description: "Groundnut soup with local chicken",
        price: 600,
        category: "soups"
      },
      {
        id: "groundnut-soup-beef-3l",
        name: "Groundnut Soup - Beef (3 Litres)",
        description: "Groundnut soup with beef",
        price: 550,
        category: "soups"
      },
      {
        id: "groundnut-soup-goat-3l",
        name: "Groundnut Soup - Goat Meat (3 Litres)",
        description: "Groundnut soup with goat meat",
        price: 600,
        category: "soups"
      },
      {
        id: "groundnut-soup-dry-fish-3l",
        name: "Groundnut Soup - Dry Fish (3 Litres)",
        description: "Groundnut soup with dry fish",
        price: 700,
        category: "soups"
      },
      {
        id: "groundnut-soup-assorted-3l",
        name: "Groundnut Soup - Assorted (3 Litres)",
        description: "Beef/goat, wele, salmon/tuna",
        price: 700,
        category: "soups"
      },
      {
        id: "light-soup-chicken-3l",
        name: "Light Soup - Local Chicken (3 Litres)",
        description: "Light soup with local chicken",
        price: 550,
        category: "soups"
      },
      {
        id: "light-soup-beef-3l",
        name: "Light Soup - Beef (3 Litres)",
        description: "Light soup with beef",
        price: 500,
        category: "soups"
      },
      {
        id: "light-soup-goat-3l",
        name: "Light Soup - Goat Meat (3 Litres)",
        description: "Light soup with goat meat",
        price: 550,
        category: "soups"
      },
      {
        id: "light-soup-dry-fish-3l",
        name: "Light Soup - Dry Fish (3 Litres)",
        description: "Light soup with dry fish",
        price: 650,
        category: "soups"
      },
      {
        id: "light-soup-efie-nkwan-3l",
        name: "Light Soup - Efie Nkwan (3 Litres)",
        description: "Snail, pig feet, salted beef & salmon",
        price: 650,
        category: "soups"
      },
      {
        id: "light-soup-assorted-3l",
        name: "Light Soup - Assorted (3 Litres)",
        description: "Beef/goat, wele, salmon/tuna",
        price: 650,
        category: "soups"
      },
      {
        id: "palm-nut-soup-chicken-3l",
        name: "Palm Nut Soup - Local Chicken (3 Litres)",
        description: "Palm nut soup with local chicken",
        price: 600,
        category: "soups"
      },
      {
        id: "palm-nut-soup-beef-3l",
        name: "Palm Nut Soup - Beef (3 Litres)",
        description: "Palm nut soup with beef",
        price: 550,
        category: "soups"
      },
      {
        id: "palm-nut-soup-goat-3l",
        name: "Palm Nut Soup - Goat Meat (3 Litres)",
        description: "Palm nut soup with goat meat",
        price: 600,
        category: "soups"
      },
      {
        id: "palm-nut-soup-dry-fish-3l",
        name: "Palm Nut Soup - Dry Fish (3 Litres)",
        description: "Palm nut soup with dry fish",
        price: 700,
        category: "soups"
      },
      {
        id: "palm-nut-soup-assorted-3l",
        name: "Palm Nut Soup - Assorted (3 Litres)",
        description: "Beef/goat, wele, salmon/tuna",
        price: 700,
        category: "soups"
      },
      {
        id: "okro-soup-assorted-3l",
        name: "Assorted Meat Okro Soup (3 Litres)",
        description: "Beef/goat, wele, salmon/tuna & crab & with 5 balls of banku (complimentary)",
        price: 650,
        category: "soups"
      },
      {
        id: "ebun3bunu-3l",
        name: "Ebun3bunu (3 Litres)",
        description: "Snail, dry fish, crab, salted beef & salmon",
        price: 650,
        category: "soups"
      }
    ]
  },
  {
    id: "treat-boxes",
    name: "Treat Boxes",
    items: [
      {
        id: "treat-box-1",
        name: "Treat Box 1",
        description: "Juice (Ceres/Fresh Juice), Baby Shark Burger/Shawarma, Assorted Friedrice/Jollof, Hot dog, Chicken wings (Hot & spicy/Sweet & chilli/Honey glazed), Samosa, Springrolls",
        price: 400,
        category: "treat-boxes"
      },
      {
        id: "treat-box-2",
        name: "Treat Box 2",
        description: "Juice (Ceres/Fresh Juice), Baby Shark Burger, Shawarma (chicken/beef/mixed), Assorted Friedrice/Jollof, Assorted noodles, Chicken wings (Hot & spicy/Sweet & chilli/Honey glazed), Samosa, Springrolls",
        price: 460,
        category: "treat-boxes"
      },
      {
        id: "treat-box-3",
        name: "Treat Box 3",
        description: "Juice (Ceres/Fresh Juice), Baby Shark Burger, Assorted Friedrice/Jollof, Assorted noodles, Hot dog, Chicken wings (Hot & spicy/Sweet & chilli/Honey glazed), Samosas, Springrolls, Shawarma (chicken/beef/mixed)",
        price: 480,
        category: "treat-boxes"
      },
      {
        id: "treat-box-4",
        name: "Treat Box 4",
        description: "Juice (Ceres/Fresh Juice), Baby Shark Burger, Assorted Friedrice/Jollof, Hot dog, Chicken wings (Hot & spicy/Sweet & chilli/Honey glazed), Samosa, Springrolls, Cheesy loaded shawarma",
        price: 520,
        category: "treat-boxes"
      },
      {
        id: "treat-box-5",
        name: "Treat Box 5",
        description: "Juice (Ceres/Fresh Juice), Baby Shark Burger, Assorted Friedrice/Jollof, Assorted noodles, Hot dog (Doggy 01), Chicken wings (Hot & spicy/Sweet & chilli/Honey glazed), Samosas, Spring-rolls, Fully loaded Shawarma (chicken/beef/mixed)",
        price: 600,
        category: "treat-boxes"
      }
    ]
  }
];