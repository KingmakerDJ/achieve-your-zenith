export interface NutrientItem {
  id: string;
  name: string;
  category: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  servingSize: string;
  benefits: string[];
  image: string;
  isVegetarian: boolean;
}

export interface MacroSplit {
  protein: number;
  carbs: number;
  fat: number;
}

export interface NutrientPlan {
  id: string;
  title: string;
  description: string;
  dailyCalories: number;
  macroSplit: MacroSplit;
  recommendations: {
    id: string;
    name: string;
    image: string;
    calories: number;
  }[];
  image: string;
  isVegetarian: boolean;
}

// Updated nutrient items with Indian food nutrition data and vegetarian flag
export const nutrientItems: NutrientItem[] = [
  {
    id: "p1",
    name: "Chicken Curry",
    category: "Protein",
    calories: 243,
    protein: 15,
    carbs: 6,
    fat: 18,
    fiber: 2,
    servingSize: "100g",
    benefits: ["High protein", "Rich in nutrients", "Flavor-rich"],
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isVegetarian: false
  },
  {
    id: "p2",
    name: "Paneer",
    category: "Protein",
    calories: 265,
    protein: 18.3,
    carbs: 3.1,
    fat: 20.8,
    fiber: 0,
    servingSize: "100g",
    benefits: ["Vegetarian protein", "Calcium-rich", "Good for bones"],
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isVegetarian: true
  },
  {
    id: "p3",
    name: "Dal",
    category: "Protein",
    calories: 116,
    protein: 9,
    carbs: 20,
    fat: 0.4,
    fiber: 8,
    servingSize: "100g",
    benefits: ["Plant-based", "High fiber", "Good source of iron"],
    image: "https://images.unsplash.com/photo-1613292443284-8d10ef9d4b07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isVegetarian: true
  },
  {
    id: "c1",
    name: "Basmati Rice",
    category: "Carbs",
    calories: 121,
    protein: 2.7,
    carbs: 25.2,
    fat: 0.3,
    fiber: 0.4,
    servingSize: "100g",
    benefits: ["Low fat", "Energy source", "Easy to digest"],
    image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isVegetarian: true
  },
  {
    id: "c2",
    name: "Chapati",
    category: "Carbs",
    calories: 120,
    protein: 3.5,
    carbs: 21,
    fat: 3.5,
    fiber: 3.9,
    servingSize: "1 piece",
    benefits: ["Whole grain", "Complex carbs", "No added sugar"],
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isVegetarian: true
  },
  {
    id: "c3",
    name: "Paratha",
    category: "Carbs",
    calories: 170,
    protein: 4.2,
    carbs: 24,
    fat: 6.5,
    fiber: 4,
    servingSize: "1 piece",
    benefits: ["Filling", "Energy-rich", "Source of carbohydrates"],
    image: "https://images.unsplash.com/photo-1582951694123-119d445e4c47?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isVegetarian: true
  },
  {
    id: "f1",
    name: "Ghee",
    category: "Fat",
    calories: 900,
    protein: 0,
    carbs: 0,
    fat: 100,
    fiber: 0,
    servingSize: "100g",
    benefits: ["Lactose-free", "Rich in vitamins A, D, E, K", "Traditional superfood"],
    image: "https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isVegetarian: true
  },
  {
    id: "f2",
    name: "Coconut Oil",
    category: "Fat",
    calories: 862,
    protein: 0,
    carbs: 0,
    fat: 100,
    fiber: 0,
    servingSize: "100g",
    benefits: ["Medium-chain fatty acids", "Heat stable for cooking", "Skin health"],
    image: "https://images.unsplash.com/photo-1611311258414-4eda1bc0b89e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isVegetarian: true
  },
  {
    id: "f3",
    name: "Mustard Oil",
    category: "Fat",
    calories: 884,
    protein: 0,
    carbs: 0,
    fat: 100,
    fiber: 0,
    servingSize: "100g",
    benefits: ["Rich in omega-3", "Traditional cooking oil", "Strong flavor"],
    image: "https://images.unsplash.com/photo-1617055407123-3d7130c2ab27?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isVegetarian: true
  },
  {
    id: "v1",
    name: "Palak (Spinach)",
    category: "Vegetables",
    calories: 23,
    protein: 2.9,
    carbs: 3.6,
    fat: 0.4,
    fiber: 2.2,
    servingSize: "100g",
    benefits: ["Iron-rich", "Vitamin A", "Antioxidants"],
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isVegetarian: true
  },
  {
    id: "v2",
    name: "Bhindi (Okra)",
    category: "Vegetables",
    calories: 33,
    protein: 1.9,
    carbs: 7.5,
    fat: 0.1,
    fiber: 3.2,
    servingSize: "100g",
    benefits: ["Vitamin C", "Folate", "Low calorie"],
    image: "https://images.unsplash.com/photo-1544828503-cbe4b9d6d73f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isVegetarian: true
  },
  {
    id: "v3",
    name: "Aloo (Potato)",
    category: "Vegetables",
    calories: 77,
    protein: 2,
    carbs: 17,
    fat: 0.1,
    fiber: 2.2,
    servingSize: "100g",
    benefits: ["Vitamin C", "Potassium", "Versatile ingredient"],
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isVegetarian: true
  },
  {
    id: "d1",
    name: "Lassi",
    category: "Dairy",
    calories: 114,
    protein: 3.3,
    carbs: 17,
    fat: 4,
    fiber: 0,
    servingSize: "200ml",
    benefits: ["Probiotics", "Digestive health", "Calcium source"],
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isVegetarian: true
  },
  {
    id: "d2",
    name: "Curd (Yogurt)",
    category: "Dairy",
    calories: 61,
    protein: 3.5,
    carbs: 4.7,
    fat: 3.3,
    fiber: 0,
    servingSize: "100g",
    benefits: ["Gut health", "Probiotics", "Cooling effect"],
    image: "https://images.unsplash.com/photo-1551893134-55fdead3e8c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isVegetarian: true
  },
  {
    id: "n1",
    name: "Cashews",
    category: "Nuts",
    calories: 553,
    protein: 18.2,
    carbs: 30.2,
    fat: 43.9,
    fiber: 3.3,
    servingSize: "100g",
    benefits: ["Heart health", "Protein rich", "Minerals"],
    image: "https://images.unsplash.com/photo-1563282003-5d518bb8571a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isVegetarian: true
  },
  {
    id: "n2",
    name: "Almonds",
    category: "Nuts",
    calories: 579,
    protein: 21.2,
    carbs: 21.7,
    fat: 49.9,
    fiber: 12.5,
    servingSize: "100g",
    benefits: ["Vitamin E", "Heart-healthy fats", "Antioxidants"],
    image: "https://images.unsplash.com/photo-1574723404916-d3db6cc74e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isVegetarian: true
  },
  {
    id: "n3",
    name: "Peanuts",
    category: "Nuts",
    calories: 567,
    protein: 25.8,
    carbs: 16.1,
    fat: 49.2,
    fiber: 8.5,
    servingSize: "100g",
    benefits: ["Protein source", "Healthy fats", "Energy"],
    image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isVegetarian: true
  },
  // Added some non-vegetarian items
  {
    id: "p4",
    name: "Mutton Curry",
    category: "Protein",
    calories: 294,
    protein: 19,
    carbs: 4,
    fat: 22,
    fiber: 1,
    servingSize: "100g",
    benefits: ["High protein", "Iron-rich", "Traditional cuisine"],
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isVegetarian: false
  },
  {
    id: "p5",
    name: "Fish Curry",
    category: "Protein",
    calories: 195,
    protein: 22,
    carbs: 3,
    fat: 11,
    fiber: 0,
    servingSize: "100g",
    benefits: ["Omega-3", "Low fat", "Heart healthy"],
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isVegetarian: false
  }
];

