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
}

export const nutrientItems: NutrientItem[] = [
  {
    id: "p1",
    name: "Chicken Breast",
    category: "Protein",
    calories: 165,
    protein: 31,
    carbs: 0,
    fat: 3.6,
    fiber: 0,
    servingSize: "100g",
    benefits: ["Muscle building", "High protein", "Low fat"],
    image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "p2",
    name: "Salmon",
    category: "Protein",
    calories: 208,
    protein: 22,
    carbs: 0,
    fat: 13,
    fiber: 0,
    servingSize: "100g",
    benefits: ["Omega-3", "Heart health", "Rich in nutrients"],
    image: "https://images.unsplash.com/photo-1619351455949-a8169b39ead1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "p3",
    name: "Tofu",
    category: "Protein",
    calories: 76,
    protein: 8,
    carbs: 3,
    fat: 5,
    fiber: 1,
    servingSize: "100g",
    benefits: ["Plant-based", "Versatile", "Good source of iron"],
    image: "https://images.unsplash.com/photo-1606756790138-261d2b21cd75?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "c1",
    name: "Brown Rice",
    category: "Carbs",
    calories: 111,
    protein: 2.6,
    carbs: 23,
    fat: 1,
    fiber: 2,
    servingSize: "100g",
    benefits: ["Complex carbs", "Sustained energy", "High in fiber"],
    image: "https://images.unsplash.com/photo-1563795736639-9ca447ca1563?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "c2",
    name: "Sweet Potato",
    category: "Carbs",
    calories: 86,
    protein: 1.6,
    carbs: 20,
    fat: 0.1,
    fiber: 3,
    servingSize: "100g",
    benefits: ["Vitamin A", "Antioxidants", "Good source of fiber"],
    image: "https://images.unsplash.com/photo-1560717478-a94ca39e3e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "c3",
    name: "Oats",
    category: "Carbs",
    calories: 68,
    protein: 2.4,
    carbs: 12,
    fat: 1.4,
    fiber: 1.7,
    servingSize: "100g",
    benefits: ["Soluble fiber", "Heart health", "Slow energy release"],
    image: "https://images.unsplash.com/photo-1600828354463-641b91841ba1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "f1",
    name: "Avocado",
    category: "Fat",
    calories: 160,
    protein: 2,
    carbs: 9,
    fat: 15,
    fiber: 7,
    servingSize: "100g",
    benefits: ["Healthy fats", "Potassium", "Heart health"],
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a4a6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "f2",
    name: "Olive Oil",
    category: "Fat",
    calories: 884,
    protein: 0,
    carbs: 0,
    fat: 100,
    fiber: 0,
    servingSize: "100g",
    benefits: ["Monounsaturated fats", "Antioxidants", "Heart health"],
    image: "https://images.unsplash.com/photo-1560264234-b56f88874f10?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "f3",
    name: "Chia Seeds",
    category: "Fat",
    calories: 486,
    protein: 17,
    carbs: 42,
    fat: 31,
    fiber: 34,
    servingSize: "100g",
    benefits: ["Omega-3", "Fiber", "Antioxidants"],
    image: "https://images.unsplash.com/photo-1608982283527-e25ca428ff99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "v1",
    name: "Broccoli",
    category: "Vegetables",
    calories: 34,
    protein: 2.8,
    carbs: 7,
    fat: 0.4,
    fiber: 2.6,
    servingSize: "100g",
    benefits: ["Vitamin C", "Vitamin K", "Fiber"],
    image: "https://images.unsplash.com/photo-1563729783-63953f4a5474?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "v2",
    name: "Spinach",
    category: "Vegetables",
    calories: 23,
    protein: 3.6,
    carbs: 3.6,
    fat: 0.4,
    fiber: 2.2,
    servingSize: "100g",
    benefits: ["Iron", "Vitamin A", "Antioxidants"],
    image: "https://images.unsplash.com/photo-1560807605-ba5a62717f03?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "v3",
    name: "Bell Peppers",
    category: "Vegetables",
    calories: 31,
    protein: 1,
    carbs: 6,
    fat: 0.3,
    fiber: 2.1,
    servingSize: "100g",
    benefits: ["Vitamin C", "Antioxidants", "Low calorie"],
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f623?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "d1",
    name: "Greek Yogurt",
    category: "Dairy",
    calories: 59,
    protein: 10,
    carbs: 3.6,
    fat: 0.4,
    fiber: 0,
    servingSize: "100g",
    benefits: ["Probiotics", "Calcium", "High protein"],
    image: "https://images.unsplash.com/photo-1617598434325-a24944b63655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "d2",
    name: "Almond Milk",
    category: "Dairy",
    calories: 13,
    protein: 0.5,
    carbs: 1.5,
    fat: 1.1,
    fiber: 0.5,
    servingSize: "100g",
    benefits: ["Low calorie", "Vitamin E", "Dairy-free"],
    image: "https://images.unsplash.com/photo-1614353394940-c79885975845?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "n1",
    name: "Almonds",
    category: "Nuts",
    calories: 579,
    protein: 21,
    carbs: 22,
    fat: 50,
    fiber: 12.5,
    servingSize: "100g",
    benefits: ["Healthy fats", "Vitamin E", "Magnesium"],
    image: "https://images.unsplash.com/photo-1619895862022-0919398863a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "n2",
    name: "Walnuts",
    category: "Nuts",
    calories: 654,
    protein: 14,
    carbs: 14,
    fat: 65,
    fiber: 7,
    servingSize: "100g",
    benefits: ["Omega-3", "Antioxidants", "Brain health"],
    image: "https://images.unsplash.com/photo-1638927334749-f486e858b951?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
    {
    id: "n3",
    name: "Peanuts",
    category: "Nuts",
    calories: 567,
    protein: 26,
    carbs: 16,
    fat: 49,
    fiber: 9,
    servingSize: "100g",
    benefits: ["Protein", "Healthy fats", "Energy"],
    image: "https://images.unsplash.com/photo-1558427330-a2934c324cd5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

// Update the nutrient plans with more options
export const nutrientPlans: NutrientPlan[] = [
  {
    id: "np1",
    title: "Weight Loss Plan",
    description: "Calorie-controlled nutrition plan designed for sustainable weight loss",
    dailyCalories: 1800,
    macroSplit: {
      protein: 35,
      carbs: 40,
      fat: 25
    },
    recommendations: [
      {
        id: "p1",
        name: "Chicken Breast",
        image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 165,
      },
      {
        id: "v2",
        name: "Spinach",
        image: "https://images.unsplash.com/photo-1560807605-ba5a62717f03?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 23,
      },
      {
        id: "c1",
        name: "Brown Rice",
        image: "https://images.unsplash.com/photo-1563795736639-9ca447ca1563?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 111,
      },
      {
        id: "f2",
        name: "Olive Oil",
        image: "https://images.unsplash.com/photo-1560264234-b56f88874f10?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 884,
      },
      {
        id: "d1",
        name: "Greek Yogurt",
        image: "https://images.unsplash.com/photo-1617598434325-a24944b63655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 59,
      },
      {
        id: "n1",
        name: "Almonds",
        image: "https://images.unsplash.com/photo-1619895862022-0919398863a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 579,
      },
    ],
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "np2",
    title: "Muscle Gain",
    description: "Higher calorie plan focused on protein intake for muscle building",
    dailyCalories: 2600,
    macroSplit: {
      protein: 40,
      carbs: 40,
      fat: 20
    },
    recommendations: [
      {
        id: "p1",
        name: "Chicken Breast",
        image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 165,
      },
      {
        id: "p3",
        name: "Tofu",
        image: "https://images.unsplash.com/photo-1606756790138-261d2b21cd75?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 76,
      },
      {
        id: "c1",
        name: "Brown Rice",
        image: "https://images.unsplash.com/photo-1563795736639-9ca447ca1563?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 111,
      },
      {
        id: "c3",
        name: "Oats",
        image: "https://images.unsplash.com/photo-1600828354463-641b91841ba1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 68,
      },
      {
        id: "f1",
        name: "Avocado",
        image: "https://images.unsplash.com/photo-1556905055-8f358a7a4a6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 160,
      },
      {
        id: "d1",
        name: "Greek Yogurt",
        image: "https://images.unsplash.com/photo-1617598434325-a24944b63655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 59,
      },
    ],
    image: "https://images.unsplash.com/photo-1532384555668-bc0c32a17ffd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "np3",
    title: "Balanced Maintenance",
    description: "Well-rounded nutrition plan for maintaining current body composition",
    dailyCalories: 2200,
    macroSplit: {
      protein: 30,
      carbs: 45,
      fat: 25
    },
    recommendations: [
      {
        id: "p2",
        name: "Salmon",
        image: "https://images.unsplash.com/photo-1619351455949-a8169b39ead1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 208,
      },
      {
        id: "v1",
        name: "Broccoli",
        image: "https://images.unsplash.com/photo-1563729783-63953f4a5474?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 34,
      },
      {
        id: "c2",
        name: "Sweet Potato",
        image: "https://images.unsplash.com/photo-1560717478-a94ca39e3e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 86,
      },
      {
        id: "f3",
        name: "Chia Seeds",
        image: "https://images.unsplash.com/photo-1608982283527-e25ca428ff99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 486,
      },
      {
        id: "d2",
        name: "Almond Milk",
        image: "https://images.unsplash.com/photo-1614353394940-c79885975845?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 13,
      },
      {
        id: "n2",
        name: "Walnuts",
        image: "https://images.unsplash.com/photo-1638927334749-f486e858b951?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 654,
      },
    ],
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "np4",
    title: "Keto Plan",
    description: "Low-carb, high-fat nutrition plan for ketogenic lifestyle",
    dailyCalories: 2000,
    macroSplit: {
      protein: 25,
      carbs: 5,
      fat: 70
    },
    recommendations: [
      {
        id: "p1",
        name: "Chicken Breast",
        image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 165,
      },
      {
        id: "p3",
        name: "Tofu",
        image: "https://images.unsplash.com/photo-1606756790138-261d2b21cd75?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 76,
      },
      {
        id: "f1",
        name: "Avocado",
        image: "https://images.unsplash.com/photo-1556905055-8f358a7a4a6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 160,
      },
      {
        id: "f2",
        name: "Olive Oil",
        image: "https://images.unsplash.com/photo-1560264234-b56f88874f10?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 884,
      },
      {
        id: "f3",
        name: "Chia Seeds",
        image: "https://images.unsplash.com/photo-1608982283527-e25ca428ff99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 486,
      },
      {
        id: "n1",
        name: "Almonds",
        image: "https://images.unsplash.com/photo-1619895862022-0919398863a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 579,
      },
    ],
    image: "https://images.unsplash.com/photo-1606756790138-261d2b21cd75?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "np5",
    title: "Vegan Plan",
    description: "Plant-based nutrition plan for optimal health and performance",
    dailyCalories: 2100,
    macroSplit: {
      protein: 20,
      carbs: 55,
      fat: 25
    },
    recommendations: [
      {
        id: "v1",
        name: "Broccoli",
        image: "https://images.unsplash.com/photo-1563729783-63953f4a5474?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 34,
      },
      {
        id: "v2",
        name: "Spinach",
        image: "https://images.unsplash.com/photo-1560807605-ba5a62717f03?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 23,
      },
      {
        id: "v3",
        name: "Bell Peppers",
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f623?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 31,
      },
      {
        id: "c1",
        name: "Brown Rice",
        image: "https://images.unsplash.com/photo-1563795736639-9ca447ca1563?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 111,
      },
      {
        id: "c2",
        name: "Sweet Potato",
        image: "https://images.unsplash.com/photo-1560717478-a94ca39e3e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 86,
      },
      {
        id: "n2",
        name: "Walnuts",
        image: "https://images.unsplash.com/photo-1638927334749-f486e858b951?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 654,
      },
    ],
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "np6",
    title: "Performance Plan",
    description: "Designed for athletes and high-performance activities",
    dailyCalories: 2800,
    macroSplit: {
      protein: 30,
      carbs: 50,
      fat: 20
    },
    recommendations: [
      {
        id: "p2",
        name: "Salmon",
        image: "https://images.unsplash.com/photo-1619351455949-a8169b39ead1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 208,
      },
      {
        id: "p3",
        name: "Tofu",
        image: "https://images.unsplash.com/photo-1606756790138-261d2b21cd75?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 76,
      },
      {
        id: "c1",
        name: "Brown Rice",
        image: "https://images.unsplash.com/photo-1563795736639-9ca447ca1563?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 111,
      },
      {
        id: "c3",
        name: "Oats",
        image: "https://images.unsplash.com/photo-1600828354463-641b91841ba1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 68,
      },
      {
        id: "f1",
        name: "Avocado",
        image: "https://images.unsplash.com/photo-1556905055-8f358a7a4a6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 160,
      },
      {
        id: "n3",
        name: "Peanuts",
        image: "https://images.unsplash.com/photo-1558427330-a2934c324cd5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 567,
      },
    ],
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export function getNutrientItemsByCategory(category: string): NutrientItem[] {
  return nutrientItems.filter(item => item.category === category);
}

export function getNutrientPlans(): NutrientPlan[] {
  return nutrientPlans;
}

export function getNutrientItemById(id: string): NutrientItem | undefined {
  return nutrientItems.find(item => item.id === id);
}
