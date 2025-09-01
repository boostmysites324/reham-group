import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BrochureDownloadCTA from "@/components/BrochureDownloadCTA";
import { FileText, Shield, Globe, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import customsImage from "@/assets/customs-office.jpg";

const CustomBrokerage = () => {
  const { t, isRTL } = useLanguage();
  return (
    <div className={`min-h-screen ${isRTL ? 'rtl' : 'ltr'}`}>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-primary mb-6">{t('custom_brokerage.title')}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('custom_brokerage.subtitle')}
          </p>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{t('custom_brokerage.import_clearance')}</h3>
              <p className="text-muted-foreground">{t('custom_brokerage.import_clearance_desc')}</p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{t('custom_brokerage.trade_compliance')}</h3>
              <p className="text-muted-foreground">{t('custom_brokerage.trade_compliance_desc')}</p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{t('custom_brokerage.export_documentation')}</h3>
              <p className="text-muted-foreground">{t('custom_brokerage.export_documentation_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customs Excellence Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">{t('custom_brokerage.customs_excellence')}</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {t('custom_brokerage.customs_excellence_desc')}
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{t('custom_brokerage.import_clearance')}</h3>
                  <p className="text-muted-foreground">
                    {t('custom_brokerage.import_clearance_desc')}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{t('custom_brokerage.trade_compliance')}</h3>
                  <p className="text-muted-foreground">
                    {t('custom_brokerage.trade_compliance_desc')}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{t('custom_brokerage.export_documentation')}</h3>
                  <p className="text-muted-foreground">
                    {t('custom_brokerage.export_documentation_desc')}
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src={customsImage}
                alt="Custom Brokerage Operations"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Features */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">{t('custom_brokerage.import_clearance')}</h3>
              <div className="flex items-center mb-4">
                <CheckCircle className={`h-5 w-5 text-primary ${isRTL ? 'ml-3' : 'mr-3'}`} />
                <span className="text-muted-foreground">{t('custom_brokerage.import_clearance_desc')}</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">{t('custom_brokerage.trade_compliance')}</h3>
              <div className="flex items-center mb-4">
                <CheckCircle className={`h-5 w-5 text-primary ${isRTL ? 'ml-3' : 'mr-3'}`} />
                <span className="text-muted-foreground">{t('custom_brokerage.trade_compliance_desc')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BrochureDownloadCTA />

      <Footer />
    </div>
  );
};

export default CustomBrokerage;