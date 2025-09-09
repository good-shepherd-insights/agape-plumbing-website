
import "./App.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Services from "./pages/Services";
import ServiceDetail from "./pages/services/ServiceDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import LocationServices from "./pages/services/LocationServices";
import LocationServiceDetail from "./pages/services/LocationServiceDetail";
import ServiceOrLocationHandler from "./components/LocationRedirect";
import Areas from "./pages/Areas";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            {/* Keep general services under /services */}
            <Route path="/services" element={<Services />} />
            {/* Service detail pages or location redirect - this will handle valid service slugs or redirect location slugs */}
            <Route path="/services/:serviceSlug" element={<ServiceOrLocationHandler />} />
            {/* Location-service combinations use /services pattern for canonical URLs */}
            <Route path="/services/:location/:serviceSlug" element={<LocationServiceDetail />} />
            <Route path="/areas" element={<Areas />} />
            <Route path="/areas/:location" element={<LocationServices />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
