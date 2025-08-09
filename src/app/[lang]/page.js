import locales from '@/locales';

export default function HomePage({ params }) {
  const { lang } = params;
  const texts = locales[lang] || locales.fa;

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">{texts.home.title}</h2>
      <p>{texts.home.welcome}</p>
    </section>
  );
}
