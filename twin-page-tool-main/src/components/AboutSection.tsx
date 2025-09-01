import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import teamPhoto from "@/assets/team-photo.jpg";

const AboutSection = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${
          isRTL ? 'lg:grid-flow-col-dense' : ''
        }`}>
          {/* Image */}
          <div className={`relative animate-fade-in ${isRTL ? 'lg:col-start-2' : ''}`}>
            <img 
              src={teamPhoto}
              alt="Reham Shipping Agency Team"
              className="rounded-lg shadow-lg w-full h-96 object-cover hover-scale transition-transform duration-300"
            />
            {/* Dots indicator */}
            <div className="flex justify-center mt-4 space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <div className="w-2 h-2 bg-muted rounded-full"></div>
              <div className="w-2 h-2 bg-muted rounded-full"></div>
            </div>
          </div>

          {/* Content */}
          <div className={`animate-fade-in ${isRTL ? 'lg:col-start-1' : ''}`} style={{ animationDelay: '0.2s' }}>
            <div className="mb-4">
              <span className="text-primary font-medium text-sm tracking-wide uppercase">
                REHAM SHIPPING AGENCY
              </span>
            </div>
            
            <h2 className="text-4xl font-bold text-foreground mb-6">
              {t('about.title')}
            </h2>
            
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              {t('about.subtitle')}
            </h3>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {t('about.description')}
            </p>
            
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 hover-scale">
              {t('about.read_more')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;