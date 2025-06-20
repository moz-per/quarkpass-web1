
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Atom, ArrowLeft, Zap, Shield, AlertTriangle, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const QuantumInfo = () => {
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
              Quantum Computing
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Threat Intelligence
              </span>
            </h1>
            <p className="text-xl text-slate-300">
              Understanding the quantum revolution and its impact on cybersecurity
            </p>
          </div>

          <div className="grid gap-8 mb-12">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Atom className="mr-2 h-6 w-6 text-cyan-400" />
                  What is Quantum Computing?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4">
                <p>
                  Quantum computing harnesses quantum mechanical phenomena like superposition and entanglement to process information in fundamentally different ways than classical computers. While classical computers use bits that are either 0 or 1, quantum computers use quantum bits (qubits) that can exist in multiple states simultaneously.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="p-4 bg-slate-700 rounded-lg text-center">
                    <Zap className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
                    <h3 className="text-white font-semibold">Superposition</h3>
                    <p className="text-sm">Qubits can be in multiple states at once</p>
                  </div>
                  <div className="p-4 bg-slate-700 rounded-lg text-center">
                    <Atom className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                    <h3 className="text-white font-semibold">Entanglement</h3>
                    <p className="text-sm">Qubits can be correlated across distances</p>
                  </div>
                  <div className="p-4 bg-slate-700 rounded-lg text-center">
                    <Shield className="h-8 w-8 text-green-400 mx-auto mb-2" />
                    <h3 className="text-white font-semibold">Interference</h3>
                    <p className="text-sm">Quantum states can amplify correct answers</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <AlertTriangle className="mr-2 h-5 w-5 text-red-400" />
                    Current Threat Level
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-slate-300 space-y-3">
                  <div className="p-3 bg-red-900/30 rounded-lg">
                    <h4 className="text-red-400 font-semibold">Immediate Threat: Harvest Now, Decrypt Later</h4>
                    <p className="text-sm mt-1">
                      Adversaries are collecting encrypted data today to decrypt once quantum computers become available.
                    </p>
                  </div>
                  <div className="p-3 bg-yellow-900/30 rounded-lg">
                    <h4 className="text-yellow-400 font-semibold">Near-term Risk (5-10 years)</h4>
                    <p className="text-sm mt-1">
                      Quantum computers may break current encryption standards, affecting RSA, ECC, and ECDSA.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Clock className="mr-2 h-5 w-5 text-cyan-400" />
                    Timeline Predictions
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-slate-300 space-y-3">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span>Current quantum computers:</span>
                      <span className="text-cyan-400">100-1000 qubits</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Cryptographically relevant:</span>
                      <span className="text-yellow-400">4000+ qubits needed</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Expert consensus:</span>
                      <span className="text-red-400">10-20 years</span>
                    </div>
                  </div>
                  <p className="text-sm mt-3 p-3 bg-slate-700 rounded">
                    Some experts predict sooner breakthroughs, making immediate preparation crucial.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Quantum Algorithms Threatening Cryptography</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-slate-700 rounded-lg">
                      <h3 className="text-cyan-400 font-semibold mb-2">Shor's Algorithm</h3>
                      <p className="text-slate-300 text-sm mb-2">
                        Efficiently factors large integers and solves discrete logarithm problems.
                      </p>
                      <div className="text-xs text-red-400">
                        <strong>Threatens:</strong> RSA, ECC, ECDSA, Diffie-Hellman
                      </div>
                    </div>
                    <div className="p-4 bg-slate-700 rounded-lg">
                      <h3 className="text-cyan-400 font-semibold mb-2">Grover's Algorithm</h3>
                      <p className="text-slate-300 text-sm mb-2">
                        Provides quadratic speedup for searching unsorted databases.
                      </p>
                      <div className="text-xs text-yellow-400">
                        <strong>Threatens:</strong> Symmetric encryption (effective key length halved)
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 bg-slate-700 rounded-lg">
                      <h3 className="text-cyan-400 font-semibold mb-2">Simon's Algorithm</h3>
                      <p className="text-slate-300 text-sm mb-2">
                        Finds hidden periodicities in certain mathematical functions.
                      </p>
                      <div className="text-xs text-orange-400">
                        <strong>Threatens:</strong> Some symmetric ciphers with specific structures
                      </div>
                    </div>
                    <div className="p-4 bg-slate-700 rounded-lg">
                      <h3 className="text-cyan-400 font-semibold mb-2">Quantum Period Finding</h3>
                      <p className="text-slate-300 text-sm mb-2">
                        Generalizes Shor's algorithm for other cryptographic problems.
                      </p>
                      <div className="text-xs text-red-400">
                        <strong>Threatens:</strong> Various number-theoretic cryptosystems
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Quantum Computing Companies & Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-slate-700 rounded-lg">
                    <h3 className="text-white font-semibold mb-2">IBM</h3>
                    <div className="text-sm text-slate-300 space-y-1">
                      <div>• 1000+ qubit processors</div>
                      <div>• Quantum Network program</div>
                      <div>• Cloud quantum computing</div>
                    </div>
                  </div>
                  <div className="p-4 bg-slate-700 rounded-lg">
                    <h3 className="text-white font-semibold mb-2">Google</h3>
                    <div className="text-sm text-slate-300 space-y-1">
                      <div>• Quantum supremacy claims</div>
                      <div>• Sycamore processor</div>
                      <div>• Error correction research</div>
                    </div>
                  </div>
                  <div className="p-4 bg-slate-700 rounded-lg">
                    <h3 className="text-white font-semibold mb-2">Others</h3>
                    <div className="text-sm text-slate-300 space-y-1">
                      <div>• Microsoft Azure Quantum</div>
                      <div>• Amazon Braket</div>
                      <div>• IonQ, Rigetti, PsiQuantum</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Impact on Different Sectors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-cyan-400 font-semibold mb-3">High-Risk Sectors</h3>
                    <div className="space-y-2 text-slate-300 text-sm">
                      <div className="p-2 bg-red-900/30 rounded">Financial Services - Banking, trading systems</div>
                      <div className="p-2 bg-red-900/30 rounded">Government - National security, classified data</div>
                      <div className="p-2 bg-red-900/30 rounded">Healthcare - Patient records, research data</div>
                      <div className="p-2 bg-red-900/30 rounded">Critical Infrastructure - Power grids, transportation</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-cyan-400 font-semibold mb-3">Preparation Actions</h3>
                    <div className="space-y-2 text-slate-300 text-sm">
                      <div className="p-2 bg-green-900/30 rounded">Inventory cryptographic assets</div>
                      <div className="p-2 bg-green-900/30 rounded">Develop migration roadmaps</div>
                      <div className="p-2 bg-green-900/30 rounded">Test post-quantum algorithms</div>
                      <div className="p-2 bg-green-900/30 rounded">Train security teams</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link to="/risk-assessment">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white mr-4">
                Assess Your Risk
              </Button>
            </Link>
            <Link to="/quantum-algorithms">
              <Button size="lg" variant="outline" className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
                Learn About Quantum-Safe Algorithms
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumInfo;
