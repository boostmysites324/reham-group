import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.technology': 'Technology',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.request_quote': 'Request a Quote',
    
    // Hero Section
    'hero.badge': 'Trusted by 1000+ Companies',
    'hero.title': 'Premium',
    'hero.title_highlight': 'Shipping',
    'hero.title_end': 'Excellence',
    'hero.subtitle': 'Setting new standards in premium logistics. Where exceptional service meets uncompromising excellence across global supply chains.',
    'hero.get_started': 'Get Started',
    'hero.watch_demo': 'Watch Demo',
    'hero.track_title': 'Track Your Shipment',
    'hero.track_subtitle': 'Real-time tracking across global networks',
    'hero.track_placeholder': 'Enter tracking number (e.g., RS123456789)',
    'hero.track_button': 'Track Now',
    'hero.quick_access': 'Quick Access',
    'hero.get_quote': 'Get Quote',
    'hero.contact_support': 'Contact Support',
    'hero.scroll_explore': 'Scroll to explore',
    'hero.stat_ports': 'Global Ports',
    'hero.stat_support': 'Support',
    'hero.stat_delivery': 'On-Time Delivery',
    'hero.security_text': 'Secure • Real-time • Global Coverage',
    
    // Services
    'services.our_services': 'Our Services',
    'services.project_cargo': 'Project Cargo',
    'services.freight_forwarding': 'Freight Forwarding',
    'services.air_freight': 'Air Freight',
    'services.sea_freight': 'Sea Freight',
    'services.overland_freight': 'Overland Freight',
    'services.custom_brokerage': 'Custom Brokerage',
    'services.ecommerce_services': 'E-commerce Services',
    'services.collaborative_packaging': 'Collaborative Packaging',
    'services.order_fulfillment': 'B2B B2C Order Fulfillment',
    'services.logistics_warehousing': 'Logistics and Warehousing',
    'services.cold_chain_services': 'Cold Chain Services',
    
    // Impact Section
    'impact.our_impact': 'Our Impact',
    'impact.trusted_by': 'Trusted by',
    'impact.thousands': 'Thousands',
    'impact.description': 'Delivering excellence across the globe with measurable results that speak for themselves. Every number tells a story of trust, precision, and unwavering commitment.',
    'impact.cta_title': 'Ready to join our success story?',
    'impact.cta_subtitle': 'Join thousands of businesses who trust us with their most valuable cargo.',
    'impact.get_started_today': 'Get Started Today',
    'impact.view_case_studies': 'View Case Studies',
    'impact.iso_certified': 'ISO Certified',
    'impact.fully_insured': 'Fully Insured',
    'impact.support_24_7': '24/7 Support',
    
    // Stats
    'stats.shipments_delivered': 'Shipments Delivered',
    'stats.global_ports': 'Global Ports',
    'stats.cargo_value': 'Cargo Value Handled',
    'stats.satisfied_clients': 'Satisfied Clients',
    'stats.on_time_delivery': 'On-Time Delivery',
    'stats.years_experience': 'Years Experience',
    
    // About Section
    'about.title': 'About Us',
    'about.subtitle': 'Leading the Future of Logistics',
    'about.description': 'We are a premier shipping and logistics company dedicated to providing exceptional service and innovative solutions for businesses worldwide.',
    'about.read_more': 'Read More',
    
    // Footer
    'footer.company': 'Company',
    'footer.services': 'Services',
    'footer.support': 'Support',
    'footer.legal': 'Legal',
    'footer.all_rights_reserved': 'All rights reserved',
    'footer.privacy_policy': 'Privacy Policy',
    'footer.terms_of_service': 'Terms of Service',
    
    // Quote Section
    'quote.title': 'Get Your Custom Quote',
    'quote.subtitle': 'Experience premium logistics tailored to your needs',
    'quote.description': 'Get instant preliminary pricing for your shipping needs with our advanced quote system.',
    'quote.from_city': 'From City',
    'quote.to_city': 'To City',
    'quote.shipment_type': 'Shipment Type',
    'quote.air_freight': 'Air Freight',
    'quote.sea_freight': 'Sea Freight',
    'quote.road_freight': 'Road Freight',
    'quote.project_cargo': 'Project Cargo',
    'quote.get_quote_button': 'Get My Quote',
    'quote.benefit_1': 'Instant preliminary pricing',
    'quote.benefit_2': 'Detailed service breakdown',
    'quote.benefit_3': 'Flexible service options',

    // Advantages Section
    'advantages.title': 'Why Choose Us',
    'advantages.subtitle': 'Excellence in Every Detail',
    'advantages.description': 'We deliver unparalleled service through our commitment to quality, innovation, and customer satisfaction.',

    // Impact Section
    'impact.title': 'Our Global Impact',
    'impact.subtitle': 'Delivering Excellence Worldwide',

    // Services Section
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive Logistics Solutions',
    'services.description': 'From air freight to project cargo, we provide end-to-end logistics solutions tailored to your business needs.',

    // Customers Section
    'customers.title': 'Our Trusted Partners',
    'customers.subtitle': 'Trusted by Leading Companies Worldwide',

    // Testimonials Section
    'testimonials.title': 'What Our Clients Say',
    'testimonials.subtitle': 'Trusted by Businesses Worldwide',
    'testimonials.bottom_quote': 'In just a couple of days, we went from having just an idea to having a prototype to show investors.',
    'testimonials.bottom_author': '-Cesar Ramirez, ReddyUp',

    // Brochure Section
    'brochure.title': 'Download Our Company Brochure',
    'brochure.description': 'Get detailed information about our services, capabilities, and global network.',
    'brochure.download': 'Download Brochure',
    'brochure.alert': 'Download will start automatically',

    // Google Map Section
    'map.title': 'Our Location',
    'map.address': 'H.O: Al Owais Building, Office No.205, Al Ittihad Rd, Port Saeed, Dubai, United Arab Emirates',

    // Contact Section
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in Touch',
    'contact.description': 'Ready to ship with us? Contact our team for personalized logistics solutions.',

    // Technology Section
    'technology.title': 'Advanced Technology',
    'technology.subtitle': 'Innovation in Logistics',

    // Project Cargo Page
    'project_cargo.title': 'Project Cargo',
    'project_cargo.subtitle': 'Specialized handling of oversized, heavy, and complex cargo requiring custom logistics solutions and engineering expertise',
    'project_cargo.heavy_lift': 'Heavy Lift Operations',
    'project_cargo.heavy_lift_desc': 'Specialized equipment for cargo up to 1000+ tons',
    'project_cargo.oversized_transport': 'Oversized Transport',
    'project_cargo.oversized_transport_desc': 'Custom trailers and route planning for large cargo',
    'project_cargo.engineering_solutions': 'Engineering Solutions',
    'project_cargo.engineering_solutions_desc': 'Custom rigging and loading plans for complex cargo',
    'project_cargo.project_excellence': 'Project Excellence',
    'project_cargo.project_excellence_desc': 'Handle the most challenging cargo movements with precision and expertise. Our specialized project cargo division provides end-to-end solutions for oversized, overweight, and out-of-gauge shipments requiring custom engineering and logistics planning.',
    'project_cargo.multimodal_solutions': 'Multimodal Solutions',
    'project_cargo.multimodal_solutions_desc': 'Seamless integration of sea, air, and land transport modes with specialized handling at each transfer point for complex routing requirements.',
    'project_cargo.route_surveys': 'Route Surveys & Planning',
    'project_cargo.route_surveys_desc': 'Comprehensive route analysis including bridge clearances, road restrictions, and permit requirements to ensure safe and legal transport.',
    'project_cargo.specialized_equipment': 'Specialized Equipment',
    'project_cargo.specialized_equipment_desc': 'Access to heavy-lift cranes, SPMT trailers, and custom-built transport solutions designed for unique cargo specifications.',
    'project_cargo.turnkey_solutions': 'Turnkey Solutions',
    'project_cargo.turnkey_solutions_desc': 'Complete project management from origin to destination',
    'project_cargo.global_expertise': 'Global Expertise',
    'project_cargo.global_expertise_desc': 'Experienced teams handling complex projects worldwide',

    // Sea Freight Page  
    'sea_freight.title': 'Sea Freight',
    'sea_freight.subtitle': 'Cost-effective ocean shipping solutions for all cargo types, connecting major ports worldwide with reliable maritime logistics',
    'sea_freight.weekly_sailings': 'Weekly Sailings',
    'sea_freight.weekly_sailings_desc': 'Regular departures to ensure reliable shipping schedules',
    'sea_freight.global_coverage': 'Global Coverage',
    'sea_freight.global_coverage_desc': 'Direct connections to 200+ major ports worldwide',
    'sea_freight.marine_insurance': 'Marine Insurance',
    'sea_freight.marine_insurance_desc': 'Comprehensive coverage for complete peace of mind',
    'sea_freight.maritime_excellence': 'Maritime Excellence',
    'sea_freight.maritime_excellence_desc': 'Navigate global waters with our extensive ocean freight network. We provide cost-effective shipping solutions for all cargo volumes, ensuring reliable transit times and competitive rates across international maritime routes.',
    'sea_freight.fcl_services': 'FCL Services',
    'sea_freight.fcl_services_desc': 'Full Container Load services for dedicated shipments with direct port-to-port delivery and competitive container rates.',
    'sea_freight.lcl_consolidation': 'LCL Consolidation',
    'sea_freight.lcl_consolidation_desc': 'Less than Container Load services for smaller shipments with weekly consolidations to major destinations worldwide.',
    'sea_freight.breakbulk_cargo': 'Breakbulk Cargo',
    'sea_freight.breakbulk_cargo_desc': 'Specialized handling for oversized, heavy, or unconventional cargo that cannot fit in standard containers.',
    'sea_freight.container_services': 'Container Services',
    'sea_freight.container_services_desc': 'Full container load and consolidation services',
    'sea_freight.port_network': 'Port Network',
    'sea_freight.port_network_desc': 'Access to 200+ major ports across all continents',

    // Air Freight Page
    'air_freight.title': 'Air Freight',
    'air_freight.subtitle': 'Fast and reliable air cargo services for time-sensitive shipments, connecting global destinations with express delivery solutions',
    'air_freight.express_delivery': 'Express Delivery',
    'air_freight.express_delivery_desc': 'Next-day and same-day delivery options available',
    'air_freight.charter_services': 'Charter Services',
    'air_freight.charter_services_desc': 'Dedicated aircraft for urgent and oversized cargo',
    'air_freight.secure_handling': 'Secure Handling',
    'air_freight.secure_handling_desc': 'Specialized handling for valuable and fragile items',
    'air_freight.aviation_excellence': 'Aviation Excellence',
    'air_freight.aviation_excellence_desc': 'Experience rapid transit solutions through our comprehensive air freight network. We deliver time-critical shipments with precision, ensuring your cargo reaches its destination quickly and safely across global aviation routes.',
    'air_freight.express_air_services': 'Express Air Services',
    'air_freight.express_air_services_desc': 'Priority handling and expedited customs clearance for urgent shipments. Available with next-flight-out options for critical business needs.',
    'air_freight.dangerous_goods': 'Dangerous Goods Handling',
    'air_freight.dangerous_goods_desc': 'Certified handling of hazardous materials with IATA compliance. Specialized packaging and documentation for safe air transport.',
    'air_freight.temperature_controlled': 'Temperature-Controlled Transport',
    'air_freight.temperature_controlled_desc': 'Climate-controlled solutions for pharmaceuticals, perishables, and temperature-sensitive cargo with real-time monitoring.',
    'air_freight.express_solutions': 'Express Solutions',
    'air_freight.express_solutions_desc': 'Next-day delivery to major global destinations',
    'air_freight.global_network': 'Global Network',
    'air_freight.global_network_desc': 'Direct flights to 500+ airports worldwide',

    // Overland Freight Page
    'overland.title': 'Overland Freight',
    'overland.subtitle': 'Reliable ground transportation services connecting regions with flexible delivery options and cross-border expertise',
    'overland.road_transport': 'Road Transportation',
    'overland.road_transport_desc': 'Full truckload and less-than-truckload options',
    'overland.cross_border': 'Cross-border Services',
    'overland.cross_border_desc': 'Seamless international ground transport',
    'overland.last_mile': 'Last Mile Delivery',
    'overland.last_mile_desc': 'Direct delivery to final destination',
    'overland.ground_excellence': 'Ground Excellence',
    'overland.ground_excellence_desc': 'Connect markets efficiently through our comprehensive overland freight network. We provide flexible ground transportation solutions with regional expertise and cross-border capabilities for seamless cargo movement.',
    'overland.ftl_ltl': 'FTL & LTL Options',
    'overland.ftl_ltl_desc': 'Full Truckload for dedicated shipments and Less-than-Truckload for smaller cargo with cost-effective consolidation.',
    'overland.regional_networks': 'Regional Networks',
    'overland.regional_networks_desc': 'Extensive coverage across major trade corridors with local expertise and established partnerships for reliable service.',
    'overland.expedited_services': 'Expedited Services',
    'overland.expedited_services_desc': 'Priority transport for time-sensitive cargo with dedicated equipment and express routing for urgent deliveries.',
    'overland.regional_coverage': 'Regional Coverage',
    'overland.regional_coverage_desc': 'Comprehensive network across major trade routes',
    'overland.flexible_solutions': 'Flexible Solutions',
    'overland.flexible_solutions_desc': 'Customized transport options for all cargo types',

    // Freight Forwarding Page
    'freight_forwarding.title': 'Freight Forwarding',
    'freight_forwarding.subtitle': 'Comprehensive logistics coordination across multiple transport modes with seamless documentation and customs handling',
    'freight_forwarding.multimodal': 'Multimodal Transport',
    'freight_forwarding.multimodal_desc': 'Seamless integration of air, sea, and land transport',
    'freight_forwarding.documentation': 'Documentation Services',
    'freight_forwarding.documentation_desc': 'Complete handling of shipping documents and paperwork',
    'freight_forwarding.customs_clearance': 'Customs Clearance',
    'freight_forwarding.customs_clearance_desc': 'Expert customs brokerage and clearance services',
    'freight_forwarding.logistics_excellence': 'Logistics Excellence',
    'freight_forwarding.logistics_excellence_desc': 'Streamline your supply chain with our comprehensive freight forwarding services. We coordinate complex logistics operations across multiple transport modes, ensuring efficient cargo movement from origin to destination with complete documentation support.',

    // Custom Brokerage Page
    'custom_brokerage.title': 'Custom Brokerage',
    'custom_brokerage.subtitle': 'Expert customs clearance and trade compliance services ensuring smooth passage of goods across international borders',
    'custom_brokerage.import_clearance': 'Import Clearance',
    'custom_brokerage.import_clearance_desc': 'Fast and accurate import customs processing',
    'custom_brokerage.export_documentation': 'Export Documentation',
    'custom_brokerage.export_documentation_desc': 'Complete export paperwork and compliance',
    'custom_brokerage.trade_compliance': 'Trade Compliance',
    'custom_brokerage.trade_compliance_desc': 'Ensuring adherence to international trade regulations',
    'custom_brokerage.customs_excellence': 'Customs Excellence',
    'custom_brokerage.customs_excellence_desc': 'Navigate complex international trade regulations with confidence. Our licensed customs brokers ensure compliant and efficient clearance of your goods, minimizing delays and maximizing cost savings through proper classification and duty optimization.',

    // E-commerce Services Page
    'ecommerce.title': 'E-commerce Services',
    'ecommerce.subtitle': 'Specialized logistics solutions for online retailers, from warehousing to last-mile delivery',
    'ecommerce.fulfillment': 'Order Fulfillment',
    'ecommerce.fulfillment_desc': 'Pick, pack, and ship services for online orders',
    'ecommerce.inventory_management': 'Inventory Management',
    'ecommerce.inventory_management_desc': 'Real-time inventory tracking and management',
    'ecommerce.returns_processing': 'Returns Processing',
    'ecommerce.returns_processing_desc': 'Efficient handling of product returns and exchanges',
    'ecommerce.ecommerce_excellence': 'E-commerce Excellence',
    'ecommerce.ecommerce_excellence_desc': 'Power your online business with specialized e-commerce logistics. From inventory management to last-mile delivery, we provide scalable solutions that grow with your business and enhance customer satisfaction.',

    // Collaborative Packaging Page
    'collaborative_packaging.title': 'Collaborative Packaging',
    'collaborative_packaging.subtitle': 'Sustainable packaging solutions designed in partnership with clients for optimal protection and cost efficiency',
    'collaborative_packaging.custom_design': 'Custom Design',
    'collaborative_packaging.custom_design_desc': 'Tailored packaging solutions for specific products',
    'collaborative_packaging.sustainable_materials': 'Sustainable Materials',
    'collaborative_packaging.sustainable_materials_desc': 'Eco-friendly packaging options and materials',
    'collaborative_packaging.cost_optimization': 'Cost Optimization',
    'collaborative_packaging.cost_optimization_desc': 'Reducing packaging costs while maintaining protection',
    'collaborative_packaging.packaging_excellence': 'Packaging Excellence',
    'collaborative_packaging.packaging_excellence_desc': 'Collaborate with our packaging experts to develop innovative solutions that protect your products while reducing costs and environmental impact. We design custom packaging that meets your specific requirements and sustainability goals.',

    // Order Fulfillment Page
    'order_fulfillment.title': 'B2B B2C Order Fulfillment',
    'order_fulfillment.subtitle': 'Complete order processing and fulfillment services for both business-to-business and business-to-consumer operations',
    'order_fulfillment.b2b_services': 'B2B Services',
    'order_fulfillment.b2b_services_desc': 'Bulk order processing for business clients',
    'order_fulfillment.b2c_services': 'B2C Services',
    'order_fulfillment.b2c_services_desc': 'Individual order fulfillment for consumers',
    'order_fulfillment.automated_processing': 'Automated Processing',
    'order_fulfillment.automated_processing_desc': 'Efficient automated order processing systems',
    'order_fulfillment.fulfillment_excellence': 'Fulfillment Excellence',
    'order_fulfillment.fulfillment_excellence_desc': 'Streamline your order fulfillment operations with our comprehensive B2B and B2C services. From inventory management to final delivery, we handle every aspect of your order processing with precision and efficiency.',

    // Logistics Warehousing Page
    'logistics_warehousing.title': 'Logistics and Warehousing',
    'logistics_warehousing.subtitle': 'Strategic warehousing and distribution services with advanced inventory management and fulfillment capabilities',
    'logistics_warehousing.strategic_locations': 'Strategic Locations',
    'logistics_warehousing.strategic_locations_desc': 'Warehouses positioned for optimal distribution',
    'logistics_warehousing.inventory_control': 'Inventory Control',
    'logistics_warehousing.inventory_control_desc': 'Advanced inventory management systems',
    'logistics_warehousing.distribution_services': 'Distribution Services',
    'logistics_warehousing.distribution_services_desc': 'Efficient distribution and fulfillment operations',
    'logistics_warehousing.warehousing_excellence': 'Warehousing Excellence',
    'logistics_warehousing.warehousing_excellence_desc': 'Optimize your supply chain with our strategic warehousing solutions. Our facilities offer advanced inventory management, order fulfillment, and distribution services designed to reduce costs and improve delivery times.',

    // Cold Chain Services Page
    'cold_chain.title': 'Cold Chain Services',
    'cold_chain.subtitle': 'Temperature-controlled logistics for pharmaceuticals, food products, and other temperature-sensitive cargo',
    'cold_chain.temperature_control': 'Temperature Control',
    'cold_chain.temperature_control_desc': 'Precise temperature monitoring and control',
    'cold_chain.pharmaceutical_logistics': 'Pharmaceutical Logistics',
    'cold_chain.pharmaceutical_logistics_desc': 'Specialized handling of medical and pharmaceutical products',
    'cold_chain.food_grade_facilities': 'Food Grade Facilities',
    'cold_chain.food_grade_facilities_desc': 'HACCP certified facilities for food products',
    'cold_chain.cold_chain_excellence': 'Cold Chain Excellence',
    'cold_chain.cold_chain_excellence_desc': 'Maintain product integrity with our temperature-controlled logistics solutions. From pharmaceuticals to fresh produce, we provide end-to-end cold chain management with real-time monitoring and compliance documentation.',

    // Common
    'common.learn_more': 'Learn More',
    'common.get_quote': 'Get Quote',
    'common.contact_us': 'Contact Us',
    'common.read_more': 'Read More',
    'common.view_all': 'View All',
    'common.loading': 'Loading...',
    'common.submit': 'Submit',
    'common.cancel': 'Cancel',
    'common.close': 'Close',
    'common.next': 'Next',
    'common.previous': 'Previous',
    'common.success': 'Success',
    'common.error': 'Error',
  },
  ar: {
    // Header
    'nav.home': 'الرئيسية',
    'nav.services': 'الخدمات',
    'nav.technology': 'التكنولوجيا',
    'nav.about': 'عن الشركة',
    'nav.contact': 'تواصل معنا',
    'nav.request_quote': 'طلب عرض أسعار',
    
    // Hero Section
    'hero.badge': 'موثوق من أكثر من 1000 شركة',
    'hero.title': 'شحن',
    'hero.title_highlight': 'متميز',
    'hero.title_end': 'بجودة عالية',
    'hero.subtitle': 'نضع معايير جديدة في الخدمات اللوجستية المتميزة. حيث تلتقي الخدمة الاستثنائية بالتميز المطلق عبر سلاسل الإمداد العالمية.',
    'hero.get_started': 'ابدأ الآن',
    'hero.watch_demo': 'شاهد العرض',
    'hero.track_title': 'تتبع شحنتك',
    'hero.track_subtitle': 'تتبع فوري عبر الشبكات العالمية',
    'hero.track_placeholder': 'أدخل رقم التتبع (مثال: RS123456789)',
    'hero.track_button': 'تتبع الآن',
    'hero.quick_access': 'وصول سريع',
    'hero.get_quote': 'طلب عرض أسعار',
    'hero.contact_support': 'تواصل مع الدعم',
    'hero.scroll_explore': 'مرر للاستكشاف',
    'hero.stat_ports': 'موانئ عالمية',
    'hero.stat_support': 'دعم',
    'hero.stat_delivery': 'تسليم في الوقت المحدد',
    'hero.security_text': 'آمن • فوري • تغطية عالمية',
    
    // Services
    'services.our_services': 'خدماتنا',
    'services.project_cargo': 'الشحن للمشاريع',
    'services.freight_forwarding': 'الشحن والتخليص',
    'services.air_freight': 'الشحن الجوي',
    'services.sea_freight': 'الشحن البحري',
    'services.overland_freight': 'الشحن البري',
    'services.custom_brokerage': 'التخليص الجمركي',
    'services.ecommerce_services': 'خدمات التجارة الإلكترونية',
    'services.collaborative_packaging': 'التغليف التعاوني',
    'services.order_fulfillment': 'تنفيذ الطلبات للشركات والأفراد',
    'services.logistics_warehousing': 'الخدمات اللوجستية والتخزين',
    'services.cold_chain_services': 'خدمات السلسلة الباردة',
    
    // Impact Section
    'impact.our_impact': 'تأثيرنا',
    'impact.trusted_by': 'موثوق من قبل',
    'impact.thousands': 'الآلاف',
    'impact.description': 'نقدم التميز عبر العالم مع نتائج قابلة للقياس تتحدث عن نفسها. كل رقم يحكي قصة من الثقة والدقة والالتزام الثابت.',
    'impact.cta_title': 'هل أنت مستعد للانضمام إلى قصة نجاحنا؟',
    'impact.cta_subtitle': 'انضم إلى آلاف الشركات التي تثق بنا مع شحناتها الأكثر قيمة.',
    'impact.get_started_today': 'ابدأ اليوم',
    'impact.view_case_studies': 'عرض دراسات الحالة',
    'impact.iso_certified': 'معتمد ISO',
    'impact.fully_insured': 'مؤمن بالكامل',
    'impact.support_24_7': 'دعم 24/7',
    
    // Stats
    'stats.shipments_delivered': 'شحنة تم توصيلها',
    'stats.global_ports': 'موانئ عالمية',
    'stats.cargo_value': 'قيمة البضائع المُتعاملة',
    'stats.satisfied_clients': 'عميل راضي',
    'stats.on_time_delivery': 'تسليم في الوقت المحدد',
    'stats.years_experience': 'سنة خبرة',
    
    // About Section
    'about.title': 'عن الشركة',
    'about.subtitle': 'نقود مستقبل الخدمات اللوجستية',
    'about.description': 'نحن شركة شحن وخدمات لوجستية رائدة مكرسة لتقديم خدمة استثنائية وحلول مبتكرة للشركات في جميع أنحاء العالم.',
    'about.read_more': 'اقرأ المزيد',
    
    // Footer
    'footer.company': 'الشركة',
    'footer.services': 'الخدمات',
    'footer.support': 'الدعم',
    'footer.legal': 'القانونية',
    'footer.all_rights_reserved': 'جميع الحقوق محفوظة',
    'footer.privacy_policy': 'سياسة الخصوصية',
    'footer.terms_of_service': 'شروط الخدمة',
    
    // Quote Section
    'quote.title': 'احصل على عرض أسعار مخصص',
    'quote.subtitle': 'اختبر الخدمات اللوجستية المتميزة المصممة خصيصاً لاحتياجاتك',
    'quote.description': 'احصل على تسعير أولي فوري لاحتياجات الشحن الخاصة بك من خلال نظام العروض المتقدم لدينا.',
    'quote.from_city': 'من مدينة',
    'quote.to_city': 'إلى مدينة',
    'quote.shipment_type': 'نوع الشحنة',
    'quote.air_freight': 'الشحن الجوي',
    'quote.sea_freight': 'الشحن البحري',
    'quote.road_freight': 'الشحن البري',
    'quote.project_cargo': 'شحن المشاريع',
    'quote.get_quote_button': 'احصل على عرض الأسعار',
    'quote.benefit_1': 'تسعير أولي فوري',
    'quote.benefit_2': 'تفصيل شامل للخدمة',
    'quote.benefit_3': 'خيارات خدمة مرنة',

    // Advantages Section
    'advantages.title': 'لماذا تختارنا',
    'advantages.subtitle': 'التميز في كل التفاصيل',
    'advantages.description': 'نقدم خدمة لا مثيل لها من خلال التزامنا بالجودة والابتكار ورضا العملاء.',

    // Impact Section
    'impact.title': 'تأثيرنا العالمي',
    'impact.subtitle': 'نقدم التميز في جميع أنحاء العالم',

    // Services Section
    'services.title': 'خدماتنا',
    'services.subtitle': 'حلول لوجستية شاملة',
    'services.description': 'من الشحن الجوي إلى شحن المشاريع، نقدم حلولاً لوجستية شاملة مصممة خصيصاً لاحتياجات عملك.',

    // Customers Section
    'customers.title': 'شركاؤنا الموثوقون',
    'customers.subtitle': 'موثوق بنا من قبل الشركات الرائدة في جميع أنحاء العالم',

    // Testimonials Section
    'testimonials.title': 'ماذا يقول عملاؤنا',
    'testimonials.subtitle': 'موثوق بنا من قبل الشركات في جميع أنحاء العالم',
    'testimonials.bottom_quote': 'في غضون يومين فقط، انتقلنا من مجرد فكرة إلى وجود نموذج أولي لنعرضه على المستثمرين.',
    'testimonials.bottom_author': '-سيزار راميريز، ريدي أب',

    // Brochure Section
    'brochure.title': 'تحميل كتيب الشركة',
    'brochure.description': 'احصل على معلومات مفصلة حول خدماتنا وقدراتنا وشبكتنا العالمية.',
    'brochure.download': 'تحميل الكتيب',
    'brochure.alert': 'سيبدأ التحميل تلقائياً',
    'brochure.updated': 'محدث ديسمبر 2024',

    // Google Map Section
    'map.title': 'موقعنا',
    'map.address': 'المكتب الرئيسي: مبنى العويس، مكتب رقم 205، شارع الاتحاد، بورت سعيد، دبي، دولة الإمارات العربية المتحدة',

    // Contact Section
    'contact.title': 'تواصل معنا',
    'contact.subtitle': 'ابقى على تواصل',
    'contact.description': 'مستعد للشحن معنا؟ تواصل مع فريقنا للحصول على حلول لوجستية مخصصة.',

    // Technology Section
    'technology.title': 'تكنولوجيا متقدمة',
    'technology.subtitle': 'الابتكار في الخدمات اللوجستية',

    // Project Cargo Page
    'project_cargo.title': 'شحن المشاريع',
    'project_cargo.subtitle': 'المناولة المتخصصة للبضائع كبيرة الحجم والثقيلة والمعقدة التي تتطلب حلول لوجستية مخصصة وخبرة هندسية',
    'project_cargo.heavy_lift': 'عمليات الرفع الثقيل',
    'project_cargo.heavy_lift_desc': 'معدات متخصصة للبضائع حتى 1000+ طن',
    'project_cargo.oversized_transport': 'النقل كبير الحجم',
    'project_cargo.oversized_transport_desc': 'مقطورات مخصصة وتخطيط الطرق للبضائع الكبيرة',
    'project_cargo.engineering_solutions': 'الحلول الهندسية',
    'project_cargo.engineering_solutions_desc': 'خطط التزوير والتحميل المخصصة للبضائع المعقدة',
    'project_cargo.project_excellence': 'تميز المشاريع',
    'project_cargo.project_excellence_desc': 'التعامل مع أصعب حركات البضائع بدقة وخبرة. يوفر قسم شحن المشاريع المتخصص لدينا حلولاً شاملة للشحنات كبيرة الحجم وثقيلة الوزن وخارج المقياس التي تتطلب تخطيطاً هندسياً ولوجستياً مخصصاً.',
    'project_cargo.multimodal_solutions': 'الحلول متعددة الوسائط',
    'project_cargo.multimodal_solutions_desc': 'التكامل السلس لوسائط النقل البحري والجوي والبري مع المناولة المتخصصة في كل نقطة نقل لمتطلبات التوجيه المعقدة.',
    'project_cargo.route_surveys': 'مسوحات ووضع خطط الطرق',
    'project_cargo.route_surveys_desc': 'تحليل شامل للطرق بما في ذلك تصاريح الجسور وقيود الطرق ومتطلبات التصاريح لضمان النقل الآمن والقانوني.',
    'project_cargo.specialized_equipment': 'المعدات المتخصصة',
    'project_cargo.specialized_equipment_desc': 'الوصول إلى رافعات الرفع الثقيل ومقطورات SPMT وحلول النقل المصممة خصيصاً لمواصفات البضائع الفريدة.',
    'project_cargo.turnkey_solutions': 'الحلول الشاملة',
    'project_cargo.turnkey_solutions_desc': 'إدارة مشاريع كاملة من المنشأ إلى الوجهة',
    'project_cargo.global_expertise': 'الخبرة العالمية',
    'project_cargo.global_expertise_desc': 'فرق ذات خبرة في التعامل مع المشاريع المعقدة في جميع أنحاء العالم',

    // Sea Freight Page
    'sea_freight.title': 'الشحن البحري',
    'sea_freight.subtitle': 'حلول الشحن البحري الفعالة من حيث التكلفة لجميع أنواع البضائع، ربط الموانئ الرئيسية في جميع أنحاء العالم بخدمات لوجستية بحرية موثوقة',
    'sea_freight.weekly_sailings': 'الرحلات الأسبوعية',
    'sea_freight.weekly_sailings_desc': 'مغادرات منتظمة لضمان جداول شحن موثوقة',
    'sea_freight.global_coverage': 'التغطية العالمية',
    'sea_freight.global_coverage_desc': 'اتصالات مباشرة بأكثر من 200 ميناء رئيسي في جميع أنحاء العالم',
    'sea_freight.marine_insurance': 'التأمين البحري',
    'sea_freight.marine_insurance_desc': 'تغطية شاملة لراحة البال الكاملة',
    'sea_freight.maritime_excellence': 'التميز البحري',
    'sea_freight.maritime_excellence_desc': 'اجتز المياه العالمية مع شبكة الشحن البحري الواسعة لدينا. نقدم حلول شحن فعالة من حيث التكلفة لجميع أحجام البضائع، مما يضمن أوقات عبور موثوقة وأسعار تنافسية عبر الطرق البحرية الدولية.',
    'sea_freight.fcl_services': 'خدمات الحاويات الكاملة',
    'sea_freight.fcl_services_desc': 'خدمات الحمولة الكاملة للحاويات للشحنات المخصصة مع التسليم المباشر من ميناء إلى ميناء وأسعار حاويات تنافسية.',
    'sea_freight.lcl_consolidation': 'توحيد الحاويات الجزئية',
    'sea_freight.lcl_consolidation_desc': 'خدمات الحمولة الأقل من الحاوية للشحنات الأصغر مع التوحيدات الأسبوعية للوجهات الرئيسية في جميع أنحاء العالم.',
    'sea_freight.breakbulk_cargo': 'البضائع المفككة',
    'sea_freight.breakbulk_cargo_desc': 'مناولة متخصصة للبضائع كبيرة الحجم أو الثقيلة أو غير التقليدية التي لا يمكن أن تتسع في الحاويات القياسية.',
    'sea_freight.container_services': 'خدمات الحاويات',
    'sea_freight.container_services_desc': 'خدمات الحمولة الكاملة للحاويات والتوحيد',
    'sea_freight.port_network': 'شبكة الموانئ',
    'sea_freight.port_network_desc': 'الوصول إلى أكثر من 200 ميناء رئيسي عبر جميع القارات',

    // Air Freight Page
    'air_freight.title': 'الشحن الجوي',
    'air_freight.subtitle': 'خدمات الشحن الجوي السريعة والموثوقة للشحنات الحساسة للوقت، ربط الوجهات العالمية بحلول التسليم السريع',
    'air_freight.express_delivery': 'التسليم السريع',
    'air_freight.express_delivery_desc': 'خيارات التسليم في اليوم التالي ونفس اليوم متاحة',
    'air_freight.charter_services': 'خدمات الطيران المستأجر',
    'air_freight.charter_services_desc': 'طائرات مخصصة للبضائع العاجلة وكبيرة الحجم',
    'air_freight.secure_handling': 'المناولة الآمنة',
    'air_freight.secure_handling_desc': 'مناولة متخصصة للعناصر القيمة والهشة',
    'air_freight.aviation_excellence': 'التميز في الطيران',
    'air_freight.aviation_excellence_desc': 'اختبر حلول النقل السريع من خلال شبكة الشحن الجوي الشاملة لدينا. نقوم بتسليم الشحنات الحرجة زمنياً بدقة، مما يضمن وصول البضائع إلى وجهتها بسرعة وأمان عبر طرق الطيران العالمية.',
    'air_freight.express_air_services': 'خدمات الطيران السريع',
    'air_freight.express_air_services_desc': 'المناولة ذات الأولوية والتخليص الجمركي المعجل للشحنات العاجلة. متاح مع خيارات الرحلة التالية للاحتياجات التجارية الحرجة.',
    'air_freight.dangerous_goods': 'مناولة البضائع الخطرة',
    'air_freight.dangerous_goods_desc': 'مناولة معتمدة للمواد الخطرة مع الامتثال لـ IATA. التعبئة والتوثيق المتخصص للنقل الجوي الآمن.',
    'air_freight.temperature_controlled': 'النقل المتحكم بدرجة الحرارة',
    'air_freight.temperature_controlled_desc': 'حلول متحكمة بالمناخ للأدوية والمنتجات القابلة للتلف والبضائع الحساسة لدرجة الحرارة مع المراقبة في الوقت الفعلي.',
    'air_freight.express_solutions': 'الحلول السريعة',
    'air_freight.express_solutions_desc': 'التسليم في اليوم التالي إلى الوجهات العالمية الرئيسية',
    'air_freight.global_network': 'الشبكة العالمية',
    'air_freight.global_network_desc': 'رحلات مباشرة إلى أكثر من 500 مطار حول العالم',

    // Overland Freight Page
    'overland.title': 'الشحن البري',
    'overland.subtitle': 'خدمات النقل البري الموثوقة التي تربط المناطق مع خيارات التسليم المرنة والخبرة العابرة للحدود',
    'overland.road_transport': 'النقل البري',
    'overland.road_transport_desc': 'خيارات الشاحنة الكاملة والشاحنة الجزئية',
    'overland.cross_border': 'الخدمات العابرة للحدود',
    'overland.cross_border_desc': 'النقل البري الدولي السلس',
    'overland.last_mile': 'التوصيل للميل الأخير',
    'overland.last_mile_desc': 'التوصيل المباشر إلى الوجهة النهائية',
    'overland.ground_excellence': 'التميز البري',
    'overland.ground_excellence_desc': 'ربط الأسواق بكفاءة من خلال شبكة الشحن البري الشاملة لدينا. نقدم حلول النقل البري المرنة مع الخبرة الإقليمية والقدرات العابرة للحدود لحركة البضائع السلسة.',
    'overland.ftl_ltl': 'خيارات الشاحنة الكاملة والجزئية',
    'overland.ftl_ltl_desc': 'الشاحنة الكاملة للشحنات المخصصة والشاحنة الجزئية للبضائع الأصغر مع التوحيد الفعال من حيث التكلفة.',
    'overland.regional_networks': 'الشبكات الإقليمية',
    'overland.regional_networks_desc': 'تغطية واسعة عبر ممرات التجارة الرئيسية مع الخبرة المحلية والشراكات المؤسسة للخدمة الموثوقة.',
    'overland.expedited_services': 'الخدمات السريعة',
    'overland.expedited_services_desc': 'النقل ذو الأولوية للبضائع الحساسة للوقت مع المعدات المخصصة والتوجيه السريع للتسليم العاجل.',
    'overland.regional_coverage': 'التغطية الإقليمية',
    'overland.regional_coverage_desc': 'شبكة شاملة عبر طرق التجارة الرئيسية',
    'overland.flexible_solutions': 'الحلول المرنة',
    'overland.flexible_solutions_desc': 'خيارات النقل المخصصة لجميع أنواع البضائع',

    // Freight Forwarding Page
    'freight_forwarding.title': 'الشحن والتخليص',
    'freight_forwarding.subtitle': 'التنسيق اللوجستي الشامل عبر وسائط النقل المتعددة مع التوثيق السلس والتعامل الجمركي',
    'freight_forwarding.multimodal': 'النقل متعدد الوسائط',
    'freight_forwarding.multimodal_desc': 'التكامل السلس للنقل الجوي والبحري والبري',
    'freight_forwarding.documentation': 'خدمات التوثيق',
    'freight_forwarding.documentation_desc': 'التعامل الكامل مع وثائق الشحن والأوراق',
    'freight_forwarding.customs_clearance': 'التخليص الجمركي',
    'freight_forwarding.customs_clearance_desc': 'خدمات الوساطة الجمركية والتخليص المتخصصة',
    'freight_forwarding.logistics_excellence': 'التميز اللوجستي',
    'freight_forwarding.logistics_excellence_desc': 'تبسيط سلسلة التوريد الخاصة بك مع خدمات الشحن والتخليص الشاملة لدينا. نحن ننسق العمليات اللوجستية المعقدة عبر وسائط النقل المتعددة، مما يضمن حركة البضائع بكفاءة من المنشأ إلى الوجهة مع دعم التوثيق الكامل.',

    // Custom Brokerage Page
    'custom_brokerage.title': 'التخليص الجمركي',
    'custom_brokerage.subtitle': 'خدمات التخليص الجمركي المتخصصة والامتثال التجاري التي تضمن المرور السلس للبضائع عبر الحدود الدولية',
    'custom_brokerage.import_clearance': 'تخليص الاستيراد',
    'custom_brokerage.import_clearance_desc': 'معالجة جمركية سريعة ودقيقة للاستيراد',
    'custom_brokerage.export_documentation': 'توثيق التصدير',
    'custom_brokerage.export_documentation_desc': 'أوراق التصدير الكاملة والامتثال',
    'custom_brokerage.trade_compliance': 'الامتثال التجاري',
    'custom_brokerage.trade_compliance_desc': 'ضمان الالتزام بقوانين التجارة الدولية',
    'custom_brokerage.customs_excellence': 'التميز الجمركي',
    'custom_brokerage.customs_excellence_desc': 'تنقل في قوانين التجارة الدولية المعقدة بثقة. يضمن وسطاؤنا الجمركيون المرخصون التخليص المتوافق والفعال لبضائعك، مما يقلل التأخير ويزيد من توفير التكاليف من خلال التصنيف المناسب وتحسين الرسوم.',

    // E-commerce Services Page
    'ecommerce.title': 'خدمات التجارة الإلكترونية',
    'ecommerce.subtitle': 'حلول لوجستية متخصصة لتجار التجزئة عبر الإنترنت، من التخزين إلى التسليم للميل الأخير',
    'ecommerce.fulfillment': 'تنفيذ الطلبات',
    'ecommerce.fulfillment_desc': 'خدمات الاختيار والتعبئة والشحن للطلبات عبر الإنترنت',
    'ecommerce.inventory_management': 'إدارة المخزون',
    'ecommerce.inventory_management_desc': 'تتبع وإدارة المخزون في الوقت الفعلي',
    'ecommerce.returns_processing': 'معالجة المرتجعات',
    'ecommerce.returns_processing_desc': 'التعامل الفعال مع إرجاع المنتجات والتبديل',
    'ecommerce.ecommerce_excellence': 'تميز التجارة الإلكترونية',
    'ecommerce.ecommerce_excellence_desc': 'قم بتشغيل أعمالك عبر الإنترنت مع الخدمات اللوجستية المتخصصة للتجارة الإلكترونية. من إدارة المخزون إلى التسليم للميل الأخير، نقدم حلولاً قابلة للتوسع تنمو مع أعمالك وتعزز رضا العملاء.',

    // Collaborative Packaging Page
    'collaborative_packaging.title': 'التغليف التعاوني',
    'collaborative_packaging.subtitle': 'حلول التغليف المستدامة المصممة بالشراكة مع العملاء للحماية المثلى وكفاءة التكلفة',
    'collaborative_packaging.custom_design': 'التصميم المخصص',
    'collaborative_packaging.custom_design_desc': 'حلول التغليف المصممة خصيصاً للمنتجات المحددة',
    'collaborative_packaging.sustainable_materials': 'المواد المستدامة',
    'collaborative_packaging.sustainable_materials_desc': 'خيارات ومواد التغليف الصديقة للبيئة',
    'collaborative_packaging.cost_optimization': 'تحسين التكلفة',
    'collaborative_packaging.cost_optimization_desc': 'تقليل تكاليف التغليف مع الحفاظ على الحماية',
    'collaborative_packaging.packaging_excellence': 'تميز التغليف',
    'collaborative_packaging.packaging_excellence_desc': 'تعاون مع خبراء التغليف لدينا لتطوير حلول مبتكرة تحمي منتجاتك مع تقليل التكاليف والأثر البيئي. نصمم التغليف المخصص الذي يلبي متطلباتك المحددة وأهداف الاستدامة.',

    // Order Fulfillment Page
    'order_fulfillment.title': 'تنفيذ الطلبات للشركات والأفراد',
    'order_fulfillment.subtitle': 'خدمات معالجة وتنفيذ الطلبات الكاملة لعمليات الأعمال إلى الأعمال والأعمال إلى المستهلك',
    'order_fulfillment.b2b_services': 'خدمات الشركات',
    'order_fulfillment.b2b_services_desc': 'معالجة الطلبات بالجملة للعملاء التجاريين',
    'order_fulfillment.b2c_services': 'خدمات المستهلكين',
    'order_fulfillment.b2c_services_desc': 'تنفيذ الطلبات الفردية للمستهلكين',
    'order_fulfillment.automated_processing': 'المعالجة الآلية',
    'order_fulfillment.automated_processing_desc': 'أنظمة معالجة الطلبات الآلية الفعالة',
    'order_fulfillment.fulfillment_excellence': 'تميز التنفيذ',
    'order_fulfillment.fulfillment_excellence_desc': 'تبسيط عمليات تنفيذ الطلبات الخاصة بك مع خدمات B2B و B2C الشاملة لدينا. من إدارة المخزون إلى التسليم النهائي، نتعامل مع كل جانب من جوانب معالجة الطلبات بدقة وكفاءة.',

    // Logistics Warehousing Page
    'logistics_warehousing.title': 'الخدمات اللوجستية والتخزين',
    'logistics_warehousing.subtitle': 'خدمات التخزين والتوزيع الاستراتيجية مع إدارة المخزون المتقدمة وقدرات التنفيذ',
    'logistics_warehousing.strategic_locations': 'المواقع الاستراتيجية',
    'logistics_warehousing.strategic_locations_desc': 'مستودعات موضوعة للتوزيع الأمثل',
    'logistics_warehousing.inventory_control': 'التحكم في المخزون',
    'logistics_warehousing.inventory_control_desc': 'أنظمة إدارة المخزون المتقدمة',
    'logistics_warehousing.distribution_services': 'خدمات التوزيع',
    'logistics_warehousing.distribution_services_desc': 'عمليات التوزيع والتنفيذ الفعالة',
    'logistics_warehousing.warehousing_excellence': 'تميز التخزين',
    'logistics_warehousing.warehousing_excellence_desc': 'حسّن سلسلة التوريد الخاصة بك مع حلول التخزين الاستراتيجية لدينا. توفر منشآتنا إدارة المخزون المتقدمة وتنفيذ الطلبات وخدمات التوزيع المصممة لتقليل التكاليف وتحسين أوقات التسليم.',

    // Cold Chain Services Page
    'cold_chain.title': 'خدمات السلسلة الباردة',
    'cold_chain.subtitle': 'الخدمات اللوجستية المتحكمة بدرجة الحرارة للأدوية والمنتجات الغذائية والبضائع الأخرى الحساسة لدرجة الحرارة',
    'cold_chain.temperature_control': 'التحكم في درجة الحرارة',
    'cold_chain.temperature_control_desc': 'مراقبة وتحكم دقيق في درجة الحرارة',
    'cold_chain.pharmaceutical_logistics': 'الخدمات اللوجستية الصيدلانية',
    'cold_chain.pharmaceutical_logistics_desc': 'المناولة المتخصصة للمنتجات الطبية والصيدلانية',
    'cold_chain.food_grade_facilities': 'مرافق درجة الطعام',
    'cold_chain.food_grade_facilities_desc': 'مرافق معتمدة HACCP للمنتجات الغذائية',
    'cold_chain.cold_chain_excellence': 'تميز السلسلة الباردة',
    'cold_chain.cold_chain_excellence_desc': 'حافظ على سلامة المنتج مع حلول الخدمات اللوجستية المتحكمة بدرجة الحرارة لدينا. من الأدوية إلى المنتجات الطازجة، نقدم إدارة السلسلة الباردة من النهاية إلى النهاية مع المراقبة في الوقت الفعلي ووثائق الامتثال.',

    // Common
    'common.learn_more': 'اعرف المزيد',
    'common.get_quote': 'طلب عرض أسعار',
    'common.contact_us': 'تواصل معنا',
    'common.read_more': 'اقرأ المزيد',
    'common.view_all': 'عرض الكل',
    'common.loading': 'جاري التحميل...',
    'common.submit': 'إرسال',
    'common.cancel': 'إلغاء',
    'common.close': 'إغلاق',
    'common.next': 'التالي',
    'common.previous': 'السابق',
    'common.success': 'نجح',
    'common.error': 'خطأ',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Apply RTL for Arabic
    if (language === 'ar') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
      document.body.classList.add('rtl');
      document.body.classList.remove('ltr');
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = 'en';
      document.body.classList.add('ltr');
      document.body.classList.remove('rtl');
    }
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  const isRTL = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};