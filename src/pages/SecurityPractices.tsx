
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Atom, ArrowLeft, Shield, CheckCircle, AlertTriangle, Lock, Key, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const SecurityPractices = () => {
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
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">
              Quantum-Safe Security
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Best Practices
              </span>
            </h1>
            <p className="text-xl text-slate-300">
              Essential guidelines for protecting yourself in the quantum computing era
            </p>
          </div>

          <div className="grid gap-8 mb-12">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Shield className="mr-2 h-6 w-6 text-green-400" />
                  Immediate Actions You Can Take
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-green-900/20 rounded-lg border border-green-400/30">
                      <div className="flex items-center mb-2">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                        <h3 className="text-white font-semibold">Password Strength</h3>
                      </div>
                      <ul className="text-slate-300 text-sm space-y-1">
                        <li>• Use 20+ character passwords</li>
                        <li>• Include all character types (A-z, 0-9, symbols)</li>
                        <li>• Generate truly random passwords</li>
                        <li>• Avoid predictable patterns</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-400/30">
                      <div className="flex items-center mb-2">
                        <Key className="h-5 w-5 text-blue-400 mr-2" />
                        <h3 className="text-white font-semibold">Multi-Factor Authentication</h3>
                      </div>
                      <ul className="text-slate-300 text-sm space-y-1">
                        <li>• Enable MFA on all accounts</li>
                        <li>• Use app-based authentication</li>
                        <li>• Avoid SMS when possible</li>
                        <li>• Consider hardware security keys</li>
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 bg-purple-900/20 rounded-lg border border-purple-400/30">
                      <div className="flex items-center mb-2">
                        <Lock className="h-5 w-5 text-purple-400 mr-2" />
                        <h3 className="text-white font-semibold">Password Management</h3>
                      </div>
                      <ul className="text-slate-300 text-sm space-y-1">
                        <li>• Use a reputable password manager</li>
                        <li>• Generate unique passwords per account</li>
                        <li>• Regularly update passwords</li>
                        <li>• Enable password manager MFA</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-cyan-900/20 rounded-lg border border-cyan-400/30">
                      <div className="flex items-center mb-2">
                        <Eye className="h-5 w-5 text-cyan-400 mr-2" />
                        <h3 className="text-white font-semibold">Security Monitoring</h3>
                      </div>
                      <ul className="text-slate-300 text-sm space-y-1">
                        <li>• Monitor account activity regularly</li>
                        <li>• Set up breach notifications</li>
                        <li>• Review security logs</li>
                        <li>• Stay informed about threats</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-slate-800/50 border-slate-700 hover:border-green-400 transition-colors">
                <CardHeader>
                  <CardTitle className="text-white text-lg">Personal Users</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-300 space-y-3">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Use quantum-resistant passwords (20+ chars)</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Enable MFA everywhere possible</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Regular security awareness training</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Keep software updated</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-400 transition-colors">
                <CardHeader>
                  <CardTitle className="text-white text-lg">Small Businesses</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-300 space-y-3">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start">
                      <AlertTriangle className="h-4 w-4 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Conduct security risk assessments</span>
                    </div>
                    <div className="flex items-start">
                      <AlertTriangle className="h-4 w-4 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Implement password policies</span>
                    </div>
                    <div className="flex items-start">
                      <AlertTriangle className="h-4 w-4 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Plan for post-quantum transition</span>
                    </div>
                    <div className="flex items-start">
                      <AlertTriangle className="h-4 w-4 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Train employees on quantum threats</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 hover:border-red-400 transition-colors">
                <CardHeader>
                  <CardTitle className="text-white text-lg">Enterprises</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-300 space-y-3">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start">
                      <AlertTriangle className="h-4 w-4 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Crypto-agility implementation</span>
                    </div>
                    <div className="flex items-start">
                      <AlertTriangle className="h-4 w-4 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Inventory all cryptographic assets</span>
                    </div>
                    <div className="flex items-start">
                      <AlertTriangle className="h-4 w-4 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Develop migration roadmaps</span>
                    </div>
                    <div className="flex items-start">
                      <AlertTriangle className="h-4 w-4 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Partner with security vendors</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Password Security Checklist</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-green-400 font-semibold mb-4 flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5" />
                      Do These
                    </h3>
                    <div className="space-y-3 text-slate-300 text-sm">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span>Use passwords with 20+ characters for critical accounts</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span>Generate truly random passwords using secure tools</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span>Include uppercase, lowercase, numbers, and symbols</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span>Use unique passwords for every account</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span>Store passwords in a secure password manager</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span>Enable multi-factor authentication everywhere</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-red-400 font-semibold mb-4 flex items-center">
                      <AlertTriangle className="mr-2 h-5 w-5" />
                      Avoid These
                    </h3>
                    <div className="space-y-3 text-slate-300 text-sm">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span>Using personal information in passwords</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span>Reusing passwords across multiple accounts</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span>Using dictionary words or common phrases</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span>Storing passwords in browsers or plain text</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span>Sharing passwords via email or messaging</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span>Using predictable patterns or sequences</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-slate-800/50 to-purple-800/30 border-purple-400/50">
              <CardHeader>
                <CardTitle className="text-white">Future-Proofing Your Security</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4">
                <p>
                  The quantum threat is not just about passwords - it's about the entire security ecosystem. Here's how to prepare for the quantum future:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-slate-700/50 rounded-lg">
                    <h4 className="text-cyan-400 font-semibold mb-2">Stay Informed</h4>
                    <p className="text-sm">Follow quantum computing developments and security updates from NIST and other authorities.</p>
                  </div>
                  <div className="p-4 bg-slate-700/50 rounded-lg">
                    <h4 className="text-cyan-400 font-semibold mb-2">Plan Ahead</h4>
                    <p className="text-sm">Develop migration strategies for when post-quantum cryptography becomes standard.</p>
                  </div>
                  <div className="p-4 bg-slate-700/50 rounded-lg">
                    <h4 className="text-cyan-400 font-semibold mb-2">Practice Now</h4>
                    <p className="text-sm">Implement quantum-safe practices today to build security habits for tomorrow.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link to="/generator">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white mr-4">
                Generate Quantum-Safe Password
              </Button>
            </Link>
            <Link to="/checker">
              <Button size="lg" variant="outline" className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
                Check Your Password
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityPractices;
