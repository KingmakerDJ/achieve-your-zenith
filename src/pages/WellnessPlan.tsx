
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CalendarCheck, Activity, Apple, Moon, List, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";

interface PlanSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  activities: {
    id: string;
    name: string;
    description: string;
    completed: boolean;
  }[];
}

// Define the selected workout and nutrition plan types
interface SelectedWorkout {
  id: string;
  title: string;
  category: string;
  duration: string;
  intensity: "Easy" | "Medium" | "Hard";
}

interface SelectedNutrient {
  id: string;
  name: string;
  category: string;
  isVegetarian: boolean;
  calories: number;
}

const WellnessPlan = () => {
  const [planSections, setPlanSections] = useState<PlanSection[]>([
    {
      id: "fitness",
      title: "Fitness",
      icon: <Activity className="h-5 w-5 text-[#3D9DA1]" />,
      activities: [
        {
          id: "workout1",
          name: "Morning Cardio",
          description: "30 min jogging or brisk walking",
          completed: false
        },
        {
          id: "workout2",
          name: "Strength Training",
          description: "Focus on upper body - 3 sets of 12 reps",
          completed: false
        },
        {
          id: "workout3",
          name: "Evening Yoga",
          description: "15 min stretching and relaxation",
          completed: false
        }
      ]
    },
    {
      id: "nutrition",
      title: "Nutrition",
      icon: <Apple className="h-5 w-5 text-red-500" />,
      activities: [
        {
          id: "nutrition1",
          name: "Protein Intake",
          description: "Consume 80g of protein today",
          completed: false
        },
        {
          id: "nutrition2",
          name: "Hydration",
          description: "Drink 8 glasses of water",
          completed: false
        },
        {
          id: "nutrition3",
          name: "Balanced Meals",
          description: "Include vegetables in at least 2 meals",
          completed: false
        }
      ]
    },
    {
      id: "sleep",
      title: "Sleep",
      icon: <Moon className="h-5 w-5 text-indigo-500" />,
      activities: [
        {
          id: "sleep1",
          name: "Early Bedtime",
          description: "Be in bed by 10:30 PM",
          completed: false
        },
        {
          id: "sleep2",
          name: "Morning Routine",
          description: "Wake up at 6:30 AM",
          completed: false
        },
        {
          id: "sleep3",
          name: "Screen Time",
          description: "No screens 30 min before sleep",
          completed: false
        }
      ]
    }
  ]);

  const { toast } = useToast();
  const [selectedWorkouts, setSelectedWorkouts] = useState<SelectedWorkout[]>([]);
  const [selectedNutrients, setSelectedNutrients] = useState<SelectedNutrient[]>([]);
  const [dietPreference, setDietPreference] = useState<'all' | 'vegetarian' | 'non-vegetarian'>('all');
  const [gender, setGender] = useState<'all' | 'male' | 'female'>('all');

  // Load selected items from localStorage when component mounts
  useEffect(() => {
    const savedWorkouts = localStorage.getItem('selectedWorkouts');
    if (savedWorkouts) {
      try {
        setSelectedWorkouts(JSON.parse(savedWorkouts));
      } catch (error) {
        console.error("Failed to parse saved workouts", error);
      }
    }

    const savedNutrients = localStorage.getItem('selectedNutrients');
    if (savedNutrients) {
      try {
        setSelectedNutrients(JSON.parse(savedNutrients));
      } catch (error) {
        console.error("Failed to parse saved nutrients", error);
      }
    }

    const savedDietPreference = localStorage.getItem('dietPreference');
    if (savedDietPreference) {
      setDietPreference(savedDietPreference as 'all' | 'vegetarian' | 'non-vegetarian');
    }

    const savedGender = localStorage.getItem('gender');
    if (savedGender) {
      setGender(savedGender as 'all' | 'male' | 'female');
    }
  }, []);

  // Generate fitness activities from selected workouts
  useEffect(() => {
    if (selectedWorkouts.length > 0) {
      const workoutActivities = selectedWorkouts.map((workout, index) => ({
        id: `selected-workout-${workout.id}`,
        name: workout.title,
        description: `${workout.category} - ${workout.duration} - ${workout.intensity}`,
        completed: false
      }));

      setPlanSections(prevSections => 
        prevSections.map(section => 
          section.id === "fitness" 
            ? {
                ...section,
                activities: [...workoutActivities]
              }
            : section
        )
      );
      
      toast({
        title: "Workouts Updated",
        description: "Your wellness plan has been updated with your selected workouts.",
      });
    }
  }, [selectedWorkouts, toast]);

  // Generate nutrition activities from selected nutrients
  useEffect(() => {
    if (selectedNutrients.length > 0) {
      const nutrientActivities = selectedNutrients.map(nutrient => ({
        id: `selected-nutrient-${nutrient.id}`,
        name: nutrient.name,
        description: `${nutrient.category} - ${nutrient.calories} calories - ${nutrient.isVegetarian ? 'Vegetarian' : 'Non-Vegetarian'}`,
        completed: false
      }));

      setPlanSections(prevSections => 
        prevSections.map(section => 
          section.id === "nutrition" 
            ? {
                ...section,
                activities: [...nutrientActivities]
              }
            : section
        )
      );
      
      toast({
        title: "Nutrition Plan Updated",
        description: "Your wellness plan has been updated with your selected nutrition items.",
      });
    }
  }, [selectedNutrients, toast]);

  const handleToggleComplete = (sectionId: string, activityId: string) => {
    setPlanSections(sections => 
      sections.map(section => 
        section.id === sectionId 
          ? {
              ...section,
              activities: section.activities.map(activity => 
                activity.id === activityId 
                  ? { ...activity, completed: !activity.completed } 
                  : activity
              )
            }
          : section
      )
    );
  };

  const calculateProgress = (section: PlanSection) => {
    const completedCount = section.activities.filter(a => a.completed).length;
    return section.activities.length > 0 ? (completedCount / section.activities.length) * 100 : 0;
  };

  const overallProgress = () => {
    const totalActivities = planSections.reduce((acc, section) => acc + section.activities.length, 0);
    const completedActivities = planSections.reduce(
      (acc, section) => acc + section.activities.filter(a => a.completed).length, 
      0
    );
    return totalActivities > 0 ? (completedActivities / totalActivities) * 100 : 0;
  };

  const handlePreferenceChange = (preference: 'all' | 'vegetarian' | 'non-vegetarian') => {
    setDietPreference(preference);
    localStorage.setItem('dietPreference', preference);
    toast({
      title: "Preference Updated",
      description: `Your diet preference has been updated to ${preference}.`,
    });
  };

  const handleGenderChange = (gender: 'all' | 'male' | 'female') => {
    setGender(gender);
    localStorage.setItem('gender', gender);
    toast({
      title: "Target Gender Updated",
      description: `Your workout preference has been updated to ${gender}.`,
    });
  };

  return (
    <div className="container py-6">
      <div className="flex items-center mb-6">
        <CalendarCheck className="h-7 w-7 mr-2 text-[#3D9DA1]" />
        <h1 className="text-3xl font-bold">Your Wellness Plan</h1>
      </div>

      <Card className="mb-6 border-[#3D9DA1]/20">
        <CardHeader className="pb-2">
          <CardTitle>Today's Progress</CardTitle>
          <CardDescription>Complete your daily activities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Daily Progress</span>
            <span className="text-sm font-medium">{Math.round(overallProgress())}%</span>
          </div>
          <Progress value={overallProgress()} className="h-2" indicatorClassName="bg-[#3D9DA1]" />
        </CardContent>
      </Card>

      <div className="mb-6">
        <Tabs defaultValue="fitness" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="fitness">Fitness Preferences</TabsTrigger>
            <TabsTrigger value="nutrition">Nutrition Preferences</TabsTrigger>
          </TabsList>
          <TabsContent value="fitness">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  Target Workouts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">Select Your Gender Focus</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge 
                        className={`cursor-pointer ${gender === 'all' ? 'bg-[#3D9DA1]' : 'bg-gray-200 text-gray-600'}`}
                        onClick={() => handleGenderChange('all')}
                      >
                        All
                      </Badge>
                      <Badge 
                        className={`cursor-pointer ${gender === 'male' ? 'bg-blue-500' : 'bg-gray-200 text-gray-600'}`}
                        onClick={() => handleGenderChange('male')}
                      >
                        Male
                      </Badge>
                      <Badge 
                        className={`cursor-pointer ${gender === 'female' ? 'bg-pink-500' : 'bg-gray-200 text-gray-600'}`}
                        onClick={() => handleGenderChange('female')}
                      >
                        Female
                      </Badge>
                    </div>
                  </div>
                  
                  {selectedWorkouts.length === 0 ? (
                    <div className="text-center py-6">
                      <p className="text-gray-500">Go to the workouts page to select training plans</p>
                      <Button 
                        className="mt-4 bg-[#3D9DA1] hover:bg-[#3D9DA1]/90"
                        onClick={() => window.location.href = '/workouts'}
                      >
                        Choose Workouts
                      </Button>
                    </div>
                  ) : (
                    <div>
                      <h3 className="font-medium mb-2">Your Selected Workouts</h3>
                      <div className="space-y-2">
                        {selectedWorkouts.map(workout => (
                          <div key={workout.id} className="p-3 bg-gray-50 rounded-md flex justify-between items-center">
                            <div>
                              <p className="font-medium">{workout.title}</p>
                              <p className="text-sm text-gray-500">{workout.category} · {workout.intensity} · {workout.duration}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="nutrition">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Apple className="h-5 w-5 mr-2" />
                  Diet Preference
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">Select Your Diet Type</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge 
                        className={`cursor-pointer ${dietPreference === 'all' ? 'bg-[#3D9DA1]' : 'bg-gray-200 text-gray-600'}`}
                        onClick={() => handlePreferenceChange('all')}
                      >
                        All
                      </Badge>
                      <Badge 
                        className={`cursor-pointer ${dietPreference === 'vegetarian' ? 'bg-green-500' : 'bg-gray-200 text-gray-600'}`}
                        onClick={() => handlePreferenceChange('vegetarian')}
                      >
                        Vegetarian
                      </Badge>
                      <Badge 
                        className={`cursor-pointer ${dietPreference === 'non-vegetarian' ? 'bg-red-500' : 'bg-gray-200 text-gray-600'}`}
                        onClick={() => handlePreferenceChange('non-vegetarian')}
                      >
                        Non-Vegetarian
                      </Badge>
                    </div>
                  </div>
                  
                  {selectedNutrients.length === 0 ? (
                    <div className="text-center py-6">
                      <p className="text-gray-500">Go to the nutrition plan page to select your nutrition plan</p>
                      <Button 
                        className="mt-4 bg-[#3D9DA1] hover:bg-[#3D9DA1]/90"
                        onClick={() => window.location.href = '/nutrient-plan'}
                      >
                        Choose Nutrition Plan
                      </Button>
                    </div>
                  ) : (
                    <div>
                      <h3 className="font-medium mb-2">Your Selected Nutrition Items</h3>
                      <div className="space-y-2">
                        {selectedNutrients.map(nutrient => (
                          <div key={nutrient.id} className="p-3 bg-gray-50 rounded-md flex justify-between items-center">
                            <div>
                              <p className="font-medium">{nutrient.name}</p>
                              <p className="text-sm text-gray-500">
                                {nutrient.category} · {nutrient.calories} kcal · 
                                <span className={`${nutrient.isVegetarian ? 'text-green-600' : 'text-red-600'} ml-1`}>
                                  {nutrient.isVegetarian ? 'Vegetarian' : 'Non-Vegetarian'}
                                </span>
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <div className="space-y-6">
        {planSections.map(section => (
          <Card key={section.id} className="border-gray-200">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  {section.icon}
                  <CardTitle className="ml-2">{section.title}</CardTitle>
                </div>
                <span className="text-sm font-medium">{Math.round(calculateProgress(section))}%</span>
              </div>
              <Progress 
                value={calculateProgress(section)} 
                className="h-1 mt-2" 
                indicatorClassName={
                  section.id === "fitness" 
                    ? "bg-[#3D9DA1]" 
                    : section.id === "nutrition" 
                      ? "bg-red-500" 
                      : "bg-indigo-500"
                }
              />
            </CardHeader>
            <CardContent>
              <div className="divide-y">
                {section.activities.length === 0 ? (
                  <div className="py-4 text-center text-gray-500">
                    <List className="mx-auto h-8 w-8 mb-2" />
                    <p>No activities yet. Add activities from your selected plans.</p>
                  </div>
                ) : (
                  section.activities.map(activity => (
                    <div key={activity.id} className="py-3 flex items-center justify-between">
                      <div>
                        <h4 className={`font-medium ${activity.completed ? 'line-through text-gray-400' : ''}`}>
                          {activity.name}
                        </h4>
                        <p className={`text-sm ${activity.completed ? 'text-gray-400' : 'text-gray-500'}`}>
                          {activity.description}
                        </p>
                      </div>
                      <Button
                        variant={activity.completed ? "default" : "outline"}
                        size="sm"
                        className={activity.completed ? "bg-[#3D9DA1] hover:bg-[#3D9DA1]/90" : ""}
                        onClick={() => handleToggleComplete(section.id, activity.id)}
                      >
                        {activity.completed ? "Completed" : "Complete"}
                      </Button>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WellnessPlan;
