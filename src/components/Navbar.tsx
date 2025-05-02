
import { Button } from "@/components/ui/button";
import { Dumbbell, User, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <Dumbbell className="h-6 w-6 text-fitness-primary" />
            <span className="text-xl font-bold">FitTrack</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-fitness-primary transition-colors">
            Dashboard
          </Link>
          <Link to="/workouts" className="text-sm font-medium hover:text-fitness-primary transition-colors">
            Workouts
          </Link>
          <Link to="/tracker" className="text-sm font-medium hover:text-fitness-primary transition-colors">
            Tracker
          </Link>
          <Link to="/profile" className="text-sm font-medium hover:text-fitness-primary transition-colors">
            Profile
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="rounded-full">
            <User className="h-5 w-5" />
          </Button>
          
          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden rounded-full"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b pb-4">
          <nav className="flex flex-col container">
            <Link 
              to="/" 
              className="py-3 px-4 hover:bg-slate-50 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link 
              to="/workouts" 
              className="py-3 px-4 hover:bg-slate-50 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Workouts
            </Link>
            <Link 
              to="/tracker" 
              className="py-3 px-4 hover:bg-slate-50 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tracker
            </Link>
            <Link 
              to="/profile" 
              className="py-3 px-4 hover:bg-slate-50 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Profile
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
