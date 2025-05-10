import { WorkoutVideoProps } from "../components/WorkoutVideo";

// Expanded workout interface to include gender targeting
export interface WorkoutData extends WorkoutVideoProps {
  targetGender?: "male" | "female" | "all";
  equipment?: string;
  targetMuscles?: string[];
  calories?: number;
}

// Using data from https://www.kaggle.com/datasets/philosopher0808/gym-workoutexercises-video
// and https://www.kaggle.com/datasets/niharika41298/gym-exercise-data
export const workoutVideos: Record<string, WorkoutData[]> = {
  all: [
    {
      id: "1",
      title: "Bench Press",
      category: "Chest",
      duration: "3:45",
      intensity: "Medium",
      thumbnailUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/rT7DgCr-3pg",
      bodyPart: "Chest",
      caption: "Proper bench press technique for chest development. Focus on controlled movements and full range of motion.",
      targetGender: "all",
      equipment: "Barbell, Bench",
      targetMuscles: ["Pectoralis Major", "Triceps", "Anterior Deltoids"],
      calories: 210
    },
    {
      id: "2",
      title: "Squats",
      category: "Legs",
      duration: "4:10",
      intensity: "Hard",
      thumbnailUrl: "https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/SW_C1A-rejs",
      bodyPart: "Legs",
      caption: "Learn proper squat form to build leg strength and improve lower body stability. Essential exercise for overall strength.",
      targetGender: "all",
      equipment: "Barbell, Squat Rack",
      targetMuscles: ["Quadriceps", "Hamstrings", "Glutes", "Lower Back"],
      calories: 260
    },
    {
      id: "3",
      title: "Deadlift",
      category: "Back",
      duration: "3:30",
      intensity: "Hard",
      thumbnailUrl: "https://images.unsplash.com/photo-1604047934811-8651171faebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/r4MzxtBKyNE",
      bodyPart: "Back",
      caption: "Master the deadlift for back strength and overall posterior chain development. Focus on hip hinge and neutral spine.",
      targetGender: "all",
      equipment: "Barbell",
      targetMuscles: ["Erector Spinae", "Latissimus Dorsi", "Hamstrings", "Glutes"],
      calories: 280
    },
    {
      id: "4",
      title: "Pull-ups",
      category: "Back",
      duration: "2:50",
      intensity: "Medium",
      thumbnailUrl: "https://images.unsplash.com/photo-1598971639058-c613e6bbd987?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/eGo4IYlbE5g",
      bodyPart: "Back",
      caption: "Build a stronger back with proper pull-up technique. Great for upper body development and core stability.",
      targetGender: "male",
      equipment: "Pull-up Bar",
      targetMuscles: ["Latissimus Dorsi", "Biceps", "Rhomboids", "Trapezius"],
      calories: 180
    },
    {
      id: "5",
      title: "Shoulder Press",
      category: "Shoulders",
      duration: "3:15",
      intensity: "Medium",
      thumbnailUrl: "https://images.unsplash.com/photo-1530822847156-5df684ec5ee1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/qEwKCR5JCog",
      bodyPart: "Shoulders",
      caption: "Improve shoulder strength and definition with proper overhead pressing technique. Focus on stability and control.",
      targetGender: "all",
      equipment: "Dumbbells or Barbell",
      targetMuscles: ["Deltoids", "Trapezius", "Triceps"],
      calories: 170
    },
    {
      id: "6",
      title: "Bicep Curls",
      category: "Arms",
      duration: "2:30",
      intensity: "Easy",
      thumbnailUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/ykJmrZ5v0Oo",
      bodyPart: "Arms",
      caption: "Focus on proper bicep curl form for arm development. Learn variations to target different parts of the biceps.",
      targetGender: "male",
      equipment: "Dumbbells",
      targetMuscles: ["Biceps Brachii", "Brachialis", "Brachioradialis"],
      calories: 140
    },
    {
      id: "7",
      title: "Tricep Extensions",
      category: "Arms",
      duration: "2:45",
      intensity: "Easy",
      thumbnailUrl: "https://images.unsplash.com/photo-1530822847156-5df684ec5ee1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/nRiJVZDpdL0",
      bodyPart: "Arms",
      caption: "Build stronger triceps with proper extension technique. Focus on full range of motion and controlled movements.",
      targetGender: "all",
      equipment: "Dumbbells",
      targetMuscles: ["Triceps"],
      calories: 120
    },
    {
      id: "8",
      title: "Plank",
      category: "Core",
      duration: "2:00",
      intensity: "Medium",
      thumbnailUrl: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/ASdvN_XEl_c",
      bodyPart: "Core",
      caption: "Strengthen your core with proper plank technique. Great for improving overall stability and posture.",
      targetGender: "all",
      equipment: "Mat",
      targetMuscles: ["Rectus Abdominis", "Obliques", "Lower Back"],
      calories: 100
    },
    {
      id: "11",
      title: "Hip Thrusts",
      category: "Legs",
      duration: "3:15",
      intensity: "Medium",
      thumbnailUrl: "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/xDmFkJxPzeM",
      bodyPart: "Glutes",
      caption: "Focus on glute development and hip strength with proper hip thrust technique.",
      targetGender: "female",
      equipment: "Barbell",
      targetMuscles: ["Glutes", "Hip Flexors"],
      calories: 150
    },
    {
      id: "12",
      title: "Pelvic Floor Exercises",
      category: "Core",
      duration: "2:45",
      intensity: "Easy",
      thumbnailUrl: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/xDmFkJxPzeM",
      bodyPart: "Pelvic Floor",
      caption: "Strengthen your pelvic floor muscles for better core stability and health.",
      targetGender: "female",
      equipment: "Mat",
      targetMuscles: ["Pelvic Floor Muscles"],
      calories: 80
    },
  ],
  chest: [
    {
      id: "1",
      title: "Bench Press",
      category: "Chest",
      duration: "3:45",
      intensity: "Medium",
      thumbnailUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/rT7DgCr-3pg",
      bodyPart: "Chest",
      caption: "Proper bench press technique for chest development. Focus on controlled movements and full range of motion.",
      targetGender: "all",
      equipment: "Barbell, Bench",
      targetMuscles: ["Pectoralis Major", "Triceps", "Anterior Deltoids"],
      calories: 210
    },
    {
      id: "9",
      title: "Incline Press",
      category: "Chest",
      duration: "3:20",
      intensity: "Medium",
      thumbnailUrl: "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/DbFgADa2PL8",
      bodyPart: "Upper Chest",
      caption: "Target your upper chest with the incline bench press. Focus on proper form to maximize upper chest development.",
      targetGender: "all",
      equipment: "Barbell, Bench",
      targetMuscles: ["Pectoralis Major", "Triceps", "Anterior Deltoids"],
      calories: 190
    }
  ],
  back: [
    {
      id: "3",
      title: "Deadlift",
      category: "Back",
      duration: "3:30",
      intensity: "Hard",
      thumbnailUrl: "https://images.unsplash.com/photo-1604047934811-8651171faebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/r4MzxtBKyNE",
      bodyPart: "Back",
      caption: "Master the deadlift for back strength and overall posterior chain development. Focus on hip hinge and neutral spine.",
      targetGender: "all",
      equipment: "Barbell",
      targetMuscles: ["Erector Spinae", "Latissimus Dorsi", "Hamstrings", "Glutes"],
      calories: 280
    },
    {
      id: "4",
      title: "Pull-ups",
      category: "Back",
      duration: "2:50",
      intensity: "Medium",
      thumbnailUrl: "https://images.unsplash.com/photo-1598971639058-c613e6bbd987?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/eGo4IYlbE5g",
      bodyPart: "Back",
      caption: "Build a stronger back with proper pull-up technique. Great for upper body development and core stability.",
      targetGender: "male",
      equipment: "Pull-up Bar",
      targetMuscles: ["Latissimus Dorsi", "Biceps", "Rhomboids", "Trapezius"],
      calories: 180
    }
  ],
  legs: [
    {
      id: "2",
      title: "Squats",
      category: "Legs",
      duration: "4:10",
      intensity: "Hard",
      thumbnailUrl: "https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/SW_C1A-rejs",
      bodyPart: "Legs",
      caption: "Learn proper squat form to build leg strength and improve lower body stability. Essential exercise for overall strength.",
      targetGender: "all",
      equipment: "Barbell, Squat Rack",
      targetMuscles: ["Quadriceps", "Hamstrings", "Glutes", "Lower Back"],
      calories: 260
    },
    {
      id: "10",
      title: "Leg Press",
      category: "Legs",
      duration: "3:00",
      intensity: "Medium",
      thumbnailUrl: "https://images.unsplash.com/photo-1535743686920-55e4145369b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/IZxyjW7MPJQ",
      bodyPart: "Legs",
      caption: "Build lower body strength with the leg press. A great complement to squats for overall leg development.",
      targetGender: "all",
      equipment: "Leg Press Machine",
      targetMuscles: ["Quadriceps", "Hamstrings", "Glutes"],
      calories: 220
    },
    {
      id: "11",
      title: "Hip Thrusts",
      category: "Legs",
      duration: "3:15",
      intensity: "Medium",
      thumbnailUrl: "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/xDmFkJxPzeM",
      bodyPart: "Glutes",
      caption: "Focus on glute development and hip strength with proper hip thrust technique.",
      targetGender: "female",
      equipment: "Barbell",
      targetMuscles: ["Glutes", "Hip Flexors"],
      calories: 150
    }
  ],
  shoulders: [
    {
      id: "5",
      title: "Shoulder Press",
      category: "Shoulders",
      duration: "3:15",
      intensity: "Medium",
      thumbnailUrl: "https://images.unsplash.com/photo-1530822847156-5df684ec5ee1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/qEwKCR5JCog",
      bodyPart: "Shoulders",
      caption: "Improve shoulder strength and definition with proper overhead pressing technique. Focus on stability and control.",
      targetGender: "all",
      equipment: "Dumbbells or Barbell",
      targetMuscles: ["Deltoids", "Trapezius", "Triceps"],
      calories: 170
    }
  ],
  arms: [
    {
      id: "6",
      title: "Bicep Curls",
      category: "Arms",
      duration: "2:30",
      intensity: "Easy",
      thumbnailUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/ykJmrZ5v0Oo",
      bodyPart: "Arms",
      caption: "Focus on proper bicep curl form for arm development. Learn variations to target different parts of the biceps.",
      targetGender: "male",
      equipment: "Dumbbells",
      targetMuscles: ["Biceps Brachii", "Brachialis", "Brachioradialis"],
      calories: 140
    },
    {
      id: "7",
      title: "Tricep Extensions",
      category: "Arms",
      duration: "2:45",
      intensity: "Easy",
      thumbnailUrl: "https://images.unsplash.com/photo-1530822847156-5df684ec5ee1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/nRiJVZDpdL0",
      bodyPart: "Arms",
      caption: "Build stronger triceps with proper extension technique. Focus on full range of motion and controlled movements.",
      targetGender: "all",
      equipment: "Dumbbells",
      targetMuscles: ["Triceps"],
      calories: 120
    }
  ],
  core: [
    {
      id: "8",
      title: "Plank",
      category: "Core",
      duration: "2:00",
      intensity: "Medium",
      thumbnailUrl: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/ASdvN_XEl_c",
      bodyPart: "Core",
      caption: "Strengthen your core with proper plank technique. Great for improving overall stability and posture.",
      targetGender: "all",
      equipment: "Mat",
      targetMuscles: ["Rectus Abdominis", "Obliques", "Lower Back"],
      calories: 100
    },
    {
      id: "12",
      title: "Pelvic Floor Exercises",
      category: "Core",
      duration: "2:45",
      intensity: "Easy",
      thumbnailUrl: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/xDmFkJxPzeM",
      bodyPart: "Pelvic Floor",
      caption: "Strengthen your pelvic floor muscles for better core stability and health.",
      targetGender: "female",
      equipment: "Mat",
      targetMuscles: ["Pelvic Floor Muscles"],
      calories: 80
    }
  ],
  female: [
    {
      id: "11",
      title: "Hip Thrusts",
      category: "Legs",
      duration: "3:15",
      intensity: "Medium",
      thumbnailUrl: "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/xDmFkJxPzeM",
      bodyPart: "Glutes",
      caption: "Focus on glute development and hip strength with proper hip thrust technique.",
      targetGender: "female",
      equipment: "Barbell",
      targetMuscles: ["Glutes", "Hip Flexors"],
      calories: 150
    },
    {
      id: "12",
      title: "Pelvic Floor Exercises",
      category: "Core",
      duration: "2:45",
      intensity: "Easy",
      thumbnailUrl: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/xDmFkJxPzeM",
      bodyPart: "Pelvic Floor",
      caption: "Strengthen your pelvic floor muscles for better core stability and health.",
      targetGender: "female",
      equipment: "Mat",
      targetMuscles: ["Pelvic Floor Muscles"],
      calories: 80
    },
    {
      id: "2",
      title: "Squats",
      category: "Legs",
      duration: "4:10",
      intensity: "Hard",
      thumbnailUrl: "https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/SW_C1A-rejs",
      bodyPart: "Legs",
      caption: "Learn proper squat form to build leg strength and improve lower body stability. Essential exercise for overall strength.",
      targetGender: "all",
      equipment: "Barbell, Squat Rack",
      targetMuscles: ["Quadriceps", "Hamstrings", "Glutes", "Lower Back"],
      calories: 260
    }
  ],
  male: [
    {
      id: "4",
      title: "Pull-ups",
      category: "Back",
      duration: "2:50",
      intensity: "Medium",
      thumbnailUrl: "https://images.unsplash.com/photo-1598971639058-c613e6bbd987?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/eGo4IYlbE5g",
      bodyPart: "Back",
      caption: "Build a stronger back with proper pull-up technique. Great for upper body development and core stability.",
      targetGender: "male",
      equipment: "Pull-up Bar",
      targetMuscles: ["Latissimus Dorsi", "Biceps", "Rhomboids", "Trapezius"],
      calories: 180
    },
    {
      id: "6",
      title: "Bicep Curls",
      category: "Arms",
      duration: "2:30",
      intensity: "Easy",
      thumbnailUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/ykJmrZ5v0Oo",
      bodyPart: "Arms",
      caption: "Focus on proper bicep curl form for arm development. Learn variations to target different parts of the biceps.",
      targetGender: "male",
      equipment: "Dumbbells",
      targetMuscles: ["Biceps Brachii", "Brachialis", "Brachioradialis"],
      calories: 140
    },
    {
      id: "1",
      title: "Bench Press",
      category: "Chest",
      duration: "3:45",
      intensity: "Medium",
      thumbnailUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/rT7DgCr-3pg",
      bodyPart: "Chest",
      caption: "Proper bench press technique for chest development. Focus on controlled movements and full range of motion.",
      targetGender: "all",
      equipment: "Barbell, Bench",
      targetMuscles: ["Pectoralis Major", "Triceps", "Anterior Deltoids"],
      calories: 210
    }
  ]
};

