
import { WorkoutVideoProps } from "../components/WorkoutVideo";

// This is a mock of the Kaggle dataset since we can't directly access it
export const workoutVideos: Record<string, WorkoutVideoProps[]> = {
  all: [
    {
      id: "1",
      title: "Full Body HIIT Workout",
      category: "Cardio",
      duration: "15:00",
      intensity: "Hard",
      thumbnailUrl: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/ml6cT4AZdqI"
    },
    {
      id: "2",
      title: "30-Minute Strength Training",
      category: "Strength",
      duration: "30:00",
      intensity: "Medium",
      thumbnailUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/WIHy-ZnSndA"
    },
    {
      id: "3",
      title: "Yoga for Flexibility",
      category: "Flexibility",
      duration: "20:00",
      intensity: "Easy",
      thumbnailUrl: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/esNw-ELNgUs"
    },
    {
      id: "4",
      title: "Core Strength Workout",
      category: "Strength",
      duration: "15:00",
      intensity: "Medium",
      thumbnailUrl: "https://images.unsplash.com/photo-1616803689943-5601631c7fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/CbKsXPt7DYQ"
    },
    {
      id: "5",
      title: "Running Interval Training",
      category: "Cardio",
      duration: "25:00",
      intensity: "Hard",
      thumbnailUrl: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/tJGzHin8ffw"
    },
    {
      id: "6",
      title: "Beginner Pilates",
      category: "Flexibility",
      duration: "35:00",
      intensity: "Medium",
      thumbnailUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/cIxRza4x7A0"
    }
  ],
  cardio: [
    {
      id: "1",
      title: "Full Body HIIT Workout",
      category: "Cardio",
      duration: "15:00",
      intensity: "Hard",
      thumbnailUrl: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/ml6cT4AZdqI"
    },
    {
      id: "5",
      title: "Running Interval Training",
      category: "Cardio",
      duration: "25:00",
      intensity: "Hard",
      thumbnailUrl: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/tJGzHin8ffw"
    }
  ],
  strength: [
    {
      id: "2",
      title: "30-Minute Strength Training",
      category: "Strength",
      duration: "30:00",
      intensity: "Medium",
      thumbnailUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/WIHy-ZnSndA"
    },
    {
      id: "4",
      title: "Core Strength Workout",
      category: "Strength",
      duration: "15:00",
      intensity: "Medium",
      thumbnailUrl: "https://images.unsplash.com/photo-1616803689943-5601631c7fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/CbKsXPt7DYQ"
    }
  ],
  flexibility: [
    {
      id: "3",
      title: "Yoga for Flexibility",
      category: "Flexibility",
      duration: "20:00",
      intensity: "Easy",
      thumbnailUrl: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/esNw-ELNgUs"
    },
    {
      id: "6",
      title: "Beginner Pilates",
      category: "Flexibility",
      duration: "35:00",
      intensity: "Medium",
      thumbnailUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/cIxRza4x7A0"
    }
  ]
};

export function getWorkoutVideos(category: string = "all"): WorkoutVideoProps[] {
  return workoutVideos[category] || workoutVideos.all;
}
