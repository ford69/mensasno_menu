import { MenuCategory, Restaurant } from '../types/menu';

export const restaurant: Restaurant = {
  name: "Mensaano & the Shawarma Shark",
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
        price: 55,
        category: "chicken-wings"
      },
      {
        id: "wings-10pcs",
        name: "10 PCS Chicken Wings",
        description: "Flavours: Hot & Spicy | Sweet & Chili | Honey Glazed | Honey Mustard Sweet & Spicy",
        price: 95,
        category: "chicken-wings"
      },
      {
        id: "wings-15pcs",
        name: "15 PCS Chicken Wings",
        description: "Flavours: Hot & Spicy | Sweet & Chili | Honey Glazed | Honey Mustard Sweet & Spicy",
        price: 135,
        category: "chicken-wings"
      },
      {
        id: "wings-20pcs",
        name: "20 PCS Chicken Wings",
        description: "Flavours: Hot & Spicy | Sweet & Chili | Honey Glazed | Honey Mustard Sweet & Spicy",
        price: 170,
        category: "chicken-wings"
      },
      {
        id: "wings-40pcs",
        name: "40 PCS Chicken Wings",
        description: "Flavours: Hot & Spicy | Sweet & Chili | Honey Glazed | Honey Mustard Sweet & Spicy",
        price: 350,
        category: "chicken-wings"
      }
    ]
  },
  {
    id: "chek-chek",
    name: "Chek Chek - Jollof/Fried Rice",
    items: [
      {
        id: "fried-chicken-chek-chek",
        name: "Fried Chicken Chek Chek",
        description: "Jollof/Fried rice with fried chicken",
        price: 85,
        category: "chek-chek"
      },
      {
        id: "fried-chicken-chek-chek-large",
        name: "Fried Chicken Chek Chek (Large)",
        description: "Large portion of jollof/fried rice with fried chicken",
        price: 110,
        category: "chek-chek"
      },
      {
        id: "grilled-chicken-chek-chek",
        name: "Grilled Chicken Chek Chek",
        description: "Jollof/fried rice with grilled chicken",
        price: 95,
        category: "chek-chek"
      },
      {
        id: "grilled-chicken-chek-chek-medium",
        name: "Grilled Chicken Chek Chek (Medium)",
        description: "Medium portion of jollof/fried rice with grilled chicken",
        price: 130,
        category: "chek-chek"
      },
      {
        id: "grilled-chicken-chek-chek-large",
        name: "Grilled Chicken Chek Chek (Large)",
        description: "Large portion of jollof/fried rice with grilled chicken",
        price: 150,
        category: "chek-chek"
      },
      {
        id: "spicy-turkey-chops",
        name: "Spicy Turkey Chops",
        description: "Jollof/fried rice with spicy turkey chops",
        price: 170,
        category: "chek-chek",
        isSpicy: true
      },
      {
        id: "spicy-goat-beef",
        name: "Spicy Goat/Beef",
        description: "Jollof/fried rice with spicy goat or beef",
        price: 150,
        category: "chek-chek",
        isSpicy: true
      },
      {
        id: "spicy-goat-beef-large",
        name: "Spicy Goat/Beef (Large)",
        description: "Large portion of jollof/fried rice with spicy goat or beef",
        price: 170,
        category: "chek-chek",
        isSpicy: true
      },
      {
        id: "chek-chek-zoo",
        name: "Chek Chek Zoo",
        description: "Assorted proteins - chicken, gizzard, sausage, boiled eggs, turkey, goat + fried plantain (Feeds 2-3 heads)",
        price: 250,
        category: "chek-chek"
      },
      {
        id: "chek-chek-zoo-promax",
        name: "Chek Chek Zoo Promax",
        description: "Chekchek Zoo + spicy pork chops (Feeds 2-3 heads)",
        price: 300,
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
        price: 55,
        category: "carb-cup"
      },
      {
        id: "assorted-noodles-medium",
        name: "Assorted Noodles (Medium)",
        description: "Medium cup of assorted noodles",
        price: 85,
        category: "carb-cup"
      },
      {
        id: "assorted-noodles-large",
        name: "Assorted Noodles (Large)",
        description: "Large cup of assorted noodles",
        price: 120,
        category: "carb-cup"
      },
      {
        id: "assorted-noodles-extra-large",
        name: "Assorted Noodles (Extra Large)",
        description: "Extra large cup of assorted noodles",
        price: 180,
        category: "carb-cup"
      },
      {
        id: "chicken-noodles-small",
        name: "Chicken Noodles (Small)",
        description: "Small cup of chicken noodles",
        price: 55,
        category: "carb-cup"
      },
      {
        id: "chicken-noodles-medium",
        name: "Chicken Noodles (Medium)",
        description: "Medium cup of chicken noodles",
        price: 85,
        category: "carb-cup"
      },
      {
        id: "chicken-noodles-large",
        name: "Chicken Noodles (Large)",
        description: "Large cup of chicken noodles",
        price: 120,
        category: "carb-cup"
      },
      {
        id: "chicken-noodles-extra-large",
        name: "Chicken Noodles (Extra Large)",
        description: "Extra large cup of chicken noodles",
        price: 180,
        category: "carb-cup"
      },
      {
        id: "pork-noodles-small",
        name: "Pork Noodles (Small)",
        description: "Small cup of pork noodles",
        price: 55,
        category: "carb-cup"
      },
      {
        id: "pork-noodles-medium",
        name: "Pork Noodles (Medium)",
        description: "Medium cup of pork noodles",
        price: 85,
        category: "carb-cup"
      },
      {
        id: "pork-noodles-large",
        name: "Pork Noodles (Large)",
        description: "Large cup of pork noodles",
        price: 120,
        category: "carb-cup"
      },
      {
        id: "pork-noodles-extra-large",
        name: "Pork Noodles (Extra Large)",
        description: "Extra large cup of pork noodles",
        price: 180,
        category: "carb-cup"
      },
      {
        id: "beef-noodles-small",
        name: "Beef Noodles (Small)",
        description: "Small cup of beef noodles",
        price: 55,
        category: "carb-cup"
      },
      {
        id: "beef-noodles-medium",
        name: "Beef Noodles (Medium)",
        description: "Medium cup of beef noodles",
        price: 85,
        category: "carb-cup"
      },
      {
        id: "beef-noodles-large",
        name: "Beef Noodles (Large)",
        description: "Large cup of beef noodles",
        price: 120,
        category: "carb-cup"
      },
      {
        id: "beef-noodles-extra-large",
        name: "Beef Noodles (Extra Large)",
        description: "Extra large cup of beef noodles",
        price: 180,
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
        price: 55,
        category: "carb-cup"
      },
      {
        id: "chicken-friedrice-medium",
        name: "Chicken Fried Rice (Medium)",
        description: "Medium cup of chicken fried rice",
        price: 85,
        category: "carb-cup"
      },
      {
        id: "chicken-friedrice-large",
        name: "Chicken Fried Rice (Large)",
        description: "Large cup of chicken fried rice",
        price: 120,
        category: "carb-cup"
      },
      {
        id: "chicken-friedrice-extra-large",
        name: "Chicken Fried Rice (Extra Large)",
        description: "Extra large cup of chicken fried rice",
        price: 180,
        category: "carb-cup"
      },
      {
        id: "pork-friedrice-small",
        name: "Pork Fried Rice (Small)",
        description: "Small cup of pork fried rice",
        price: 55,
        category: "carb-cup"
      },
      {
        id: "pork-friedrice-medium",
        name: "Pork Fried Rice (Medium)",
        description: "Medium cup of pork fried rice",
        price: 85,
        category: "carb-cup"
      },
      {
        id: "pork-friedrice-large",
        name: "Pork Fried Rice (Large)",
        description: "Large cup of pork fried rice",
        price: 120,
        category: "carb-cup"
      },
      {
        id: "pork-friedrice-extra-large",
        name: "Pork Fried Rice (Extra Large)",
        description: "Extra large cup of pork fried rice",
        price: 180,
        category: "carb-cup"
      },
      {
        id: "beef-friedrice-small",
        name: "Beef Fried Rice (Small)",
        description: "Small cup of beef fried rice",
        price: 55,
        category: "carb-cup"
      },
      {
        id: "beef-friedrice-medium",
        name: "Beef Fried Rice (Medium)",
        description: "Medium cup of beef fried rice",
        price: 85,
        category: "carb-cup"
      },
      {
        id: "beef-friedrice-large",
        name: "Beef Fried Rice (Large)",
        description: "Large cup of beef fried rice",
        price: 120,
        category: "carb-cup"
      },
      {
        id: "beef-friedrice-extra-large",
        name: "Beef Fried Rice (Extra Large)",
        description: "Extra large cup of beef fried rice",
        price: 180,
        category: "carb-cup"
      },
      {
        id: "assorted-friedrice-small",
        name: "Assorted Fried Rice (Small)",
        description: "Small cup of assorted fried rice",
        price: 55,
        category: "carb-cup"
      },
      {
        id: "assorted-friedrice-medium",
        name: "Assorted Fried Rice (Medium)",
        description: "Medium cup of assorted fried rice",
        price: 85,
        category: "carb-cup"
      },
      {
        id: "assorted-friedrice-large",
        name: "Assorted Fried Rice (Large)",
        description: "Large cup of assorted fried rice",
        price: 120,
        category: "carb-cup"
      },
      {
        id: "assorted-friedrice-extra-large",
        name: "Assorted Fried Rice (Extra Large)",
        description: "Extra large cup of assorted fried rice",
        price: 180,
        category: "carb-cup"
      },
      {
        id: "chicken-jollof-small",
        name: "Chicken Jollof (Small)",
        description: "Small cup of chicken jollof",
        price: 55,
        category: "carb-cup"
      },
      {
        id: "chicken-jollof-medium",
        name: "Chicken Jollof (Medium)",
        description: "Medium cup of chicken jollof",
        price: 85,
        category: "carb-cup"
      },
      {
        id: "chicken-jollof-large",
        name: "Chicken Jollof (Large)",
        description: "Large cup of chicken jollof",
        price: 120,
        category: "carb-cup"
      },
      {
        id: "chicken-jollof-extra-large",
        name: "Chicken Jollof (Extra Large)",
        description: "Extra large cup of chicken jollof",
        price: 180,
        category: "carb-cup"
      },
      {
        id: "pork-jollof-small",
        name: "Pork Jollof (Small)",
        description: "Small cup of pork jollof",
        price: 55,
        category: "carb-cup"
      },
      {
        id: "pork-jollof-medium",
        name: "Pork Jollof (Medium)",
        description: "Medium cup of pork jollof",
        price: 85,
        category: "carb-cup"
      },
      {
        id: "pork-jollof-large",
        name: "Pork Jollof (Large)",
        description: "Large cup of pork jollof",
        price: 120,
        category: "carb-cup"
      },
      {
        id: "pork-jollof-extra-large",
        name: "Pork Jollof (Extra Large)",
        description: "Extra large cup of pork jollof",
        price: 180,
        category: "carb-cup"
      },
      {
        id: "beef-jollof-small",
        name: "Beef Jollof (Small)",
        description: "Small cup of beef jollof",
        price: 55,
        category: "carb-cup"
      },
      {
        id: "beef-jollof-medium",
        name: "Beef Jollof (Medium)",
        description: "Medium cup of beef jollof",
        price: 85,
        category: "carb-cup"
      },
      {
        id: "beef-jollof-large",
        name: "Beef Jollof (Large)",
        description: "Large cup of beef jollof",
        price: 120,
        category: "carb-cup"
      },
      {
        id: "beef-jollof-extra-large",
        name: "Beef Jollof (Extra Large)",
        description: "Extra large cup of beef jollof",
        price: 180,
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
        price: 55,
        category: "carb-cup"
      },
      {
        id: "assorted-jollof-medium",
        name: "Assorted Jollof (Medium)",
        description: "Medium cup of assorted jollof",
        price: 85,
        category: "carb-cup"
      },
      {
        id: "assorted-jollof-large",
        name: "Assorted Jollof (Large)",
        description: "Large cup of assorted jollof",
        price: 120,
        category: "carb-cup"
      },
      {
        id: "assorted-jollof-extra-large",
        name: "Assorted Jollof (Extra Large)",
        description: "Extra large cup of assorted jollof",
        price: 180,
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
        name: "6 Pieces Wings + Chicken/Beef Shawarma + Drink",
        description: "6 pieces wings (flavour of your choice) + chicken/beef shawarma + a drink",
        price: 133,
        category: "shark-meal-combos"
      },
      {
        id: "wings-fries-burger-combo",
        name: "6 Pieces Wings + Fries/Burger + Drink",
        description: "6 pieces wings (flavour of your choice) + fries/burger + a drink",
        price: 148,
        category: "shark-meal-combos"
      },
      {
        id: "wings-friedrice-combo",
        name: "6 Pieces Wings + Fried Rice + Drink",
        description: "6 pieces wings (flavour of your choice) + fried rice + a drink",
        price: 98,
        category: "shark-meal-combos"
      },
      {
        id: "wings-jollof-combo",
        name: "6 Pieces Wings + Jollof + Drink",
        description: "6 pieces wings (flavour of your choice) + jollof + a drink",
        price: 98,
        category: "shark-meal-combos"
      },
      {
        id: "wings-assorted-friedrice-combo",
        name: "6 Pieces Wings + Assorted Fried Rice + Drink",
        description: "6 pieces wings (flavour of your choice) + assorted fried rice + a drink",
        price: 118,
        category: "shark-meal-combos"
      },
      {
        id: "wings-assorted-jollof-combo",
        name: "6 Pieces Wings + Assorted Jollof + Drink",
        description: "6 pieces wings (flavour of your choice) + assorted jollof + a drink",
        price: 118,
        category: "shark-meal-combos"
      },
      {
        id: "wings-assorted-noodles-combo",
        name: "6 Pieces Wings + Assorted Noodles + Drink",
        description: "6 pieces wings (flavour of your choice) + assorted noodles + a drink",
        price: 118,
        category: "shark-meal-combos"
      },
      {
        id: "wings-mixed-shawarma-combo",
        name: "6 Pieces Wings + Mixed Shawarma + Drink",
        description: "6 pieces wings (flavour of your choice) + mixed shawarma + a drink",
        price: 138,
        category: "shark-meal-combos"
      }
    ]
  },
  {
    id: "extras",
    name: "Extras",
    items: [
      {
        id: "extra-chicken",
        name: "Extra Chicken",
        description: "Additional chicken portion",
        price: 40,
        category: "extras"
      },
      {
        id: "extra-rice",
        name: "Extra Rice",
        description: "Additional rice portion",
        price: 15,
        category: "extras"
      },
      {
        id: "extra-shito",
        name: "Extra Shito",
        description: "Additional shito sauce",
        price: 10,
        category: "extras"
      },
      {
        id: "extra-egg",
        name: "Extra Egg",
        description: "Additional egg",
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
        id: "sausage",
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
        description: "Additional protein serving",
        price: 40,
        category: "extras"
      }
    ]
  }
];