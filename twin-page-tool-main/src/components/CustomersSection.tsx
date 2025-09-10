import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import himalayanLogo from "@/assets/himalaya-wellness-logo.png";
import tkElevatorLogo from "@/assets/tk-elevator-logo.png";
import samsungLogo from "@/assets/samsung-logo.png";
import emiratesLogo from "@/assets/emirates-logo.png";
import maerskLogo from "@/assets/maersk-logo.png";
import rtaLogo from "@/assets/rta-logo.png";
import sunImpexLogo from "@/assets/sun-impex-logo.png";
import aquatechLogo from "@/assets/aquatech-logo.png";
import ltFoodsLogo from "@/assets/lt-foods-logo.png";
import newCustomer1Logo from "/lovable-uploads/3aa7e871-2592-40a3-81b5-cc28a97cbdb7.png";
import newCustomer2Logo from "/lovable-uploads/c7376337-184a-4746-8022-9e846ca00a03.png";

const CustomersSection = () => {
  const { language, isRTL, t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const customers = [
    {
      name: "Aquatech",
      logo: aquatechLogo,
      alt: "Aquatech logo"
    },
    {
      name: "LT Foods",
      logo: ltFoodsLogo,
      alt: "LT Foods logo"
    },
    {
      name: "Samsung",
      logo: samsungLogo,
      alt: "Samsung logo"
    },
    {
      name: "Himalaya Wellness",
      logo: himalayanLogo,
      alt: "Himalaya Wellness logo"
    },
    {
      name: "TK Elevator",
      logo: tkElevatorLogo, 
      alt: "TK Elevator logo"
    },
    {
      name: "Emirates",
      logo: emiratesLogo,
      alt: "Emirates airline logo"
    },
    {
      name: "Maersk",
      logo: maerskLogo,
      alt: "Maersk shipping logo"
    },
    {
      name: "RTA Dubai",
      logo: rtaLogo,
      alt: "RTA Roads and Transport Authority logo"
    },
    {
      name: "Sun Impex",
      logo: sunImpexLogo,
      alt: "Sun Impex logo"
    },
    {
      name: "New Partner 1",
      logo: newCustomer1Logo,
      alt: "New Partner 1 logo"
    },
    {
      name: "New Partner 2",
      logo: newCustomer2Logo,
      alt: "New Partner 2 logo"
    }
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

  const visibleCustomers = customers.slice(currentIndex, currentIndex + 4);

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
                <div className="mb-4">
                  <img
                    src={customer.logo}
                    alt={customer.alt}
                    className="h-16 md:h-20 object-contain max-w-full transition-all duration-300"
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