import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const TestimonialsSection = () => {
  const { isRTL, t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: isRTL 
        ? "كانت وكالة رهام للشحن حاسمة في تبسيط الخدمات اللوجستية للرعاية الصحية. تضمن حلول الشحن الموثوقة وأنظمة التخزين المتقدمة تخزين إمداداتنا الطبية الحرجة بشكل آمن وتسليمها دون تأخير. الرؤية المدعومة بالتكنولوجيا التي يوفرونها حددت معياراً جديداً للكفاءة في سلسلة التوريد لدينا."
        : "Reham Shipping has been instrumental in streamlining our healthcare logistics. Their reliable freight forwarding solutions and advanced warehousing systems ensure our critical medical supplies are stored securely and delivered without delay. The tech-enabled visibility they provide has set a new benchmark for efficiency in our supply chain.",
      author: "Mr. Arjun Mehta",
      company: "VP of a Leading Healthcare Company",
      bgColor: "bg-blue-50",
      logoColor: "bg-blue-600"
    },
    {
      text: isRTL 
        ? "توسيع شركة تجارة إلكترونية يتطلب لوجستيات لا تشوبها شائبة، وكانت وكالة رهام للشحن الشريك المثالي. سمحت لنا خدمات الشحن الشاملة، والتميز في التوصيل على الطريق، ونظام إدارة التسليم بالوفاء بتوقعات العملاء باستمرار. يجمعون بين السرعة والشفافية، مما يجعلهم محركاً حيوياً لنمونا."
        : "Scaling an e-commerce company requires flawless logistics, and Reham Shipping has been the perfect partner. Their end-to-end freight services, on-the-road delivery excellence, and delivery management system have allowed us to meet customer expectations consistently. They combine speed with transparency, making them a vital driver of our growth.",
      author: "Ms. Sarah Khan",
      company: "CEO of a Fastest-Growing E-commerce Company", 
      bgColor: "bg-amber-50",
      logoColor: "bg-amber-600"
    },
    {
      text: isRTL 
        ? "لقد غير العمل مع وكالة رهام للشحن عملياتنا اللوجستية. حلول الشحن الشاملة، والتخزين المحسّن، وتتبع التسليم المدعوم بالتكنولوجيا تمنحنا سيطرة كاملة على سلسلة التوريد لدينا. بدعمهم، يمكننا التركيز على توسيع علامتنا التجارية عالمياً، مع العلم أن لوجستياتنا في أيدٍ آمنة."
        : "Working with Reham Shipping has transformed our logistics operations. Their comprehensive shipping solutions, optimized warehousing, and tech-enabled delivery tracking give us complete control over our supply chain. With their support, we can focus on expanding our brand globally, knowing our logistics are in safe hands.",
      author: "Mr. Daniel Rodrigues",
      company: "Operations Head of a Leading Cosmetic Brand",
      bgColor: "bg-rose-50",
      logoColor: "bg-rose-600"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonials Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={isRTL ? nextTestimonial : prevTestimonial}
            className={`absolute top-1/2 -translate-y-1/2 z-10 bg-background shadow-lg border-gray-300 ${
              isRTL ? 'right-0' : 'left-0'
            }`}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={isRTL ? prevTestimonial : nextTestimonial}
            className={`absolute top-1/2 -translate-y-1/2 z-10 bg-background shadow-lg border-gray-300 ${
              isRTL ? 'left-0' : 'right-0'
            }`}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8 px-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`${testimonial.bgColor} rounded-2xl p-8 shadow-sm border border-gray-100`}
              >
                {/* Company Logo Placeholder */}
                <div className={`w-20 h-10 ${testimonial.logoColor} rounded mb-6 flex items-center justify-center`}>
                  <span className="text-white text-xs font-bold">LOGO</span>
                </div>
                
                {/* Testimonial Text */}
                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>
                
                {/* Star Rating */}
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                
                {/* Author Info */}
                <div className="flex items-center">
                  <div className={`w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center ${isRTL ? 'ml-3' : 'mr-3'}`}>
                    <span className="text-gray-600 text-sm font-medium">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.author}</p>
                    <p className="text-gray-600 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="text-center mt-16">
          <blockquote className="text-2xl italic text-muted-foreground mb-4">
            "{t('testimonials.bottom_quote')}"
          </blockquote>
          <p className="text-muted-foreground">
            {t('testimonials.bottom_author')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;