export default function AboutPage({ params }) {
  const lang = params.lang;

  const texts = {
    fa: { title: 'درباره ما', desc: 'ما یک تیم حرفه‌ای هستیم.' },
    en: { title: 'About Us', desc: 'We are a professional team.' },
    ar: { title: 'معلومات عنا', desc: 'نحن فريق محترف.' },
  };

  const t = texts[lang] || texts.fa;

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">{t.title}</h2>
      <p>{t.desc}</p>
    </section>
  );
}
