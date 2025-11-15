import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const BrochureDownloadCTA = () => {
  const { isRTL, t } = useLanguage();

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20">
          <div className={`flex flex-col md:flex-row items-center justify-between gap-6 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
            
            {/* Left Content */}
            <div className={`flex items-center gap-4 ${isRTL ? 'text-center md:text-right' : 'text-center md:text-left'}`}>
              <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                <FileText className="h-7 w-7 text-primary" />
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {t('brochure.title')}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t('brochure.description')}
                </p>
              </div>
            </div>
            
            {/* Right CTA */}
            <div className={`flex-shrink-0 ${isRTL ? 'text-center md:text-left' : 'text-center md:text-right'}`}>
              <a 
                href="/brochure.pdf" 
                download="Reham-Shipping-Brochure.pdf"
                className="inline-block"
              >
                <Button 
                  className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 h-auto font-medium hover-scale"
                >
                  <Download className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                  {t('brochure.download')}
                </Button>
              </a>
              <p className="text-xs text-muted-foreground mt-2">
                {t('brochure.updated')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrochureDownloadCTA;