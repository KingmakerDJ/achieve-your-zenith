
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WorkoutVideo from "@/components/WorkoutVideo";
import { getWorkoutVideos, getRecommendedWorkouts, getWorkoutVideoById } from "@/data/workoutData";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Grid3x3, List } from "lucide-react";

const Workouts = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedWorkout, setSelectedWorkout] = useState<any | null>(null);
  const [showVideoId, setShowVideoId] = useState<string | null>(null);
  
  const workoutVideos = getWorkoutVideos(activeTab);
  const recommendedWorkouts = getRecommendedWorkouts();

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  const handleWorkoutSelect = (workout: any) => {
    setSelectedWorkout(workout);
  };

  const handleShowVideo = (videoId: string) => {
    setShowVideoId(videoId);
    // Close workout detail if open
    setSelectedWorkout(null);
  };

  return (
    <div className="container py-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-3xl font-bold">Workout Video Library</h1>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="icon"
            className={viewMode === "grid" ? "bg-slate-100" : ""}
            onClick={() => setViewMode("grid")}
          >
            <Grid3x3 className="h-4 w-4" />
          </Button>
          <Button 
            variant="outline"
            size="icon"
            className={viewMode === "list" ? "bg-slate-100" : ""}
            onClick={() => setViewMode("list")}
          >
            <List className="h-4 w-4" />
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-fitness-primary hover:bg-fitness-primary/90">
                Create Custom Workout
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Create Custom Workout</DialogTitle>
                <DialogDescription>
                  Mix and match exercises to create your perfect routine
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                {/* Custom workout builder would go here */}
                <p>Coming soon! This feature is under development.</p>
              </div>
              <DialogFooter>
                <Button type="button" variant="outline">Cancel</Button>
                <Button type="button">Save Workout</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      
      <Tabs defaultValue="all" className="w-full" onValueChange={handleTabChange}>
        <TabsList className="mb-6">
          <TabsTrigger value="all">All Workouts</TabsTrigger>
          <TabsTrigger value="chest">Chest</TabsTrigger>
          <TabsTrigger value="back">Back</TabsTrigger>
          <TabsTrigger value="legs">Legs</TabsTrigger>
          <TabsTrigger value="shoulders">Shoulders</TabsTrigger>
          <TabsTrigger value="arms">Arms</TabsTrigger>
          <TabsTrigger value="core">Core</TabsTrigger>
        </TabsList>
        
        {Object.keys(getWorkoutVideos()).map((category) => (
          <TabsContent key={category} value={category} className="mt-0">
            <div className={viewMode === "grid" 
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              : "space-y-4"
            }>
              {workoutVideos.map((workout) => (
                viewMode === "grid" ? (
                  <WorkoutVideo
                    key={workout.id}
                    {...workout}
                  />
                ) : (
                  <Card key={workout.id} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        <div className="relative md:w-1/3">
                          <div 
                            className="aspect-video md:aspect-square relative cursor-pointer"
                            onClick={() => handleShowVideo(workout.id)}
                          >
                            <img
                              src={workout.thumbnailUrl}
                              alt={workout.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                              <Button 
                                size="icon" 
                                className="rounded-full h-10 w-10 bg-fitness-primary hover:bg-fitness-primary/90"
                              >
                                <Play className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="p-4 md:w-2/3">
                          <div className="flex justify-between">
                            <h3 className="font-semibold text-lg">{workout.title}</h3>
                            <span className="text-xs bg-slate-100 py-1 px-2 rounded">{workout.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 my-2 flex-wrap">
                            <span className="bg-slate-100 py-1 px-2 rounded-md text-xs">{workout.category}</span>
                            {workout.bodyPart && workout.bodyPart !== workout.category && (
                              <span className="bg-slate-100 py-1 px-2 rounded-md text-xs">{workout.bodyPart}</span>
                            )}
                            <span className={`text-xs py-1 px-2 rounded-full ${
                              workout.intensity === "Easy" 
                                ? "bg-green-100 text-green-800" 
                                : workout.intensity === "Medium" 
                                ? "bg-yellow-100 text-yellow-800" 
                                : "bg-red-100 text-red-800"
                            }`}>
                              {workout.intensity}
                            </span>
                          </div>
                          {workout.caption && (
                            <p className="text-sm text-gray-600 line-clamp-2">{workout.caption}</p>
                          )}
                          <div className="mt-3">
                            <Button 
                              variant="outline"
                              size="sm"
                              onClick={() => handleShowVideo(workout.id)}
                            >
                              Watch Video
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
      
      {/* Video Dialog */}
      <Dialog open={!!showVideoId} onOpenChange={(open) => !open && setShowVideoId(null)}>
        <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-auto">
          {showVideoId && (() => {
            const video = getWorkoutVideoById(showVideoId);
            if (!video) return null;
            
            return (
              <>
                <DialogHeader>
                  <DialogTitle>{video.title}</DialogTitle>
                  <DialogDescription>
                    {video.caption}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="aspect-video w-full my-2">
                  <iframe
                    src={video.videoUrl}
                    title={video.title}
                    className="w-full h-full"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                </div>
                
                <div className="flex items-center gap-2 my-2 flex-wrap">
                  <span className="bg-slate-100 py-1 px-2 rounded-md text-xs">{video.category}</span>
                  {video.bodyPart && video.bodyPart !== video.category && (
                    <span className="bg-slate-100 py-1 px-2 rounded-md text-xs">{video.bodyPart}</span>
                  )}
                  <span className={`text-xs py-1 px-2 rounded-full ${
                    video.intensity === "Easy" 
                      ? "bg-green-100 text-green-800" 
                      : video.intensity === "Medium" 
                      ? "bg-yellow-100 text-yellow-800" 
                      : "bg-red-100 text-red-800"
                  }`}>
                    {video.intensity}
                  </span>
                  <span className="text-xs bg-slate-100 py-1 px-2 rounded ml-auto">{video.duration}</span>
                </div>
              </>
            );
          })()}
        </DialogContent>
      </Dialog>
      
      {/* Workout Detail Dialog */}
      <Dialog open={!!selectedWorkout} onOpenChange={(open) => !open && setSelectedWorkout(null)}>
        <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-auto">
          {selectedWorkout && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedWorkout.title}</DialogTitle>
                <DialogDescription>
                  {selectedWorkout.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-4 my-4">
                <div className="flex flex-wrap gap-2">
                  <span className="bg-slate-100 py-1 px-2 rounded-md text-xs">{selectedWorkout.category}</span>
                  <span className="text-xs bg-slate-100 py-1 px-2 rounded">{selectedWorkout.duration}</span>
                  <span className={`text-xs py-1 px-2 rounded-full ${
                    selectedWorkout.intensity === "Easy" 
                      ? "bg-green-100 text-green-800" 
                      : selectedWorkout.intensity === "Medium" 
                      ? "bg-yellow-100 text-yellow-800" 
                      : "bg-red-100 text-red-800"
                  }`}>
                    {selectedWorkout.intensity}
                  </span>
                </div>
                
                <h3 className="font-medium">Exercises</h3>
                <div className="space-y-2">
                  {selectedWorkout.exercises.map((exercise: any, index: number) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-slate-50 rounded-md">
                      <div>
                        <p className="font-medium">{exercise.name}</p>
                        <p className="text-sm text-gray-600">{exercise.sets} sets × {exercise.reps}</p>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => handleShowVideo(exercise.videoId)}
                      >
                        Watch Demo
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Workouts;
