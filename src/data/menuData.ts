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
  }
];