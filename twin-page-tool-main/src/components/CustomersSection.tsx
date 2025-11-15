import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const CustomersSection = () => {
  const { language, isRTL, t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const customers = [
    {
      name: "Samsung",
      logo: "/logo/samsung.avif",
      alt: "Samsung logo"
    },
    {
      name: "Emirates",
      logo: "/logo/Emirates.webp",
      alt: "Emirates airline logo",
    },
    {
      name: "Maersk",
      logo: "/logo/maersk.jpg",
      alt: "Maersk shipping logo"
    },
    {
      name: "RTA Dubai",
      logo: "/logo/RTA-Logo.avif",
      alt: "RTA Roads and Transport Authority logo"
    },
    {
      name: "Sun Impex",
      logo: "/logo/sun_impex.jpg",
      alt: "Sun Impex logo"
    },
    {
      name: "Aquatech",
      logo: "/logo/Aquatech.png",
      alt: "Aquatech logo"
    },
    {
      name: "LT Foods",
      logo: "/logo/lt_foods.webp",
      alt: "LT Foods logo"
    },
    {
      name: "Himalaya",
      logo: "/logo/himalaya.avif",
      alt: "Himalaya Wellness logo"
    },
    {
      name: "Hyundai",
      logo: "/logo/HtcVN3-hyundai-logo-clipart-png-file.png",
      alt: "Hyundai logo"
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, customers.length - 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, customers.length - 3)) % Math.max(1, customers.length - 3));
  };

  // Auto-rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const visibleCustomers = customers.slice(currentIndex, currentIndex + Math.min(4, customers.length));

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t('customers.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('customers.subtitle')}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={isRTL ? nextSlide : prevSlide}
            className={`absolute top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg border-gray-300 hover:bg-gray-50 ${
              isRTL ? 'right-0' : 'left-0'
            }`}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={isRTL ? prevSlide : nextSlide}
            className={`absolute top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg border-gray-300 hover:bg-gray-50 ${
              isRTL ? 'left-0' : 'right-0'
            }`}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Partners Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 px-12">
            {visibleCustomers.map((customer, index) => (
              <div 
                key={customer.name}
                className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover-scale animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Logo */}
                <div 
                  className={`mb-4 flex items-center justify-center ${customer.hasDarkBg ? 'bg-black rounded-xl p-4' : ''}`}
                  style={{ minHeight: '120px' }}
                >
                  <img
                    src={customer.logo}
                    alt={customer.alt}
                    className="h-28 md:h-40 lg:h-48 object-contain max-w-full transition-all duration-300"
                    style={{
                      width: 'auto',
                      maxWidth: '200px',
                      imageRendering: 'auto'
                    }}
                    onError={(e) => {
                      // Fallback if image fails to load
                      console.error(`Failed to load logo for ${customer.name}`);
                    }}
                  />
                </div>
                
                {/* Partner Name */}
                <p className="text-sm font-medium text-gray-700 text-center">
                  {customer.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomersSection;