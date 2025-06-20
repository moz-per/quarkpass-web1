
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import FAQ from "./pages/FAQ";
import PasswordChecker from "./pages/PasswordChecker";
import PasswordGenerator from "./pages/PasswordGenerator";
import EntropyCalculator from "./pages/EntropyCalculator";
import RiskAssessment from "./pages/RiskAssessment";
import QuantumAlgorithms from "./pages/QuantumAlgorithms";
import QuantumInfo from "./pages/QuantumInfo";
import SecurityPractices from "./pages/SecurityPractices";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/checker" element={<PasswordChecker />} />
          <Route path="/generator" element={<PasswordGenerator />} />
          <Route path="/entropy-calculator" element={<EntropyCalculator />} />
          <Route path="/risk-assessment" element={<RiskAssessment />} />
          <Route path="/quantum-algorithms" element={<QuantumAlgorithms />} />
          <Route path="/quantum-info" element={<QuantumInfo />} />
          <Route path="/security-practices" element={<SecurityPractices />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
