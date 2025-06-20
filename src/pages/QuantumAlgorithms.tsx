
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Atom, ArrowLeft, Shield, Zap, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const QuantumAlgorithms = () => {
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
              Quantum-Safe
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Cryptographic Algorithms
              </span>
            </h1>
            <p className="text-xl text-slate-300">
              Understanding post-quantum cryptography and the future of secure communications
            </p>
          </div>

          <div className="grid gap-8 mb-12">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Shield className="mr-2 h-6 w-6 text-cyan-400" />
                  Post-Quantum Cryptography Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4">
                <p>
                  Post-quantum cryptography refers to cryptographic algorithms that are secure against attacks by quantum computers. As quantum computers develop, traditional encryption methods like RSA and ECC will become vulnerable to quantum algorithms like Shor's algorithm.
                </p>
                <p>
                  The National Institute of Standards and Technology (NIST) has been working to standardize quantum-resistant cryptographic algorithms to prepare for the quantum computing era.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-400 transition-colors">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Lock className="mr-2 h-5 w-5 text-green-400" />
                    Lattice-Based
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-slate-300">
                  <h4 className="text-cyan-400 font-semibold mb-2">CRYSTALS-Kyber</h4>
                  <p className="text-sm mb-3">
                    Key encapsulation mechanism based on the Learning With Errors (LWE) problem over module lattices.
                  </p>
                  <div className="space-y-1 text-xs">
                    <div><strong>Security:</strong> High</div>
                    <div><strong>Key Size:</strong> Medium</div>
                    <div><strong>Performance:</strong> Good</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-400 transition-colors">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Zap className="mr-2 h-5 w-5 text-purple-400" />
                    Hash-Based
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-slate-300">
                  <h4 className="text-cyan-400 font-semibold mb-2">SPHINCS+</h4>
                  <p className="text-sm mb-3">
                    Stateless hash-based signature scheme providing strong security guarantees based on hash functions.
                  </p>
                  <div className="space-y-1 text-xs">
                    <div><strong>Security:</strong> Very High</div>
                    <div><strong>Signature Size:</strong> Large</div>
                    <div><strong>Verification:</strong> Fast</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 hover:border-yellow-400 transition-colors">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Shield className="mr-2 h-5 w-5 text-yellow-400" />
                    Code-Based
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-slate-300">
                  <h4 className="text-cyan-400 font-semibold mb-2">Classic McEliece</h4>
                  <p className="text-sm mb-3">
                    Based on error-correcting codes, offering strong security with well-understood mathematical foundations.
                  </p>
                  <div className="space-y-1 text-xs">
                    <div><strong>Security:</strong> High</div>
                    <div><strong>Key Size:</strong> Very Large</div>
                    <div><strong>Maturity:</strong> High</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">NIST Standardized Algorithms</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-cyan-400 font-semibold mb-3">Primary Standards</h3>
                    <div className="space-y-4 text-slate-300">
                      <div className="p-3 bg-slate-700 rounded-lg">
                        <h4 className="text-white font-semibold">CRYSTALS-Kyber</h4>
                        <p className="text-sm">Key establishment (encryption)</p>
                        <div className="text-xs mt-1 text-cyan-400">Status: Standardized</div>
                      </div>
                      <div className="p-3 bg-slate-700 rounded-lg">
                        <h4 className="text-white font-semibold">CRYSTALS-Dilithium</h4>
                        <p className="text-sm">Digital signatures</p>
                        <div className="text-xs mt-1 text-cyan-400">Status: Standardized</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-cyan-400 font-semibold mb-3">Alternative Standards</h3>
                    <div className="space-y-4 text-slate-300">
                      <div className="p-3 bg-slate-700 rounded-lg">
                        <h4 className="text-white font-semibold">FALCON</h4>
                        <p className="text-sm">Compact signatures</p>
                        <div className="text-xs mt-1 text-cyan-400">Status: Standardized</div>
                      </div>
                      <div className="p-3 bg-slate-700 rounded-lg">
                        <h4 className="text-white font-semibold">SPHINCS+</h4>
                        <p className="text-sm">Stateless signatures</p>
                        <div className="text-xs mt-1 text-cyan-400">Status: Standardized</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Implementation Considerations</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-cyan-400 font-semibold mb-3">Migration Strategy</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Hybrid approaches during transition period</li>
                      <li>• Regular security assessments and updates</li>
                      <li>• Staff training on quantum-safe practices</li>
                      <li>• Vendor evaluation for PQC support</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-cyan-400 font-semibold mb-3">Performance Trade-offs</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Larger key and signature sizes</li>
                      <li>• Different computational requirements</li>
                      <li>• Network bandwidth considerations</li>
                      <li>• Storage and memory impacts</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Industry Adoption Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="p-4 bg-green-900/30 rounded-lg text-center">
                      <div className="text-green-400 font-bold text-lg">2016-2022</div>
                      <div className="text-slate-300 text-sm">NIST Competition</div>
                    </div>
                    <div className="p-4 bg-blue-900/30 rounded-lg text-center">
                      <div className="text-blue-400 font-bold text-lg">2022-2024</div>
                      <div className="text-slate-300 text-sm">Standardization</div>
                    </div>
                    <div className="p-4 bg-yellow-900/30 rounded-lg text-center">
                      <div className="text-yellow-400 font-bold text-lg">2024-2030</div>
                      <div className="text-slate-300 text-sm">Early Adoption</div>
                    </div>
                    <div className="p-4 bg-purple-900/30 rounded-lg text-center">
                      <div className="text-purple-400 font-bold text-lg">2030+</div>
                      <div className="text-slate-300 text-sm">Widespread Use</div>
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm mt-4">
                    Organizations should begin planning their quantum-safe migration now, as the transition will require significant time and resources.
                  </p>
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
                Test Your Password
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumAlgorithms;
