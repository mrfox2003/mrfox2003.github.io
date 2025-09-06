import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";


const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    const blob = document.getElementById("pointer-blob");
    const moveBlob = (e: MouseEvent) => {
      if (blob) {
        blob.style.transform = `translate(${e.clientX - 60}px, ${e.clientY - 60}px)`;
      }
    };
    window.addEventListener("mousemove", moveBlob);
    return () => window.removeEventListener("mousemove", moveBlob);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-blur-gradient">
        <div className="blob blob-top-left"></div>
        <div className="blob blob-center-right"></div>
        <div className="blob blob-bottom-right"></div>
      </div>
      <div id="pointer-blob"></div>
      <ThemeProvider 
        attribute="class" 
        defaultTheme="dark" 
        enableSystem={false}
        storageKey="niranjan-portfolio-theme"
      >
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
