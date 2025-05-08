
import { Button } from "@/components/ui/button";
import { Clock, Dumbbell, Heart } from "lucide-react";

interface WorkoutCardProps {
  title: string;
  category: string;
  duration: string;
  intensity: "Easy" | "Medium" | "Hard";
  image: string;
  onClick?: () => void;
}

const WorkoutCard = ({ title, category, duration, intensity, image, onClick }: WorkoutCardProps) => {
  return (
    <div 
      className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group h-64"
      onClick={onClick}
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4">
        <div className="mb-2 flex items-center gap-2">
          <span className="bg-white/20 text-white py-1 px-2 rounded-md text-xs flex items-center">
            <Dumbbell className="w-3 h-3 mr-1" />
            {category}
          </span>
          <span className="bg-white/20 text-white py-1 px-2 rounded-md text-xs flex items-center">
            <Clock className="w-3 h-3 mr-1" />
            {duration}
          </span>
        </div>
        <h3 className="text-white font-bold text-lg mb-1">{title}</h3>
        <div className="flex justify-between items-center">
          <span className={`text-xs font-medium py-1 px-2 rounded-full ${
            intensity === "Easy" 
              ? "bg-green-500/20 text-green-300" 
              : intensity === "Medium" 
              ? "bg-yellow-500/20 text-yellow-300" 
              : "bg-red-500/20 text-red-300"
          }`}>
            {intensity}
          </span>
          <Button size="sm" className="bg-[#3D9DA1] hover:bg-[#3D9DA1]/90 rounded-full">
            Start
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WorkoutCard;
