
import { Button } from "@/components/ui/button";
import { Clock, Dumbbell, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface WorkoutCardProps {
  title: string;
  category: string;
  duration: string;
  intensity: "Easy" | "Medium" | "Hard";
  image: string;
  onClick?: () => void;
}

const WorkoutCard = ({ title, category, duration, intensity, image, onClick }: WorkoutCardProps) => {
  // Function to get category color
  const getCategoryColor = (category: string) => {
    switch(category.toLowerCase()) {
      case 'chest': return 'bg-blue-500/20 text-blue-300';
      case 'back': return 'bg-purple-500/20 text-purple-300';
      case 'legs': return 'bg-indigo-500/20 text-indigo-300';
      case 'shoulders': return 'bg-cyan-500/20 text-cyan-300';
      case 'arms': return 'bg-orange-500/20 text-orange-300';
      case 'core': return 'bg-teal-500/20 text-teal-300';
      default: return 'bg-white/20 text-white';
    }
  };

  // Function to get appropriate image based on category if the provided image isn't specific
  const getAppropriateImage = (category: string, providedImage: string) => {
    // Only use these fallbacks if the image looks like a generic placeholder
    if (providedImage.includes("unsplash") && !providedImage.includes("workout")) {
      switch(category.toLowerCase()) {
        case 'chest': return "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
        case 'back': return "https://images.unsplash.com/photo-1604047934811-8651171faebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
        case 'legs': return "https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
        case 'shoulders': return "https://images.unsplash.com/photo-1530822847156-5df684ec5ee1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
        case 'arms': return "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
        case 'core': return "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
        default: return providedImage;
      }
    }
    return providedImage;
  };

  return (
    <div 
      className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group h-64"
      onClick={onClick}
    >
      <img 
        src={getAppropriateImage(category, image)} 
        alt={title} 
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute top-2 left-2">
        <Badge className={`${getCategoryColor(category)}`}>
          {category}
        </Badge>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4">
        <div className="mb-2 flex items-center gap-2">
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
