import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BrochureDownloadCTA from "@/components/BrochureDownloadCTA";
import { Users, Building, BarChart, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import fulfillmentImage from "@/assets/warehouse.jpg";

const OrderFulfillment = () => {
  const { t, isRTL } = useLanguage();
  return (
    <div className={`min-h-screen ${isRTL ? 'rtl' : 'ltr'}`}>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-primary mb-6">{t('order_fulfillment.title')}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('order_fulfillment.subtitle')}
          </p>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <Building className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{t('order_fulfillment.b2b_services')}</h3>
              <p className="text-muted-foreground">{t('order_fulfillment.b2b_services_desc')}</p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <BarChart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{t('order_fulfillment.b2c_services')}</h3>
              <p className="text-muted-foreground">{t('order_fulfillment.b2c_services_desc')}</p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{t('order_fulfillment.automated_processing')}</h3>
              <p className="text-muted-foreground">{t('order_fulfillment.automated_processing_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fulfillment Excellence Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">{t('order_fulfillment.fulfillment_excellence')}</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {t('order_fulfillment.fulfillment_excellence_desc')}
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{t('order_fulfillment.b2b_services')}</h3>
                  <p className="text-muted-foreground">
                    {t('order_fulfillment.b2b_services_desc')}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{t('order_fulfillment.b2c_services')}</h3>
                  <p className="text-muted-foreground">
                    {t('order_fulfillment.b2c_services_desc')}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{t('order_fulfillment.automated_processing')}</h3>
                  <p className="text-muted-foreground">
                    {t('order_fulfillment.automated_processing_desc')}
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src={fulfillmentImage}
                alt="Order Fulfillment Operations"
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
              <h3 className="text-2xl font-bold text-foreground mb-6">{t('order_fulfillment.b2b_services')}</h3>
              <div className="flex items-center mb-4">
                <CheckCircle className={`h-5 w-5 text-primary ${isRTL ? 'ml-3' : 'mr-3'}`} />
                <span className="text-muted-foreground">{t('order_fulfillment.b2b_services_desc')}</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">{t('order_fulfillment.b2c_services')}</h3>
              <div className="flex items-center mb-4">
                <CheckCircle className={`h-5 w-5 text-primary ${isRTL ? 'ml-3' : 'mr-3'}`} />
                <span className="text-muted-foreground">{t('order_fulfillment.b2c_services_desc')}</span>
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

export default OrderFulfillment;