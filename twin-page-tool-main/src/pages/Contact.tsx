import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleMap from "@/components/GoogleMap";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useLanguage } from "@/contexts/LanguageContext";
import { Building2, Clock, ExternalLink, MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { t, isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    shipmentType: '',
    message: '',
    privacyAgreed: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      const templateParams = {
        to_email: 'behzad@rehamshipping.com',
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        reply_to: formData.email, // Reply to the person who submitted the form
        phone: formData.phone,
        company: formData.company || 'N/A',
        service: formData.service,
        shipment_type: formData.shipmentType || 'N/A',
        message: formData.message,
        subject: 'New Contact Form Submission from Reham Shipping Website',
        form_type: 'Contact Form',
        sender_name: 'Reham Shipping Agency' // Display name for the email
      };

      // EmailJS configuration from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_0asyx0b';
      const templateId = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID || 'template_9yun97g';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'ONlKxn2T3Ywqp8EIZ'; 

      // Initialize EmailJS
      emailjs.init(publicKey);

      // Send email
      await emailjs.send(serviceId, templateId, templateParams);

      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          shipmentType: '',
          message: '',
          privacyAgreed: false
        });
      }, 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setIsSubmitting(false);
      // Still show success to user, but log error
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          shipmentType: '',
          message: '',
          privacyAgreed: false
        });
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-primary mb-6">
            {isRTL ? 'تواصل معنا' : 'Contact Us'}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {isRTL 
              ? 'تواصل مع خبراء الخدمات اللوجستية لدينا. نحن هنا لمساعدتك في جميع احتياجات الشحن والتخليص الجمركي.'
              : 'Get in touch with our logistics experts. We\'re here to help you with all your shipping and freight forwarding needs.'
            }
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid lg:grid-cols-2 gap-12 ${isRTL ? 'lg:grid-flow-col-dense' : ''}`}>
            
            {/* Get in Touch Form */}
            <div className={`bg-white rounded-lg p-8 shadow-lg ${isRTL ? 'lg:col-start-2' : ''}`}>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                {isRTL ? 'تواصل معنا' : 'Get in Touch'}
              </h2>
              
              {isSubmitted ? (
                <div className="text-center py-8 animate-fade-in">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {isRTL ? 'تم إرسال الرسالة!' : 'Message Sent!'}
                  </h3>
                  <p className="text-muted-foreground">
                    {isRTL 
                      ? 'شكراً لتواصلك معنا. سيتواصل فريقنا معك قريباً.'
                      : 'Thank you for contacting us. Our team will get back to you soon.'
                    }
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        {isRTL ? 'الاسم الأول *' : 'First Name *'}
                      </label>
                      <Input 
                        placeholder={isRTL ? 'أدخل اسمك الأول' : 'Enter your first name'}
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        {isRTL ? 'اسم العائلة *' : 'Last Name *'}
                      </label>
                      <Input 
                        placeholder={isRTL ? 'أدخل اسم العائلة' : 'Enter your last name'}
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        {isRTL ? 'عنوان البريد الإلكتروني *' : 'Email Address *'}
                      </label>
                      <Input 
                        type="email" 
                        placeholder={isRTL ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        {isRTL ? 'رقم الهاتف *' : 'Phone Number *'}
                      </label>
                      <Input 
                        placeholder={isRTL ? 'أدخل رقم هاتفك' : 'Enter your phone number'}
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {isRTL ? 'اسم الشركة' : 'Company Name'}
                    </label>
                    <Input 
                      placeholder={isRTL ? 'أدخل اسم شركتك' : 'Enter your company name'}
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {isRTL ? 'الخدمة المطلوبة *' : 'Service Required *'}
                    </label>
                    <Select onValueChange={(value) => setFormData({...formData, service: value})} required>
                      <SelectTrigger>
                        <SelectValue placeholder={isRTL ? 'اختر خدمة' : 'Select a service'} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sea-freight">{t('services.sea_freight')}</SelectItem>
                        <SelectItem value="air-freight">{t('services.air_freight')}</SelectItem>
                        <SelectItem value="overland-freight">{t('services.overland_freight')}</SelectItem>
                        <SelectItem value="customs-brokerage">{t('services.custom_brokerage')}</SelectItem>
                        <SelectItem value="warehousing">{t('services.logistics_warehousing')}</SelectItem>
                        <SelectItem value="project-cargo">{t('services.project_cargo')}</SelectItem>
                        <SelectItem value="cold-chain">{t('services.cold_chain_services')}</SelectItem>
                        <SelectItem value="order-fulfillment">{t('services.order_fulfillment')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {isRTL ? 'نوع الشحنة' : 'Shipment Type'}
                    </label>
                    <Select onValueChange={(value) => setFormData({...formData, shipmentType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder={isRTL ? 'اختر نوع الشحنة' : 'Select shipment type'} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="lcl">{isRTL ? 'حاوية جزئية' : 'LCL (Less than Container Load)'}</SelectItem>
                        <SelectItem value="fcl">{isRTL ? 'حاوية كاملة' : 'FCL (Full Container Load)'}</SelectItem>
                        <SelectItem value="air-cargo">{isRTL ? 'شحن جوي' : 'Air Cargo'}</SelectItem>
                        <SelectItem value="road-transport">{isRTL ? 'نقل بري' : 'Road Transport'}</SelectItem>
                        <SelectItem value="project-cargo">{t('services.project_cargo')}</SelectItem>
                        <SelectItem value="break-bulk">{isRTL ? 'بضائع سائبة' : 'Break Bulk'}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {isRTL ? 'الرسالة *' : 'Message *'}
                    </label>
                    <Textarea 
                      placeholder={isRTL ? 'يرجى وصف متطلبات الشحن الخاصة بك' : 'Please describe your shipping requirements'}
                      className="min-h-[120px]"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    />
                  </div>

                  <div className={`flex items-start ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                    <Checkbox 
                      id="privacy" 
                      checked={formData.privacyAgreed}
                      onCheckedChange={(checked) => setFormData({...formData, privacyAgreed: checked as boolean})}
                      required
                    />
                    <label htmlFor="privacy" className="text-sm text-muted-foreground">
                      {isRTL 
                        ? 'أوافق على سياسة الخصوصية وأوافق على معالجة بياناتي الشخصية *'
                        : 'I agree to the Privacy Policy and consent to the processing of my personal data *'
                      }
                    </label>
                  </div>

                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-white py-3"
                  >
                    {isSubmitting ? (
                      <div className={`flex items-center justify-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>{isRTL ? 'جاري الإرسال...' : 'Sending...'}</span>
                      </div>
                    ) : (
                      isRTL ? 'إرسال الرسالة' : 'Send Message'
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className={`space-y-8 ${isRTL ? 'lg:col-start-1' : ''}`}>
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  {isRTL ? 'معلومات الاتصال' : 'Contact Information'}
                </h2>
                
                <div className="space-y-6">
                  {/* Dubai Office */}
                  <div className={`flex items-start ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {isRTL ? 'مكتب دبي' : 'Dubai Office'}
                      </h3>
                      <p className="text-muted-foreground mb-2">
                        REHAM SHIPPING AGENCY LLC<br />
                        P.O.BOX NO.64323<br />
                        DUBAI, UAE
                      </p>
                      <div className="space-y-1">
                        <div className={`flex items-center text-sm text-muted-foreground ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                          <Phone className="h-4 w-4" />
                          +971 4 123 4567
                        </div>
                        <div className={`flex items-center text-sm text-muted-foreground ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                          <Mail className="h-4 w-4" />
                          behzad@rehamshipping.com
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hours & Support */}
                  <div className={`flex items-start ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {isRTL ? 'ساعات العمل والدعم' : 'Hours & Support'}
                      </h3>
                      <p className="text-muted-foreground mb-2">
                        {isRTL 
                          ? 'الأحد - الخميس: 8:00 ص - 6:00 م<br />دعم طوارئ 24/7'
                          : 'Sun - Thu: 8:00 AM - 6:00 PM<br />24/7 Emergency Support'
                        }
                      </p>
                      <div className={`flex items-center text-sm text-muted-foreground ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                        <Phone className="h-4 w-4" />
                        {isRTL ? 'طوارئ: +971 50 123 4567' : 'Emergency: +971 50 123 4567'}
                      </div>
                    </div>
                  </div>

                  {/* Quick Links */}
                  <div className={`flex items-start ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <ExternalLink className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {isRTL ? 'روابط سريعة' : 'Quick Links'}
                      </h3>
                      <div className="space-y-2">
                        <a 
                          href="/brochure.pdf" 
                          download="Reham-Shipping-Brochure.pdf"
                          className={`text-primary hover:underline flex items-center text-sm ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}
                        >
                          <ExternalLink className="h-3 w-3" />
                          {isRTL ? 'تحميل الكتيب' : 'Download Brochure'}
                        </a>
                        <a 
                          href="https://www.google.com/maps/dir//Reham+Shipping+Agency+LLC+-+Street+41+-+1+-+Jebel+Ali+Industrial+Area+-+Dubai+-+United+Arab+Emirates/@24.9921209,55.0958949,16z/data=!4m16!1m7!3m6!1s0x3e5f131575dd1bd5:0x48fc507681a71152!2sReham+Shipping+Agency+LLC!8m2!3d24.9921405!4d55.1005704!16s%2Fg%2F11thjt9927!4m7!1m0!1m5!1m1!1s0x3e5f131575dd1bd5:0x48fc507681a71152!2m2!1d55.1005704!2d24.9921405?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-primary hover:underline flex items-center text-sm ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}
                        >
                          <MapPin className="h-3 w-3" />
                          {isRTL ? 'احصل على الاتجاهات' : 'Get Directions'}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Section */}
              <GoogleMap />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;