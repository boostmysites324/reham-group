import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, Eye } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t, isRTL } = useLanguage();
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: isRTL ? "نظرة عامة" : "Overview" },
    { id: "story", label: isRTL ? "قصتنا" : "Our Story" },
    { id: "leadership", label: isRTL ? "القيادة" : "Leadership" },
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
            <div className="max-w-5xl mx-auto">
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

              {/* Add more story content with translations */}
              <div className="text-center text-gray-600">
                <p className="text-lg">
                  {isRTL 
                    ? "سيتم إضافة محتوى القصة هنا مع الترجمة العربية"
                    : "Story content will be added here with Arabic translation"
                  }
                </p>
              </div>
            </div>
          )}

          {activeTab === "leadership" && (
            <div className="space-y-20">
              {/* Leadership Team Header */}
              <div className="text-center">
                <h2 className="text-5xl font-bold text-primary mb-6">
                  {isRTL ? "فريق القيادة" : "Leadership Team"}
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  {isRTL 
                    ? "تعرف على القادة الرؤيويين الذين يقودون الابتكار والتميز في الخدمات اللوجستية المتميزة"
                    : "Meet the visionary leaders driving innovation and excellence in premium logistics"
                  }
                </p>
              </div>

              {/* Add more leadership content with translations */}
              <div className="text-center text-gray-600">
                <p className="text-lg">
                  {isRTL 
                    ? "سيتم إضافة محتوى القيادة هنا مع الترجمة العربية"
                    : "Leadership content will be added here with Arabic translation"
                  }
                </p>
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

              {/* Add more values content with translations */}
              <div className="text-center text-gray-600">
                <p className="text-lg">
                  {isRTL 
                    ? "سيتم إضافة محتوى القيم هنا مع الترجمة العربية"
                    : "Values content will be added here with Arabic translation"
                  }
                </p>
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