// Data based on analysis from https://www.kaggle.com/code/priyanshu594/analysis-on-exercise-dataset
export const recommendedWorkouts = [
  {
    id: "rec1",
    title: "Full Body Power",
    category: "Strength",
    duration: "45 min",
    intensity: "Hard",
    image: "https://images.unsplash.com/photo-1603287681836-b174ce5074c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    exercises: [
      { name: "Bench Press", sets: 3, reps: "8-10", videoId: "1" },
      { name: "Squats", sets: 3, reps: "8-10", videoId: "2" },
      { name: "Pull-ups", sets: 3, reps: "8-10", videoId: "4" }
    ],
    description: "A comprehensive full-body workout targeting all major muscle groups for maximum strength development.",
    targetGender: "male"
  },
  {
    id: "rec2",
    title: "Upper Body Focus",
    category: "Strength",
    duration: "30 min",
    intensity: "Medium",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    exercises: [
      { name: "Bench Press", sets: 3, reps: "10-12", videoId: "1" },
      { name: "Shoulder Press", sets: 3, reps: "10-12", videoId: "5" },
      { name: "Bicep Curls", sets: 3, reps: "12-15", videoId: "6" }
    ],
    description: "Targeted workout for upper body strength and muscle development, focusing on chest, shoulders, and arms.",
    targetGender: "all"
  },
  {
    id: "rec3",
    title: "Core Stability",
    category: "Core",
    duration: "20 min",
    intensity: "Medium",
    image: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    exercises: [
      { name: "Plank", sets: 3, reps: "30-60 sec", videoId: "8" }
    ],
    description: "Build a stronger, more stable core with this focused workout routine. Great for improving posture and stability.",
    targetGender: "all"
  },
  {
    id: "rec4",
    title: "Women's Lower Body",
    category: "Strength",
    duration: "35 min",
    intensity: "Medium",
    image: "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    exercises: [
      { name: "Hip Thrusts", sets: 3, reps: "12-15", videoId: "11" },
      { name: "Squats", sets: 3, reps: "10-12", videoId: "2" },
      { name: "Leg Press", sets: 3, reps: "12-15", videoId: "10" }
    ],
    description: "Target glutes, hamstrings, and quads with this focused lower body routine designed for women.",
    targetGender: "female"
  }
];

