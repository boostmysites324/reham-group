import { CheckCircle, Plane, Ship, Truck, Warehouse, FileText, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import QuoteRequestForm from "@/components/QuoteRequestForm";
import { useLanguage } from "@/contexts/LanguageContext";
const airFreightImage = "/lovable-uploads/Freigh Forwarding.png";
const oceanFreightImage = "/lovable-uploads/Freigh Forwarding.png";
const finalMileImage = "/lovable-uploads/B2B B2C ORDER FULFILMENT.png";
const warehouseImage = "/lovable-uploads/Logistics and Warehousing.png";
const customsOfficeImage = "/lovable-uploads/Custom Brokerage.jpeg.jpg";
const technologyImage = "/lovable-uploads/Collaborative Packaging.png";

const ServicesSection = () => {
  const { t, isRTL } = useLanguage();

  const services = [
    {
      title: t('services.air_freight'),
      image: airFreightImage,
      icon: Plane,
      features: isRTL ? [
        "شحن جوي سريع",
        "خدمات الطيران المستأجر", 
        "توصيل من الباب إلى الباب"
      ] : [
        "Express Air Freight",
        "Charter Services", 
        "Door-to-Door Delivery"
      ]
    },
    {
      title: t('services.sea_freight'),
      image: oceanFreightImage,
      icon: Ship,
      features: isRTL ? [
        "خدمات الحاويات الكاملة والجزئية",
        "شحن بحري عالمي",
        "معالجة البضائع المشاريع"
      ] : [
        "FCL & LCL Services",
        "Global Sea Freight",
        "Project Cargo Handling"
      ]
    },
    {
      title: isRTL ? "الميل الأول والأخير" : "First & Final Mile",
      image: finalMileImage,
      icon: Truck,
      features: isRTL ? [
        "نقل محلي",
        "توصيل سريع",
        "خدمة فاخرة"
      ] : [
        "Domestic Transportation",
        "Express Delivery",
        "White Glove Service"
      ]
    },
    {
      title: t('services.logistics_warehousing'),
      image: warehouseImage,
      icon: Warehouse,
      features: isRTL ? [
        "حلول التخزين",
        "إدارة المخزون",
        "خدمات التوزيع"
      ] : [
        "Storage Solutions",
        "Inventory Management",
        "Distribution Services"
      ]
    },
    {
      title: t('services.custom_brokerage'),
      image: customsOfficeImage,
      icon: FileText,
      features: isRTL ? [
        "تخليص جمركي",
        "توثيق",
        "خدمات الامتثال"
      ] : [
        "Customs Clearance",
        "Documentation",
        "Compliance Services"
      ]
    },
    {
      title: t('nav.technology'),
      image: technologyImage,
      icon: Monitor,
      features: isRTL ? [
        "تتبع في الوقت الفعلي",
        "رؤية سلسلة التوريد",
        "حلول رقمية"
      ] : [
        "Real-time Tracking",
        "Supply Chain Visibility",
        "Digital Solutions"
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-primary mb-4">
            {t('services.our_services')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {isRTL 
              ? 'حلول لوجستية شاملة مصممة خصيصاً لاحتياجاتك'
              : 'Comprehensive logistics solutions tailored to your needs'
            }
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Image */}
                <div className="relative h-48">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-end" style={{backgroundColor: 'rgba(46, 40, 29, 0.5)'}}>
                    <h3 className="text-xl font-bold text-white p-6 w-full">
                      {service.title}
                    </h3>
                  </div>
                  {/* Service Icon */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                </div>
              
              {/* Features */}
              <div className="p-6">
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className={`h-5 w-5 text-primary flex-shrink-0 ${isRTL ? 'ml-3' : 'mr-3'}`} />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            );
          })}
        </div>

        {/* Request Quote Button */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <QuoteRequestForm
            trigger={
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg hover-scale">
                {t('nav.request_quote')}
              </Button>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;