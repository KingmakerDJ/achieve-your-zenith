
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Workouts from "./pages/Workouts";
import Tracker from "./pages/Tracker";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Chatbot from "./pages/Chatbot";
import WellnessPlan from "./pages/WellnessPlan";
import NutrientPlan from "./pages/NutrientPlan";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="workouts" element={<Workouts />} />
            <Route path="tracker" element={<Tracker />} />
            <Route path="chatbot" element={<Chatbot />} />
            <Route path="wellness-plan" element={<WellnessPlan />} />
            <Route path="nutrient-plan" element={<NutrientPlan />} />
            <Route path="profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
