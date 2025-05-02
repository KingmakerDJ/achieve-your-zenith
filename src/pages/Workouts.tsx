
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WorkoutCard from "@/components/WorkoutCard";

const Workouts = () => {
  const workouts = {
    all: [
      {
        title: "Morning HIIT",
        category: "Cardio",
        duration: "25 min",
        intensity: "Medium" as const,
        image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Full Body Power",
        category: "Strength",
        duration: "45 min",
        intensity: "Hard" as const,
        image: "https://images.unsplash.com/photo-1603287681836-b174ce5074c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Yoga Flow",
        category: "Flexibility",
        duration: "30 min",
        intensity: "Easy" as const,
        image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Core Crusher",
        category: "Strength",
        duration: "20 min",
        intensity: "Medium" as const,
        image: "https://images.unsplash.com/photo-1616803689943-5601631c7fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Endurance Run",
        category: "Cardio",
        duration: "40 min",
        intensity: "Hard" as const,
        image: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Pilates Basics",
        category: "Flexibility",
        duration: "35 min",
        intensity: "Medium" as const,
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      }
    ],
    cardio: [
      {
        title: "Morning HIIT",
        category: "Cardio",
        duration: "25 min",
        intensity: "Medium" as const,
        image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Endurance Run",
        category: "Cardio",
        duration: "40 min",
        intensity: "Hard" as const,
        image: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      }
    ],
    strength: [
      {
        title: "Full Body Power",
        category: "Strength",
        duration: "45 min",
        intensity: "Hard" as const,
        image: "https://images.unsplash.com/photo-1603287681836-b174ce5074c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Core Crusher",
        category: "Strength",
        duration: "20 min",
        intensity: "Medium" as const,
        image: "https://images.unsplash.com/photo-1616803689943-5601631c7fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      }
    ],
    flexibility: [
      {
        title: "Yoga Flow",
        category: "Flexibility",
        duration: "30 min",
        intensity: "Easy" as const,
        image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Pilates Basics",
        category: "Flexibility",
        duration: "35 min",
        intensity: "Medium" as const,
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      }
    ]
  };

  return (
    <div className="container py-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-3xl font-bold">Workout Library</h1>
        <Button className="bg-fitness-primary hover:bg-fitness-primary/90">
          Create Custom Workout
        </Button>
      </div>
      
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="all">All Workouts</TabsTrigger>
          <TabsTrigger value="cardio">Cardio</TabsTrigger>
          <TabsTrigger value="strength">Strength</TabsTrigger>
          <TabsTrigger value="flexibility">Flexibility</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {workouts.all.map((workout, index) => (
              <WorkoutCard
                key={index}
                title={workout.title}
                category={workout.category}
                duration={workout.duration}
                intensity={workout.intensity}
                image={workout.image}
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="cardio" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {workouts.cardio.map((workout, index) => (
              <WorkoutCard
                key={index}
                title={workout.title}
                category={workout.category}
                duration={workout.duration}
                intensity={workout.intensity}
                image={workout.image}
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="strength" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {workouts.strength.map((workout, index) => (
              <WorkoutCard
                key={index}
                title={workout.title}
                category={workout.category}
                duration={workout.duration}
                intensity={workout.intensity}
                image={workout.image}
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="flexibility" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {workouts.flexibility.map((workout, index) => (
              <WorkoutCard
                key={index}
                title={workout.title}
                category={workout.category}
                duration={workout.duration}
                intensity={workout.intensity}
                image={workout.image}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Workouts;
