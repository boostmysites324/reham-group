import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({error}: {error: Error}) {
  return (
    <div role="alert" className="p-4 bg-red-50 border border-red-200 rounded-md">
      <h2 className="text-lg font-semibold text-red-800">Something went wrong:</h2>
      <pre className="text-sm text-red-600 mt-2">{error.message}</pre>
      <button 
        onClick={() => window.location.reload()}
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Try again
      </button>
    </div>
  )
}
import Chatbot from "@/components/Chatbot";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import SeaFreight from "./pages/SeaFreight";
import AirFreight from "./pages/AirFreight";
import ProjectCargo from "./pages/ProjectCargo";
import FreightForwarding from "./pages/FreightForwarding";
import OverlandFreight from "./pages/OverlandFreight";
import CustomBrokerage from "./pages/CustomBrokerage";
import EcommerceServices from "./pages/EcommerceServices";
import CollaborativePackaging from "./pages/CollaborativePackaging";
import OrderFulfillment from "./pages/OrderFulfillment";
import LogisticsWarehousing from "./pages/LogisticsWarehousing";
import ColdChainServices from "./pages/ColdChainServices";
import Technology from "./pages/Technology";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/sea-freight" element={<SeaFreight />} />
              <Route path="/air-freight" element={<AirFreight />} />
              <Route path="/project-cargo" element={<ProjectCargo />} />
              <Route path="/freight-forwarding" element={<FreightForwarding />} />
              <Route path="/overland-freight" element={<OverlandFreight />} />
              <Route path="/custom-brokerage" element={<CustomBrokerage />} />
              <Route path="/ecommerce-services" element={<EcommerceServices />} />
              <Route path="/collaborative-packaging" element={<CollaborativePackaging />} />
              <Route path="/order-fulfillment" element={<OrderFulfillment />} />
              <Route path="/logistics-warehousing" element={<LogisticsWarehousing />} />
              <Route path="/cold-chain-services" element={<ColdChainServices />} />
              <Route path="/technology" element={<Technology />} />
              <Route path="/contact" element={<Contact />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Chatbot />
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
