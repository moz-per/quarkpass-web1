
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Atom, ArrowLeft, Shield, AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import { Link } from "react-router-dom";

const RiskAssessment = () => {
  const [passwords, setPasswords] = useState("");
  const [assessment, setAssessment] = useState<any>(null);

  const assessRisk = () => {
    if (!passwords) return;

    const passwordList = passwords.split('\n').filter(p => p.trim());
    const results = passwordList.map(password => {
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
      
      const entropy = length * Math.log2(charSet);
      
      let riskLevel = "CRITICAL";
      let color = "text-red-400";
      let quantumSafe = false;
      
      if (entropy >= 128) {
        riskLevel = "LOW";
        color = "text-green-400";
        quantumSafe = true;
      } else if (entropy >= 80) {
        riskLevel = "MEDIUM";
        color = "text-yellow-400";
      } else if (entropy >= 60) {
        riskLevel = "HIGH";
        color = "text-orange-400";
      }

      const commonPatterns = [
        { pattern: /(.)\1{2,}/, name: "Repeated characters" },
        { pattern: /123|abc|qwe/i, name: "Sequential patterns" },
        { pattern: /password|admin|user/i, name: "Common words" },
        { pattern: /\d{4}/, name: "Year patterns" }
      ];

      const detectedPatterns = commonPatterns.filter(p => p.pattern.test(password)).map(p => p.name);

      return {
        password: password.substring(0, 3) + "***",
        length,
        entropy: Math.round(entropy),
        riskLevel,
        color,
        quantumSafe,
        patterns: detectedPatterns
      };
    });

    const totalPasswords = results.length;
    const criticalRisk = results.filter(r => r.riskLevel === "CRITICAL").length;
    const highRisk = results.filter(r => r.riskLevel === "HIGH").length;
    const mediumRisk = results.filter(r => r.riskLevel === "MEDIUM").length;
    const lowRisk = results.filter(r => r.riskLevel === "LOW").length;
    const quantumSafe = results.filter(r => r.quantumSafe).length;

    setAssessment({
      results,
      summary: {
        total: totalPasswords,
        critical: criticalRisk,
        high: highRisk,
        medium: mediumRisk,
        low: lowRisk,
        quantumSafe
      }
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
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              Security Risk Assessment
            </h1>
            <p className="text-slate-300">
              Comprehensive analysis of your password security posture
            </p>
          </div>

          <Card className="bg-slate-800/50 border-slate-700 mb-8">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Shield className="mr-2 h-5 w-5" />
                Password Risk Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-white text-sm font-medium">
                  Enter passwords (one per line):
                </label>
                <textarea
                  placeholder="password1&#10;mypassword123&#10;SecureP@ssw0rd!"
                  value={passwords}
                  onChange={(e) => setPasswords(e.target.value)}
                  className="w-full h-32 bg-slate-700 border-slate-600 text-white p-3 rounded-md resize-none"
                />
                <p className="text-sm text-slate-400">
                  Your passwords are analyzed locally and never sent to our servers.
                </p>
              </div>
              
              <Button 
                onClick={assessRisk}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                disabled={!passwords}
              >
                Assess Security Risk
              </Button>

              {assessment && (
                <div className="space-y-6 mt-8">
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <div className="p-4 bg-slate-700 rounded-lg text-center">
                      <div className="text-2xl font-bold text-white">{assessment.summary.total}</div>
                      <div className="text-slate-300 text-sm">Total</div>
                    </div>
                    <div className="p-4 bg-red-900/30 rounded-lg text-center">
                      <div className="text-2xl font-bold text-red-400">{assessment.summary.critical}</div>
                      <div className="text-slate-300 text-sm">Critical</div>
                    </div>
                    <div className="p-4 bg-orange-900/30 rounded-lg text-center">
                      <div className="text-2xl font-bold text-orange-400">{assessment.summary.high}</div>
                      <div className="text-slate-300 text-sm">High</div>
                    </div>
                    <div className="p-4 bg-yellow-900/30 rounded-lg text-center">
                      <div className="text-2xl font-bold text-yellow-400">{assessment.summary.medium}</div>
                      <div className="text-slate-300 text-sm">Medium</div>
                    </div>
                    <div className="p-4 bg-green-900/30 rounded-lg text-center">
                      <div className="text-2xl font-bold text-green-400">{assessment.summary.low}</div>
                      <div className="text-slate-300 text-sm">Low Risk</div>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-700 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-semibold">Quantum-Safe Passwords:</span>
                      <div className="flex items-center space-x-2">
                        {assessment.summary.quantumSafe > 0 ? (
                          <CheckCircle className="h-5 w-5 text-green-400" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-400" />
                        )}
                        <span className="text-white font-bold">
                          {assessment.summary.quantumSafe} / {assessment.summary.total}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-white font-semibold text-lg">Individual Password Analysis:</h3>
                    {assessment.results.map((result: any, index: number) => (
                      <div key={index} className="p-4 bg-slate-700 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-white font-mono">{result.password}</span>
                          <div className="flex items-center space-x-2">
                            {result.riskLevel === "CRITICAL" && <AlertTriangle className="h-4 w-4 text-red-400" />}
                            {result.riskLevel === "HIGH" && <AlertTriangle className="h-4 w-4 text-orange-400" />}
                            {result.riskLevel === "MEDIUM" && <AlertTriangle className="h-4 w-4 text-yellow-400" />}
                            {result.riskLevel === "LOW" && <CheckCircle className="h-4 w-4 text-green-400" />}
                            <span className={`font-bold ${result.color}`}>
                              {result.riskLevel} RISK
                            </span>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="text-slate-300">Length: </span>
                            <span className="text-white">{result.length}</span>
                          </div>
                          <div>
                            <span className="text-slate-300">Entropy: </span>
                            <span className="text-white">{result.entropy} bits</span>
                          </div>
                          <div>
                            <span className="text-slate-300">Quantum Safe: </span>
                            <span className={result.quantumSafe ? "text-green-400" : "text-red-400"}>
                              {result.quantumSafe ? "Yes" : "No"}
                            </span>
                          </div>
                        </div>
                        {result.patterns.length > 0 && (
                          <div className="mt-2">
                            <span className="text-slate-300 text-sm">Detected patterns: </span>
                            <span className="text-red-400 text-sm">{result.patterns.join(", ")}</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-white mb-4">Risk Assessment Guidelines</h2>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h3 className="text-cyan-400 font-semibold mb-2">Risk Levels</h3>
                  <div className="space-y-2 text-slate-300">
                    <div><span className="text-red-400">CRITICAL:</span> &lt;60 bits entropy</div>
                    <div><span className="text-orange-400">HIGH:</span> 60-79 bits entropy</div>
                    <div><span className="text-yellow-400">MEDIUM:</span> 80-127 bits entropy</div>
                    <div><span className="text-green-400">LOW:</span> 128+ bits entropy</div>
                  </div>
                </div>
                <div>
                  <h3 className="text-cyan-400 font-semibold mb-2">Recommendations</h3>
                  <div className="space-y-2 text-slate-300">
                    <div>• Use 20+ character passwords</div>
                    <div>• Include diverse character types</div>
                    <div>• Avoid common patterns</div>
                    <div>• Use unique passwords per account</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RiskAssessment;
