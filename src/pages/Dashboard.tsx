
import { Activity, Dumbbell, Heart, Timer, Thermometer } from "lucide-react";
import StatCard from "@/components/StatCard";
import WorkoutCard from "@/components/WorkoutCard";
import ActivityProgress from "@/components/ActivityProgress";
import ExerciseTimeline from "@/components/ExerciseTimeline";

const Dashboard = () => {
  const timelineItems = [
    {
      time: "Today, 6:30 AM",
      title: "Morning Cardio",
      description: "30 min · 350 calories",
      icon: "timer" as const
    },
    {
      time: "Yesterday, 5:45 PM",
      title: "Full Body Workout",
      description: "45 min · 420 calories",
      icon: "activity" as const
    },
    {
      time: "Monday, 7:00 AM",
      title: "HIIT Training",
      description: "25 min · 310 calories",
      icon: "heart" as const
    }
  ];

  return (
    <div className="container py-6">
      <h1 className="text-3xl font-bold mb-6">Hey, Sarah! 👋</h1>
      
      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <StatCard 
          title="Daily Steps" 
          value="8,493" 
          icon={<Activity className="h-5 w-5 text-fitness-primary" />}
          change="+12% from yesterday"
          isPositive={true}
        />
        <StatCard 
          title="Calories" 
          value="1,842" 
          icon={<Thermometer className="h-5 w-5 text-fitness-accent" />}
          change="320 kcal remaining"
          isPositive={true}
        />
        <StatCard 
          title="Active Time" 
          value="87 min" 
          icon={<Timer className="h-5 w-5 text-fitness-secondary" />}
          change="-8% from yesterday"
          isPositive={false}
        />
        <StatCard 
          title="Heart Rate" 
          value="72 bpm" 
          icon={<Heart className="h-5 w-5 text-fitness-error" />}
          change="Resting"
        />
      </div>
      
      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Recommended Workouts</h2>
              <a href="/workouts" className="text-sm text-fitness-primary hover:underline">View all</a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <WorkoutCard 
                title="Morning HIIT"
                category="Cardio"
                duration="25 min"
                intensity="Medium"
                image="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              />
              <WorkoutCard 
                title="Full Body Power"
                category="Strength"
                duration="45 min"
                intensity="Hard"
                image="https://images.unsplash.com/photo-1603287681836-b174ce5074c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              />
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Weekly Goals</h2>
            <div className="stat-card space-y-4">
              <ActivityProgress 
                title="Workout Sessions" 
                achieved={4} 
                goal={5} 
                unit="workouts"
                color="bg-fitness-primary"
              />
              <ActivityProgress 
                title="Active Minutes" 
                achieved={210} 
                goal={300} 
                unit="min"
                color="bg-fitness-secondary"
              />
              <ActivityProgress 
                title="Calories Burned" 
                achieved={1250} 
                goal={2000} 
                unit="kcal"
                color="bg-fitness-accent"
              />
            </div>
          </div>
        </div>
        
        {/* Right Column */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="stat-card h-full">
            <ExerciseTimeline items={timelineItems} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
