import { Button } from "@/components/ui/button";
import QuoteRequestForm from "@/components/QuoteRequestForm";
import { Menu, Ship, ChevronDown, Globe } from "lucide-react";
import { useState, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const { language, setLanguage, t, isRTL } = useLanguage();
  const location = useLocation();

  const services = useMemo(() => {
    try {
      return [
        { name: t('services.our_services'), path: "/services" },
        { name: t('services.project_cargo'), path: "/project-cargo" },
        { name: t('services.freight_forwarding'), path: "/freight-forwarding" },
        { name: t('services.air_freight'), path: "/air-freight" },
        { name: t('services.sea_freight'), path: "/sea-freight" },
        { name: t('services.overland_freight'), path: "/overland-freight" },
        { name: t('services.custom_brokerage'), path: "/custom-brokerage" },
        { name: t('services.ecommerce_services'), path: "/ecommerce-services" },
        { name: t('services.collaborative_packaging'), path: "/collaborative-packaging" },
        { name: t('services.order_fulfillment'), path: "/order-fulfillment" },
        { name: t('services.logistics_warehousing'), path: "/logistics-warehousing" },
        { name: t('services.cold_chain_services'), path: "/cold-chain-services" }
      ];
    } catch (error) {
      console.error('Error creating services array:', error);
      return [
        { name: 'Services', path: "/services" },
        { name: 'Project Cargo', path: "/project-cargo" },
        { name: 'Freight Forwarding', path: "/freight-forwarding" },
        { name: 'Air Freight', path: "/air-freight" },
        { name: 'Sea Freight', path: "/sea-freight" },
        { name: 'Overland Freight', path: "/overland-freight" },
        { name: 'Custom Brokerage', path: "/custom-brokerage" },
        { name: 'E-commerce Services', path: "/ecommerce-services" },
        { name: 'Collaborative Packaging', path: "/collaborative-packaging" },
        { name: 'Order Fulfillment', path: "/order-fulfillment" },
        { name: 'Logistics and Warehousing', path: "/logistics-warehousing" },
        { name: 'Cold Chain Services', path: "/cold-chain-services" }
      ];
    }
  }, [t]);



  // Helper function to determine if a route is active
  const isActiveRoute = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  // Check if any service page is active
  const isServiceActive = () => {
    return location.pathname === '/services' || services.slice(1).some(service => location.pathname === service.path);
  };

  // Toggle language function
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  return (
    <header className="bg-white border-b border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center animate-fade-in">
            <Link to="/" className="flex items-center hover-scale">
              <img 
                src="/lovable-uploads/c7376337-184a-4746-8022-9e846ca00a03.png" 
                alt="Reham Shipping Agency" 
                className="h-10 w-auto transition-transform duration-300"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className={`hidden md:flex items-center ${isRTL ? 'space-x-reverse space-x-8' : 'space-x-8'}`}>
            <Link 
              to="/" 
              className={`font-medium transition-colors ${
                isActiveRoute("/") 
                  ? "text-primary border-b-2 border-primary pb-1" 
                  : "text-gray-600 hover:text-gray-900"
              }`}
              >
                {t('nav.home')}
              </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                className={`flex items-center font-medium transition-colors ${
                  isServiceActive() 
                    ? "text-primary border-b-2 border-primary pb-1" 
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {t('nav.services')}
                <ChevronDown className={`h-4 w-4 ${isRTL ? 'mr-2' : 'ml-2'}`} />
              </button>
              
              {/* Dropdown Menu */}
              {isServicesDropdownOpen && (
                <div className={`absolute top-full mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50 ${
                  isRTL ? 'right-0' : 'left-0'
                }`}>
                  <div className="py-2">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.path}
                        className={`block px-4 py-2 text-sm transition-colors ${
                          index === 0 
                            ? 'text-primary font-semibold border-b border-gray-100 mb-1'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                        }`}
                        onClick={() => setIsServicesDropdownOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>


            
            <Link 
              to="/technology" 
              className={`font-medium transition-colors ${
                isActiveRoute("/technology") 
                  ? "text-primary border-b-2 border-primary pb-1" 
                  : "text-gray-600 hover:text-gray-900"
              }`}
              >
                {t('nav.technology')}
              </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-colors ${
                isActiveRoute("/about") 
                  ? "text-primary border-b-2 border-primary pb-1" 
                  : "text-gray-600 hover:text-gray-900"
              }`}
              >
                {t('nav.about')}
              </Link>
            <Link 
              to="/contact" 
              className={`font-medium transition-colors ${
                isActiveRoute("/contact") 
                  ? "text-primary border-b-2 border-primary pb-1" 
                  : "text-gray-600 hover:text-gray-900"
              }`}
              >
                {t('nav.contact')}
              </Link>
          </nav>

          {/* Language Toggle & CTA Button */}
          <div className={`hidden md:flex items-center ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'} animate-fade-in`} style={{ animationDelay: '0.3s' }}>
            {/* Language Toggle */}
            <Button 
              variant="outline" 
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center px-3 py-2 hover-scale border-gray-200 hover:border-primary"
            >
              <Globe className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
              <span className="font-medium">{language === 'en' ? 'EN' : 'AR'}</span>
            </Button>
            
            <QuoteRequestForm
              trigger={
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 font-medium hover-scale">
                  {t('nav.request_quote')}
                </Button>
              }
            />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`font-medium ${
                  isActiveRoute("/") ? "text-primary" : "text-gray-600"
                }`}
                >
                  {t('nav.home')}
              </Link>
              
              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                  className={`flex items-center font-medium w-full text-left ${
                    isServiceActive() ? "text-primary" : "text-gray-600"
                  }`}
                >
                  {t('nav.services')}
                  <ChevronDown className={`h-4 w-4 ${isRTL ? 'mr-2' : 'ml-2'}`} />
                </button>
                
                {isServicesDropdownOpen && (
                  <div className={`mt-2 space-y-2 ${isRTL ? 'pr-4' : 'pl-4'}`}>
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.path}
                        className={`block text-sm ${
                          index === 0 
                            ? 'text-primary font-semibold border-b border-gray-100 pb-2 mb-2'
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                        onClick={() => setIsServicesDropdownOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>


              
              <Link 
                to="/technology" 
                className={`font-medium ${
                  isActiveRoute("/technology") ? "text-primary" : "text-gray-600"
                }`}
                >
                  {t('nav.technology')}
              </Link>
              <Link 
                to="/about" 
                className={`font-medium ${
                  isActiveRoute("/about") ? "text-primary" : "text-gray-600"
                }`}
                >
                  {t('nav.about')}
              </Link>
              <Link 
                to="/contact" 
                className={`font-medium ${
                  isActiveRoute("/contact") ? "text-primary" : "text-gray-600"
                }`}
                >
                  {t('nav.contact')}
              </Link>
              
              {/* Mobile Language Toggle */}
              <Button 
                variant="outline" 
                size="sm"
                onClick={toggleLanguage}
                className="flex items-center justify-center w-full px-3 py-2 hover-scale border-gray-200 hover:border-primary"
              >
                <Globe className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                <span className="font-medium">{language === 'en' ? 'EN' : 'AR'}</span>
              </Button>
              
              <QuoteRequestForm
                trigger={
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 mt-4 w-full">
                    {t('nav.request_quote')}
                  </Button>
                }
              />
            </nav>
          </div>
        )}
      </div>
      
      {/* Overlay to close dropdown when clicking outside */}
      {isServicesDropdownOpen && (
        <div 
          className="fixed inset-0 z-40"
          onClick={() => {
            setIsServicesDropdownOpen(false);
          }}
        />
      )}
    </header>
  );
};

export default Header;