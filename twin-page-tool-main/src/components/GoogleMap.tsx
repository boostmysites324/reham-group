import { MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const GoogleMap = () => {
  const { isRTL } = useLanguage();

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">
          {isRTL ? 'موقعنا' : 'Our Location'}
        </h3>
      </div>
      
      <div className="w-full h-64 rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1985117474803!2d55.1005704!3d24.9921405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f131575dd1bd5%3A0x48fc507681a71152!2sReham%20Shipping%20Agency%20LLC!5e0!3m2!1sen!2sus!4v1734567890123!5m2!1sen!2sus&q=Reham+Shipping+Agency+LLC+Street+41+Jebel+Ali+Industrial+Area+Dubai+UAE"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={isRTL ? 'موقع وكالة رهام للشحن' : 'Reham Shipping Agency Location'}
        />
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-sm text-muted-foreground">
          {isRTL 
            ? 'REHAM SHIPPING AGENCY LLC, P.O.BOX NO.64323, DUBAI, UAE'
            : 'REHAM SHIPPING AGENCY LLC, P.O.BOX NO.64323, DUBAI, UAE'
          }
        </p>
      </div>
    </div>
  );
};

export default GoogleMap;