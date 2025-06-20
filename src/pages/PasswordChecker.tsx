
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Atom, ArrowLeft, AlertTriangle, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const PasswordChecker = () => {
  const [password, setPassword] = useState("");
  const [analysis, setAnalysis] = useState<any>(null);

  const analyzePassword = () => {
    if (!password) return;

    const length = password.length;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSymbols = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
    
    // Calculate entropy
    let charSet = 0;
    if (hasLowerCase) charSet += 26;
    if (hasUpperCase) charSet += 26;
    if (hasNumbers) charSet += 10;
    if (hasSymbols) charSet += 32;
    
    const entropy = length * Math.log2(charSet);
    
    // Quantum resistance assessment
    let quantumResistant = false;
    let riskLevel = "HIGH";
    let color = "text-red-400";
    
    if (entropy >= 128) {
      quantumResistant = true;
      riskLevel = "LOW";
      color = "text-green-400";
    } else if (entropy >= 80) {
      riskLevel = "MEDIUM";
      color = "text-yellow-400";
    }

    setAnalysis({
      length,
      entropy: Math.round(entropy),
      quantumResistant,
      riskLevel,
      color,
      hasUpperCase,
      hasLowerCase,
      hasNumbers,
      hasSymbols
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Atom className="h-8 w-8 text-cyan-400" />
            <span className="text-2xl font-bold text-white">QuarkPass</span>
          </Link>
          <Link to="/">
            <Button variant="outline" className="text-white border-cyan-400 hover:bg-cyan-400 hover:text-slate-900">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              Quantum Password Checker
            </h1>
            <p className="text-slate-300">
              Analyze your password's resistance to quantum computing attacks
            </p>
          </div>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Enter Your Password</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Input
                  type="password"
                  placeholder="Type your password here..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-slate-700 border-slate-600 text-white"
                />
                <p className="text-sm text-slate-400">
                  Your password is analyzed locally and never sent to our servers.
                </p>
              </div>
              
              <Button 
                onClick={analyzePassword}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                disabled={!password}
              >
                Analyze Password
              </Button>

              {analysis && (
                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between p-4 bg-slate-700 rounded-lg">
                    <span className="text-white font-semibold">Quantum Resistance:</span>
                    <div className="flex items-center space-x-2">
                      {analysis.quantumResistant ? (
                        <CheckCircle className="h-5 w-5 text-green-400" />
                      ) : (
                        <AlertTriangle className="h-5 w-5 text-red-400" />
                      )}
                      <span className={`font-bold ${analysis.color}`}>
                        {analysis.riskLevel} RISK
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-slate-700 rounded-lg">
                      <div className="text-slate-300 text-sm">Length</div>
                      <div className="text-white font-bold">{analysis.length} characters</div>
                    </div>
                    <div className="p-3 bg-slate-700 rounded-lg">
                      <div className="text-slate-300 text-sm">Entropy</div>
                      <div className="text-white font-bold">{analysis.entropy} bits</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-white font-semibold">Password Composition:</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className={analysis.hasUpperCase ? "text-green-400" : "text-red-400"}>
                        {analysis.hasUpperCase ? "✓" : "✗"} Uppercase letters
                      </div>
                      <div className={analysis.hasLowerCase ? "text-green-400" : "text-red-400"}>
                        {analysis.hasLowerCase ? "✓" : "✗"} Lowercase letters
                      </div>
                      <div className={analysis.hasNumbers ? "text-green-400" : "text-red-400"}>
                        {analysis.hasNumbers ? "✓" : "✗"} Numbers
                      </div>
                      <div className={analysis.hasSymbols ? "text-green-400" : "text-red-400"}>
                        {analysis.hasSymbols ? "✓" : "✗"} Symbols
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-700 rounded-lg">
                    <h3 className="text-white font-semibold mb-2">Recommendation:</h3>
                    <p className="text-slate-300 text-sm">
                      {analysis.quantumResistant 
                        ? "Your password appears to be quantum-resistant! It has sufficient entropy to withstand quantum attacks."
                        : "Your password may be vulnerable to quantum attacks. Consider using a longer password with more diverse characters (20+ characters recommended)."}
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PasswordChecker;
