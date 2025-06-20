
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, Lock, Zap, Atom, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Atom className="h-8 w-8 text-cyan-400" />
            <span className="text-2xl font-bold text-white">QuarkPass</span>
          </div>
          <Link to="/faq">
            <Button variant="outline" className="text-white border-cyan-400 hover:bg-cyan-400 hover:text-slate-900">
              FAQ
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
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
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20 border-t border-slate-700">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Quantum Security
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our advanced platform provides everything you need to protect against quantum computing threats
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-cyan-400 transition-colors">
              <Shield className="h-16 w-16 text-cyan-400 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-white mb-4 text-center">Quantum Analysis</h3>
              <p className="text-slate-300 text-center mb-6">
                Advanced algorithms assess your password's vulnerability to quantum computing attacks using entropy calculations and resistance metrics.
              </p>
              <Link to="/checker" className="block">
                <Button className="w-full bg-cyan-500 hover:bg-cyan-600">
                  Analyze Password
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-purple-400 transition-colors">
              <Lock className="h-16 w-16 text-purple-400 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-white mb-4 text-center">Secure Generation</h3>
              <p className="text-slate-300 text-center mb-6">
                Create passwords designed to withstand both classical and quantum computing threats with cryptographically secure randomness.
              </p>
              <Link to="/generator" className="block">
                <Button className="w-full bg-purple-500 hover:bg-purple-600">
                  Generate Password
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-yellow-400 transition-colors">
              <Zap className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-white mb-4 text-center">Future-Proof Security</h3>
              <p className="text-slate-300 text-center mb-6">
                Stay ahead of the quantum revolution with next-generation password protection that evolves with emerging threats.
              </p>
              <Link to="/faq" className="block">
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-slate-900">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="container mx-auto px-6 py-20 border-t border-slate-700">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-300">
              Quick answers to common questions about quantum computing and password security
            </p>
          </div>

          <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="what-is-quantum-threat" className="border-slate-600">
                <AccordionTrigger className="text-white hover:text-cyan-400">
                  What is the quantum threat to passwords?
                </AccordionTrigger>
                <AccordionContent className="text-slate-300">
                  Quantum computers can break current encryption methods through algorithms like Shor's algorithm, potentially compromising password security systems within 10-20 years.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="quantum-resistant-password" className="border-slate-600">
                <AccordionTrigger className="text-white hover:text-cyan-400">
                  How do I create a quantum-resistant password?
                </AccordionTrigger>
                <AccordionContent className="text-slate-300">
                  Use passwords with high entropy (20+ characters), include diverse character sets, and ensure true randomness. Our generator creates quantum-safe passwords automatically.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="when-prepare" className="border-slate-600">
                <AccordionTrigger className="text-white hover:text-cyan-400">
                  When should I start preparing for quantum threats?
                </AccordionTrigger>
                <AccordionContent className="text-slate-300">
                  Now! The "harvest now, decrypt later" threat means adversaries may be collecting encrypted data today to decrypt it once quantum computers become available.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="text-center mt-8">
              <Link to="/faq">
                <Button size="lg" variant="outline" className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900">
                  View All FAQs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800/50 border-t border-slate-700 mt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <Atom className="h-8 w-8 text-cyan-400" />
                <span className="text-2xl font-bold text-white">QuarkPass</span>
              </div>
              <p className="text-slate-400">
                Protecting you from tomorrow's quantum threats, today.
              </p>
            </div>

            {/* Quantum Analysis */}
            <div>
              <h3 className="text-white font-semibold mb-4">Quantum Analysis</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/checker" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    Password Checker
                  </Link>
                </li>
                <li>
                  <span className="text-slate-400">Entropy Calculator</span>
                </li>
                <li>
                  <span className="text-slate-400">Risk Assessment</span>
                </li>
              </ul>
            </div>

            {/* Secure Generation */}
            <div>
              <h3 className="text-white font-semibold mb-4">Secure Generation</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/generator" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    Password Generator
                  </Link>
                </li>
                <li>
                  <span className="text-slate-400">Quantum-Safe Algorithms</span>
                </li>
                <li>
                  <span className="text-slate-400">Custom Parameters</span>
                </li>
              </ul>
            </div>

            {/* Future-Proof Security */}
            <div>
              <h3 className="text-white font-semibold mb-4">Future-Proof Security</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/faq" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <span className="text-slate-400">Quantum Computing Info</span>
                </li>
                <li>
                  <span className="text-slate-400">Security Best Practices</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-slate-400">
              &copy; 2024 QuarkPass. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
