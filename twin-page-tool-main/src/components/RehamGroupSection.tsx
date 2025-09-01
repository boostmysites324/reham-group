import { useLanguage } from "@/contexts/LanguageContext";
import { Building2, ExternalLink, Users, Globe, TrendingUp, Home, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

const RehamGroupSection = () => {
  const { isRTL } = useLanguage();

  const groupCompanies = [
    {
      id: 1,
      name: isRTL ? "ريهام للشحن" : "Reham Shipping",
      description: isRTL ? "خدمات الشحن والخدمات اللوجستية المتكاملة" : "Comprehensive Shipping & Logistics Services",
      services: isRTL ? [
        "الشحن الجوي والبحري",
        "التخليص الجمركي",
        "التخزين والتوزيع"
      ] : [
        "Air & Sea Freight",
        "Customs Clearance",
        "Warehousing & Distribution"
      ],
      website: "https://rehamshipping.com",
      icon: Building2,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      current: true
    },
    {
      id: 2,
      name: isRTL ? "ريهام للتجارة" : "Reham Trading",
      description: isRTL ? "التجارة العامة والاستيراد والتصدير" : "General Trading & Import/Export",
      services: isRTL ? [
        "استيراد وتصدير البضائع",
        "التجارة العامة",
        "توزيع المنتجات"
      ] : [
        "Import & Export",
        "General Trading",
        "Product Distribution"
      ],
      website: "https://rehamgroup.com/trading",
      icon: TrendingUp,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      id: 3,
      name: isRTL ? "ريهام للعقارات" : "Reham Real Estate",
      description: isRTL ? "التطوير العقاري والاستثمار العقاري" : "Real Estate Development & Investment",
      services: isRTL ? [
        "تطوير المشاريع العقارية",
        "الاستثمار العقاري",
        "إدارة الممتلكات"
      ] : [
        "Property Development",
        "Real Estate Investment",
        "Property Management"
      ],
      website: "https://rehamgroup.com/real-estate",
      icon: Home,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      id: 4,
      name: isRTL ? "ريهام للاستثمار" : "Reham Investment",
      description: isRTL ? "الاستثمارات المالية والمشاريع الاستراتيجية" : "Financial Investments & Strategic Projects",
      services: isRTL ? [
        "الاستثمارات المالية",
        "إدارة المحافظ",
        "المشاريع الاستراتيجية"
      ] : [
        "Financial Investments",
        "Portfolio Management",
        "Strategic Projects"
      ],
      website: "https://rehamgroup.com/investment",
      icon: Users,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    },
    {
      id: 5,
      name: isRTL ? "ريهام للتقنية" : "Reham Technology",
      description: isRTL ? "الحلول التقنية والرقمية المتقدمة" : "Advanced Technology & Digital Solutions",
      services: isRTL ? [
        "تطوير البرمجيات",
        "الحلول الرقمية",
        "الأتمتة والذكاء الاصطناعي"
      ] : [
        "Software Development",
        "Digital Solutions",
        "Automation & AI"
      ],
      website: "https://rehamgroup.com/technology",
      icon: Cpu,
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Building2 className={`h-5 w-5 text-primary ${isRTL ? 'ml-2' : 'mr-2'}`} />
            <span className="text-primary font-semibold text-sm">
              {isRTL ? 'مجموعة الشركات' : 'Group of Companies'}
            </span>
          </div>
          
          <h2 className="text-4xl font-bold text-primary mb-4">
            {isRTL ? 'مجموعة ريهام' : 'Reham Group'}
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            {isRTL 
              ? 'ريهام للشحن هي جزء من مجموعة ريهام - مجموعة شركات متكاملة تقدم خدمات متنوعة عبر قطاعات متعددة'
              : 'Reham Shipping is part of Reham Group - an integrated group of companies providing diverse services across multiple sectors'
            }
          </p>

          <div className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary/10 to-primary/20 rounded-full">
            <Globe className={`h-5 w-5 text-primary ${isRTL ? 'ml-3' : 'mr-3'}`} />
            <span className="text-primary font-semibold">
              {isRTL ? '5 شركات متخصصة' : '5 Specialized Companies'}
            </span>
          </div>
        </div>

        {/* Companies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {groupCompanies.map((company, index) => {
            const IconComponent = company.icon;
            return (
              <div 
                key={company.id}
                className={`group relative ${company.bgColor} ${company.borderColor} border-2 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in ${
                  company.current ? 'ring-2 ring-primary/30' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Current Company Badge */}
                {company.current && (
                  <div className="absolute -top-3 -right-3 bg-primary text-white text-xs px-3 py-1 rounded-full font-semibold shadow-lg">
                    {isRTL ? 'الشركة الحالية' : 'Current Company'}
                  </div>
                )}

                {/* Icon and Header */}
                <div className="flex items-center mb-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${company.color} rounded-xl shadow-lg ${isRTL ? 'ml-4' : 'mr-4'}`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">
                      {company.name}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {company.description}
                </p>

                {/* Services */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-2">
                    {isRTL ? 'الخدمات الرئيسية:' : 'Key Services:'}
                  </h4>
                  <ul className="space-y-1">
                    {company.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="text-xs text-muted-foreground flex items-start">
                        <span className={`inline-block w-1 h-1 bg-current rounded-full ${isRTL ? 'ml-2 mt-2' : 'mr-2 mt-2'} flex-shrink-0`}></span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visit Website Button */}
                <a 
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-white/80 hover:bg-white text-foreground rounded-lg transition-colors duration-200 text-sm font-medium border border-gray-200 hover:border-primary/30 group-hover:shadow-md"
                >
                  {isRTL ? 'زيارة الموقع' : 'Visit Website'}
                  <ExternalLink className={`h-3 w-3 ${isRTL ? 'mr-2' : 'ml-2'}`} />
                </a>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              {isRTL ? 'شريك موثوق عبر قطاعات متعددة' : 'Trusted Partner Across Multiple Sectors'}
            </h3>
            
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              {isRTL 
                ? 'من خلال مجموعة ريهام، نقدم حلولاً شاملة ومتكاملة تلبي احتياجات عملائنا عبر مختلف القطاعات والصناعات'
                : 'Through Reham Group, we provide comprehensive and integrated solutions that meet our clients\' needs across various sectors and industries'
              }
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://rehamgroup.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 font-medium hover-scale">
                  <Globe className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                  {isRTL ? 'زيارة موقع المجموعة' : 'Visit Group Website'}
                </Button>
              </a>
              
              <div className="text-sm text-muted-foreground">
                {isRTL ? 'اكتشف المزيد عن خدماتنا المتنوعة' : 'Discover more about our diverse services'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RehamGroupSection;
