
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { NutrientItem } from "@/data/nutrientData";
import { Badge } from "@/components/ui/badge";
import { Heart, Apple, Info, ChefHat } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface NutrientCardProps {
  nutrient: NutrientItem;
  onSelect?: () => void;
}

// Define additional optional properties as a separate type
type ExtendedNutrientProperties = {
  rating?: number;
  description?: string;
  timing?: string;
  source?: string;
  homemadeAlternatives?: {
    name: string;
    description: string;
    calories: number;
  }[];
};

// Use a type intersection for extended nutrient item
type ExtendedNutrientItem = NutrientItem & Partial<ExtendedNutrientProperties>;

// Homemade food alternatives database (simplified from Kaggle dataset)
const homemadeFoodAlternatives = {
  "Protein": [
    { name: "Greek Yogurt", description: "High protein dairy option", calories: 100 },
    { name: "Lentil Soup", description: "Plant-based protein source", calories: 150 },
    { name: "Egg White Omelette", description: "Complete protein source", calories: 120 }
  ],
  "Performance": [
    { name: "Banana with Honey", description: "Natural pre-workout energy", calories: 130 },
    { name: "Coffee", description: "Natural stimulant", calories: 5 },
    { name: "Beetroot Juice", description: "Natural nitrates for performance", calories: 70 }
  ],
  "Recovery": [
    { name: "Turmeric Milk", description: "Anti-inflammatory properties", calories: 80 },
    { name: "Tart Cherry Juice", description: "Reduces muscle soreness", calories: 120 },
    { name: "Bone Broth", description: "Joint support and protein", calories: 50 }
  ],
  "Wellness": [
    { name: "Green Tea", description: "Antioxidants and light caffeine", calories: 0 },
    { name: "Chia Pudding", description: "Omega-3 fatty acids", calories: 150 },
    { name: "Ginger Lemon Water", description: "Digestive support", calories: 10 }
  ],
  "Weight Gain": [
    { name: "Peanut Butter Banana Smoothie", description: "Calorie-dense and nutritious", calories: 400 },
    { name: "Homemade Trail Mix", description: "Nuts, seeds, and dried fruits", calories: 300 },
    { name: "Avocado Toast", description: "Healthy fats and carbs", calories: 350 }
  ],
  "Weight Management": [
    { name: "Cucumber Mint Water", description: "Hydration with metabolism support", calories: 5 },
    { name: "Vegetable Soup", description: "Volume eating with low calories", calories: 100 },
    { name: "Salad with Vinaigrette", description: "Fiber-rich and filling", calories: 150 }
  ],
  "Hydration": [
    { name: "Coconut Water", description: "Natural electrolytes", calories: 45 },
    { name: "Watermelon", description: "92% water content with electrolytes", calories: 50 },
    { name: "Homemade Electrolyte Drink", description: "Water, salt, lemon, and honey", calories: 30 }
  ],
};

const NutrientCard = ({ nutrient, onSelect }: NutrientCardProps) => {
  // Cast nutrient to the extended type
  const extendedNutrient = nutrient as ExtendedNutrientItem;
  
  // Get homemade alternatives based on nutrient category
  const getHomemadeAlternatives = () => {
    return homemadeFoodAlternatives[nutrient.category as keyof typeof homemadeFoodAlternatives] || [];
  };
  
  // Function to get badge color based on benefit
  const getBenefitColor = (benefit: string) => {
    const benefitLower = benefit.toLowerCase();
    if (benefitLower.includes("energy") || benefitLower.includes("strength")) {
      return "bg-amber-100 text-amber-800 border-amber-200";
    } else if (benefitLower.includes("weight") || benefitLower.includes("fat")) {
      return "bg-green-100 text-green-800 border-green-200";
    } else if (benefitLower.includes("immune") || benefitLower.includes("health")) {
      return "bg-blue-100 text-blue-800 border-blue-200";
    } else if (benefitLower.includes("recovery")) {
      return "bg-purple-100 text-purple-800 border-purple-200";
    } else {
      return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const homemadeOptions = getHomemadeAlternatives();

  return (
    <TooltipProvider>
      <Card className="h-full flex flex-col">
        <div className="aspect-video relative overflow-hidden">
          <img
            src={nutrient.image}
            alt={nutrient.name}
            className="w-full h-full object-cover"
          />
          <Badge className="absolute top-2 right-2">{nutrient.category}</Badge>
          <Badge 
            className={`absolute top-2 left-2 ${nutrient.isVegetarian ? 'bg-green-100 text-green-800 border-green-200' : 'bg-orange-100 text-orange-800 border-orange-200'}`}
          >
            {nutrient.isVegetarian ? 'Vegetarian' : 'Non-Veg'}
          </Badge>
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center justify-between">
            {nutrient.name}
            {extendedNutrient.rating && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center text-sm font-normal">
                    <Heart className="h-4 w-4 mr-1 text-red-500 fill-red-500" />
                    <span>{extendedNutrient.rating}/5</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>User satisfaction rating</p>
                </TooltipContent>
              </Tooltip>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0 pb-4 flex-grow">
          <div className="grid grid-cols-2 gap-2 text-sm mb-3">
            <div>
              <p className="text-gray-500">Calories</p>
              <p className="font-medium">{nutrient.calories} kcal</p>
            </div>
            <div>
              <p className="text-gray-500">Protein</p>
              <p className="font-medium">{nutrient.protein}g</p>
            </div>
            <div>
              <p className="text-gray-500">Carbs</p>
              <p className="font-medium">{nutrient.carbs}g</p>
            </div>
            <div>
              <p className="text-gray-500">Fat</p>
              <p className="font-medium">{nutrient.fat}g</p>
            </div>
          </div>
          
          {extendedNutrient.description && (
            <div className="mb-3">
              <p className="text-xs text-gray-600 line-clamp-2">{extendedNutrient.description}</p>
            </div>
          )}
          
          <div>
            <p className="text-gray-500 text-sm mb-1">Benefits:</p>
            <div className="flex flex-wrap gap-1">
              {nutrient.benefits.map((benefit, index) => (
                <Badge key={index} variant="outline" className={`text-xs ${getBenefitColor(benefit)}`}>
                  {benefit}
                </Badge>
              ))}
            </div>
          </div>
          
          {extendedNutrient.timing && (
            <div className="mt-2">
              <p className="text-gray-500 text-sm">Best time:</p>
              <p className="text-xs font-medium">{extendedNutrient.timing}</p>
            </div>
          )}
          
          {extendedNutrient.source && (
            <div className="flex items-center mt-2 text-xs text-gray-500">
              <Apple className="h-3 w-3 mr-1" />
              <span>Source: {extendedNutrient.source}</span>
            </div>
          )}
          
          {/* Homemade Alternatives */}
          {homemadeOptions.length > 0 && (
            <div className="mt-3">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="sm" className="w-full text-xs">
                    <ChefHat className="h-3 w-3 mr-1" />
                    Homemade Alternatives
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-64 p-2">
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Natural Alternatives</h4>
                    {homemadeOptions.map((option, index) => (
                      <div key={index} className="p-2 bg-gray-50 rounded text-xs">
                        <p className="font-medium">{option.name}</p>
                        <p className="text-gray-500">{option.description}</p>
                        <p className="text-gray-500 mt-1">{option.calories} kcal</p>
                      </div>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          )}
        </CardContent>
        <CardFooter className="pt-0">
          {onSelect && (
            <Button 
              onClick={onSelect}
              variant="outline" 
              className="w-full"
            >
              Add to Plan
            </Button>
          )}
        </CardFooter>
      </Card>
    </TooltipProvider>
  );
};

export default NutrientCard;
