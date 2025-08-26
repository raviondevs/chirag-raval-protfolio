import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";
import Index from "./pages/Index";
import LogoShowcase from "./pages/LogoShowcase";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      {/* Animated Cursor - Only show on desktop */}
      {typeof window !== 'undefined' && window.innerWidth > 768 && (
        <AnimatedCursor
          innerSize={6}
          outerSize={32}
          color="59, 130, 246"
          outerAlpha={0.4}
          innerScale={0.8}
          outerScale={1.5}
          trailingSpeed={5}
          showSystemCursor={true}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link',
            '[data-clickable]'
          ]}
        />
      )}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/logo-designs" element={<LogoShowcase />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
