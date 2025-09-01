import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Plane, 
  Ship, 
  Truck, 
  Package, 
  Warehouse, 
  FileText, 
  ShoppingCart, 
  Boxes, 
  Snowflake,
  Cpu,
  ArrowRight,
  CheckCircle,
  Globe,
  Clock,
  Shield,
  Users,
  TrendingUp,
  Star,
  MapPin,
  Zap,
  Award,
  Target
} from 'lucide-react';

const Services = () => {
  const { t, isRTL } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: 'air-freight',
      title: t('services.air_freight'),
      description: isRTL ? 'خدمات شحن جوي سريعة وموثوقة للشحنات العاجلة في جميع أنحاء العالم' : 'Fast and reliable air cargo services for urgent shipments worldwide',
      icon: Plane,
      category: 'freight',
      features: isRTL ? ['توصيل سريع', 'شبكة عالمية', 'تتبع فوري', 'معالجة آمنة'] : ['Express delivery', 'Global network', 'Real-time tracking', 'Secure handling'],
      path: '/air-freight',
      color: 'bg-blue-500',
      delay: '0s'
    },
    {
      id: 'sea-freight',
      title: t('services.sea_freight'),
      description: isRTL ? 'حلول شحن بحري فعالة من حيث التكلفة للحاويات الكاملة والحاويات الجزئية والبضائع السائبة' : 'Cost-effective ocean freight solutions for FCL, LCL, and break bulk cargo',
      icon: Ship,
      category: 'freight',
      features: isRTL ? ['خيارات حاويات كاملة وجزئية', 'بضائع سائبة', 'توصيل من ميناء إلى ميناء', 'تتبع الحاويات'] : ['FCL & LCL options', 'Break bulk cargo', 'Port-to-port delivery', 'Container tracking'],
      path: '/sea-freight',
      color: 'bg-cyan-500',
      delay: '0.1s'
    },
    {
      id: 'overland-freight',
      title: t('services.overland_freight'),
      description: isRTL ? 'نقل بري وسككي فعال عبر القارات والمناطق' : 'Efficient road and rail transport across continents and regions',
      icon: Truck,
      category: 'freight',
      features: isRTL ? ['نقل عبر الحدود', 'خيارات السكك الحديدية والطرق', 'خبرة إقليمية', 'توجيه مرن'] : ['Cross-border transport', 'Rail & road options', 'Regional expertise', 'Flexible routing'],
      path: '/overland-freight',
      color: 'bg-green-500',
      delay: '0.2s'
    },
    {
      id: 'project-cargo',
      title: t('services.project_cargo'),
      description: isRTL ? 'معالجة متخصصة للبضائع كبيرة الحجم والثقيلة والمعقدة' : 'Specialized handling for oversized, heavy, and complex cargo movements',
      icon: Package,
      category: 'specialized',
      features: isRTL ? ['معالجة رفع ثقيل', 'تصاريح خاصة', 'تجهيز في الموقع', 'تخطيط المسار'] : ['Heavy lift handling', 'Special permits', 'On-site rigging', 'Route planning'],
      path: '/project-cargo',
      color: 'bg-purple-500',
      delay: '0.3s'
    },
    {
      id: 'logistics-warehousing',
      title: t('services.logistics_warehousing'),
      description: isRTL ? 'حلول تخزين استراتيجية مع إدارة المخزون والتوزيع' : 'Strategic storage solutions with inventory management and distribution',
      icon: Warehouse,
      category: 'logistics',
      features: isRTL ? ['إدارة المخزون', 'عبور الميناء', 'تخزين مضمون', 'اختيار وتغليف'] : ['Inventory management', 'Cross-docking', 'Bonded storage', 'Pick & pack'],
      path: '/logistics-warehousing',
      color: 'bg-orange-500',
      delay: '0.4s'
    },
    {
      id: 'custom-brokerage',
      title: t('services.custom_brokerage'),
      description: isRTL ? 'خدمات تخليص جمركي وتوثيق متخصصة' : 'Expert customs clearance and documentation services',
      icon: FileText,
      category: 'specialized',
      features: isRTL ? ['تخليص جمركي', 'توثيق', 'حساب الرسوم', 'دعم الامتثال'] : ['Customs clearance', 'Documentation', 'Duty calculation', 'Compliance support'],
      path: '/custom-brokerage',
      color: 'bg-red-500',
      delay: '0.5s'
    },
    {
      id: 'ecommerce-services',
      title: t('services.ecommerce_services'),
      description: isRTL ? 'حلول تنفيذ شاملة للشركات عبر الإنترنت' : 'End-to-end fulfillment solutions for online businesses',
      icon: ShoppingCart,
      category: 'ecommerce',
      features: isRTL ? ['معالجة الطلبات', 'تكامل متعدد القنوات', 'توصيل آخر ميل', 'معالجة المرتجعات'] : ['Order processing', 'Multi-channel integration', 'Last-mile delivery', 'Returns handling'],
      path: '/ecommerce-services',
      color: 'bg-pink-500',
      delay: '0.6s'
    },
    {
      id: 'order-fulfillment',
      title: t('services.order_fulfillment'),
      description: isRTL ? 'معالجة وتوصيل شاملة للطلبات بين الشركات والمستهلكين' : 'Comprehensive B2B and B2C order processing and delivery',
      icon: Boxes,
      category: 'ecommerce',
      features: isRTL ? ['تنفيذ بين الشركات والمستهلكين', 'حلول قابلة للتطوير', 'مراقبة الجودة', 'معالجة آلية'] : ['B2B & B2C fulfillment', 'Scalable solutions', 'Quality control', 'Automated processing'],
      path: '/order-fulfillment',
      color: 'bg-indigo-500',
      delay: '0.7s'
    },
    {
      id: 'collaborative-packaging',
      title: t('services.collaborative_packaging'),
      description: isRTL ? 'حلول تغليف مخصصة تعزز تجربة العلامة التجارية' : 'Custom packaging solutions that enhance brand experience',
      icon: Package,
      category: 'specialized',
      features: isRTL ? ['تغليف مخصص', 'تعزيز العلامة التجارية', 'تصميم ترويجي', 'حماية المنتج'] : ['Custom packaging', 'Brand enhancement', 'Promotional design', 'Product protection'],
      path: '/collaborative-packaging',
      color: 'bg-yellow-500',
      delay: '0.8s'
    },
    {
      id: 'cold-chain-services',
      title: t('services.cold_chain_services'),
      description: isRTL ? 'خدمات لوجستية مبردة للمستحضرات الصيدلانية والسلع القابلة للتلف' : 'Temperature-controlled logistics for pharmaceuticals and perishables',
      icon: Snowflake,
      category: 'specialized',
      features: isRTL ? ['التحكم في درجة الحرارة', 'مراقبة 24/7', 'درجة صيدلانية', 'معتمد للامتثال'] : ['Temperature control', '24/7 monitoring', 'Pharmaceutical grade', 'Compliance certified'],
      path: '/cold-chain-services',
      color: 'bg-teal-500',
      delay: '0.9s'
    }
  ];

  const categories = [
    { id: 'all', label: isRTL ? 'جميع الخدمات' : 'All Services', count: services.length },
    { id: 'freight', label: isRTL ? 'خدمات الشحن' : 'Freight Services', count: services.filter(s => s.category === 'freight').length },
    { id: 'logistics', label: isRTL ? 'الخدمات اللوجستية والتخزين' : 'Logistics & Warehousing', count: services.filter(s => s.category === 'logistics').length },
    { id: 'specialized', label: isRTL ? 'الخدمات المتخصصة' : 'Specialized Services', count: services.filter(s => s.category === 'specialized').length },
    { id: 'ecommerce', label: isRTL ? 'حلول التجارة الإلكترونية' : 'E-commerce Solutions', count: services.filter(s => s.category === 'ecommerce').length }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  const stats = [
    { label: isRTL ? 'دولة نخدمها' : 'Countries Served', value: '200+', icon: Globe, color: 'text-blue-500' },
    { label: isRTL ? 'سنة خبرة' : 'Years Experience', value: '25+', icon: Clock, color: 'text-green-500' },
    { label: isRTL ? 'عميل راضي' : 'Satisfied Clients', value: '10K+', icon: Users, color: 'text-purple-500' },
    { label: isRTL ? 'معدل النجاح' : 'Success Rate', value: '99.8%', icon: TrendingUp, color: 'text-orange-500' }
  ];

  const processSteps = [
    {
      step: '01',
      title: isRTL ? 'استشارة' : 'Consultation',
      description: isRTL ? 'نحلل متطلباتك ونصمم حلولاً مخصصة' : 'We analyze your requirements and design a custom solution',
      icon: Target,
      color: 'bg-blue-500'
    },
    {
      step: '02', 
      title: isRTL ? 'تخطيط' : 'Planning',
      description: isRTL ? 'تخطيط استراتيجي للمسار وتخصيص الموارد' : 'Strategic route planning and resource allocation',
      icon: MapPin,
      color: 'bg-green-500'
    },
    {
      step: '03',
      title: isRTL ? 'تنفيذ' : 'Execution',
      description: isRTL ? 'معالجة احترافية ومراقبة فورية' : 'Professional handling and real-time monitoring',
      icon: Zap,
      color: 'bg-purple-500'
    },
    {
      step: '04',
      title: isRTL ? 'توصيل' : 'Delivery',
      description: isRTL ? 'توصيل آمن مع توثيق كامل' : 'Safe delivery with complete documentation',
      icon: Award,
      color: 'bg-orange-500'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Industries',
      text: 'Outstanding service! Their air freight solutions helped us meet critical deadlines.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Ahmed Al-Rashid',
      company: 'Gulf Trading LLC',
      text: 'Reliable sea freight with excellent cost efficiency. Highly recommended!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Maria Rodriguez',
      company: 'E-Store Solutions',
      text: 'Their e-commerce fulfillment services transformed our business operations.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/5 via-white to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {isRTL ? 'خدماتنا' : 'Our Services'}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {isRTL 
                ? 'حلول لوجستية شاملة مصممة لتلبية احتياجات عملك المتنوعة'
                : 'Comprehensive logistics solutions designed to meet your diverse business needs'
              }
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg mb-3 ${stat.color}`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={service.id}
                  className={`group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:scale-105 border-0 shadow-lg ${
                    isVisible ? 'animate-fade-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: service.delay }}
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <Link to={service.path}>
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        <ArrowRight className={`h-6 w-6 text-gray-400 group-hover:text-primary transition-all duration-300 ${
                          hoveredService === service.id ? 'translate-x-2' : ''
                        } ${isRTL ? 'rotate-180' : ''}`} />
                      </div>
                      <CardTitle className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <CheckCircle className={`h-4 w-4 text-primary ${isRTL ? 'ml-2' : 'mr-2'}`} />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              {isRTL ? 'عملية العمل' : 'Our Process'}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {isRTL 
                ? 'نهج منظم ومثبت لضمان نجاح كل مشروع'
                : 'A systematic and proven approach to ensure the success of every project'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="text-center group">
                  <div className={`w-20 h-20 ${step.color} rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-4">{step.step}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Real feedback from businesses that trust our services</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="text-center hover:shadow-xl transition-all duration-500 border-0 shadow-lg animate-fade-in hover:-translate-y-2 bg-white relative overflow-hidden group"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardContent className="pt-8 relative z-10">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-600 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                  
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            {isRTL ? 'جاهز للبدء؟' : 'Ready to Get Started?'}
          </h2>
          <p className="text-xl text-white/90 mb-8">
            {isRTL 
              ? 'دعنا نناقش كيف يمكننا مساعدتك في تحقيق أهدافك اللوجستية'
              : 'Let\'s discuss how we can help you achieve your logistics goals'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              {isRTL ? 'طلب عرض أسعار' : 'Get a Quote'}
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold">
              {isRTL ? 'تواصل معنا' : 'Contact Us'}
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;