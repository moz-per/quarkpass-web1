
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";

const PrivacyPolicy = () => {
  useSEO({
    title: "Privacy Policy - QuarkPass | Your Data Protection & Security",
    description: "Learn how QuarkPass protects your privacy and handles your data. Our comprehensive privacy policy covers data collection, usage, and your rights.",
    keywords: "privacy policy, data protection, GDPR, CCPA, user privacy, data security",
    canonicalUrl: "https://quarkpass.com/privacy-policy"
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-xl sm:text-2xl font-bold text-white">QuarkPass</div>
          </Link>
          <Link to="/">
            <Button variant="outline" className="text-black bg-white border-cyan-400 hover:bg-cyan-400 hover:text-slate-900">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-slate-700">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8">Privacy Policy</h1>
          <div className="prose prose-invert max-w-none space-y-6 text-slate-300">
            
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
              <p className="mb-4">
                QuarkPass is designed with privacy in mind. We collect minimal information to provide and improve our services:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Usage Analytics:</strong> We use Google Analytics and Microsoft Clarity to understand how users interact with our site</li>
                <li><strong>Technical Data:</strong> Browser type, device information, and IP address for security and performance</li>
                <li><strong>Passwords:</strong> All password analysis is performed locally in your browser - we never store or transmit your passwords</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Improve our website performance and user experience</li>
                <li>Analyze usage patterns to enhance our security tools</li>
                <li>Ensure the security and stability of our services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Data Security</h2>
              <p>
                Your security is our priority. All password analysis happens locally in your browser. We use industry-standard 
                security measures to protect any data we collect, including encryption in transit and at rest.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Third-Party Services</h2>
              <p className="mb-4">We use the following third-party services:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                <li><strong>Microsoft Clarity:</strong> For user behavior analysis and website optimization</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Your Rights</h2>
              <p className="mb-4">Under GDPR and CCPA, you have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Cookies</h2>
              <p>
                We use cookies and similar technologies to enhance your experience. You can control cookies through your 
                browser settings. Our cookie consent banner allows you to manage your preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us at: 
                <strong className="text-cyan-400"> privacy@quarkpass.com</strong>
              </p>
            </section>

            <div className="mt-8 p-4 bg-slate-700/50 rounded-lg">
              <p className="text-sm text-slate-400">
                Last updated: January 2025. We may update this policy from time to time. 
                Check this page regularly for changes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
