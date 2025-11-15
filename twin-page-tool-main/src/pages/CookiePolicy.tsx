import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Cookie, Settings, Info } from "lucide-react";

const CookiePolicy = () => {
  const { isRTL } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Cookie className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
              {isRTL ? "سياسة ملفات تعريف الارتباط" : "Cookie Policy"}
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
                <Info className={`h-6 w-6 text-primary ${isRTL ? 'ml-3' : 'mr-3'}`} />
                {isRTL ? "1. ما هي ملفات تعريف الارتباط؟" : "1. What Are Cookies?"}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {isRTL 
                  ? "ملفات تعريف الارتباط هي ملفات نصية صغيرة يتم تخزينها على جهازك عند زيارة موقعنا. تساعدنا هذه الملفات في تحسين تجربتك وتوفير وظائف معينة على موقعنا."
                  : "Cookies are small text files that are stored on your device when you visit our website. These files help us improve your experience and provide certain functionalities on our site."
                }
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Settings className={`h-6 w-6 text-primary ${isRTL ? 'ml-3' : 'mr-3'}`} />
                {isRTL ? "2. أنواع ملفات تعريف الارتباط التي نستخدمها" : "2. Types of Cookies We Use"}
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {isRTL ? "أ. ملفات تعريف الارتباط الضرورية" : "a. Essential Cookies"}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {isRTL 
                      ? "هذه الملفات ضرورية لتشغيل موقعنا وتوفير الخدمات الأساسية. لا يمكن تعطيلها في أنظمتنا."
                      : "These cookies are essential for our website to function and provide basic services. They cannot be disabled in our systems."
                    }
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {isRTL ? "ب. ملفات تعريف الارتباط الوظيفية" : "b. Functional Cookies"}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {isRTL 
                      ? "تسمح لنا هذه الملفات بتذكر تفضيلاتك وتوفير ميزات محسّنة وذات طابع شخصي."
                      : "These cookies allow us to remember your preferences and provide enhanced, personalized features."
                    }
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {isRTL ? "ج. ملفات تعريف الارتباط التحليلية" : "c. Analytics Cookies"}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {isRTL 
                      ? "تساعدنا هذه الملفات في فهم كيفية استخدام زوارنا لموقعنا حتى نتمكن من تحسينه."
                      : "These cookies help us understand how visitors use our website so we can improve it."
                    }
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {isRTL ? "3. كيفية إدارة ملفات تعريف الارتباط" : "3. How to Manage Cookies"}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {isRTL 
                  ? "يمكنك التحكم في ملفات تعريف الارتباط من خلال إعدادات المتصفح. ومع ذلك، قد يؤثر تعطيل بعض ملفات تعريف الارتباط على وظائف موقعنا."
                  : "You can control cookies through your browser settings. However, disabling some cookies may affect the functionality of our website."
                }
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 text-sm">
                  {isRTL 
                    ? "لإدارة ملفات تعريف الارتباط في المتصفحات الشائعة:"
                    : "To manage cookies in common browsers:"
                  }
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm mt-2 ml-4">
                  <li>{isRTL ? "Chrome: الإعدادات > الخصوصية والأمان > ملفات تعريف الارتباط" : "Chrome: Settings > Privacy and Security > Cookies"}</li>
                  <li>{isRTL ? "Firefox: الخيارات > الخصوصية والأمان > ملفات تعريف الارتباط" : "Firefox: Options > Privacy & Security > Cookies"}</li>
                  <li>{isRTL ? "Safari: التفضيلات > الخصوصية > ملفات تعريف الارتباط" : "Safari: Preferences > Privacy > Cookies"}</li>
                  <li>{isRTL ? "Edge: الإعدادات > ملفات تعريف الارتباط وأذونات الموقع" : "Edge: Settings > Cookies and Site Permissions"}</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {isRTL ? "4. ملفات تعريف الارتباط من أطراف ثالثة" : "4. Third-Party Cookies"}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {isRTL 
                  ? "قد نستخدم ملفات تعريف الارتباط من أطراف ثالثة لتحليل الاستخدام وتحسين تجربة المستخدم. هذه الخدمات لها سياسات خصوصية خاصة بها."
                  : "We may use third-party cookies for usage analytics and improving user experience. These services have their own privacy policies."
                }
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {isRTL ? "5. تحديثات سياسة ملفات تعريف الارتباط" : "5. Cookie Policy Updates"}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {isRTL 
                  ? "قد نحدث سياسة ملفات تعريف الارتباط هذه من وقت لآخر. سيتم نشر أي تغييرات على هذه الصفحة مع تحديث تاريخ 'آخر تحديث'."
                  : "We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated 'Last Updated' date."
                }
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {isRTL ? "6. الاتصال بنا" : "6. Contact Us"}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {isRTL 
                  ? "إذا كان لديك أي أسئلة حول سياسة ملفات تعريف الارتباط، يرجى الاتصال بنا على:"
                  : "If you have any questions about this Cookie Policy, please contact us at:"
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
                  <strong>{isRTL ? "العنوان:" : "Address:"}</strong> REHAM SHIPPING AGENCY LLC, P.O.BOX NO.64323, DUBAI, UAE
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

export default CookiePolicy;

