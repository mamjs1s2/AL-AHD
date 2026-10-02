export type Category = "all" | "silos" | "production" | "chemical" | "branches";

export const CATEGORIES: { key: Category; label: string }[] = [
  { key: "all", label: "الكل" },
  { key: "silos", label: "صوامع ومطاحن ومصانع" },
  { key: "production", label: "خطوط إنتاج و MEB" },
  { key: "chemical", label: "أحواض كيميائية" },
  { key: "branches", label: "فروع وأرضيات صناعية" },
];

export interface Project {
  key: string;
  cat: Exclude<Category, "all">;
  title: string;
  client?: string;
  loc: string;
  meta: string;
  desc: string;
  images: string[]; // paths under /public
  logo?: string;
}

export const PROJECTS: Project[] = [
  {
    key: "silos",
    cat: "silos",
    title: "صوامع ومطحن — 24 صومعة تخزين",
    client: "Al Magd Group",
    loc: "مدينة السادات",
    meta: "مساحة 3600 م² · ارتفاع إنشائي 28 م",
    desc: "تنفيذ الهيكل الإنشائي والمعماري الكامل لمجمع صوامع تخزين ومطحن يضم 24 صومعة، شاملاً الأساسات المنفصلة، الأعمدة والبلاطات الخرسانية، وبرج الدرج والمصعد، وصولًا إلى منصات تركيب آلات الطحن ومنطقة الصوامع المعدنية.",
    images: ["/images/silos/1.jpg", "/images/silos/2.jpg", "/images/silos/3.jpg", "/images/silos/4.jpg"],
    logo: "/images/silos/logo.jpg",
  },
  {
    key: "jasmine",
    cat: "production",
    title: "خط إنتاج Jasmine — أعمال مدنية و MEB",
    client: "Nestlé Waters Egypt",
    loc: "مصنع نستله للمياه — مصر",
    meta: "أعمال مدنية · ميكانيكا وكهرباء وسباكة (MEB)",
    desc: "تنفيذ كامل الأعمال المدنية والمعمارية إلى جانب أعمال الميكانيكا والكهرباء والسباكة (MEB) لمبنى المرافق الجديد الخاص بخط إنتاج Jasmine ضمن منشأة نستله للمياه بمصر، من الأساسات وحتى التشطيب وتشغيل خطوط التعبئة.",
    images: [
      "/images/jasmine/1.jpg","/images/jasmine/2.jpg","/images/jasmine/3.jpg","/images/jasmine/4.jpg",
      "/images/jasmine/5.jpg","/images/jasmine/6.jpg","/images/jasmine/7.jpg","/images/jasmine/8.jpg",
    ],
    logo: "/images/jasmine/logo.jpg",
  },
  {
    key: "concentrates",
    cat: "silos",
    title: "مصنع مركزات غذائية ومبنى إداري",
    client: "Paste & Juice — بي أند جي للعصائر والمركزات",
    loc: "مدينة السادات",
    meta: "مبنى مصنع صناعي + مبنى إداري متكامل",
    desc: "تنفيذ مبنى مصنع لإنتاج المركزات الغذائية والعصائر بجانب مبنى إداري متكامل بواجهات معمارية حديثة وتشطيبات داخلية راقية (رخام وإضاءة مخفية)، بالإضافة إلى منشآت المعالجة والأبراج الصناعية الملحقة، داخل مدينة السادات الصناعية.",
    images: [
      "/images/concentrates/1.jpg","/images/concentrates/2.jpg","/images/concentrates/3.jpg","/images/concentrates/4.jpg",
      "/images/concentrates/5.jpg","/images/concentrates/6.jpg","/images/concentrates/7.jpg","/images/concentrates/8.jpg",
      "/images/concentrates/9.jpg","/images/concentrates/10.jpg","/images/concentrates/11.jpg","/images/concentrates/12.jpg",
      "/images/concentrates/13.jpg",
    ],
    logo: "/images/concentrates/logo.jpg",
  },
  {
    key: "acid",
    cat: "chemical",
    title: "حوض حمض الكبريتيك",
    client: "Sprea Misr for Chemicals & Plastics",
    loc: "مدينة العاشر من رمضان",
    meta: "منشأة كيميائية صناعية",
    desc: "تنفيذ أعمال إنشائية لحوض تخزين حمض الكبريتيك ومنشآته الملحقة (صوامع وأبراج معالجة) لصالح شركة Sprea Misr for Chemicals & Plastics بمدينة العاشر من رمضان.",
    images: ["/images/acid/1.jpg", "/images/acid/2.jpg"],
    logo: "/images/acid/logo.jpg",
  },
  {
    key: "branches1",
    cat: "branches",
    title: "فرع العاشر من رمضان وفرع القطامية",
    client: "Amazon",
    loc: "العاشر من رمضان · القطامية",
    meta: "أرضيات صناعية · عزل أسطح · تشطيبات داخلية",
    desc: "تنفيذ أعمال تشطيب وصيانة داخلية لمركزي تشغيل تابعين لأمازون بمدينتي العاشر من رمضان والقطامية، شملت أرضيات صناعية وأعمال إيبوكسي بمناطق اللوحات الكهربائية، عزل ومعالجة أسطح بالعزل المائي، وتركيب رفوف تخزين (Racking) بمساحات المستودعات، بالإضافة إلى أعمال صيانة كهروميكانيكية ليلية بارتفاعات باستخدام منصات الرفع الهيدروليكية.",
    images: [
      "/images/branches1/1.jpg","/images/branches1/2.jpg","/images/branches1/3.jpg","/images/branches1/4.jpg",
      "/images/branches1/5.jpg","/images/branches1/6.jpg","/images/branches1/7.jpg","/images/branches1/8.jpg",
      "/images/branches1/9.jpg","/images/branches1/10.jpg","/images/branches1/11.jpg","/images/branches1/12.jpg",
      "/images/branches1/13.jpg","/images/branches1/14.jpg","/images/branches1/15.jpg",
    ],
    logo: "/images/branches1/logo.jpg",
  },
  {
    key: "epx",
    cat: "branches",
    title: "EP x Logistics — مقر إداري ولوجيستي",
    client: "EPx Logistics",
    loc: "مصر",
    meta: "تشطيبات داخلية · مكاتب إدارية واستقبال",
    desc: "تنفيذ التشطيبات الداخلية الكاملة للمقر الإداري لشركة EPx Logistics، شاملة مكتب الاستقبال، الممرات الزجاجية، ومناطق الجلوس والانتظار، بتشطيب أرضيات بورسلين وواجهات زجاجية داخلية.",
    images: ["/images/epx/1.jpg", "/images/epx/2.jpg", "/images/epx/3.jpg", "/images/epx/4.jpg", "/images/epx/5.jpg"],
    logo: "/images/epx/logo.jpg",
  },
  {
    key: "sokhna",
    cat: "branches",
    title: "مشروع العين السخنة",
    client: "Saint-Gobain",
    loc: "العين السخنة",
    meta: "منشآت مؤقتة وتجهيزات موقع صناعي",
    desc: "توريد وتركيب مكاتب موقع (كابينات) مجهزة لصالح منشأة Saint-Gobain الصناعية بمنطقة العين السخنة، لدعم فرق العمل الميدانية أثناء التنفيذ.",
    images: ["/images/sokhna/1.jpg", "/images/sokhna/2.jpg", "/images/sokhna/3.jpg"],
    logo: "/images/sokhna/logo.jpg",
  },
  {
    key: "epoxy",
    cat: "branches",
    title: "أرضيات إيبوكسي وتوسعات خط الإنتاج",
    client: "Pepsi",
    loc: "مصر",
    meta: "أرضيات إيبوكسي · هيكل معدني وسقالات · أعمال ليلية",
    desc: "تنفيذ أعمال تكسير وتجهيز أرضيات صناعية تمهيدًا لطلاء الإيبوكسي، بالإضافة إلى أعمال إنشائية وتركيب حوائط عازلة وواجهات زجاجية حول خطوط الإنتاج داخل مصنع بيبسي، تضمنت العمل على سقالات ومنصات رفع هيدروليكية بفترات ليلية للحفاظ على استمرارية التشغيل.",
    images: [
      "/images/epoxy/1.jpg","/images/epoxy/2.jpg","/images/epoxy/3.jpg","/images/epoxy/4.jpg",
      "/images/epoxy/5.jpg","/images/epoxy/6.jpg","/images/epoxy/7.jpg","/images/epoxy/8.jpg",
      "/images/epoxy/9.jpg","/images/epoxy/10.jpg","/images/epoxy/11.jpg",
    ],
    logo: "/images/epoxy/logo.jpg",
  },
];

