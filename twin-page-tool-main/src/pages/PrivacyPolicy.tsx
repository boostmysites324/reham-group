import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Shield, Lock, Eye, FileText } from "lucide-react";

const PrivacyPolicy = () => {
  const { isRTL } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
              {isRTL ? "سياسة الخصوصية" : "Privacy Policy"}
            </h1>
            <p className="text-xl text-gray-600">
              {isRTL 
                ? "آخر تحديث: ديسمبر 2024"
                : "Last Updated: December 2024"
              }
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Lock className={`h-6 w-6 text-primary ${isRTL ? 'ml-3' : 'mr-3'}`} />
                {isRTL ? "1. مقدمة" : "1. Introduction"}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {isRTL 
                  ? "تلتزم وكالة رهام للشحن بحماية خصوصيتك. توضح سياسة الخصوصية هذه كيفية جمع واستخدام وحماية معلوماتك الشخصية عند استخدام خدماتنا."
                  : "Reham Shipping Agency is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our services."
                }
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Eye className={`h-6 w-6 text-primary ${isRTL ? 'ml-3' : 'mr-3'}`} />
                {isRTL ? "2. المعلومات التي نجمعها" : "2. Information We Collect"}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {isRTL 
                  ? "نجمع المعلومات التالية:"
                  : "We collect the following information:"
                }
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>{isRTL ? "معلومات الاتصال (الاسم، البريد الإلكتروني، رقم الهاتف)" : "Contact information (name, email, phone number)"}</li>
                <li>{isRTL ? "معلومات الشحن (العنوان، تفاصيل الشحنة)" : "Shipping information (address, shipment details)"}</li>
                <li>{isRTL ? "معلومات الدفع (عند المعاملة)" : "Payment information (when processing transactions)"}</li>
                <li>{isRTL ? "بيانات الاستخدام (كيفية استخدامك لموقعنا)" : "Usage data (how you use our website)"}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FileText className={`h-6 w-6 text-primary ${isRTL ? 'ml-3' : 'mr-3'}`} />
                {isRTL ? "3. كيفية استخدام المعلومات" : "3. How We Use Your Information"}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {isRTL 
                  ? "نستخدم معلوماتك لـ:"
                  : "We use your information to:"
                }
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>{isRTL ? "توفير خدمات الشحن واللوجستيات" : "Provide shipping and logistics services"}</li>
                <li>{isRTL ? "معالجة الطلبات والاستفسارات" : "Process orders and inquiries"}</li>
                <li>{isRTL ? "تحسين خدماتنا وموقعنا" : "Improve our services and website"}</li>
                <li>{isRTL ? "إرسال تحديثات مهمة عن شحناتك" : "Send important updates about your shipments"}</li>
                <li>{isRTL ? "الامتثال للالتزامات القانونية" : "Comply with legal obligations"}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {isRTL ? "4. حماية المعلومات" : "4. Information Protection"}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {isRTL 
                  ? "نستخدم تدابير أمنية متقدمة لحماية معلوماتك من الوصول غير المصرح به أو التغيير أو الكشف. ومع ذلك، لا يمكن ضمان الأمان الكامل عبر الإنترنت."
                  : "We use advanced security measures to protect your information from unauthorized access, alteration, or disclosure. However, complete security cannot be guaranteed over the internet."
                }
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {isRTL ? "5. مشاركة المعلومات" : "5. Information Sharing"}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {isRTL 
                  ? "لا نبيع معلوماتك الشخصية. قد نشارك معلوماتك مع شركاء الخدمة الموثوقين فقط عند الضرورة لتقديم خدماتنا، أو عندما يتطلب القانون ذلك."
                  : "We do not sell your personal information. We may share your information with trusted service partners only when necessary to provide our services, or when required by law."
                }
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {isRTL ? "6. حقوقك" : "6. Your Rights"}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {isRTL 
                  ? "لديك الحق في:"
                  : "You have the right to:"
                }
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>{isRTL ? "الوصول إلى معلوماتك الشخصية" : "Access your personal information"}</li>
                <li>{isRTL ? "تصحيح المعلومات غير الدقيقة" : "Correct inaccurate information"}</li>
                <li>{isRTL ? "طلب حذف معلوماتك" : "Request deletion of your information"}</li>
                <li>{isRTL ? "الاعتراض على معالجة معلوماتك" : "Object to processing of your information"}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {isRTL ? "7. الاتصال بنا" : "7. Contact Us"}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {isRTL 
                  ? "إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا على:"
                  : "If you have any questions about this Privacy Policy, please contact us at:"
                }
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">
                  <strong>{isRTL ? "البريد الإلكتروني:" : "Email:"}</strong> behzad@rehamshipping.com
                </p>
                <p className="text-gray-700 mt-2">
                  <strong>{isRTL ? "الهاتف:" : "Phone:"}</strong> +971 50 404 2388
                </p>
                <p className="text-gray-700 mt-2">
                  <strong>{isRTL ? "العنوان:" : "Address:"}</strong> Business Bay, Dubai, UAE
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

