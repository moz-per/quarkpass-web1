import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { useSEO } from "@/hooks/useSEO";

const FAQ = () => {
  useSEO({
    title: "FAQ - QuarkPass | Quantum Computing & Password Security Questions",
    description: "Get answers to frequently asked questions about quantum computing threats, quantum-safe passwords, and how QuarkPass protects your digital security.",
    keywords: "quantum computing FAQ, password security questions, quantum threats, post-quantum cryptography",
    canonicalUrl: "https://quarkpass.com/faq",
    schemaData: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the quantum threat to passwords?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Quantum computers can break current encryption methods through algorithms like Shor's algorithm, potentially compromising password security systems within 10-20 years."
          }
        }
      ]
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation showBackButton={true} backButtonText="Back to Home" />

      {/* FAQ Content */}
      <main className="container mx-auto px-4 sm:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
              Quantum Computing & 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Cybersecurity FAQ
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300">
              Everything you need to know about the quantum threat to password security
            </p>
          </header>

          <section className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-4 sm:p-8 border border-slate-700">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="what-is-quantum-computing" className="border-slate-600">
                <AccordionTrigger className="text-white hover:text-cyan-400">
                  What is Quantum Computing?
                </AccordionTrigger>
                <AccordionContent className="text-slate-300">
                  Quantum computing is a revolutionary computing paradigm that uses quantum mechanical phenomena like superposition and entanglement to process information. Unlike classical computers that use bits (0 or 1), quantum computers use quantum bits (qubits) that can exist in multiple states simultaneously, enabling them to solve certain problems exponentially faster than classical computers.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="quantum-threat-passwords" className="border-slate-600">
                <AccordionTrigger className="text-white hover:text-cyan-400">
                  How do quantum computers threaten current password security?
                </AccordionTrigger>
                <AccordionContent className="text-slate-300">
                  Quantum computers can break current encryption methods through algorithms like Shor's algorithm, which can efficiently factor large numbers and solve discrete logarithm problems. This means RSA encryption, elliptic curve cryptography, and other widely-used security protocols could be compromised. While passwords themselves aren't directly factored, the systems protecting them could be vulnerable.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="when-quantum-threat" className="border-slate-600">
                <AccordionTrigger className="text-white hover:text-cyan-400">
                  When will quantum computers pose a real threat?
                </AccordionTrigger>
                <AccordionContent className="text-slate-300">
                  Experts estimate that cryptographically relevant quantum computers could emerge within 10-20 years. However, the "harvest now, decrypt later" threat is already real - adversaries may be collecting encrypted data today to decrypt it once quantum computers become available. This is why preparing quantum-resistant security measures is crucial now.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="quantum-resistant-passwords" className="border-slate-600">
                <AccordionTrigger className="text-white hover:text-cyan-400">
                  What makes a password quantum-resistant?
                </AccordionTrigger>
                <AccordionContent className="text-slate-300">
                  Quantum-resistant passwords are longer, more complex, and designed to withstand both classical and quantum attacks. They typically include high entropy (randomness), extended length (20+ characters), and diverse character sets. The key is that even with quantum computing's speed advantages, brute-force attacks on truly random, long passwords remain computationally infeasible.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="cybersecurity-impact" className="border-slate-600">
                <AccordionTrigger className="text-white hover:text-cyan-400">
                  What's the broader impact on cybersecurity?
                </AccordionTrigger>
                <AccordionContent className="text-slate-300">
                  The quantum revolution will fundamentally reshape cybersecurity. Organizations must transition to post-quantum cryptography, implement quantum-safe protocols, and redesign security architectures. This includes updating PKI systems, VPNs, secure communications, and digital signatures. The transition is already beginning with NIST's post-quantum cryptographic standards.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="protect-now" className="border-slate-600">
                <AccordionTrigger className="text-white hover:text-cyan-400">
                  How can I protect myself now?
                </AccordionTrigger>
                <AccordionContent className="text-slate-300">
                  Start by using quantum-resistant passwords: long (20+ characters), random, and unique for each account. Enable multi-factor authentication, use password managers, and stay informed about quantum-safe security practices. Organizations should begin planning their post-quantum cryptography migration and assess their quantum risk exposure.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="password-length" className="border-slate-600">
                <AccordionTrigger className="text-white hover:text-cyan-400">
                  How long should quantum-safe passwords be?
                </AccordionTrigger>
                <AccordionContent className="text-slate-300">
                  For quantum resistance, passwords should be at least 20-25 characters long with high entropy. However, the most important factor is randomness - a truly random 20-character password with mixed case letters, numbers, and symbols provides excellent quantum resistance. Length alone isn't enough if the password follows predictable patterns.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="business-impact" className="border-slate-600">
                <AccordionTrigger className="text-white hover:text-cyan-400">
                  What should businesses do to prepare?
                </AccordionTrigger>
                <AccordionContent className="text-slate-300">
                  Businesses should conduct quantum risk assessments, develop post-quantum migration roadmaps, and begin implementing quantum-safe practices. This includes inventory of cryptographic assets, staff training, budget allocation for security upgrades, and collaboration with vendors on quantum-ready solutions. Early preparation is crucial as the transition will be complex and time-consuming.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          <div className="text-center mt-12">
            <Link to="/" aria-label="Try our quantum-safe security tools">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white">
                Try Our Quantum-Safe Tools
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FAQ;
