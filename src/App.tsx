
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";

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
import NotFound from "@/pages/NotFound";
import Administrations from "@/pages/Administrations";
import SwissMap from "@/pages/SwissMap";
import Quiz from "@/pages/Quiz";
import ExcelConverter from "@/pages/ExcelConverter";

const queryClient = new QueryClient();

// Google Analytics integration
const GoogleAnalytics = () => {
  React.useEffect(() => {
    // Google Analytics script integration
    if (typeof window !== 'undefined') {
      // Replace with your actual GA measurement ID
      const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; 
      
      // Load the GA script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(script);
      
      // Initialize GA
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', GA_MEASUREMENT_ID);
      
      // Expose gtag to window
      window.gtag = gtag;
    }
    
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
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-64 flex-shrink-0 bg-white rounded-lg shadow-sm">
                  <Sidebar />
                </div>
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
                    <Route path="/plan-comptable" element={<Navigate to="/formation/chart-of-accounts" replace />} />
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

// Add TypeScript interfaces for global window object
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export default App;
