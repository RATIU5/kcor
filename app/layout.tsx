import Loading from '@/components/ui/loading';
import { env } from '@/lib/env';
import { GeistSans } from 'geist/font/sans';
import { ReactNode, Suspense } from 'react';
import './globals.css';

const baseUrl = `https://${env.NEXT_PUBLIC_VERCEL_URL}`;
const siteName = env.SITE_NAME;

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  robots: {
    follow: true,
    index: true,
  },
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="w-screnn h-screen bg-neutral-50 text-black selection:bg-blue-300">
        <Suspense fallback={<Loading />}>
          <main className="h-full w-full">{children}</main>
        </Suspense>
      </body>
    </html>
  );
}
