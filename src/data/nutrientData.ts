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

// New dataset from https://www.kaggle.com/datasets/afsaja/workout-supplements-and-nutrition-products
export const nutrientItems: NutrientItem[] = [
  {
    id: "sup1",
    name: "Whey Protein Isolate",
    category: "Protein",
    calories: 110,
    protein: 25,
    carbs: 2,
    fat: 0.5,
    fiber: 0,
    servingSize: "30g scoop",
    benefits: ["Muscle recovery", "Lean muscle growth", "Post-workout recovery"],
    image: "https://images.unsplash.com/photo-1607443053036-25e4f9d650cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isVegetarian: true
  },
  {
    id: "sup2",
    name: "Casein Protein",
    category: "Protein",
    calories: 120,
    protein: 24,
    carbs: 3,
    fat: 1,
    fiber: 0,
    servingSize: "33g scoop",
    benefits: ["Overnight recovery", "Slow-digesting protein", "Anti-catabolism"],
    image: "https://images.unsplash.com/photo-1594498653385-d5172c532c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isVegetarian: true
  },
  {
    id: "sup3",
    name: "Plant-Based Protein",
    category: "Protein",
    calories: 130,
    protein: 21,
    carbs: 5,
    fat: 2,
    fiber: 3,
    servingSize: "36g scoop",
    benefits: ["Plant-based", "Complete amino profile", "Easy digestion"],
    image: "https://images.unsplash.com/photo-1615104985402-bb6a1f365022?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isVegetarian: true
  },
  {
    id: "sup4",
    name: "Creatine Monohydrate",
    category: "Performance",
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    fiber: 0,
    servingSize: "5g scoop",
    benefits: ["Strength gains", "Power output", "Muscle volume"],
    image: "https://images.unsplash.com/photo-1586401877159-35b10d27a6be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isVegetarian: true
  },
  {
    id: "sup5",
    name: "Pre-Workout Complex",
    category: "Performance",
    calories: 15,
    protein: 0,
    carbs: 4,
    fat: 0,
    fiber: 0,
    servingSize: "10g scoop",
    benefits: ["Energy boost", "Focus", "Pump enhancement"],
    image: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isVegetarian: true
  },
  {
    id: "sup6",
    name: "BCAA Supplement",
    category: "Recovery",
    calories: 5,
    protein: 0,
    carbs: 1,
    fat: 0,
    fiber: 0,
    servingSize: "7g scoop",
    benefits: ["Muscle preservation", "Reduced soreness", "Enhanced recovery"],
    image: "https://images.unsplash.com/photo-1579722820308-d74e571900a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isVegetarian: true
  },
  {
    id: "sup7",
    name: "Fish Oil",
    category: "Wellness",
    calories: 45,
    protein: 0,
    carbs: 0,
    fat: 5,
    fiber: 0,
    servingSize: "2 softgels",
    benefits: ["Joint health", "Heart health", "Reduced inflammation"],
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isVegetarian: false
  },
  {
    id: "sup8",
    name: "Multivitamin",
    category: "Wellness",
    calories: 10,
    protein: 0,
    carbs: 2,
    fat: 0,
    fiber: 0,
    servingSize: "1 tablet",
    benefits: ["Nutrient gaps", "Immune support", "Overall health"],
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isVegetarian: true
  },
  {
    id: "sup9",
    name: "Mass Gainer",
    category: "Weight Gain",
    calories: 650,
    protein: 50,
    carbs: 85,
    fat: 10,
    fiber: 3,
    servingSize: "165g scoop",
    benefits: ["Weight gain", "Calorie surplus", "Muscle building"],
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isVegetarian: true
  },
  {
    id: "sup10",
    name: "Glutamine",
    category: "Recovery",
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    fiber: 0,
    servingSize: "5g scoop",
    benefits: ["Gut health", "Immune function", "Recovery support"],
    image: "https://images.unsplash.com/photo-1579722820308-d74e571900a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isVegetarian: true
  },
  {
    id: "sup11",
    name: "Fat Burner",
    category: "Weight Management",
    calories: 5,
    protein: 0,
    carbs: 1,
    fat: 0,
    fiber: 0,
    servingSize: "2 capsules",
    benefits: ["Metabolism boost", "Fat oxidation", "Energy increase"],
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isVegetarian: true
  },
  {
    id: "sup12",
    name: "ZMA Complex",
    category: "Recovery",
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    fiber: 0,
    servingSize: "3 capsules",
    benefits: ["Sleep quality", "Hormone support", "Recovery enhancement"],
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isVegetarian: true
  },
  {
    id: "sup13",
    name: "Electrolyte Powder",
    category: "Hydration",
    calories: 15,
    protein: 0,
    carbs: 4,
    fat: 0,
    fiber: 0,
    servingSize: "6g scoop",
    benefits: ["Hydration support", "Muscle function", "Performance enhancement"],
    image: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isVegetarian: true
  },
  {
    id: "sup14",
    name: "Collagen Peptides",
    category: "Wellness",
    calories: 35,
    protein: 9,
    carbs: 0,
    fat: 0,
    fiber: 0,
    servingSize: "10g scoop",
    benefits: ["Joint support", "Skin health", "Connective tissue"],
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isVegetarian: false
  },
  {
    id: "sup15",
    name: "Beta-Alanine",
    category: "Performance",
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    fiber: 0,
    servingSize: "2g scoop",
    benefits: ["Endurance", "Reduced fatigue", "High-intensity performance"],
    image: "https://images.unsplash.com/photo-1586401877159-35b10d27a6be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isVegetarian: true
  },
  {
    id: "sup16",
    name: "Protein Bar",
    category: "Protein",
    calories: 210,
    protein: 20,
    carbs: 20,
    fat: 6,
    fiber: 4,
    servingSize: "60g bar",
    benefits: ["Convenience", "Meal replacement", "On-the-go protein"],
    image: "https://images.unsplash.com/photo-1622484212850-eb596d769edc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isVegetarian: true
  }
];

