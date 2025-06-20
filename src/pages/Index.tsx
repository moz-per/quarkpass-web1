
import { Button } from "@/components/ui/button";
import { Shield, Lock, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-cyan-400" />
            <span className="text-2xl font-bold text-white">QuantumShield</span>
          </div>
          <Link to="/faq">
            <Button variant="outline" className="text-white border-cyan-400 hover:bg-cyan-400 hover:text-slate-900">
              FAQ
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Hero Title */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Quantum-Safe
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Password Security
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Protect yourself from the quantum computing revolution. Check if your passwords are quantum-resistant and generate unbreakable quantum-safe passwords.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/checker">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg h-auto">
                <Lock className="mr-2 h-5 w-5" />
                Check Password Strength
              </Button>
            </Link>
            <Link to="/generator">
              <Button size="lg" variant="outline" className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 text-lg h-auto">
                <Zap className="mr-2 h-5 w-5" />
                Generate Quantum-Safe Password
              </Button>
            </Link>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <Shield className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Quantum-Resistant Analysis</h3>
              <p className="text-slate-300">Advanced algorithms assess your password's vulnerability to quantum computing attacks.</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <Lock className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Secure Generation</h3>
              <p className="text-slate-300">Create passwords designed to withstand both classical and quantum computing threats.</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <Zap className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Future-Proof Security</h3>
              <p className="text-slate-300">Stay ahead of the quantum revolution with next-generation password protection.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-slate-700">
        <div className="text-center text-slate-400">
          <p>&copy; 2024 QuantumShield. Protecting you from tomorrow's threats, today.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
