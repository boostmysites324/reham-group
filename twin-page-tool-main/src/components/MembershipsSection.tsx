import { useLanguage } from "@/contexts/LanguageContext";
import { Award, Users, Globe, Shield } from "lucide-react";

const MembershipsSection = () => {
  const { isRTL } = useLanguage();

  const memberships = [
    {
      id: 1,
      name: "NAFL",
      fullName: isRTL ? "الاتحاد الوطني للشحن والخدمات اللوجستية" : "National Association of Freight and Logistics",
      description: isRTL 
        ? "عضو في الاتحاد الوطني للشحن والخدمات اللوجستية في الإمارات العربية المتحدة"
        : "Member of the National Association of Freight and Logistics in UAE",
             logo: "/memberships/nafl-logo.svg",
      website: "https://www.nafl.ae",
      icon: Shield,
      color: "from-blue-600 to-blue-700"
    },
    {
      id: 2,
      name: "FIATA",
      fullName: isRTL ? "الاتحاد الدولي لجمعيات الشحن الجوي" : "International Federation of Freight Forwarders Associations",
      description: isRTL 
        ? "عضو في الاتحاد الدولي لجمعيات الشحن الجوي - أكبر منظمة غير حكومية في مجال الشحن"
        : "Member of the International Federation of Freight Forwarders Associations - the largest non-governmental organization in freight forwarding",
             logo: "/memberships/fiata-logo.svg",
      website: "https://fiata.org",
      icon: Globe,
      color: "from-green-600 to-green-700"
    },
    {
      id: 3,
      name: "WCA",
      fullName: isRTL ? "تحالف الشحن العالمي" : "World Cargo Alliance",
      description: isRTL 
        ? "عضو في تحالف الشحن العالمي - أكبر شبكة مستقلة للشحن في العالم"
        : "Member of World Cargo Alliance - the world's largest independent freight network",
             logo: "/memberships/wca-logo.svg",
      website: "https://www.worldcargoalliance.com",
      icon: Users,
      color: "from-purple-600 to-purple-700"
    },
    {
      id: 4,
      name: "WCA Inter Global",
      fullName: isRTL ? "تحالف الشحن العالمي الدولي" : "WCA Inter Global",
      description: isRTL 
        ? "عضو في شبكة الشحن العالمية المتقدمة - خدمات شحن متكاملة عالمياً"
        : "Member of the advanced global freight network - integrated worldwide shipping services",
             logo: "/memberships/wca-inter-global-logo.svg",
      website: "https://www.wcainterglobal.com",
      icon: Award,
      color: "from-orange-600 to-orange-700"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Award className={`h-5 w-5 text-primary ${isRTL ? 'ml-2' : 'mr-2'}`} />
            <span className="text-primary font-semibold text-sm">
              {isRTL ? 'الشراكات والانتماءات' : 'Partnerships & Memberships'}
            </span>
          </div>
          
          <h2 className="text-4xl font-bold text-primary mb-4">
            {isRTL ? 'عضوية المنظمات العالمية' : 'Global Organization Memberships'}
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {isRTL 
              ? 'نحن أعضاء معتمدون في كبرى المنظمات العالمية للشحن والخدمات اللوجستية'
              : 'We are certified members of leading global freight and logistics organizations'
            }
          </p>
        </div>

        {/* Memberships Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {memberships.map((membership, index) => {
            const IconComponent = membership.icon;
            return (
              <div 
                key={membership.id}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                                 {/* Logo Display */}
                 <div className="relative mb-6">
                   <div className="w-full h-24 flex items-center justify-center bg-white rounded-lg border-2 border-gray-200 shadow-sm">
                     <img 
                       src={membership.logo} 
                       alt={`${membership.name} logo`}
                       className="h-16 w-auto object-contain"
                       onError={(e) => {
                         // Fallback to icon if image fails to load
                         const target = e.target as HTMLImageElement;
                         target.style.display = 'none';
                         const parent = target.parentElement;
                         if (parent) {
                           parent.innerHTML = `
                             <div class="text-center">
                               <div class="h-8 w-8 text-gray-400 mx-auto mb-2 ${membership.color.replace('from-', 'text-').replace(' to-', '')}">
                                 <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                                   <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                                 </svg>
                               </div>
                               <p class="text-sm font-semibold text-gray-600">${membership.name}</p>
                             </div>
                           `;
                         }
                       }}
                     />
                   </div>
                   
                   {/* Membership Badge */}
                   <div className={`absolute -top-2 -right-2 bg-gradient-to-r ${membership.color} text-white text-xs px-2 py-1 rounded-full font-semibold shadow-lg`}>
                     {isRTL ? 'عضو' : 'Member'}
                   </div>
                 </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {membership.name}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {membership.fullName}
                  </p>
                  
                  <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                    {membership.description}
                  </p>

                  {/* Visit Website Button */}
                  <a 
                    href={membership.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors duration-200 text-sm font-medium"
                  >
                    {isRTL ? 'زيارة الموقع' : 'Visit Website'}
                    <svg className={`h-3 w-3 ${isRTL ? 'mr-1 rotate-180' : 'ml-1'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              {isRTL ? 'لماذا هذه العضويات مهمة؟' : 'Why These Memberships Matter?'}
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                  <Shield className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {isRTL ? 'الجودة والموثوقية' : 'Quality & Reliability'}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {isRTL 
                      ? 'ضمان أعلى معايير الجودة والموثوقية في جميع خدماتنا'
                      : 'Ensuring the highest standards of quality and reliability in all our services'
                    }
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                  <Globe className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {isRTL ? 'التغطية العالمية' : 'Global Coverage'}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {isRTL 
                      ? 'شبكة عالمية من الشركاء الموثوقين في جميع أنحاء العالم'
                      : 'Global network of trusted partners worldwide'
                    }
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                  <Users className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {isRTL ? 'الخبرة المشتركة' : 'Shared Expertise'}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {isRTL 
                      ? 'الوصول إلى أفضل الممارسات والخبرات في الصناعة'
                      : 'Access to industry best practices and expertise'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipsSection;