// Updated nutrient plans to match the new supplements dataset
export const nutrientPlans: NutrientPlan[] = [
  {
    id: "np1",
    title: "Muscle Building Plan",
    description: "High protein nutrition plan designed for maximum muscle growth",
    dailyCalories: 3000,
    macroSplit: {
      protein: 40,
      carbs: 40,
      fat: 20
    },
    recommendations: [
      {
        id: "sup1",
        name: "Whey Protein Isolate",
        image: "https://images.unsplash.com/photo-1607443053036-25e4f9d650cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 110,
      },
      {
        id: "sup4",
        name: "Creatine Monohydrate",
        image: "https://images.unsplash.com/photo-1586401877159-35b10d27a6be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 0,
      },
      {
        id: "sup5",
        name: "Pre-Workout Complex",
        image: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 15,
      },
      {
        id: "sup6",
        name: "BCAA Supplement",
        image: "https://images.unsplash.com/photo-1579722820308-d74e571900a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 5,
      }
    ],
    image: "https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isVegetarian: true
  },
  {
    id: "np2",
    title: "Weight Loss Support",
    description: "Low calorie, high protein plan to support fat loss while preserving muscle",
    dailyCalories: 1800,
    macroSplit: {
      protein: 45,
      carbs: 30,
      fat: 25
    },
    recommendations: [
      {
        id: "sup1",
        name: "Whey Protein Isolate",
        image: "https://images.unsplash.com/photo-1607443053036-25e4f9d650cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 110,
      },
      {
        id: "sup11",
        name: "Fat Burner",
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 5,
      },
      {
        id: "sup13",
        name: "Electrolyte Powder",
        image: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 15,
      },
      {
        id: "sup15",
        name: "Beta-Alanine",
        image: "https://images.unsplash.com/photo-1586401877159-35b10d27a6be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 0,
      }
    ],
    image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isVegetarian: true
  },
  {
    id: "np3",
    title: "Vegan Performance",
    description: "Plant-based nutrition plan for optimal athletic performance",
    dailyCalories: 2600,
    macroSplit: {
      protein: 30,
      carbs: 50,
      fat: 20
    },
    recommendations: [
      {
        id: "sup3",
        name: "Plant-Based Protein",
        image: "https://images.unsplash.com/photo-1615104985402-bb6a1f365022?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 130,
      },
      {
        id: "sup4",
        name: "Creatine Monohydrate",
        image: "https://images.unsplash.com/photo-1586401877159-35b10d27a6be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 0,
      },
      {
        id: "sup8",
        name: "Multivitamin",
        image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 10,
      },
      {
        id: "sup16",
        name: "Protein Bar",
        image: "https://images.unsplash.com/photo-1622484212850-eb596d769edc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 210,
      }
    ],
    image: "https://images.unsplash.com/photo-1513682121497-80211f36a7d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isVegetarian: true
  },
  {
    id: "np4",
    title: "Mass Gainer Plan",
    description: "High calorie, high protein plan for rapid weight and muscle gain",
    dailyCalories: 3500,
    macroSplit: {
      protein: 25,
      carbs: 55,
      fat: 20
    },
    recommendations: [
      {
        id: "sup9",
        name: "Mass Gainer",
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 650,
      },
      {
        id: "sup4",
        name: "Creatine Monohydrate",
        image: "https://images.unsplash.com/photo-1586401877159-35b10d27a6be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 0,
      },
      {
        id: "sup5",
        name: "Pre-Workout Complex",
        image: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 15,
      },
      {
        id: "sup10",
        name: "Glutamine",
        image: "https://images.unsplash.com/photo-1579722820308-d74e571900a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 0,
      }
    ],
    image: "https://images.unsplash.com/photo-1567013275689-c179a874478f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isVegetarian: true
  },
  {
    id: "np5",
    title: "Recovery Focus",
    description: "Specialized nutrition plan to optimize post-workout recovery",
    dailyCalories: 2400,
    macroSplit: {
      protein: 35,
      carbs: 45,
      fat: 20
    },
    recommendations: [
      {
        id: "sup2",
        name: "Casein Protein",
        image: "https://images.unsplash.com/photo-1594498653385-d5172c532c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 120,
      },
      {
        id: "sup6",
        name: "BCAA Supplement",
        image: "https://images.unsplash.com/photo-1579722820308-d74e571900a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 5,
      },
      {
        id: "sup10",
        name: "Glutamine",
        image: "https://images.unsplash.com/photo-1579722820308-d74e571900a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 0,
      },
      {
        id: "sup12",
        name: "ZMA Complex",
        image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 0,
      }
    ],
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isVegetarian: true
  },
  {
    id: "np6",
    title: "Wellness Support",
    description: "Balanced nutrition and supplementation for overall health and wellness",
    dailyCalories: 2200,
    macroSplit: {
      protein: 30,
      carbs: 40,
      fat: 30
    },
    recommendations: [
      {
        id: "sup7",
        name: "Fish Oil",
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 45,
      },
      {
        id: "sup8",
        name: "Multivitamin",
        image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 10,
      },
      {
        id: "sup13",
        name: "Electrolyte Powder",
        image: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 15,
      },
      {
        id: "sup14",
        name: "Collagen Peptides",
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        calories: 35,
      }
    ],
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
