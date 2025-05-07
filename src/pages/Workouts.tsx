
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WorkoutVideo from "@/components/WorkoutVideo";
import { getWorkoutVideos } from "@/data/workoutData";

const Workouts = () => {
  const [activeTab, setActiveTab] = useState("all");
  const workoutVideos = getWorkoutVideos(activeTab);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <div className="container py-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-3xl font-bold">Workout Video Library</h1>
        <Button className="bg-fitness-primary hover:bg-fitness-primary/90">
          Create Custom Workout
        </Button>
      </div>
      
      <Tabs defaultValue="all" className="w-full" onValueChange={handleTabChange}>
        <TabsList className="mb-6">
          <TabsTrigger value="all">All Workouts</TabsTrigger>
          <TabsTrigger value="cardio">Cardio</TabsTrigger>
          <TabsTrigger value="strength">Strength</TabsTrigger>
          <TabsTrigger value="flexibility">Flexibility</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {workoutVideos.map((workout) => (
              <WorkoutVideo
                key={workout.id}
                id={workout.id}
                title={workout.title}
                category={workout.category}
                duration={workout.duration}
                intensity={workout.intensity}
                thumbnailUrl={workout.thumbnailUrl}
                videoUrl={workout.videoUrl}
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="cardio" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {workoutVideos.map((workout) => (
              <WorkoutVideo
                key={workout.id}
                id={workout.id}
                title={workout.title}
                category={workout.category}
                duration={workout.duration}
                intensity={workout.intensity}
                thumbnailUrl={workout.thumbnailUrl}
                videoUrl={workout.videoUrl}
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="strength" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {workoutVideos.map((workout) => (
              <WorkoutVideo
                key={workout.id}
                id={workout.id}
                title={workout.title}
                category={workout.category}
                duration={workout.duration}
                intensity={workout.intensity}
                thumbnailUrl={workout.thumbnailUrl}
                videoUrl={workout.videoUrl}
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="flexibility" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {workoutVideos.map((workout) => (
              <WorkoutVideo
                key={workout.id}
                id={workout.id}
                title={workout.title}
                category={workout.category}
                duration={workout.duration}
                intensity={workout.intensity}
                thumbnailUrl={workout.thumbnailUrl}
                videoUrl={workout.videoUrl}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Workouts;
