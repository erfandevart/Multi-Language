'use client';

import { useRouter, usePathname } from 'next/navigation';

const langs = [
  { code: 'fa', label: 'فارسی' },
  { code: 'en', label: 'English' },
  { code: 'ar', label: 'العربیة' },
];

export default function LangLayout({ children, params }) {
  const { lang } = params;
  const isRTL = ['fa', 'ar'].includes(lang);

  const router = useRouter();
  const pathname = usePathname();

  function changeLang(newLang) {
    // جایگزین کردن زبان قبلی با زبان جدید در مسیر
    const newPath = pathname.replace(`/${lang}`, `/${newLang}`);
    router.push(newPath);
  }

  return (
    <html lang={lang} dir={isRTL ? 'rtl' : 'ltr'}>
      <body className={`min-h-screen p-6 ${isRTL ? 'text-right' : 'text-left'}`}>
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-xl font-bold">سایت من ({lang.toUpperCase()})</h1>
          <div className="flex gap-x-3">
            {langs.map(({ code, label }) => (
              <button
                key={code}
                onClick={() => changeLang(code)}
                className={`px-3 py-1 rounded ${
                  code === lang ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-700'
                } hover:bg-blue-500 transition`}
              >
                {label}
              </button>
            ))}
          </div>
        </header>

        <nav className="mb-6 flex gap-x-5">
          <a href={`/${lang}`} className="underline-none">خانه</a>
          <a href={`/${lang}/about`} className="underline-none">درباره ما</a>
        </nav>

        <main>{children}</main>
      </body>
    </html>
  );
}