// Update the nutrient plans with Indian food options and vegetarian classification
export const nutrientPlans: NutrientPlan[] = [
  {
    id: "np1",
    title: "Indian Weight Loss (Vegetarian)",
    description: "Traditional vegetarian Indian foods arranged for gradual weight loss",
    dailyCalories: 1800,
    macroSplit: {
      protein: 30,
      carbs: 45,
      fat: 25
    },
    recommendations: [
      {
        id: "p3",
        name: "Dal",
        image: "https://images.unsplash.com/photo-1613292443284-8d10ef9d4b07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 116,
      },
      {
        id: "v1",
        name: "Palak (Spinach)",
        image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 23,
      },
      {
        id: "c2",
        name: "Chapati",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 120,
      },
      {
        id: "d2",
        name: "Curd (Yogurt)",
        image: "https://images.unsplash.com/photo-1551893134-55fdead3e8c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 61,
      },
      {
        id: "v2",
        name: "Bhindi (Okra)",
        image: "https://images.unsplash.com/photo-1544828503-cbe4b9d6d73f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 33,
      },
      {
        id: "n2",
        name: "Almonds",
        image: "https://images.unsplash.com/photo-1574723404916-d3db6cc74e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 579,
      },
    ],
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isVegetarian: true
  },
  {
    id: "np2",
    title: "Indian Muscle Gain (Non-Veg)",
    description: "Protein-rich Indian diet with non-vegetarian options for building strength and muscle",
    dailyCalories: 2600,
    macroSplit: {
      protein: 35,
      carbs: 45,
      fat: 20
    },
    recommendations: [
      {
        id: "p1",
        name: "Chicken Curry",
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 243,
      },
      {
        id: "p4",
        name: "Mutton Curry",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 294,
      },
      {
        id: "c1",
        name: "Basmati Rice",
        image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 121,
      },
      {
        id: "d1",
        name: "Lassi",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 114,
      },
      {
        id: "f1",
        name: "Ghee",
        image: "https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 900,
      },
      {
        id: "n1",
        name: "Cashews",
        image: "https://images.unsplash.com/photo-1563282003-5d518bb8bb71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 553,
      },
    ],
    image: "https://images.unsplash.com/photo-1574883052806-413e0927a4d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isVegetarian: false
  },
  {
    id: "np3",
    title: "South Indian Diet (Vegetarian)",
    description: "Rice and lentil based nutrition plan with traditional vegetarian South Indian foods",
    dailyCalories: 2200,
    macroSplit: {
      protein: 25,
      carbs: 55,
      fat: 20
    },
    recommendations: [
      {
        id: "c1",
        name: "Basmati Rice",
        image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 121,
      },
      {
        id: "p3",
        name: "Dal",
        image: "https://images.unsplash.com/photo-1613292443284-8d10ef9d4b07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 116,
      },
      {
        id: "v1",
        name: "Palak (Spinach)",
        image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 23,
      },
      {
        id: "f2",
        name: "Coconut Oil",
        image: "https://images.unsplash.com/photo-1611311258414-4eda1bc0b89e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 862,
      },
      {
        id: "d2",
        name: "Curd (Yogurt)",
        image: "https://images.unsplash.com/photo-1551893134-55fdead3e8c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 61,
      },
      {
        id: "n1",
        name: "Cashews",
        image: "https://images.unsplash.com/photo-1563282003-5d518bb8bb71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 553,
      },
    ],
    image: "https://images.unsplash.com/photo-1624374053855-39a18d6e4f9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isVegetarian: true
  },
  {
    id: "np4",
    title: "North Indian Diet (Non-Veg)",
    description: "Wheat-based nutrition with traditional North Indian flavors and non-vegetarian options",
    dailyCalories: 2300,
    macroSplit: {
      protein: 25,
      carbs: 50,
      fat: 25
    },
    recommendations: [
      {
        id: "c2",
        name: "Chapati",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 120,
      },
      {
        id: "p1",
        name: "Chicken Curry",
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 243,
      },
      {
        id: "v3",
        name: "Aloo (Potato)",
        image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 77,
      },
      {
        id: "f3",
        name: "Mustard Oil",
        image: "https://images.unsplash.com/photo-1617055407123-3d7130c2ab27?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 884,
      },
      {
        id: "d1",
        name: "Lassi",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 114,
      },
      {
        id: "n3",
        name: "Peanuts",
        image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 567,
      },
    ],
    image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isVegetarian: false
  },
  {
    id: "np5",
    title: "Vegetarian Indian",
    description: "Plant-based nutrition plan with traditional Indian vegetarian foods",
    dailyCalories: 2100,
    macroSplit: {
      protein: 20,
      carbs: 55,
      fat: 25
    },
    recommendations: [
      {
        id: "p2",
        name: "Paneer",
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 265,
      },
      {
        id: "p3",
        name: "Dal",
        image: "https://images.unsplash.com/photo-1613292443284-8d10ef9d4b07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 116,
      },
      {
        id: "c2",
        name: "Chapati",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 120,
      },
      {
        id: "v1",
        name: "Palak (Spinach)",
        image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 23,
      },
      {
        id: "v2",
        name: "Bhindi (Okra)",
        image: "https://images.unsplash.com/photo-1544828503-cbe4b9d6d73f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 33,
      },
      {
        id: "n2",
        name: "Almonds",
        image: "https://images.unsplash.com/photo-1574723404916-d3db6cc74e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 579,
      },
    ],
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isVegetarian: true
  },
  {
    id: "np6",
    title: "Indian Fitness Plan (Mixed)",
    description: "Balanced nutrition for active individuals with both vegetarian and non-vegetarian options",
    dailyCalories: 2400,
    macroSplit: {
      protein: 30,
      carbs: 50,
      fat: 20
    },
    recommendations: [
      {
        id: "p1",
        name: "Chicken Curry",
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 243,
      },
      {
        id: "c1",
        name: "Basmati Rice",
        image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 121,
      },
      {
        id: "v3",
        name: "Aloo (Potato)",
        image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 77,
      },
      {
        id: "d1",
        name: "Lassi",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 114,
      },
      {
        id: "f1",
        name: "Ghee",
        image: "https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 900,
      },
      {
        id: "n1",
        name: "Cashews",
        image: "https://images.unsplash.com/photo-1563282003-5d518bb8bb71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 553,
      },
    ],
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isVegetarian: false
  }
];

// Helper functions to get nutrient items by category and vegetarian status
export function getNutrientItemsByCategory(category: string, isVegetarian?: boolean): NutrientItem[] {
  if (isVegetarian === undefined) {
    return nutrientItems.filter(item => item.category === category);
  }
  return nutrientItems.filter(item => item.category === category && item.isVegetarian === isVegetarian);
}

// Helper function to get nutrient plans by vegetarian status
export function getNutrientPlansByType(isVegetarian?: boolean): NutrientPlan[] {
  if (isVegetarian === undefined) {
    return nutrientPlans;
  }
  return nutrientPlans.filter(plan => plan.isVegetarian === isVegetarian);
}

// Keep existing helper functions
export function getNutrientPlans(): NutrientPlan[] {
  return nutrientPlans;
}

export function getNutrientItemById(id: string): NutrientItem | undefined {
  return nutrientItems.find(item => item.id === id);
}
