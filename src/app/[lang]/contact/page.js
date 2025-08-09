import locales from "@/locales";

export default function ContactPage({ params }) {
  const { lang } = params;
  const texts = locales[lang] || locales.fa;

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">{texts.contact.title}</h2>
      <p>{texts.contact.content}</p>
    </section>
  );
}
