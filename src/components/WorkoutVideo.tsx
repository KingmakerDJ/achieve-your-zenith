
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Play, Male, Female } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
  targetGender?: "male" | "female" | "all";
}

const WorkoutVideo = ({
  title,
  category,
  duration,
  intensity,
  thumbnailUrl,
  videoUrl,
  bodyPart,
  caption,
  targetGender = "all"
}: WorkoutVideoProps) => {
  const [showVideo, setShowVideo] = useState(false);
  
  // Function to get video thumbnail based on category and title
  const getWorkoutVideoThumbnail = (category: string, title: string) => {
    // Extract video ID from videoUrl
    const getVideoId = (url: string) => {
      const match = url.match(/embed\/([^\/\?]+)/);
      return match ? match[1] : null;
    };
    
    const videoId = getVideoId(videoUrl);
    if (videoId) {
      return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    }
    
    // Fallbacks based on category if video ID extraction fails
    switch(category.toLowerCase()) {
      case 'chest': 
        return "https://img.youtube.com/vi/rT7DgCr-3pg/hqdefault.jpg";
      case 'back': 
        return "https://img.youtube.com/vi/r4MzxtBKyNE/hqdefault.jpg"; 
      case 'legs': 
        return "https://img.youtube.com/vi/SW_C1A-rejs/hqdefault.jpg";
      case 'shoulders': 
        return "https://img.youtube.com/vi/qEwKCR5JCog/hqdefault.jpg";
      case 'arms': 
        return "https://img.youtube.com/vi/ykJmrZ5v0Oo/hqdefault.jpg";
      case 'core': 
        return "https://img.youtube.com/vi/ASdvN_XEl_c/hqdefault.jpg";
      default: 
        return "https://img.youtube.com/vi/eGo4IYlbE5g/hqdefault.jpg";
    }
  };

  // Get gender badge color
  const getGenderBadgeColor = (gender: string) => {
    switch(gender) {
      case 'male': return 'bg-blue-100 text-blue-800';
      case 'female': return 'bg-pink-100 text-pink-800';
      default: return 'bg-green-100 text-green-800';
    }
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
              src={getWorkoutVideoThumbnail(category, title)}
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
          
          {targetGender !== "all" && (
            <span className={`text-xs py-1 px-2 rounded-full flex items-center ${getGenderBadgeColor(targetGender)}`}>
              {targetGender === "male" ? 
                <><Male className="w-3 h-3 mr-1" /> Male</> : 
                <><Female className="w-3 h-3 mr-1" /> Female</>
              }
            </span>
          )}
        </div>
        {caption && (
          <p className="text-sm text-gray-600">{caption}</p>
        )}
      </CardContent>
    </Card>
  );
};

export default WorkoutVideo;
