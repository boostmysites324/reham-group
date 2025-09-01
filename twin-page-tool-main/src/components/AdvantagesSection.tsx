import { Diamond, Shield, Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AdvantagesSection = () => {
  const { t, isRTL } = useLanguage();

  const advantages = [
    {
      icon: Diamond,
      title: isRTL ? "خبرة لا مثيل لها" : "Unmatched Expertise",
      description: isRTL 
        ? "15+ سنة من الخبرة في الخدمات اللوجستية الفاخرة، معالجة أكثر من مليار دولار من الشحنات المتميزة سنوياً."
        : "15+ years of experience in luxury logistics, handling over $1B worth of premium shipments annually.",
      features: isRTL 
        ? ["بروتوكولات معالجة متخصصة", "شهادات رائدة في الصناعة"]
        : ["Specialized handling protocols", "Industry-leading certification"]
    },
    {
      icon: Shield,
      title: isRTL ? "أمان مطلق" : "Ultimate Security",
      description: isRTL 
        ? "إجراءات أمان متقدمة تضمن حماية شحناتك القيمة في كل خطوة."
        : "Advanced security measures ensuring your valuable shipments are protected at every step.",
      features: isRTL 
        ? ["أنظمة مراقبة 24/7", "بروتوكولات عبور آمنة"]
        : ["24/7 surveillance systems", "Secure transit protocols"]
    },
    {
      icon: Clock,
      title: isRTL ? "دقة التوقيت" : "Time Precision",
      description: isRTL 
        ? "معدل توصيل في الوقت المحدد 99.9% مع تتبع فوري وتحديثات استباقية."
        : "99.9% on-time delivery rate with real-time tracking and proactive updates.",
      features: isRTL 
        ? ["نوافذ توصيل مضمونة", "خيارات معالجة ذات أولوية"]
        : ["Guaranteed delivery windows", "Priority handling options"]
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-primary mb-4">
            {isRTL ? "مزايا رهام" : "The Aura Advantage"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {isRTL 
              ? "اكتشف لماذا تختار العلامات التجارية الفاخرة الرائدة والعملاء المميزون خدمات رهام اللوجستية"
              : "Discover why leading luxury brands and discerning clients choose Aura Logistics"
            }
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <div key={index} className="text-center animate-fade-in hover-scale" style={{ animationDelay: `${index * 0.2}s` }}>
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6 transition-transform duration-300 hover:scale-110">
                  <IconComponent className="h-10 w-10 text-primary-foreground" />
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {advantage.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  {advantage.description}
                </p>
                
                {/* Features */}
                <div className="space-y-3">
                  {advantage.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-center">
                      <CheckCircle className={`h-5 w-5 text-primary ${isRTL ? 'ml-3' : 'mr-3'}`} />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;