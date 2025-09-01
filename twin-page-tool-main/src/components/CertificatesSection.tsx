import { useLanguage } from "@/contexts/LanguageContext";
import { Award, Shield, CheckCircle, ExternalLink, ZoomIn, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const CertificatesSection = () => {
  const { isRTL } = useLanguage();
  const [selectedCertificate, setSelectedCertificate] = useState<number | null>(null);
  const [showFullImage, setShowFullImage] = useState<number | null>(null);

  const certificates = [
    {
      id: 1,
      title: isRTL ? "شهادة تسجيل ISO 9001:2015" : "ISO 9001:2015 Registration Certificate",
      issuer: "Veritas System Quality Certificates",
      standard: "ISO 9001:2015 Quality Management System",
      certificateNumber: "VSQC099-42122191",
      issueDate: "25-08-2022",
      expiryDate: "24-08-2025",
      imageUrl: "/lovable-uploads/ISO Certificate 9001 2015_page-0001.jpg",
      scope: isRTL ? [
        "التخزين العام",
        "خدمات الشحن الجوي",
        "التخليص الجمركي",
        "تغليف البضائع",
        "نقل البضائع بالشاحنات الخفيفة",
        "وكلاء خطوط الشحن البحري",
        "خدمات تحميل وتفريغ البضائع",
        "خدمات الشحن البحري",
        "نقل البضائع بالشاحنات الثقيلة"
      ] : [
        "General Warehousing",
        "Air Cargo Services",
        "Customs Broker",
        "Cargo Packaging",
        "Cargo Transport by Light Trucks",
        "Sea Shipping Lines Agents",
        "Cargo Loading & Unloading Services",
        "Sea Cargo Services",
        "Cargo Transport by Heavy Trucks"
      ],
      icon: Shield,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      id: 2,
      title: isRTL ? "شهادة نظام HACCP" : "HACCP System Certificate",
      issuer: "QAQC - Quality Accreditation Bureau",
      standard: "HACCP [Hazard Analysis & Critical Control Points] System",
      certificateNumber: "AE-0620-EC",
      issueDate: "18 Feb. 2023",
      expiryDate: "17 Feb. 2026",
      imageUrl: "/lovable-uploads/Reham Shipping HACCP 2024_page-0001.jpg",
      scope: isRTL ? [
        "التخزين العام",
        "خدمات الشحن الجوي",
        "التخليص الجمركي",
        "تغليف البضائع",
        "نقل البضائع بالشاحنات الخفيفة",
        "وكلاء خطوط الشحن البحري",
        "خدمات تحميل وتفريغ البضائع",
        "خدمات الشحن البحري",
        "نقل البضائع بالشاحنات الثقيلة",
        "تخزين المواد الغذائية"
      ] : [
        "General Warehousing",
        "Air Cargo Services",
        "Customs Broker",
        "Cargo Packaging",
        "Cargo Transport by Light Trucks",
        "Sea Shipping Lines Agents",
        "Cargo Loading & Unloading Services",
        "Sea Cargo Services",
        "Cargo Transport by Heavy Trucks",
        "Food Items Storage"
      ],
      icon: Award,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Award className={`h-5 w-5 text-primary ${isRTL ? 'ml-2' : 'mr-2'}`} />
            <span className="text-primary font-semibold text-sm">
              {isRTL ? 'الاعتمادات والشهادات' : 'Accreditations & Certifications'}
            </span>
          </div>
          
          <h2 className="text-4xl font-bold text-primary mb-4">
            {isRTL ? 'شهادات الجودة المعتمدة' : 'Certified Quality Standards'}
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {isRTL 
              ? 'نحن معتمدون من كبرى هيئات الجودة العالمية لضمان أعلى معايير الخدمة والجودة'
              : 'We are certified by leading global quality bodies to ensure the highest standards of service and quality'
            }
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {certificates.map((certificate, index) => {
            const IconComponent = certificate.icon;
            return (
              <div 
                key={certificate.id}
                className={`${certificate.bgColor} ${certificate.borderColor} border-2 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Certificate Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${certificate.color} rounded-xl shadow-lg mr-4`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {certificate.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {certificate.issuer}
                      </p>
                    </div>
                  </div>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedCertificate(selectedCertificate === certificate.id ? null : certificate.id)}
                    className="text-xs"
                  >
                    {isRTL ? 'عرض التفاصيل' : 'View Details'}
                  </Button>
                </div>

                                  {/* Certificate Image */}
                  <div className="relative mb-6 group">
                    <div className="relative overflow-hidden rounded-lg border-2 border-gray-200 bg-white">
                      <img
                        src={certificate.imageUrl}
                        alt={certificate.title}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                        onError={(e) => {
                          // Fallback to placeholder if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `
                              <div class="w-full h-64 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                                <div class="text-center">
                                  <svg class="h-16 w-16 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM14 2v6h6M16 13H8M16 17H8M10 9H8"/>
                                  </svg>
                                  <p class="text-gray-500 font-medium">${isRTL ? 'صورة الشهادة' : 'Certificate Image'}</p>
                                  <p class="text-sm text-gray-400 mt-2">${isRTL ? 'سيتم إضافة الصورة قريباً' : 'Image will be added soon'}</p>
                                </div>
                              </div>
                            `;
                          }
                        }}
                      />
                      
                      {/* Overlay with zoom button */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setShowFullImage(certificate.id)}
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 hover:bg-white text-gray-800"
                        >
                          <ZoomIn className="h-4 w-4 mr-2" />
                          {isRTL ? 'عرض الشهادة' : 'View Certificate'}
                        </Button>
                      </div>
                    </div>
                  </div>

                {/* Certificate Details */}
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {isRTL ? 'المعيار:' : 'Standard:'}
                    </p>
                    <p className="text-foreground font-semibold">
                      {certificate.standard}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {isRTL ? 'رقم الشهادة:' : 'Certificate No:'}
                      </p>
                      <p className="text-foreground font-semibold">
                        {certificate.certificateNumber}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {isRTL ? 'تاريخ الإصدار:' : 'Issue Date:'}
                      </p>
                      <p className="text-foreground font-semibold">
                        {certificate.issueDate}
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {isRTL ? 'تاريخ انتهاء الصلاحية:' : 'Expiry Date:'}
                    </p>
                    <p className="text-foreground font-semibold">
                      {certificate.expiryDate}
                    </p>
                  </div>

                  {/* Scope of Services */}
                  {selectedCertificate === certificate.id && (
                    <div className="mt-6 p-4 bg-white rounded-lg border">
                      <h4 className="font-semibold text-foreground mb-3">
                        {isRTL ? 'نطاق الخدمات:' : 'Scope of Services:'}
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {certificate.scope.map((service, serviceIndex) => (
                          <div key={serviceIndex} className="flex items-center">
                            <CheckCircle className={`h-4 w-4 text-primary flex-shrink-0 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                            <span className="text-sm text-muted-foreground">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Verification Link */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {isRTL ? 'للتحقق من صحة الشهادة:' : 'To verify certificate validity:'}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-xs text-primary hover:text-primary/80"
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      {isRTL ? 'تحقق الآن' : 'Verify Now'}
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Full Image Modal */}
        {showFullImage && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-6xl max-h-full">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowFullImage(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 z-10 rounded-full w-10 h-10 flex items-center justify-center"
              >
                ✕
              </Button>
              <img
                src={certificates.find(c => c.id === showFullImage)?.imageUrl}
                alt="Certificate"
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-2xl"
                onError={(e) => {
                  // Fallback if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `
                      <div class="bg-white rounded-lg p-8 max-w-2xl">
                        <h3 class="text-xl font-bold mb-4">${certificates.find(c => c.id === showFullImage)?.title}</h3>
                        <p class="text-gray-600 mb-4">${isRTL 
                          ? 'سيتم إضافة صورة الشهادة الكاملة قريباً. في الوقت الحالي، يمكنك رؤية تفاصيل الشهادة أعلاه.'
                          : 'The full certificate image will be added soon. For now, you can see the certificate details above.'
                        }</p>
                        <div class="text-center">
                          <svg class="h-24 w-24 text-gray-300 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM14 2v6h6M16 13H8M16 17H8M10 9H8"/>
                          </svg>
                          <p class="text-gray-500">${isRTL ? 'صورة الشهادة قيد الإعداد' : 'Certificate image coming soon'}</p>
                        </div>
                      </div>
                    `;
                  }
                }}
              />
            </div>
          </div>
        )}

        {/* Additional Info */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            {isRTL 
              ? 'جميع شهاداتنا صالحة ويمكن التحقق منها من خلال الهيئات المعتمدة. نحن ملتزمون بالحفاظ على أعلى معايير الجودة في جميع خدماتنا.'
              : 'All our certificates are valid and verifiable through the accrediting bodies. We are committed to maintaining the highest quality standards in all our services.'
            }
          </p>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
