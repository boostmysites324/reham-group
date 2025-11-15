import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Mail } from "lucide-react";
// import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const QuoteSection = () => {
  const { t, isRTL } = useLanguage();
  // Form state - commented out
  // const [fromCity, setFromCity] = useState("");
  // const [toCity, setToCity] = useState("");
  // const [shipmentType, setShipmentType] = useState("");

  // const handleGetQuote = () => {
  //   if (fromCity && toCity && shipmentType) {
  //     console.log("Quote request:", { fromCity, toCity, shipmentType });
  //     // Handle quote request logic here
  //   }
  // };

  const benefits = [
    t('quote.benefit_1'),
    t('quote.benefit_2'),
    t('quote.benefit_3')
  ];

  return (
    <section className="py-20 text-white" style={{backgroundColor: '#2e281d'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${
          isRTL ? 'lg:grid-flow-col-dense' : ''
        }`}>
          {/* Left Content */}
          <div className={isRTL ? 'lg:col-start-2' : ''}>
            <h2 className="text-4xl font-bold mb-6">
              {t('quote.title')}
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              {t('quote.description')}
            </p>
            
            {/* Benefits */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <div className={`flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center ${isRTL ? 'ml-4' : 'mr-4'}`}>
                    <CheckCircle className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span className="text-lg text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Message - Form Commented Out */}
          <div className={`bg-white rounded-lg p-8 shadow-2xl ${isRTL ? 'lg:col-start-1' : ''}`}>
            <div className="space-y-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
              </div>
              
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                {isRTL 
                  ? 'أرسل لنا بريد إلكتروني يتضمن: المدينة التي تريد الشحن منها، المدينة التي تريد التوصيل إليها، ونوع الخدمة المطلوبة. وسنرد عليك بالأسعار'
                  : 'Send us an email with: the city you want to ship from, the city you want to deliver to, and the type of service you need. We will reply with pricing'
                }
              </p>
              
              <Button 
                asChild
                className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 text-lg font-semibold"
              >
                <a href={`mailto:behzad@rehamshipping.com?subject=${encodeURIComponent(isRTL ? 'طلب عرض أسعار' : 'Custom Quote Request')}`}>
                  <Mail className={`h-5 w-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                  {isRTL ? 'إرسال بريد إلكتروني' : 'Send Email'}
                </a>
              </Button>
              
              <p className="text-sm text-gray-500 mt-4">
                {isRTL ? 'behzad@rehamshipping.com' : 'behzad@rehamshipping.com'}
              </p>
            </div>
          </div>

          {/* Quote Form - Commented Out */}
          {/* <div className={`bg-white rounded-lg p-8 shadow-2xl ${isRTL ? 'lg:col-start-1' : ''}`}>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {isRTL ? 'نوع الشحنة' : 'Shipment Type'}
                </label>
                <Select value={shipmentType} onValueChange={setShipmentType}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder={t('quote.shipment_type')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="air-freight">{t('quote.air_freight')}</SelectItem>
                    <SelectItem value="ocean-freight">{t('quote.sea_freight')}</SelectItem>
                    <SelectItem value="ground-transport">{t('quote.road_freight')}</SelectItem>
                    <SelectItem value="project-cargo">{t('quote.project_cargo')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('quote.from_city')}
                  </label>
                  <Input
                    placeholder={t('quote.from_city')}
                    value={fromCity}
                    onChange={(e) => setFromCity(e.target.value)}
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('quote.to_city')}
                  </label>
                  <Input
                    placeholder={t('quote.to_city')}
                    value={toCity}
                    onChange={(e) => setToCity(e.target.value)}
                    className="h-12"
                  />
                </div>
              </div>

              <Button 
                onClick={handleGetQuote}
                className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 text-lg font-semibold"
              >
                {t('common.get_quote')}
              </Button>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;