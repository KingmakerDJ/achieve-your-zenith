
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
}

const WorkoutVideo = ({
  title,
  category,
  duration,
  intensity,
  thumbnailUrl,
  videoUrl
}: WorkoutVideoProps) => {
  const [showVideo, setShowVideo] = useState(false);

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
              src={thumbnailUrl}
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
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-slate-100 py-1 px-2 rounded-md text-xs">{category}</span>
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
      </CardContent>
    </Card>
  );
};

export default WorkoutVideo;
