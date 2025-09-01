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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1985117474803!2d55.26826!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20International%20Financial%20Centre%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1645123456789!5m2!1sen!2sus"
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
            ? 'المركز المالي الدولي في دبي، دبي، الإمارات العربية المتحدة'
            : 'Dubai International Financial Centre, Dubai, UAE'
          }
        </p>
      </div>
    </div>
  );
};

export default GoogleMap;