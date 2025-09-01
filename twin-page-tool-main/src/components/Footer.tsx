import { Ship, Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t, isRTL } = useLanguage();

  const services = [
    t('services.air_freight'),
    t('services.sea_freight'), 
    t('services.project_cargo'),
    t('services.custom_brokerage'),
    t('services.logistics_warehousing')
  ];

  const company = [
    t('nav.about'),
    isRTL ? "فريقنا" : "Our Team",
    isRTL ? "الوظائف" : "Careers", 
    isRTL ? "الأخبار والتحديثات" : "News & Updates",
    t('nav.contact')
  ];

  const legalLinks = [
    t('footer.privacy_policy'),
    t('footer.terms_of_service'), 
    isRTL ? "سياسة ملفات تعريف الارتباط" : "Cookie Policy"
  ];

  return (
    <footer className="bg-dark-bg text-dark-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1 animate-fade-in">
            {/* Logo */}
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/3aa7e871-2592-40a3-81b5-cc28a97cbdb7.png" 
                alt="Reham Shipping Agency LLC" 
                className="h-12 w-auto"
              />
            </div>
            
            {/* Description */}
            <p className="text-gray-300 mb-6 leading-relaxed">
              {isRTL 
                ? 'نضع معايير جديدة في الخدمات اللوجستية المتميزة بخبرة لا مثيل لها والتزام ثابت بالتميز.'
                : 'Setting new standards in premium logistics with unmatched expertise and unwavering commitment to excellence.'
              }
            </p>
            
            {/* Social Media */}
            <div className={`flex ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-all duration-300 cursor-pointer hover-scale">
                <Facebook className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors cursor-pointer">
                <Twitter className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors cursor-pointer">
                <Linkedin className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors cursor-pointer">
                <Instagram className="h-5 w-5 text-primary-foreground" />
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-primary text-lg font-semibold mb-6">{t('footer.services')}</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-primary text-lg font-semibold mb-6">{t('footer.company')}</h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-primary text-lg font-semibold mb-6">{t('footer.support')}</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className={`h-5 w-5 text-primary mt-1 flex-shrink-0 ${isRTL ? 'ml-3' : 'mr-3'}`} />
                <span className="text-gray-300">Business Bay, Dubai, UAE</span>
              </div>
              
              <div className="flex items-center">
                <Phone className={`h-5 w-5 text-primary flex-shrink-0 ${isRTL ? 'ml-3' : 'mr-3'}`} />
                <span className="text-gray-300">+971 50 404 2388</span>
              </div>
              
              <div className="flex items-center">
                <Mail className={`h-5 w-5 text-primary flex-shrink-0 ${isRTL ? 'ml-3' : 'mr-3'}`} />
                <span className="text-gray-300">behzad@rehamshipping.com</span>
              </div>
              
              <div className="flex items-center">
                <Clock className={`h-5 w-5 text-primary flex-shrink-0 ${isRTL ? 'ml-3' : 'mr-3'}`} />
                <span className="text-gray-300">24/7 Support Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className={`flex flex-col md:flex-row justify-between items-center ${isRTL ? 'md:flex-row-reverse' : ''}`}>
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Reham Shipping Agency LLC. {t('footer.all_rights_reserved')}.
            </p>
            
            <div className={`flex ${isRTL ? 'space-x-reverse space-x-6' : 'space-x-6'}`}>
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;