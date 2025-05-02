
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { CalendarCheck, Activity, Apple, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

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
    return (completedCount / section.activities.length) * 100;
  };

  const overallProgress = () => {
    const totalActivities = planSections.reduce((acc, section) => acc + section.activities.length, 0);
    const completedActivities = planSections.reduce(
      (acc, section) => acc + section.activities.filter(a => a.completed).length, 
      0
    );
    return (completedActivities / totalActivities) * 100;
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
                {section.activities.map(activity => (
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
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WellnessPlan;
