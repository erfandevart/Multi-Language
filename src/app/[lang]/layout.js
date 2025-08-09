'use client';

import { useRouter, usePathname } from 'next/navigation';
import locales from '@/locales';

export default function LangLayout({ children, params }) {
  const { lang } = params;
  const texts = locales[lang] || locales.fa;
  const isRTL = ['fa', 'ar'].includes(lang);

  const router = useRouter();
  const pathname = usePathname();

  function changeLang(newLang) {
    const newPath = pathname.replace(`/${lang}`, `/${newLang}`);
    router.push(newPath);
  }

  return (
    <html lang={lang} dir={isRTL ? 'rtl' : 'ltr'} className='p-5'>
      <body className={`min-h-screen ${isRTL ? 'text-right' : 'text-left'}`}>
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-xl font-bold">سایت من ({lang.toUpperCase()})</h1>
          <div className="flex gap-x-3">
            {Object.keys(locales).map((code) => (
              <button
                key={code}
                onClick={() => changeLang(code)}
                className={`px-3 py-1 rounded ${
                  code === lang ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-700'
                } hover:bg-blue-500 transition`}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
        </header>

        <nav className="mb-6 flex gap-x-3 items-center">
          <a href={`/${lang}`} className="underline-none">{texts.nav.home}</a>
          <a href={`/${lang}/about`} className="underline-none">{texts.nav.about}</a>
          <a href={`/${lang}/contact`} className="underline-none">{texts.nav.contact}</a>
        </nav>

        <main>{children}</main>
      </body>
    </html>
  );
}
