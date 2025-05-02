
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

interface WorkoutCardProps {
  title: string;
  category: string;
  duration: string;
  intensity: "Easy" | "Medium" | "Hard";
  image: string;
}

const WorkoutCard = ({ title, category, duration, intensity, image }: WorkoutCardProps) => {
  return (
    <div className="workout-card h-64">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover"
      />
      <div className="workout-card-overlay">
        <div className="mb-2">
          <span className="bg-white/20 py-1 px-2 rounded-md text-xs">{category}</span>
          <span className="bg-white/20 py-1 px-2 rounded-md text-xs ml-2">
            <Clock className="w-3 h-3 inline mr-1" />
            {duration}
          </span>
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="flex justify-between items-center mt-2">
          <span className={`text-xs font-medium py-1 px-2 rounded-full ${
            intensity === "Easy" 
              ? "bg-green-500/20" 
              : intensity === "Medium" 
              ? "bg-yellow-500/20" 
              : "bg-red-500/20"
          }`}>
            {intensity}
          </span>
          <Button size="sm" className="bg-white text-fitness-primary hover:bg-white/90">
            Start
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WorkoutCard;
