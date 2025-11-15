import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import QuoteRequestForm from "@/components/QuoteRequestForm";
import { Search, Shield, ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-warehouse.jpg";

const HeroSection = () => {
  const { t, isRTL } = useLanguage();
  const navigate = useNavigate();
  const [trackingNumber, setTrackingNumber] = useState("");

  const handleTrackShipment = () => {
    // Only redirect if tracking number exists and is not empty
    const trimmedTrackingNumber = trackingNumber?.trim();
    if (!trimmedTrackingNumber) {
      return; // Don't redirect if no tracking number
    }
    
    // Redirect directly to holisoll - they will handle validation and show errors if invalid
    const trackingUrl = `https://testreham.holisollogistics.com/track_order?awb=${encodeURIComponent(trimmedTrackingNumber)}`;
    window.open(trackingUrl, '_blank');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleTrackShipment();
    }
  };

  const stats = [
    { number: "200+", label: t('hero.stat_ports') },
    { number: "24/7", label: t('hero.stat_support') },
    { number: "99.9%", label: t('hero.stat_delivery') }
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse ${
          isRTL ? '-left-10' : '-right-10'
        }`}></div>
        <div className={`absolute bottom-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse ${
          isRTL ? 'right-10' : 'left-10'
        }`} style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className={`grid lg:grid-cols-2 gap-16 items-center ${
          isRTL ? 'lg:grid-flow-col-dense' : ''
        }`}>
          
          {/* Left Content */}
          <div className={`text-white space-y-8 ${isRTL ? 'lg:col-start-2' : ''}`}>
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 animate-fade-in">
              <CheckCircle className={`h-4 w-4 text-primary ${isRTL ? 'ml-2' : 'mr-2'}`} />
              <span className="text-sm font-medium">{t('hero.badge')}</span>
            </div>
            
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight animate-fade-in">
                {t('hero.title')}{" "}
                <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  {t('hero.title_highlight')}
                </span>
                <br />
                {t('hero.title_end')}
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
                {t('hero.subtitle')}
              </p>
            </div>

            {/* Action Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 animate-fade-in ${isRTL ? 'sm:flex-row-reverse' : ''}`} style={{ animationDelay: '0.4s' }}>
              <QuoteRequestForm
                trigger={
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold hover-scale"
                  >
                    {t('hero.get_started')}
                    <ArrowRight className={`h-5 w-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
                  </Button>
                }
              />
              
              {/* Request Quote Button */}
              <QuoteRequestForm
                trigger={
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    className="bg-white/15 border border-white/30 text-white hover:bg-white/25 hover:border-white/50 backdrop-blur-md px-8 py-4 text-lg font-semibold transition-all duration-300 hover-scale"
                  >
                    {isRTL ? 'طلب عرض أسعار' : 'Request Quote'}
                    <ArrowRight className={`h-5 w-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
                  </Button>
                }
              />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              {stats.map((stat, index) => (
                <div key={index} className={`text-center ${isRTL ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Enhanced Tracking Form */}
          <div className={`bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20 hover-scale animate-scale-in ${isRTL ? 'lg:col-start-1' : ''}`} style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center mb-8">
              <div className={`w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center ${isRTL ? 'ml-4' : 'mr-4'}`}>
                <Search className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">
                  {t('hero.track_title')}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t('hero.track_subtitle')}
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="relative">
                <Input
                  placeholder={t('hero.track_placeholder')}
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className={`h-14 text-lg border-2 border-gray-200 focus:border-primary ${isRTL ? 'pl-12' : 'pr-12'}`}
                />
                <Search className={`absolute top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 ${isRTL ? 'left-4' : 'right-4'}`} />
              </div>
              
              <Button 
                onClick={handleTrackShipment}
                className="w-full h-14 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white text-lg font-semibold hover-scale"
              >
                {t('hero.track_button')}
                <ArrowRight className={`h-5 w-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
              </Button>
              
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center justify-center text-sm text-muted-foreground">
                  <Shield className={`h-4 w-4 text-primary ${isRTL ? 'ml-2' : 'mr-2'}`} />
                  <span className="font-medium">
                    {t('hero.security_text')}
                  </span>
                </div>
              </div>

              {/* Quick Access */}
              <div className="text-center pt-4 border-t border-gray-200">
                <p className="text-sm text-muted-foreground mb-3">{t('hero.quick_access')}</p>
                <div className={`flex justify-center ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
                  <QuoteRequestForm
                    trigger={
                      <button className="text-sm text-primary hover:underline font-medium cursor-pointer">
                        {t('hero.get_quote')}
                      </button>
                    }
                  />
                  <span className="text-gray-300">•</span>
                  <button 
                    onClick={() => navigate('/contact')}
                    className="text-sm text-primary hover:underline font-medium cursor-pointer"
                  >
                    {t('hero.contact_support')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm font-medium">{t('hero.scroll_explore')}</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;