import { Ship, Globe, DollarSign, Building2, CheckCircle, Star, ArrowUpRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import QuoteRequestForm from "@/components/QuoteRequestForm";
import { useLanguage } from "@/contexts/LanguageContext";

const ImpactSection = () => {
  const { t, isRTL } = useLanguage();

  const stats = [
    {
      icon: Ship,
      number: "1M+",
      label: t('stats.shipments_delivered'),
      description: isRTL ? "تم التسليم بنجاح في جميع أنحاء العالم" : "Successfully delivered worldwide",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Globe,
      number: "200+",
      label: t('stats.global_ports'),
      description: isRTL ? "متصل عالمياً" : "Connected worldwide",
      color: "from-green-500 to-green-600"
    },
    {
      icon: DollarSign,
      number: "$2.5B",
      label: t('stats.cargo_value'),
      description: isRTL ? "بضائع متميزة تُنقل سنوياً" : "Premium goods transported annually",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Building2,
      number: "10K+",
      label: t('stats.satisfied_clients'),
      description: isRTL ? "يثقون في خبرتنا اللوجستية" : "Trust our logistics expertise",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: CheckCircle,
      number: "99.9%",
      label: t('stats.on_time_delivery'),
      description: isRTL ? "دقة يمكنك الاعتماد عليها" : "Punctuality you can count on",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Star,
      number: "15+",
      label: t('stats.years_experience'),
      description: isRTL ? "قيادة الصناعة" : "Industry leadership",
      color: "from-yellow-500 to-yellow-600"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl ${
          isRTL ? '-left-40' : '-right-40'
        }`}></div>
        <div className={`absolute -bottom-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl ${
          isRTL ? '-right-40' : '-left-40'
        }`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Ship className={`h-5 w-5 text-primary ${isRTL ? 'ml-2' : 'mr-2'}`} />
            <span className="text-primary font-semibold text-sm">{t('impact.our_impact')}</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            {t('impact.trusted_by')} <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">{t('impact.thousands')}</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('impact.description')}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index} 
                className="group bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover-scale border border-white/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon with Gradient Background */}
                <div className="relative mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className={`absolute -top-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm ${
                    isRTL ? '-left-1' : '-right-1'
                  }`}>
                    <ArrowUpRight className="h-3 w-3 text-gray-600" />
                  </div>
                </div>
                
                {/* Number with Animation */}
                <div className="mb-4">
                  <span className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    {stat.number}
                  </span>
                </div>
                
                {/* Label */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {stat.label}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>

                {/* Progress Bar Animation */}
                <div className="mt-6 h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${stat.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ${
                      isRTL ? 'origin-right' : 'origin-left'
                    }`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Bottom CTA - Compact Version */}
        <div className="relative animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="bg-gradient-to-r from-primary via-primary to-primary/90 rounded-2xl p-8 shadow-xl text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className={`absolute top-0 w-32 h-32 bg-white/20 rounded-full -translate-y-16 ${
                isRTL ? 'right-0 translate-x-16' : 'left-0 -translate-x-16'
              }`}></div>
              <div className={`absolute bottom-0 w-24 h-24 bg-white/20 rounded-full ${
                isRTL ? 'left-0 -translate-x-12 translate-y-12' : 'right-0 translate-x-12 translate-y-12'
              }`}></div>
            </div>

            <div className="relative z-10 text-center">
              <div className="flex items-center justify-center mb-4">
                <div className={`w-8 h-8 bg-white/20 rounded-full flex items-center justify-center ${isRTL ? 'ml-3' : 'mr-3'}`}>
                  <Ship className="h-4 w-4 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">
                  {t('impact.cta_title')}
                </h3>
              </div>
              
              <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
                {t('impact.cta_subtitle')}
              </p>
              
              <div className={`flex flex-col sm:flex-row gap-3 justify-center items-center mb-6 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                <QuoteRequestForm
                  trigger={
                    <Button 
                      size="default" 
                      className="bg-white text-primary hover:bg-white/90 px-6 py-3 font-semibold hover-scale shadow-lg"
                    >
                      {t('impact.get_started_today')}
                      <ArrowUpRight className={`h-4 w-4 ${isRTL ? 'mr-2' : 'ml-2'}`} />
                    </Button>
                  }
                />
                
                <Button 
                  variant="secondary" 
                  size="default" 
                  className="bg-white/15 border border-white/30 text-white hover:bg-white/25 hover:border-white/50 backdrop-blur-md px-6 py-3 font-semibold transition-all duration-300 hover-scale"
                >
                  {t('impact.view_case_studies')}
                </Button>
              </div>

              {/* Compact Trust Indicators */}
              <div className={`flex flex-wrap justify-center items-center gap-6 text-white/80 border-t border-white/20 pt-4 ${isRTL ? 'space-x-reverse space-x-6' : 'space-x-6'}`}>
                <div className="flex items-center">
                  <Star className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                  <span className="text-sm font-medium">{t('impact.iso_certified')}</span>
                </div>
                <div className="flex items-center">
                  <Shield className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                  <span className="text-sm font-medium">{t('impact.fully_insured')}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                  <span className="text-sm font-medium">{t('impact.support_24_7')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;