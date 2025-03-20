
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Sidebar from "@/components/layout/Sidebar";

import Index from "@/pages/Index";
import Formation from "@/pages/Formation";
import AbacusDocumentation from "@/pages/AbacusDocumentation";
import YoozDocumentation from "@/pages/YoozDocumentation";
import Lexicon from "@/pages/Lexicon";
import Resources from "@/pages/Resources";
import Templates from "@/pages/Templates";
import ChartOfAccounts from "@/pages/ChartOfAccounts";
import NotFound from "@/pages/NotFound";
import Administrations from "@/pages/Administrations";
import SwissMap from "@/pages/SwissMap";
import Quiz from "@/pages/Quiz";
import ExcelConverter from "@/pages/ExcelConverter";

const queryClient = new QueryClient();

// Google Analytics integration
const GoogleAnalytics = () => {
  React.useEffect(() => {
    // Google Analytics script would be loaded here
    // This is a placeholder - you would need to add your actual GA tracking ID
    console.log('Google Analytics initialized');
  }, []);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <GoogleAnalytics />
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex-1 pt-20">
            <div className="container mx-auto px-4 md:px-6 py-8">
              <div className="flex flex-col md:flex-row">
                <Sidebar />
                <main className="flex-1">
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/formation/*" element={<Formation />} />
                    <Route path="/formation/quiz" element={<Quiz />} />
                    <Route path="/abacus/*" element={<AbacusDocumentation />} />
                    <Route path="/abacus/excel-converter" element={<ExcelConverter />} />
                    <Route path="/yooz/*" element={<YoozDocumentation />} />
                    <Route path="/lexique" element={<Lexicon />} />
                    <Route path="/ressources" element={<Resources />} />
                    <Route path="/ressources/administrations" element={<Administrations />} />
                    <Route path="/ressources/carte" element={<SwissMap />} />
                    <Route path="/templates/*" element={<Templates />} />
                    <Route path="/plan-comptable" element={<ChartOfAccounts />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
