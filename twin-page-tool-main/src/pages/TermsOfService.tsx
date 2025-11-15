import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { FileText, Scale, AlertCircle, CheckCircle } from "lucide-react";

const TermsOfService = () => {
  const { isRTL } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
              {isRTL ? "شروط الخدمة" : "Terms of Service"}
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
                <Scale className={`h-6 w-6 text-primary ${isRTL ? 'ml-3' : 'mr-3'}`} />
                {isRTL ? "1. قبول الشروط" : "1. Acceptance of Terms"}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {isRTL 
                  ? "باستخدام خدمات وكالة رهام للشحن، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على هذه الشروط، يرجى عدم استخدام خدماتنا."
                  : "By using Reham Shipping Agency's services, you agree to be bound by these terms and conditions. If you do not agree to these terms, please do not use our services."
                }
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <CheckCircle className={`h-6 w-6 text-primary ${isRTL ? 'ml-3' : 'mr-3'}`} />
                {isRTL ? "2. الخدمات المقدمة" : "2. Services Provided"}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {isRTL 
                  ? "نقدم خدمات الشحن واللوجستيات التالية:"
                  : "We provide the following shipping and logistics services:"
                }
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>{isRTL ? "الشحن الجوي والبحري والبرّي" : "Air, sea, and land freight"}</li>
                <li>{isRTL ? "التخزين وإدارة المخزون" : "Warehousing and inventory management"}</li>
                <li>{isRTL ? "التخليص الجمركي" : "Customs clearance"}</li>
                <li>{isRTL ? "خدمات التجارة الإلكترونية" : "E-commerce services"}</li>
                <li>{isRTL ? "خدمات سلسلة التبريد" : "Cold chain services"}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <AlertCircle className={`h-6 w-6 text-primary ${isRTL ? 'ml-3' : 'mr-3'}`} />
                {isRTL ? "3. مسؤوليات العميل" : "3. Customer Responsibilities"}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {isRTL 
                  ? "أنت مسؤول عن:"
                  : "You are responsible for:"
                }
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>{isRTL ? "تقديم معلومات دقيقة وكاملة" : "Providing accurate and complete information"}</li>
                <li>{isRTL ? "الامتثال لجميع القوانين واللوائح المعمول بها" : "Complying with all applicable laws and regulations"}</li>
                <li>{isRTL ? "تأمين البضائع بشكل مناسب" : "Securing goods appropriately"}</li>
                <li>{isRTL ? "دفع جميع الرسوم المستحقة في الوقت المحدد" : "Paying all fees due on time"}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {isRTL ? "4. الدفع والرسوم" : "4. Payment and Fees"}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {isRTL 
                  ? "جميع الرسوم مستحقة الدفع وفقاً للشروط المتفق عليها في عقد الخدمة. قد تكون هناك رسوم إضافية للتغييرات أو التأخيرات أو الظروف غير المتوقعة."
                  : "All fees are due according to the terms agreed upon in the service contract. Additional fees may apply for changes, delays, or unforeseen circumstances."
                }
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {isRTL ? "5. حدود المسؤولية" : "5. Limitation of Liability"}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {isRTL 
                  ? "في الحد الأقصى المسموح به بموجب القانون، لن نكون مسؤولين عن أي أضرار غير مباشرة أو عرضية أو تبعية ناتجة عن استخدام خدماتنا، باستثناء حالات الإهمال الجسيم."
                  : "To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services, except in cases of gross negligence."
                }
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {isRTL ? "6. التأخيرات والقوة القاهرة" : "6. Delays and Force Majeure"}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {isRTL 
                  ? "لن نكون مسؤولين عن التأخيرات الناتجة عن ظروف خارجة عن سيطرتنا، بما في ذلك الكوارث الطبيعية، والحروب، والإضرابات، والقيود الحكومية، أو أي أحداث أخرى للقوة القاهرة."
                  : "We shall not be liable for delays caused by circumstances beyond our control, including natural disasters, wars, strikes, government restrictions, or any other force majeure events."
                }
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {isRTL ? "7. إنهاء الخدمة" : "7. Service Termination"}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {isRTL 
                  ? "يحق لنا إنهاء أو تعليق خدماتك في أي وقت بسبب انتهاك هذه الشروط أو لأي سبب آخر نعتبره ضرورياً. يحق لك أيضاً إنهاء استخدام خدماتنا في أي وقت."
                  : "We reserve the right to terminate or suspend your services at any time due to violation of these terms or for any other reason we deem necessary. You also have the right to discontinue using our services at any time."
                }
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {isRTL ? "8. القانون الحاكم" : "8. Governing Law"}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {isRTL 
                  ? "تخضع هذه الشروط وتفسر وفقاً لقوانين دولة الإمارات العربية المتحدة. أي نزاعات ستحل من خلال المحاكم المختصة في دبي، الإمارات العربية المتحدة."
                  : "These terms shall be governed by and construed in accordance with the laws of the United Arab Emirates. Any disputes shall be resolved through the competent courts in Dubai, United Arab Emirates."
                }
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {isRTL ? "9. التعديلات" : "9. Modifications"}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {isRTL 
                  ? "نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم إشعارك بأي تغييرات جوهرية. استمرار استخدامك لخدماتنا بعد التعديلات يشكل موافقتك على الشروط المحدثة."
                  : "We reserve the right to modify these terms at any time. You will be notified of any material changes. Your continued use of our services after modifications constitutes your acceptance of the updated terms."
                }
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {isRTL ? "10. الاتصال بنا" : "10. Contact Us"}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {isRTL 
                  ? "إذا كان لديك أي أسئلة حول شروط الخدمة هذه، يرجى الاتصال بنا على:"
                  : "If you have any questions about these Terms of Service, please contact us at:"
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

export default TermsOfService;

