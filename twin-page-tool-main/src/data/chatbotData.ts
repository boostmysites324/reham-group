const chatbotData = [
  {
    id: 1,
    question: "What freight services do you offer?",
    answer: "We provide Air Freight, Sea Freight (Full Container, Less Than Container, Break Bulk), and Overland Freight via road and rail. Each mode comes with door to door, port to port, and intermodal options tailored to your schedule and budget.",
    keywords: ["freight", "services", "air", "sea", "overland", "container", "transport"]
  },
  {
    id: 2,
    question: "How can I get a quote for my shipment?",
    answer: "Simply click 'Request a Quote' on our site, fill in basic shipment details (origin, destination, weight, dimensions), and our system will generate a competitive estimate within minutes. You can also WhatsApp us at +971 50 404 2388 for instant assistance.",
    keywords: ["quote", "pricing", "cost", "estimate", "whatsapp", "shipment"]
  },
  {
    id: 3,
    question: "What are your typical transit times?",
    answer: "• Air Freight: 2–5 business days\n• Sea Freight: 15–30 days, depending on route\n• Overland Freight: 3–10 days across GCC; 10–21 days for cross continent\nExact times depend on final origin/destination.",
    keywords: ["transit", "time", "delivery", "days", "schedule", "duration"]
  },
  {
    id: 4,
    question: "What documentation do I need for customs clearance?",
    answer: "For most shipments you'll need:\n• Commercial Invoice\n• Packing List\n• Bill of Lading (we issue)\n• Certificate of Origin (if required)\n• Any special certificates (phytosanitary, hazardous cargo)\nWe guide you through each form to ensure error free clearance.",
    keywords: ["documentation", "customs", "clearance", "invoice", "bill", "certificate"]
  },
  {
    id: 5,
    question: "How do I track my shipment?",
    answer: "Use our online Track tool (top nav) by entering your booking or Bill of Lading number. You'll receive real time location updates. For large projects, we provide a dedicated dashboard with milestone alerts.",
    keywords: ["track", "tracking", "shipment", "status", "location", "updates"]
  },
  {
    id: 6,
    question: "Do you handle oversized or heavy project cargo?",
    answer: "Yes! Our Project Cargo experts plan and execute moves for machinery, industrial equipment, and other heavylifts. We arrange special permits, heavy lift vessels, and on site rigging to guarantee safe, on time delivery.",
    keywords: ["project", "cargo", "oversized", "heavy", "machinery", "equipment"]
  },
  {
    id: 7,
    question: "What warehousing solutions do you provide?",
    answer: "We offer both short and long term warehousing with real time inventory management, pick and pack, kitting, and value added services. Our strategically located Dubai facility supports cross docking and bonded storage.",
    keywords: ["warehousing", "storage", "inventory", "dubai", "facility", "bonded"]
  },
  {
    id: 8,
    question: "Do you offer temperature controlled (cold chain) services?",
    answer: "Absolutely. Our Cold Chain network maintains 2–8 °C or –18 °C environments for perishables, pharmaceuticals, and fine chemicals. Monitored 24/7, with alarm and contingency protocols to protect your sensitive cargo.",
    keywords: ["cold", "chain", "temperature", "pharmaceuticals", "perishables", "refrigerated"]
  },
  {
    id: 9,
    question: "Can you fulfil e-commerce orders?",
    answer: "Yes—our E-commerce & B2B/B2C Fulfilment services include inventory storage, multi channel order processing, custom packaging, and last mile delivery integration. We scale seamlessly as your order volume grows.",
    keywords: ["ecommerce", "fulfillment", "b2b", "b2c", "orders", "packaging"]
  },
  {
    id: 10,
    question: "What is collaborative packaging?",
    answer: "Collaborative Packaging brings your marketing and logistics teams together. We design and execute promotional or co branded packaging that protects your product while delighting end customers and boosting brand impact.",
    keywords: ["collaborative", "packaging", "marketing", "branding", "promotional"]
  },
  {
    id: 11,
    question: "How do you support customs brokerage?",
    answer: "Our Customs Brokerage experts handle all border crossing formalities. We prepare and submit declarations, calculate duties and taxes, and liaise with customs authorities to minimize delays and fees.",
    keywords: ["customs", "brokerage", "duties", "taxes", "declarations", "border"]
  },
  {
    id: 12,
    question: "What insurance options do you offer?",
    answer: "We partner with leading insurers to offer full value marine and cargo insurance. Coverage can include 'all risks' protection, political risk extension, and warehouse to warehouse transit. We'll customize a plan to your needs.",
    keywords: ["insurance", "coverage", "marine", "cargo", "protection", "risks"]
  },
  {
    id: 13,
    question: "Which global locations do you serve?",
    answer: "As part of the Al Raham Group, we have a network spanning the Middle East, Europe, Asia, and North America. From Dubai hubs to local last mile partners, we connect you to over 200 countries and territories.",
    keywords: ["global", "locations", "network", "countries", "worldwide", "coverage"]
  },
  {
    id: 14,
    question: "What makes your 'Tech Edge' special?",
    answer: "Our proprietary automation tools power real time tracking, predictive ETA, customs document pre validation, and digital invoicing—all accessible through a user friendly portal or API integration.",
    keywords: ["tech", "technology", "automation", "api", "portal", "digital"]
  },
  {
    id: 15,
    question: "How can I speak with a live consultant?",
    answer: "Click 'Contact Us' or WhatsApp +971 50 404 2388. You can also email behzad@rehamgroup.com or schedule a callback via our portal—our team is available 24/7 to ensure your supply chain never stops.",
    keywords: ["contact", "consultant", "support", "whatsapp", "email", "callback"]
  },
  {
    id: 16,
    question: "Can I integrate your tracking data with my own system?",
    answer: "Absolutely. Our API first portal lets you pull real time tracking, ETAs, and shipment documents directly into your TMS or ERP. We'll provide secure API credentials and dev docs to get you up and running in days—not weeks.",
    keywords: ["api", "integration", "tracking", "erp", "tms", "system"]
  },
  {
    id: 17,
    question: "How can I view performance reports and KPIs for my account?",
    answer: "Log into your Client Dashboard to access customizable reports on transit times, on time delivery rates, cost per kilo, and more. You can schedule automated weekly or monthly summaries to hit your inbox.",
    keywords: ["reports", "kpi", "dashboard", "performance", "analytics", "metrics"]
  },
  {
    id: 18,
    question: "What are your payment terms and options?",
    answer: "We offer flexible payment terms including upfront wire transfers, credit accounts (subject to approval), and online card payments. Proforma invoices can be issued upon booking confirmation, and multi currency settlement is supported.",
    keywords: ["payment", "terms", "credit", "invoice", "currency", "billing"]
  },
  {
    id: 19,
    question: "Do you provide emergency or express shipping?",
    answer: "Yes—our Express Freight option (air or road) guarantees next flight or next truck departure. We'll also fast track customs clearance through our in house brokerage team to minimize dwell time.",
    keywords: ["emergency", "express", "urgent", "fast", "next", "flight"]
  },
  {
    id: 20,
    question: "What sustainability initiatives do you offer?",
    answer: "We partner with carbon offset projects and maintain a fleet of low emission chassis. Ask about our Green Logistics program for CO₂ neutral shipments and eco friendly packaging alternatives.",
    keywords: ["sustainability", "green", "carbon", "environment", "eco", "offset"]
  },
  {
    id: 21,
    question: "Can you advise on optimal routing and cost savings?",
    answer: "Our Route Optimization experts analyze transit corridors, seasonal demand, and tariff structures to strike the best balance of speed and cost. You'll receive a tailored routing plan before booking.",
    keywords: ["routing", "optimization", "cost", "savings", "corridors", "planning"]
  },
  {
    id: 22,
    question: "What are the packaging requirements for hazardous materials?",
    answer: "All DG shipments must comply with IATA/IMDG regulations. We'll supply UN approved packaging, placards, and documentation checklists, and handle DG certified carrier bookings. Your safety and compliance are our top priority.",
    keywords: ["hazardous", "dangerous", "dg", "packaging", "iata", "imdg", "safety"]
  },
  {
    id: 23,
    question: "Do you offer supply chain consulting or audits?",
    answer: "Yes—our Consulting Services team conducts end to end supply chain audits, process mapping, and cost reduction workshops. You'll get a detailed gap analysis and roadmap for efficiency gains.",
    keywords: ["consulting", "audit", "supply", "chain", "analysis", "efficiency"]
  },
  {
    id: 24,
    question: "How do you support seasonal or peak volume surges?",
    answer: "We scale capacity on demand via our Global Partner Network. During peaks, we pre position equipment, secure extra vessel space, and provide surge team support to keep your operations running smoothly.",
    keywords: ["seasonal", "peak", "volume", "surge", "capacity", "scaling"]
  },
  {
    id: 25,
    question: "Do you offer container consolidation (groupage) services?",
    answer: "Yes—our LCL consolidation service groups your cargo with shipments from other clients, reducing costs. We handle de consolidation at destination and ensure your goods arrive intact and on schedule.",
    keywords: ["consolidation", "groupage", "lcl", "shared", "container", "costs"]
  },
  {
    id: 26,
    question: "Can you manage cross trade shipments?",
    answer: "Absolutely. Our cross trade expertise lets you ship directly between, say, China and Brazil, leveraging our global network and in house customs teams to streamline paperwork and transit.",
    keywords: ["cross", "trade", "third", "country", "china", "brazil", "paperwork"]
  },
  {
    id: 27,
    question: "What trade finance solutions do you provide?",
    answer: "We partner with regional banks to offer Letter of Credit advisory, documentary collections, and export credit facilities. Our team ensures your L/C is compliant, so you never miss a shipment due to banking issues.",
    keywords: ["trade", "finance", "letter", "credit", "banking", "documentary"]
  },
  {
    id: 28,
    question: "Do you support reverse logistics and returns?",
    answer: "Yes—our Reverse Logistics program handles returns, repairs, and recycling. We pick up directly from customers, inspect goods, and manage end of life disposal or refurbishment per your policy.",
    keywords: ["reverse", "logistics", "returns", "repairs", "recycling", "disposal"]
  },
  {
    id: 29,
    question: "Is EDI or E-Freight integration available?",
    answer: "We support EDI, XML, and AS2 interfaces for seamless data exchange (shipment details, tracking, billing). Our tech team will onboard you with step by step integration guides and test environments.",
    keywords: ["edi", "efreight", "xml", "as2", "integration", "data", "exchange"]
  },
  {
    id: 30,
    question: "Can you issue Certificates of Origin?",
    answer: "Certainly. Through our in house certification unit, we prepare, validate, and dispatch Certificates of Origin to your door or directly to customs via courier—saving you time and paperwork.",
    keywords: ["certificate", "origin", "certification", "customs", "validation"]
  },
  {
    id: 31,
    question: "What languages does your support team speak?",
    answer: "Our 24/7 support covers English, Arabic, Hindi/Urdu, and Mandarin, with on demand interpreters for other languages—so you can always communicate in your preferred tongue.",
    keywords: ["languages", "support", "arabic", "hindi", "mandarin", "interpreters"]
  },
  {
    id: 32,
    question: "How do you handle shipments to high risk or conflict zones?",
    answer: "We've successfully served clients in challenging regions. Our Security & Compliance division arranges special permits, vetted local partners, and extra insurance to safeguard your cargo.",
    keywords: ["high", "risk", "conflict", "zones", "security", "permits", "insurance"]
  },
  {
    id: 33,
    question: "Do you offer real-time sensor monitoring for high value cargo?",
    answer: "Yes—ask about our IoT enabled tracking. We can fit sensors for GPS, temperature, humidity, shock, and tilt, with alerts delivered via our portal or API. Perfect for pharmaceuticals and art.",
    keywords: ["sensor", "monitoring", "iot", "gps", "temperature", "humidity", "alerts"]
  },
  {
    id: 34,
    question: "Can you audit my existing freight forwarding provider?",
    answer: "Definitely. Our Third Party Logistics (3PL) Audit service benchmarks your current partner's performance against industry KPIs, identifies cost leakage, and recommends immediate improvements.",
    keywords: ["audit", "3pl", "provider", "benchmark", "performance", "kpi"]
  },
  {
    id: 35,
    question: "What Incoterms do you support?",
    answer: "We handle all ICC Incoterms® 2020 rules—from EXW to DDP. We'll advise on the best term for risk allocation and cost efficiency based on your trade lane and cargo type.",
    keywords: ["incoterms", "exw", "ddp", "icc", "rules", "trade", "terms"]
  }
];

export default chatbotData;