
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Play } from "lucide-react";

export interface WorkoutVideoProps {
  id: string;
  title: string;
  category: string;
  duration: string;
  intensity: "Easy" | "Medium" | "Hard";
  thumbnailUrl: string;
  videoUrl: string;
  bodyPart?: string;
  caption?: string;
}

const WorkoutVideo = ({
  title,
  category,
  duration,
  intensity,
  thumbnailUrl,
  videoUrl,
  bodyPart,
  caption
}: WorkoutVideoProps) => {
  const [showVideo, setShowVideo] = useState(false);
  
  // Function to get appropriate thumbnail based on category if the provided image isn't specific
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
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative">
        {showVideo ? (
          <div className="aspect-video">
            <iframe
              src={videoUrl}
              title={title}
              className="w-full h-full"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        ) : (
          <div className="aspect-video relative overflow-hidden">
            <img
              src={getAppropriateImage(category, thumbnailUrl)}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <Button 
                onClick={() => setShowVideo(true)} 
                size="icon" 
                className="rounded-full h-14 w-14 bg-fitness-primary hover:bg-fitness-primary/90"
              >
                <Play className="h-6 w-6" />
              </Button>
            </div>
          </div>
        )}
        <div className="absolute top-2 right-2 px-2 py-1 rounded bg-black bg-opacity-60 text-white text-xs">
          {duration}
        </div>
      </div>
      <CardContent className="pt-4 flex-grow">
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <span className="bg-slate-100 py-1 px-2 rounded-md text-xs">{category}</span>
          {bodyPart && bodyPart !== category && (
            <span className="bg-slate-100 py-1 px-2 rounded-md text-xs">{bodyPart}</span>
          )}
          <span className={`text-xs py-1 px-2 rounded-full ${
            intensity === "Easy" 
              ? "bg-green-100 text-green-800" 
              : intensity === "Medium" 
              ? "bg-yellow-100 text-yellow-800" 
              : "bg-red-100 text-red-800"
          }`}>
            {intensity}
          </span>
        </div>
        {caption && (
          <p className="text-sm text-gray-600">{caption}</p>
        )}
      </CardContent>
    </Card>
  );
};

export default WorkoutVideo;
