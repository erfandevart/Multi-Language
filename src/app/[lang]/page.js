export default function HomePage({ params }) {
  const lang = params.lang;

  const texts = {
    fa: { title: 'صفحه اصلی', desc: 'به سایت ما خوش آمدید.' },
    en: { title: 'Home Page', desc: 'Welcome to our website.' },
    ar: { title: 'الصفحة الرئيسية', desc: 'مرحبًا بك في موقعنا.' },
  };

  const t = texts[lang] || texts.fa;

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">{t.title}</h2>
      <p>{t.desc}</p>
    </section>
  );
}
