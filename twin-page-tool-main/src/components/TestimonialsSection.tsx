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
        ? "كان العمل معكم سهلاً جداً! قدرت السرعة والاهتمام بالتفاصيل مع الأصول التي احتجتها. خاصة في وقت قصير. سار العمل بسلاسة وأشعر بالرعاية."
        : "It was so easy working with you! I appreciated the speed and attention to detail with the assets I needed. Especially, short notice. The work went smoothly and I feel taken care of.",
      author: "Max Kabanuk",
      company: "Evolving Sanctuary",
      bgColor: "bg-blue-50",
      logoColor: "bg-blue-600"
    },
    {
      text: isRTL 
        ? "أنا ممتن جداً لأنني تعلمت الكثير عن التصميم وتأثيره على الأعمال. أتطلع إلى بناء علامة مشروع Hunesbee التجارية مع خبرتكم إلى جانبي."
        : "I'm very grateful to have learned so much about design and its impact on businesses. I'm looking forward to building the Hunesbee Project brand with your expertise by my side.",
      author: "Sarah Taylor",
      company: "Hunesbee Project", 
      bgColor: "bg-amber-50",
      logoColor: "bg-amber-600"
    },
    {
      text: isRTL 
        ? "كنا سعداء ومعجبين بالموقع! نحب مظهره وكيف عمل للعمل! تأكد زهر من فهم احتياجاتنا ثم تنفيذ ما نحتاجه."
        : "We were happy and impressed by the website! We love how it looks and how it's worked for the business! Zahr made sure to understand our needs and then execute what we needed.",
      author: "Ben Chaffee",
      company: "EngineeredFitness",
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