// Get all workouts
export function getWorkoutVideos(category: string = "all", gender?: "male" | "female"): WorkoutData[] {
  if (gender) {
    // If gender is specified, filter by gender
    if (category === "all") {
      return workoutVideos.all.filter(workout => 
        workout.targetGender === gender || workout.targetGender === "all"
      );
    } else {
      return (workoutVideos[category] || []).filter(workout => 
        workout.targetGender === gender || workout.targetGender === "all"
      );
    }
  } else {
    // If no gender specified, return by category only
    return workoutVideos[category] || workoutVideos.all;
  }
}

// Get recommended workouts by gender
export function getRecommendedWorkouts(gender?: "male" | "female") {
  if (gender) {
    return recommendedWorkouts.filter(workout => 
      workout.targetGender === gender || workout.targetGender === "all"
    );
  }
  return recommendedWorkouts;
}

export function getWorkoutVideoById(id: string): WorkoutData | undefined {
  const allVideos = workoutVideos.all;
  return allVideos.find(video => video.id === id);
}

// Get exercise plans filtered by gender and level
export function getExercisePlans(gender?: "male" | "female", level?: string): any[] {
  let filteredPlans = exercisePlans;
  
  if (gender) {
    filteredPlans = filteredPlans.filter(plan => 
      plan.targetGender === gender || plan.targetGender === "all"
    );
  }
  
  if (level) {
    filteredPlans = filteredPlans.filter(plan => 
      plan.level.toLowerCase().includes(level.toLowerCase())
    );
  }
  
  return filteredPlans;
}
