
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Shield, ArrowLeft, Copy, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(24);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [copied, setCopied] = useState(false);

  const generatePassword = () => {
    let charset = "";
    if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) charset += "0123456789";
    if (includeSymbols) charset += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    if (charset === "") return;

    let result = "";
    const array = new Uint8Array(length);
    crypto.getRandomValues(array);
    
    for (let i = 0; i < length; i++) {
      result += charset[array[i] % charset.length];
    }
    
    setPassword(result);
    setCopied(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const calculateEntropy = () => {
    let charSet = 0;
    if (includeLowercase) charSet += 26;
    if (includeUppercase) charSet += 26;
    if (includeNumbers) charSet += 10;
    if (includeSymbols) charSet += 25;
    return Math.round(length * Math.log2(charSet));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-cyan-400" />
            <span className="text-2xl font-bold text-white">QuantumShield</span>
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
              Quantum-Safe Password Generator
            </h1>
            <p className="text-slate-300">
              Generate cryptographically secure passwords resistant to quantum attacks
            </p>
          </div>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Password Configuration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label className="text-white">Password Length: {length}</Label>
                <input
                  type="range"
                  min="12"
                  max="50"
                  value={length}
                  onChange={(e) => setLength(parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-slate-400">
                  <span>12</span>
                  <span>50</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <label className="flex items-center space-x-2 text-white cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeUppercase}
                    onChange={(e) => setIncludeUppercase(e.target.checked)}
                    className="rounded"
                  />
                  <span>Uppercase (A-Z)</span>
                </label>
                <label className="flex items-center space-x-2 text-white cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeLowercase}
                    onChange={(e) => setIncludeLowercase(e.target.checked)}
                    className="rounded"
                  />
                  <span>Lowercase (a-z)</span>
                </label>
                <label className="flex items-center space-x-2 text-white cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeNumbers}
                    onChange={(e) => setIncludeNumbers(e.target.checked)}
                    className="rounded"
                  />
                  <span>Numbers (0-9)</span>
                </label>
                <label className="flex items-center space-x-2 text-white cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeSymbols}
                    onChange={(e) => setIncludeSymbols(e.target.checked)}
                    className="rounded"
                  />
                  <span>Symbols (!@#$)</span>
                </label>
              </div>

              <Button 
                onClick={generatePassword}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"
                disabled={!includeUppercase && !includeLowercase && !includeNumbers && !includeSymbols}
              >
                Generate Quantum-Safe Password
              </Button>

              {password && (
                <div className="space-y-4">
                  <div className="p-4 bg-slate-700 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <Label className="text-white">Generated Password:</Label>
                      <Button
                        onClick={copyToClipboard}
                        size="sm"
                        variant="outline"
                        className="text-cyan-400 border-cyan-400 hover:bg-cyan-400 hover:text-slate-900"
                      >
                        {copied ? (
                          <CheckCircle className="h-4 w-4 mr-1" />
                        ) : (
                          <Copy className="h-4 w-4 mr-1" />
                        )}
                        {copied ? "Copied!" : "Copy"}
                      </Button>
                    </div>
                    <div className="p-3 bg-slate-800 rounded font-mono text-white break-all">
                      {password}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-slate-700 rounded-lg">
                      <div className="text-slate-300 text-sm">Entropy</div>
                      <div className="text-white font-bold">{calculateEntropy()} bits</div>
                    </div>
                    <div className="p-3 bg-slate-700 rounded-lg">
                      <div className="text-slate-300 text-sm">Quantum Resistance</div>
                      <div className={`font-bold ${calculateEntropy() >= 128 ? "text-green-400" : "text-yellow-400"}`}>
                        {calculateEntropy() >= 128 ? "EXCELLENT" : "GOOD"}
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-700 rounded-lg">
                    <h3 className="text-white font-semibold mb-2">Security Analysis:</h3>
                    <p className="text-slate-300 text-sm">
                      {calculateEntropy() >= 128 
                        ? "This password provides excellent quantum resistance with high entropy. It would take quantum computers an impractical amount of time to crack."
                        : "This password provides good security for current threats. For maximum quantum resistance, consider increasing length or complexity."}
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

export default PasswordGenerator;
