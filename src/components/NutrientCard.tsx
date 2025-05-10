
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { NutrientItem } from "@/data/nutrientData";
import { Badge } from "@/components/ui/badge";
import { Heart, Apple, Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface NutrientCardProps {
  nutrient: NutrientItem;
  onSelect?: () => void;
}

// Extend NutrientItem with additional optional properties
interface ExtendedNutrientItem extends NutrientItem {
  rating?: number;
  description?: string;
  timing?: string;
  source?: string;
  isVegetarian?: boolean;
}

const NutrientCard = ({ nutrient, onSelect }: NutrientCardProps) => {
  // Cast nutrient to the extended type
  const extendedNutrient = nutrient as ExtendedNutrientItem;
  
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
          {extendedNutrient.isVegetarian !== undefined && (
            <Badge 
              className={`absolute top-2 left-2 ${extendedNutrient.isVegetarian ? 'bg-green-100 text-green-800 border-green-200' : 'bg-orange-100 text-orange-800 border-orange-200'}`}
            >
              {extendedNutrient.isVegetarian ? 'Vegetarian' : 'Non-Veg'}
            </Badge>
          )}
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
