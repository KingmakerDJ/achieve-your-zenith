
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { NutrientItem } from "@/data/nutrientData";
import { Badge } from "@/components/ui/badge";

interface NutrientCardProps {
  nutrient: NutrientItem;
  onSelect?: () => void;
}

const NutrientCard = ({ nutrient, onSelect }: NutrientCardProps) => {
  return (
    <Card className="h-full flex flex-col">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={nutrient.image}
          alt={nutrient.name}
          className="w-full h-full object-cover"
        />
        <Badge className="absolute top-2 right-2">{nutrient.category}</Badge>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{nutrient.name}</CardTitle>
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
        <div>
          <p className="text-gray-500 text-sm mb-1">Benefits:</p>
          <div className="flex flex-wrap gap-1">
            {nutrient.benefits.map((benefit, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {benefit}
              </Badge>
            ))}
          </div>
        </div>
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
  );
};

export default NutrientCard;
