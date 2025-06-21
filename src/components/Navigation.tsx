
import { Button } from "@/components/ui/button";
import { Atom, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface NavigationProps {
  showBackButton?: boolean;
  backButtonText?: string;
}

const Navigation = ({ showBackButton = false, backButtonText = "Back to Home" }: NavigationProps) => {
  return (
    <nav className="container mx-auto px-4 sm:px-6 py-4" role="navigation" aria-label="Main navigation">
      <div className="flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Atom className="h-6 w-6 sm:h-8 sm:w-8 text-cyan-400" aria-hidden="true" />
          <span className="text-xl sm:text-2xl font-bold text-white">QuarkPass</span>
        </Link>
        
        {showBackButton ? (
          <Link to="/" aria-label={backButtonText}>
            <Button variant="outline" className="text-black bg-white border-white hover:bg-cyan-400 hover:text-slate-900 text-sm sm:text-base">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {backButtonText}
            </Button>
          </Link>
        ) : (
          <Link to="/faq" aria-label="View frequently asked questions">
            <Button variant="outline" className="text-black bg-white border-white hover:bg-cyan-400 hover:text-slate-900 text-sm sm:text-base">
              FAQ
            </Button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
