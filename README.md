# موقع العهد للمقاولات العامة (AL AHD Contracting)

موقع Next.js 14 + Tailwind CSS + Framer Motion، RTL بالكامل، ومتجاوب مع كل الشاشات.

## التشغيل محليًا

```bash
npm install
npm run dev
```

افتح http://localhost:3000

## البناء للإنتاج

```bash
npm run build
npm start
```

## هيكل المشروع

- `app/` — الصفحة الرئيسية والتخطيط العام (App Router).
- `components/` — Header, Hero, Stats, About, Services, Projects (فلاتر + معرض صور Lightbox), Clients, Contact, Footer.
- `data/projects.ts` — **كل بيانات المشاريع والعملاء والإحصائيات في مكان واحد**. لإضافة مشروع جديد أو صور جديدة لمشروع موجود، عدّل هذا الملف فقط.
- `public/images/` — كل الصور مقسمة بمجلد لكل مشروع (silos, jasmine, concentrates, acid, clients).

## إضافة صور لمشروع لا يملك صورًا بعد

1. ضع الصور داخل `public/images/<اسم-المشروع>/` (مثال: `public/images/branches1/1.jpg`).
2. في `data/projects.ts`، أضف مسارات الصور داخل مصفوفة `images` للمشروع المطلوب.
3. أعد التشغيل (`npm run dev`) لمعاينة النتيجة فورًا.

## ملاحظات

- الخطوط (Tajawal / Cairo) تُحمَّل من Google Fonts عبر `<link>` في `app/layout.tsx` — يحتاج المتصفح اتصال إنترنت عاديًا وقت التصفح (وليس وقت البناء).
- تم تثبيت Next.js على إصدار 14.2.35 (نسخة مُصححة أمنيًا) بدلاً من 14.2.5 الأصلي.
- تصميم الحركة (motion) في الهيرو، شريط الإحصائيات، تبديل تصنيفات المشاريع، ومعرض الصور المنبثق كلها مبنية بمكتبة Framer Motion.
