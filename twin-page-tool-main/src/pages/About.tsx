import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, Eye, Calendar, MapPin, Users, Award, Heart, Shield, Lightbulb, Handshake } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t, isRTL } = useLanguage();
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: isRTL ? "نظرة عامة" : "Overview" },
    { id: "story", label: isRTL ? "قصتنا" : "Our Story" },
    { id: "values", label: isRTL ? "القيم" : "Values" }
  ];

  const stats = [
    {
      number: "15+",
      label: isRTL ? "سنة خبرة" : "Years Experience",
      description: isRTL ? "قيادة الصناعة منذ 2008" : "Industry leadership since 2008"
    },
    {
      number: "150+",
      label: isRTL ? "دولة نخدمها" : "Countries Served",
      description: isRTL ? "تغطية الشبكة العالمية" : "Global network coverage"
    },
    {
      number: "50K+",
      label: isRTL ? "شحنة شهرية" : "Monthly Shipments",
      description: isRTL ? "موثوق من الشركات في جميع أنحاء العالم" : "Trusted by businesses worldwide"
    },
    {
      number: "99.9%",
      label: isRTL ? "تسليم في الوقت المحدد" : "On-Time Delivery",
      description: isRTL ? "سجل موثوقية لا مثيل له" : "Unmatched reliability record"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex bg-white rounded-xl p-2 shadow-lg border border-gray-100">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-primary text-primary-foreground shadow-md transform scale-105'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-6xl md:text-7xl font-bold text-primary mb-6 leading-tight">
              {isRTL ? "عن وكالة رهام للشحن" : "About Reham Shipping Agency"}
            </h1>
            <p className="text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed font-light">
              {isRTL 
                ? "التميز في الخدمات اللوجستية منذ 2008. نضع معايير جديدة في الشحن الفاخر والتخليص الجمركي عبر الشرق الأوسط وما بعده."
                : "Premium logistics excellence since 2008. Setting new standards in luxury shipping and freight forwarding across the Middle East and beyond."
              }
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-2xl p-12">
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section - Conditional based on active tab */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === "overview" && (
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${isRTL ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Left Content */}
              <div className={`space-y-8 ${isRTL ? 'lg:col-start-2' : ''}`}>
                {/* Our Mission */}
                <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-start">
                    <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-lg ${isRTL ? 'ml-8' : 'mr-8'}`}>
                      <Target className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-6">
                        {isRTL ? "مهمتنا" : "Our Mission"}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {isRTL 
                          ? "إحداث ثورة في الخدمات اللوجستية من خلال التميز في الخدمة المتميزة والتكنولوجيا المبتكرة والالتزام الثابت بنجاح عملائنا. نحول تحديات سلسلة التوريد إلى مزايا تنافسية."
                          : "To revolutionize logistics through premium service excellence, innovative technology, and unwavering commitment to our clients' success. We transform supply chain challenges into competitive advantages."
                        }
                      </p>
                    </div>
                  </div>
                </div>

                {/* Our Vision */}
                <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-start">
                    <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-lg ${isRTL ? 'ml-8' : 'mr-8'}`}>
                      <Eye className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-6">
                        {isRTL ? "رؤيتنا" : "Our Vision"}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {isRTL 
                          ? "أن نكون الشريك اللوجستي المتميز الأكثر ثقة في العالم، ونضع معايير جديدة للتميز والابتكار في تسهيل التجارة العالمية وتحسين سلسلة التوريد."
                          : "To be the world's most trusted premium logistics partner, setting new standards for excellence and innovation in global trade facilitation and supply chain optimization."
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className={`relative ${isRTL ? 'lg:col-start-1' : ''}`}>
                <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <div 
                    className="h-[600px] bg-cover bg-center relative"
                    style={{
                      backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div className={`absolute bottom-12 text-white ${isRTL ? 'right-12' : 'left-12'}`}>
                      <h4 className="text-3xl font-bold mb-3">
                        {isRTL ? "وكالة رهام للشحن" : "Reham Shipping Agency"}
                      </h4>
                      <p className="text-gray-200 text-xl">
                        {isRTL ? "التميز في الخدمات اللوجستية منذ 2008" : "Excellence in logistics since 2008"}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className={`absolute w-24 h-24 bg-primary/10 rounded-full blur-xl ${isRTL ? '-top-6 -left-6' : '-top-6 -right-6'}`}></div>
                <div className={`absolute w-32 h-32 bg-primary/5 rounded-full blur-xl ${isRTL ? '-bottom-6 -right-6' : '-bottom-6 -left-6'}`}></div>
              </div>
            </div>
          )}

          {/* Placeholder content for other tabs - you can add more translations as needed */}
          {activeTab === "story" && (
            <div className="max-w-6xl mx-auto">
              {/* Story Header */}
              <div className="text-center mb-20">
                <h2 className="text-5xl font-bold text-primary mb-6">
                  {isRTL ? "قصتنا" : "Our Story"}
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  {isRTL 
                    ? "رحلة من الابتكار والنمو والالتزام الثابت بالتميز في الخدمات اللوجستية"
                    : "A journey of innovation, growth, and unwavering commitment to excellence in logistics"
                  }
                </p>
              </div>

              {/* Timeline */}
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-primary/30 rounded-full"></div>
                
                {/* Timeline Items */}
                <div className="space-y-16">
                  {/* 2008 - Foundation */}
                  <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-1/2 ${isRTL ? 'pl-8' : 'pr-8'}`}>
                      <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg mr-4">
                            <Calendar className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900">2008</h3>
                        </div>
                        <h4 className="text-xl font-semibold text-primary mb-3">
                          {isRTL ? "بداية الرحلة" : "The Beginning"}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {isRTL 
                            ? "تأسست وكالة رهام للشحن برؤية واضحة: تقديم خدمات لوجستية متميزة تجمع بين الكفاءة والموثوقية. بدأنا كشركة صغيرة في دبي مع فريق مكون من 5 أشخاص فقط."
                            : "Reham Shipping Agency was founded with a clear vision: to deliver premium logistics services that combine efficiency with reliability. We started as a small company in Dubai with just a team of 5 people."
                          }
                        </p>
                      </div>
                    </div>
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg z-10">
                      <span className="text-white font-bold text-lg">2008</span>
                    </div>
                    <div className="w-1/2"></div>
                  </div>

                  {/* 2012 - Expansion */}
                  <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className="w-1/2"></div>
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg z-10">
                      <span className="text-white font-bold text-lg">2012</span>
                    </div>
                    <div className={`w-1/2 ${isRTL ? 'pr-8' : 'pl-8'}`}>
                      <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg mr-4">
                            <MapPin className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900">2012</h3>
                        </div>
                        <h4 className="text-xl font-semibold text-primary mb-3">
                          {isRTL ? "التوسع الإقليمي" : "Regional Expansion"}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {isRTL 
                            ? "وسعنا عملياتنا لتشمل دول مجلس التعاون الخليجي، وفتحنا مكاتب في أبوظبي والرياض والكويت. أصبح فريقنا يضم 50 موظفاً متخصصاً في مختلف جوانب الخدمات اللوجستية."
                            : "We expanded our operations to cover GCC countries, opening offices in Abu Dhabi, Riyadh, and Kuwait. Our team grew to 50 specialists in various aspects of logistics services."
                          }
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 2018 - Technology Integration */}
                  <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-1/2 ${isRTL ? 'pl-8' : 'pr-8'}`}>
                      <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg mr-4">
                            <Lightbulb className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900">2018</h3>
                        </div>
                        <h4 className="text-xl font-semibold text-primary mb-3">
                          {isRTL ? "الابتكار التكنولوجي" : "Technology Innovation"}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {isRTL 
                            ? "أطلقنا منصتنا الرقمية المتقدمة لتتبع الشحنات في الوقت الفعلي. استثمرنا في الذكاء الاصطناعي لتحسين تخطيط المسارات وتوقع التحديات اللوجستية."
                            : "We launched our advanced digital platform for real-time shipment tracking. We invested in AI to optimize route planning and predict logistics challenges."
                          }
                        </p>
                      </div>
                    </div>
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg z-10">
                      <span className="text-white font-bold text-lg">2018</span>
                    </div>
                    <div className="w-1/2"></div>
                  </div>

                  {/* 2023 - Global Recognition */}
                  <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className="w-1/2"></div>
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg z-10">
                      <span className="text-white font-bold text-lg">2023</span>
                    </div>
                    <div className={`w-1/2 ${isRTL ? 'pr-8' : 'pl-8'}`}>
                      <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg mr-4">
                            <Award className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900">2023</h3>
                        </div>
                        <h4 className="text-xl font-semibold text-primary mb-3">
                          {isRTL ? "الاعتراف العالمي" : "Global Recognition"}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {isRTL 
                            ? "حصلنا على شهادة ISO 9001:2015 وتم الاعتراف بنا كواحدة من أفضل شركات الشحن في الشرق الأوسط. فريقنا الآن يضم أكثر من 200 موظف يخدمون 150+ دولة حول العالم."
                            : "We achieved ISO 9001:2015 certification and were recognized as one of the top shipping companies in the Middle East. Our team now comprises over 200 employees serving 150+ countries worldwide."
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Current Status */}
              <div className="mt-20 text-center">
                <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl p-12">
                  <h3 className="text-3xl font-bold text-primary mb-6">
                    {isRTL ? "اليوم" : "Today"}
                  </h3>
                  <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                  {isRTL 
                      ? "نواصل رحلتنا نحو التميز، مع التركيز على الاستدامة والابتكار. نحن ملتزمون بتقديم حلول لوجستية متطورة تلبي احتياجات عملائنا المتغيرة في عالم سريع التطور."
                      : "We continue our journey toward excellence, focusing on sustainability and innovation. We're committed to delivering cutting-edge logistics solutions that meet our clients' evolving needs in a rapidly changing world."
                  }
                </p>
                </div>
              </div>
            </div>
          )}


          {activeTab === "values" && (
            <div className="space-y-16">
              {/* Values Header */}
              <div className="text-center">
                <h2 className="text-5xl font-bold text-primary mb-6">
                  {isRTL ? "قيمنا" : "Our Values"}
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  {isRTL 
                    ? "المبادئ الأساسية التي توجه قراراتنا وأفعالنا وعلاقاتنا مع جميع أصحاب المصلحة"
                    : "The fundamental principles that guide our decisions, actions, and relationships with all stakeholders"
                  }
                </p>
              </div>

              {/* Core Values Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Excellence */}
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg mb-6">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {isRTL ? "التميز" : "Excellence"}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {isRTL 
                      ? "نسعى دائماً لتجاوز توقعات عملائنا من خلال تقديم خدمات عالية الجودة والابتكار المستمر في كل ما نقوم به."
                      : "We consistently strive to exceed our clients' expectations by delivering high-quality services and continuous innovation in everything we do."
                    }
                  </p>
                </div>

                {/* Integrity */}
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg mb-6">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {isRTL ? "النزاهة" : "Integrity"}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {isRTL 
                      ? "نلتزم بأعلى معايير الأخلاقيات المهنية والشفافية في جميع تعاملاتنا، مما يبني الثقة مع عملائنا وشركائنا."
                      : "We uphold the highest standards of professional ethics and transparency in all our dealings, building trust with our clients and partners."
                    }
                  </p>
                </div>

                {/* Innovation */}
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg mb-6">
                    <Lightbulb className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {isRTL ? "الابتكار" : "Innovation"}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {isRTL 
                      ? "نتبنى أحدث التقنيات والحلول المبتكرة لتحسين كفاءة العمليات وتقديم تجربة أفضل لعملائنا."
                      : "We embrace cutting-edge technologies and innovative solutions to enhance operational efficiency and deliver a better experience for our clients."
                    }
                  </p>
                </div>

                {/* Customer Focus */}
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg mb-6">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {isRTL ? "التركيز على العميل" : "Customer Focus"}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {isRTL 
                      ? "عملاؤنا هم في قلب كل قرار نتخذه. نستمع لاحتياجاتهم ونطور حلولاً مخصصة لتحقيق أهدافهم."
                      : "Our customers are at the heart of every decision we make. We listen to their needs and develop tailored solutions to achieve their goals."
                    }
                  </p>
                </div>

                {/* Teamwork */}
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg mb-6">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {isRTL ? "العمل الجماعي" : "Teamwork"}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {isRTL 
                      ? "نؤمن بقوة العمل الجماعي والتعاون. نجمع مواهب متنوعة لتحقيق أهداف مشتركة وخلق بيئة عمل إيجابية."
                      : "We believe in the power of teamwork and collaboration. We bring together diverse talents to achieve common goals and create a positive work environment."
                    }
                  </p>
                </div>

                {/* Partnership */}
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg mb-6">
                    <Handshake className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {isRTL ? "الشراكة" : "Partnership"}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {isRTL 
                      ? "نبني علاقات طويلة الأمد مع عملائنا وشركائنا، مع التركيز على النمو المتبادل والنجاح المشترك."
                      : "We build long-term relationships with our clients and partners, focusing on mutual growth and shared success."
                    }
                  </p>
                </div>
              </div>

              {/* Values in Action */}
              <div className="mt-20">
                <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl p-12">
                  <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold text-primary mb-6">
                      {isRTL ? "قيمنا في العمل" : "Our Values in Action"}
                    </h3>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                      {isRTL 
                        ? "هذه القيم ليست مجرد كلمات على الحائط - إنها المبادئ التي توجه كل قرار نتخذه وكل خدمة نقدمها."
                        : "These values aren't just words on a wall - they're the principles that guide every decision we make and every service we provide."
                      }
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                          <span className="text-white font-bold text-sm">1</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            {isRTL ? "التدريب المستمر" : "Continuous Training"}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {isRTL 
                              ? "نستثمر في تطوير فريقنا لضمان أعلى مستويات الخبرة والكفاءة."
                              : "We invest in our team's development to ensure the highest levels of expertise and efficiency."
                            }
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                          <span className="text-white font-bold text-sm">2</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            {isRTL ? "الاستدامة البيئية" : "Environmental Sustainability"}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {isRTL 
                              ? "نلتزم بممارسات صديقة للبيئة في جميع عملياتنا اللوجستية."
                              : "We're committed to environmentally friendly practices in all our logistics operations."
                            }
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                          <span className="text-white font-bold text-sm">3</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            {isRTL ? "المسؤولية الاجتماعية" : "Social Responsibility"}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {isRTL 
                              ? "نشارك في مبادرات المجتمع المحلي ونؤيد التنمية المستدامة."
                              : "We participate in local community initiatives and support sustainable development."
                            }
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                          <span className="text-white font-bold text-sm">4</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            {isRTL ? "التحسين المستمر" : "Continuous Improvement"}
                          </h4>
                          <p className="text-gray-600 text-sm">
                  {isRTL 
                              ? "نراجع ونحسن عملياتنا باستمرار لضمان أفضل النتائج لعملائنا."
                              : "We continuously review and improve our processes to ensure the best outcomes for our clients."
                  }
                </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Additional Spacing Before Footer */}
      <div className="py-8"></div>

      <Footer />
    </div>
  );
};

export default About;