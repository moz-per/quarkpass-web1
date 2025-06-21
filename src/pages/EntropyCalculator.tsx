
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Atom, ArrowLeft, Calculator } from "lucide-react";
import { Link } from "react-router-dom";

const EntropyCalculator = () => {
  const [password, setPassword] = useState("");
  const [entropy, setEntropy] = useState<number | null>(null);
  const [details, setDetails] = useState<any>(null);

  const calculateEntropy = () => {
    if (!password) return;

    const length = password.length;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSymbols = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
    
    let charSet = 0;
    if (hasLowerCase) charSet += 26;
    if (hasUpperCase) charSet += 26;
    if (hasNumbers) charSet += 10;
    if (hasSymbols) charSet += 32;
    
    const calculatedEntropy = length * Math.log2(charSet);
    
    setEntropy(Math.round(calculatedEntropy * 100) / 100);
    setDetails({
      length,
      charSet,
      hasUpperCase,
      hasLowerCase,
      hasNumbers,
      hasSymbols,
      bitsPerChar: Math.round(Math.log2(charSet) * 100) / 100
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <nav className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Atom className="h-6 w-6 sm:h-8 sm:w-8 text-cyan-400" />
            <span className="text-xl sm:text-2xl font-bold text-white">QuarkPass</span>
          </Link>
          <Link to="/">
            <Button variant="outline" className="text-black bg-white border-cyan-400 hover:bg-cyan-400 hover:text-slate-900 text-sm sm:text-base">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Password Entropy Calculator
            </h1>
            <p className="text-slate-300 text-sm sm:text-base px-4">
              Calculate the mathematical strength of your password using entropy measurements
            </p>
          </div>

          <Card className="bg-slate-800/50 border-slate-700 mb-6 sm:mb-8">
            <CardHeader>
              <CardTitle className="text-white flex items-center text-lg sm:text-xl">
                <Calculator className="mr-2 h-5 w-5" />
                Entropy Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                type="password"
                placeholder="Enter password to analyze..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-slate-700 border-slate-600 text-white text-sm sm:text-base"
              />
              
              <Button 
                onClick={calculateEntropy}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-sm sm:text-base"
                disabled={!password}
              >
                Calculate Entropy
              </Button>

              {entropy !== null && details && (
                <div className="space-y-4 mt-6">
                  <div className="text-center p-4 sm:p-6 bg-slate-700 rounded-lg">
                    <div className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-2">{entropy}</div>
                    <div className="text-white font-semibold text-sm sm:text-base">bits of entropy</div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-3 sm:p-4 bg-slate-700 rounded-lg">
                      <div className="text-slate-300 text-xs sm:text-sm">Password Length</div>
                      <div className="text-white font-bold text-lg sm:text-xl">{details.length}</div>
                    </div>
                    <div className="p-3 sm:p-4 bg-slate-700 rounded-lg">
                      <div className="text-slate-300 text-xs sm:text-sm">Character Set Size</div>
                      <div className="text-white font-bold text-lg sm:text-xl">{details.charSet}</div>
                    </div>
                  </div>

                  <div className="p-3 sm:p-4 bg-slate-700 rounded-lg">
                    <h3 className="text-white font-semibold mb-3 text-sm sm:text-base">Character Types Used:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                      <div className={details.hasLowerCase ? "text-green-400" : "text-red-400"}>
                        {details.hasLowerCase ? "✓" : "✗"} Lowercase (a-z): +26 chars
                      </div>
                      <div className={details.hasUpperCase ? "text-green-400" : "text-red-400"}>
                        {details.hasUpperCase ? "✓" : "✗"} Uppercase (A-Z): +26 chars
                      </div>
                      <div className={details.hasNumbers ? "text-green-400" : "text-red-400"}>
                        {details.hasNumbers ? "✓" : "✗"} Numbers (0-9): +10 chars
                      </div>
                      <div className={details.hasSymbols ? "text-green-400" : "text-red-400"}>
                        {details.hasSymbols ? "✓" : "✗"} Symbols: +32 chars
                      </div>
                    </div>
                  </div>

                  <div className="p-3 sm:p-4 bg-slate-700 rounded-lg">
                    <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">Entropy Calculation:</h3>
                    <div className="text-slate-300 text-xs sm:text-sm space-y-1">
                      <div>Entropy = Length × log₂(Character Set Size)</div>
                      <div>Entropy = {details.length} × log₂({details.charSet})</div>
                      <div>Entropy = {details.length} × {details.bitsPerChar} = {entropy} bits</div>
                    </div>
                  </div>

                  <div className="p-3 sm:p-4 bg-slate-700 rounded-lg">
                    <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">Strength Assessment:</h3>
                    <div className="text-slate-300 text-xs sm:text-sm">
                      {entropy < 28 && "Very Weak - Easily cracked"}
                      {entropy >= 28 && entropy < 35 && "Weak - Vulnerable to attacks"}
                      {entropy >= 35 && entropy < 59 && "Fair - Moderate security"}
                      {entropy >= 59 && entropy < 128 && "Strong - Good security"}
                      {entropy >= 128 && "Quantum-Resistant - Excellent security"}
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-4">Understanding Entropy</h2>
              <div className="text-slate-300 space-y-3 text-xs sm:text-sm">
                <p>
                  Password entropy measures the unpredictability of a password. Higher entropy means the password is harder to guess or crack through brute force attacks.
                </p>
                <div className="space-y-2">
                  <div><strong className="text-white">0-28 bits:</strong> Very weak, crackable instantly</div>
                  <div><strong className="text-white">28-35 bits:</strong> Weak, crackable in seconds</div>
                  <div><strong className="text-white">36-59 bits:</strong> Fair, crackable in hours/days</div>
                  <div><strong className="text-white">60-127 bits:</strong> Strong, secure against classical attacks</div>
                  <div><strong className="text-white">128+ bits:</strong> Quantum-resistant, future-proof security</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EntropyCalculator;
