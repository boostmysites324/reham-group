import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { X, Shield, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface QuoteFormProps {
  trigger?: React.ReactNode;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const QuoteRequestForm = ({ trigger, isOpen, onOpenChange }: QuoteFormProps) => {
  const { isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const locations = [
    'Dubai, UAE',
    'Abu Dhabi, UAE',
    'Sharjah, UAE',
    'Riyadh, Saudi Arabia',
    'Jeddah, Saudi Arabia',
    'Kuwait City, Kuwait',
    'Doha, Qatar',
    'Manama, Bahrain',
    'Muscat, Oman',
    isRTL ? 'أخرى' : 'Other'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          location: '',
          message: ''
        });
        onOpenChange?.(false);
      }, 3000);
    }, 1500);
  };

  const formContent = (
    <div className="w-full max-w-md mx-auto">
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name and Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Input
                placeholder={isRTL ? 'الاسم' : 'Name'}
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
                className="h-12 border-b-2 border-l-0 border-r-0 border-t-0 border-gray-300 rounded-none focus:border-primary bg-transparent"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder={isRTL ? 'عنوان البريد الإلكتروني' : 'Email Address'}
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
                className="h-12 border-b-2 border-l-0 border-r-0 border-t-0 border-gray-300 rounded-none focus:border-primary bg-transparent"
              />
            </div>
          </div>

          {/* Phone and Location Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Input
                type="tel"
                placeholder={isRTL ? 'الهاتف' : 'Phone'}
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                required
                className="h-12 border-b-2 border-l-0 border-r-0 border-t-0 border-gray-300 rounded-none focus:border-primary bg-transparent"
              />
            </div>
            <div>
              <Select onValueChange={(value) => handleInputChange('location', value)} required>
                <SelectTrigger className="h-12 border-b-2 border-l-0 border-r-0 border-t-0 border-gray-300 rounded-none focus:border-primary bg-transparent">
                  <SelectValue placeholder={isRTL ? 'اختر الموقع' : 'Select Location'} />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Message */}
          <div>
            <Textarea
              placeholder={isRTL ? 'أخبرنا عن متطلبات الشحن الخاصة بك...' : 'Tell us about your shipping requirements...'}
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              required
              className="min-h-[100px] border-b-2 border-l-0 border-r-0 border-t-0 border-gray-300 rounded-none focus:border-primary bg-transparent resize-none"
            />
          </div>

          {/* reCAPTCHA Simulation */}
          <div className={`flex items-center p-4 bg-gray-50 rounded-lg border ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
            <div className="w-6 h-6 border-2 border-gray-400 rounded flex items-center justify-center">
              <CheckCircle className="h-4 w-4 text-primary" />
            </div>
            <div className="flex-1">
              <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                <span className="text-sm text-gray-700">
                  {isRTL ? 'لست روبوت' : 'I\'m not a robot'}
                </span>
                <Shield className="h-5 w-5 text-gray-500" />
              </div>
              <div className="text-xs text-gray-500">reCAPTCHA</div>
            </div>
            <div className="text-xs text-gray-400">
              {isRTL ? 'الخصوصية - الشروط' : 'Privacy - Terms'}
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-semibold text-lg rounded-lg hover-scale"
          >
            {isSubmitting ? (
              <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>{isRTL ? 'جاري الإرسال...' : 'Submitting...'}</span>
              </div>
            ) : (
              isRTL ? 'تواصل معنا' : 'Get in touch'
            )}
          </Button>
        </form>
      ) : (
        <div className="text-center py-8 animate-fade-in">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-foreground mb-2">
            {isRTL ? 'تم إرسال طلب العرض!' : 'Quote Request Sent!'}
          </h3>
          <p className="text-muted-foreground">
            {isRTL 
              ? 'شكراً لاهتمامك. سيتواصل فريقنا معك خلال 24 ساعة بعرض مفصل.'
              : 'Thank you for your interest. Our team will contact you within 24 hours with a detailed quote.'
            }
          </p>
          <div className="mt-4 text-sm text-muted-foreground">
            <p>{isRTL ? 'تحتاج مساعدة فورية؟' : 'Need immediate assistance?'}</p>
            <p className="font-semibold text-primary">WhatsApp: +971 50 404 2388</p>
          </div>
        </div>
      )}
    </div>
  );

  if (trigger) {
    return (
      <Dialog open={isOpen} onOpenChange={onOpenChange}>
        <DialogTrigger asChild>
          {trigger}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary text-center mb-4">
              {isRTL ? 'طلب عرض أسعار' : 'Request a Quote'}
            </DialogTitle>
          </DialogHeader>
          {formContent}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
      <h2 className="text-2xl font-bold text-primary text-center mb-6">
        {isRTL ? 'طلب عرض أسعار' : 'Request a Quote'}
      </h2>
      {formContent}
    </div>
  );
};

export default QuoteRequestForm;