export const CLIENT_LOGOS = [
  { name: "Al Magd Group", src: "/images/silos/logo.jpg" },
  { name: "Nestlé Waters Egypt", src: "/images/jasmine/logo.jpg" },
  { name: "Paste & Juice", src: "/images/concentrates/logo.jpg" },
  { name: "Sprea Misr", src: "/images/acid/logo.jpg" },
  { name: "Amazon", src: "/images/branches1/logo.jpg" },
  { name: "EPx Logistics", src: "/images/epx/logo.jpg" },
  { name: "Saint-Gobain", src: "/images/sokhna/logo.jpg" },
  { name: "Pepsi", src: "/images/epoxy/logo.jpg" },
];

export const CERTIFICATIONS = [
  { name: "Avetta", src: "/images/clients/avetta.jpg", note: "شريك إدارة مخاطر المقاولين والسلامة" },
];

export const TEAM_PHOTOS = [
  "/images/team/1.jpg",
  "/images/team/2.jpg",
  "/images/team/3.jpg",
  "/images/team/4.jpg",
  "/images/team/5.jpg",
  "/images/team/6.jpg",
];

export const STATS = [
  { to: 8, label: "مشاريع صناعية كبرى" },
  { to: 24, label: "صومعة تخزين منفذة" },
  { to: 28, label: "متر أقصى ارتفاع إنشائي" },
  { to: 3600, label: "م² مساحة مجمع الصوامع" },
];
