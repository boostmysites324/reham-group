import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import QuoteRequestForm from "@/components/QuoteRequestForm";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { 
  Package, 
  Truck, 
  BarChart3, 
  QrCode, 
  Clock, 
  RefreshCw, 
  Users, 
  ArrowUpDown, 
  CheckCircle, 
  Zap,
  MapPin,
  DollarSign,
  Shield,
  Monitor,
  Building2,
  Ship,
  Play,
  Sparkles,
  Target,
  TrendingUp,
  MessageCircle
} from "lucide-react";

const Technology = () => {
  const { t, isRTL } = useLanguage();
  const [activeFeature, setActiveFeature] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  const wmsFeatures = [
    {
      icon: Package,
      title: isRTL ? "إدارة المخزون" : "Inventory Management",
      description: isRTL 
        ? "تتبع المخزون في الوقت الفعلي مع دعم الباركود أو رمز QR أو RFID. لا تفقد رؤية أي وحدة."
        : "Track stock in real-time with barcode, QR code, or RFID support. Never lose visibility of a single unit.",
    },
    {
      icon: CheckCircle,
      title: isRTL ? "إدارة الطلبات" : "Order Management",
      description: isRTL 
        ? "معالجة طلبات سلسة من الوارد إلى الصادر، مع حالة الطلب في الوقت الفعلي ومنطق التخصيص."
        : "Seamless order processing from inbound to outbound, with real-time order status and allocation logic.",
    },
    {
      icon: RefreshCw,
      title: isRTL ? "مصالحة المخزون" : "Inventory Reconciliation",
      description: isRTL 
        ? "عد دوري آلي واكتشاف التناقضات لضمان دقة المخزون."
        : "Automated cycle counts and discrepancy detection to ensure stock accuracy.",
    },
    {
      icon: Clock,
      title: isRTL ? "طوابع زمنية لكل نشاط" : "Timestamps for Every Activity",
      description: isRTL 
        ? "مسارات تدقيق لكل عملية اختيار وتغليف ونقل—ضمان المسؤولية الكاملة."
        : "Audit trails for every pick, pack, and move—ensuring full accountability.",
    },
    {
      icon: ArrowUpDown,
      title: isRTL ? "التجميع والفك" : "Kitting & De-Kitting",
      description: isRTL 
        ? "إنشاء حزم المنتجات أو تفكيكها حسب الحاجة، مع تتبع المخزون الكامل."
        : "Create product bundles or disassemble as needed, with full inventory traceability.",
    },
    {
      icon: Users,
      title: isRTL ? "إدارة المرتجعات" : "Returns Management",
      description: isRTL 
        ? "تبسيط عملية الإرجاع مع تدفقات RMA الآلية وإعادة التكامل في المخزون."
        : "Simplify the return process with automated RMA flows and reintegration into stock.",
    },
    {
      icon: MapPin,
      title: isRTL ? "الوضع والاختيار المقترح" : "Suggested Putaway & Picking",
      description: isRTL 
        ? "اقتراحات مدعومة بالذكاء الاصطناعي للوضع المحسن ومسارات الاسترجاع."
        : "AI-driven suggestions for optimized placement and retrieval paths.",
    },
    {
      icon: Zap,
      title: isRTL ? "اختيار الطلب/الدفعة" : "Order/Batch Picking",
      description: isRTL 
        ? "سير عمل الاختيار الموحد للطلبات عالية الحجم متعددة الأسطر."
        : "Consolidated picking workflows for high-volume, multi-line orders.",
    },
    {
      icon: Building2,
      title: isRTL ? "تكاملات ديناميكية" : "Dynamic Integrations",
      description: isRTL 
        ? "واجهات برمجة تطبيقات جاهزة للاستخدام لـ ERP والتجارة الإلكترونية وPOS وأنظمة الخدمات اللوجستية."
        : "Plug-and-play APIs for ERP, e-commerce, POS, and logistics systems.",
    },
    {
      icon: BarChart3,
      title: isRTL ? "لوحات تحكم تفاعلية وتقارير" : "Interactive Dashboards & Reports",
      description: isRTL 
        ? "رؤى تشغيلية في الوقت الفعلي، تنبيهات آلية، وأنظمة تقارير قائمة على البريد."
        : "Real-time operational insights, automated alerts, and mailer-based reporting systems.",
    },
  ];

  const dmsFeatures = [
    {
      icon: Truck,
      title: isRTL ? "تخصيص الشحنات السهل" : "Easy Shipment Allocation",
      description: isRTL 
        ? "تعيين الشحنات تلقائياً للناقل أو المحور أو شريك 3PL الأكثر مثالية."
        : "Automatically assign shipments to the most optimal transporter, hub, or 3PL partner.",
    },
    {
      icon: Monitor,
      title: isRTL ? "الشفافية في الوقت الفعلي" : "Real-Time Transparency",
      description: isRTL 
        ? "يحصل أصحاب المصلحة على رؤية شاملة من البداية إلى النهاية عبر سلسلة التوصيل—لا توجد نقاط عمياء."
        : "Stakeholders get end-to-end visibility across the delivery chain—no blind spots.",
    },
    {
      icon: Ship,
      title: isRTL ? "تتبع متعدد الوسائط" : "Multi-Modal Tracking",
      description: isRTL 
        ? "تتبع شامل عبر جميع وسائل النقل—الجوي والبري والبحر."
        : "Comprehensive tracking across all transport modes—air, road, and sea.",
    },
    {
      icon: Shield,
      title: isRTL ? "أمان البيانات" : "Data Security",
      description: isRTL 
        ? "حماية متقدمة للبيانات مع تشفير من طرف إلى طرف وامتثال GDPR."
        : "Advanced data protection with end-to-end encryption and GDPR compliance.",
    },
    {
      icon: TrendingUp,
      title: isRTL ? "تحليلات متقدمة" : "Advanced Analytics",
      description: isRTL 
        ? "رؤى قائمة على البيانات لتحسين الأداء وتقليل التكاليف."
        : "Data-driven insights for performance optimization and cost reduction.",
    },
    {
      icon: MessageCircle,
      title: isRTL ? "إشعارات ذكية" : "Smart Notifications",
      description: isRTL 
        ? "تنبيهات مخصصة للمشاكل والتأخيرات والتحديثات المهمة."
        : "Customized alerts for issues, delays, and important updates.",
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
              {isRTL ? 'التكنولوجيا' : 'Technology'}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {isRTL 
                ? 'حلول تكنولوجية متقدمة لتحسين عمليات الخدمات اللوجستية وتسريع نمو عملك'
                : 'Advanced technological solutions to optimize logistics operations and accelerate your business growth'
              }
            </p>
            
            {/* Technology Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-sm text-gray-600">
                  {isRTL ? 'دقة التتبع' : 'Tracking Accuracy'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-gray-600">
                  {isRTL ? 'مراقبة' : 'Monitoring'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">200+</div>
                <div className="text-sm text-gray-600">
                  {isRTL ? 'تكامل API' : 'API Integrations'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50%</div>
                <div className="text-sm text-gray-600">
                  {isRTL ? 'توفير في التكاليف' : 'Cost Reduction'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Solutions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="wms" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="wms" className="text-lg font-semibold">
                {isRTL ? 'نظام إدارة المستودعات' : 'Warehouse Management System'}
              </TabsTrigger>
              <TabsTrigger value="dms" className="text-lg font-semibold">
                {isRTL ? 'نظام إدارة التوصيل' : 'Delivery Management System'}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="wms" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {isRTL ? 'نظام إدارة المستودعات الذكي' : 'Smart Warehouse Management System'}
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  {isRTL 
                    ? 'تحكم كامل في عمليات المستودع مع رؤية في الوقت الفعلي وتحسين تلقائي'
                    : 'Complete control over warehouse operations with real-time visibility and automated optimization'
                  }
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {wmsFeatures.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <Card 
                      key={index} 
                      className={`group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:scale-105 border-0 shadow-lg ${
                        hoveredCard === index ? 'ring-2 ring-primary' : ''
                      }`}
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <CardHeader className="pb-4">
                        <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                          {feature.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="dms" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {isRTL ? 'نظام إدارة التوصيل المتقدم' : 'Advanced Delivery Management System'}
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  {isRTL 
                    ? 'تحسين سلسلة التوصيل بالكامل مع تتبع في الوقت الفعلي وتحليلات ذكية'
                    : 'Optimize the entire delivery chain with real-time tracking and intelligent analytics'
                  }
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {dmsFeatures.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <Card 
                      key={index} 
                      className={`group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:scale-105 border-0 shadow-lg ${
                        hoveredCard === index ? 'ring-2 ring-primary' : ''
                      }`}
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <CardHeader className="pb-4">
                        <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                          {feature.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            {isRTL ? 'جاهز لتحويل عملياتك؟' : 'Ready to Transform Your Operations?'}
          </h2>
          <p className="text-xl text-white/90 mb-8">
            {isRTL 
              ? 'دعنا نناقش كيف يمكن لتقنياتنا المتقدمة أن تساعدك في تحقيق الكفاءة والشفافية'
              : 'Let\'s discuss how our advanced technologies can help you achieve efficiency and transparency'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <QuoteRequestForm
                trigger={
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                  {isRTL ? 'طلب عرض أسعار' : 'Get a Quote'}
                  </Button>
                }
              />
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold bg-transparent">
              {isRTL ? 'تواصل معنا' : 'Contact Us'}
              </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Technology;