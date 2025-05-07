
// Data based on https://www.kaggle.com/datasets/utsavdey1410/food-nutrition-dataset
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
  image: string;
  benefits: string[];
}

export interface NutrientPlan {
  id: string;
  title: string;
  description: string;
  targetGoal: "muscle_gain" | "weight_loss" | "maintenance" | "performance";
  dailyCalories: number;
  macroSplit: {
    protein: number; // percentage
    carbs: number;   // percentage
    fat: number;     // percentage
  };
  recommendations: NutrientItem[];
}

// Sample food items based on the dataset
export const nutrientItems: NutrientItem[] = [
  {
    id: "n1",
    name: "Chicken Breast",
    category: "Protein",
    calories: 165,
    protein: 31,
    carbs: 0,
    fat: 3.6,
    fiber: 0,
    servingSize: "100g",
    image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    benefits: ["Lean protein source", "Builds muscle", "Supports immune system"]
  },
  {
    id: "n2",
    name: "Salmon",
    category: "Protein",
    calories: 208,
    protein: 20,
    carbs: 0,
    fat: 13,
    fiber: 0,
    servingSize: "100g",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    benefits: ["Rich in omega-3 fatty acids", "Good for heart health", "Anti-inflammatory properties"]
  },
  {
    id: "n3",
    name: "Quinoa",
    category: "Carbs",
    calories: 120,
    protein: 4.4,
    carbs: 21.3,
    fat: 1.9,
    fiber: 2.8,
    servingSize: "100g cooked",
    image: "https://images.unsplash.com/photo-1596560548464-f010549b84d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    benefits: ["Complete plant protein", "Rich in fiber", "Contains all essential amino acids"]
  },
  {
    id: "n4",
    name: "Sweet Potato",
    category: "Carbs",
    calories: 86,
    protein: 1.6,
    carbs: 20.1,
    fat: 0.1,
    fiber: 3,
    servingSize: "100g",
    image: "https://images.unsplash.com/photo-1596185570316-d4005405a915?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    benefits: ["High in vitamin A", "Good source of fiber", "Low glycemic index"]
  },
  {
    id: "n5",
    name: "Avocado",
    category: "Fat",
    calories: 160,
    protein: 2,
    carbs: 8.5,
    fat: 14.7,
    fiber: 6.7,
    servingSize: "100g",
    image: "https://images.unsplash.com/photo-1601039641847-7857b994d704?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    benefits: ["Healthy monounsaturated fats", "High in potassium", "Contains antioxidants"]
  },
  {
    id: "n6",
    name: "Spinach",
    category: "Vegetables",
    calories: 23,
    protein: 2.9,
    carbs: 3.6,
    fat: 0.4,
    fiber: 2.2,
    servingSize: "100g",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    benefits: ["High in iron", "Good source of vitamins A and K", "Contains antioxidants"]
  },
  {
    id: "n7",
    name: "Greek Yogurt",
    category: "Dairy",
    calories: 59,
    protein: 10,
    carbs: 3.6,
    fat: 0.4,
    fiber: 0,
    servingSize: "100g",
    image: "https://images.unsplash.com/photo-1560008581-09826d1de69e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    benefits: ["High protein content", "Contains probiotics", "Good source of calcium"]
  },
  {
    id: "n8",
    name: "Almonds",
    category: "Nuts",
    calories: 579,
    protein: 21.2,
    carbs: 21.7,
    fat: 49.9,
    fiber: 12.5,
    servingSize: "100g",
    image: "https://images.unsplash.com/photo-1510544921220-f0bae49afa44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    benefits: ["Good source of vitamin E", "Contains healthy fats", "Rich in antioxidants"]
  }
];

// Sample nutrient plans
export const nutrientPlans: NutrientPlan[] = [
  {
    id: "plan1",
    title: "Muscle Building Plan",
    description: "High protein diet to support muscle growth and recovery after workouts",
    targetGoal: "muscle_gain",
    dailyCalories: 3000,
    macroSplit: {
      protein: 30, // percentage
      carbs: 50,   // percentage
      fat: 20     // percentage
    },
    recommendations: [
      nutrientItems[0], // Chicken Breast
      nutrientItems[1], // Salmon
      nutrientItems[2], // Quinoa
      nutrientItems[6]  // Greek Yogurt
    ]
  },
  {
    id: "plan2",
    title: "Weight Loss Plan",
    description: "Balanced diet with moderate protein and lower calories to support healthy weight loss",
    targetGoal: "weight_loss",
    dailyCalories: 1800,
    macroSplit: {
      protein: 35, // percentage
      carbs: 40,   // percentage
      fat: 25     // percentage
    },
    recommendations: [
      nutrientItems[0], // Chicken Breast
      nutrientItems[5], // Spinach
      nutrientItems[3], // Sweet Potato
      nutrientItems[6]  // Greek Yogurt
    ]
  },
  {
    id: "plan3",
    title: "Performance Nutrition",
    description: "Higher carb nutrition plan for endurance and performance during intense workouts",
    targetGoal: "performance",
    dailyCalories: 2500,
    macroSplit: {
      protein: 25, // percentage
      carbs: 55,   // percentage
      fat: 20     // percentage
    },
    recommendations: [
      nutrientItems[2], // Quinoa
      nutrientItems[3], // Sweet Potato
      nutrientItems[4], // Avocado
      nutrientItems[7]  // Almonds
    ]
  }
];

export const getNutrientItemById = (id: string): NutrientItem | undefined => {
  return nutrientItems.find(item => item.id === id);
};

export const getNutrientPlanById = (id: string): NutrientPlan | undefined => {
  return nutrientPlans.find(plan => plan.id === id);
};

export const getNutrientItemsByCategory = (category: string): NutrientItem[] => {
  return nutrientItems.filter(item => item.category === category);
};

export const getNutrientPlans = (): NutrientPlan[] => {
  return nutrientPlans;
};
