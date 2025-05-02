
import { Activity, Heart, Stopwatch } from "lucide-react";

interface TimelineItem {
  time: string;
  title: string;
  description: string;
  icon: "activity" | "heart" | "stopwatch";
}

interface ExerciseTimelineProps {
  items: TimelineItem[];
}

const ExerciseTimeline = ({ items }: ExerciseTimelineProps) => {
  const renderIcon = (iconName: string) => {
    switch(iconName) {
      case "activity":
        return <Activity className="h-4 w-4 text-fitness-primary" />;
      case "heart":
        return <Heart className="h-4 w-4 text-fitness-accent" />;
      case "stopwatch":
        return <Stopwatch className="h-4 w-4 text-fitness-secondary" />;
      default:
        return <Activity className="h-4 w-4 text-fitness-primary" />;
    }
  };
  
  return (
    <div className="space-y-6 pt-2">
      {items.map((item, index) => (
        <div key={index} className="relative pl-6">
          <div className="absolute left-0 top-1 bg-white rounded-full border border-muted p-1">
            {renderIcon(item.icon)}
          </div>
          {index !== items.length - 1 && (
            <div className="absolute left-[0.9rem] top-7 w-[1px] h-[calc(100%+0.5rem)] bg-muted" />
          )}
          <div>
            <p className="text-xs text-muted-foreground">{item.time}</p>
            <h5 className="font-medium text-sm">{item.title}</h5>
            <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExerciseTimeline;
