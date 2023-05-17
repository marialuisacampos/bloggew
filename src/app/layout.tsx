import Head from "next/head";
import "./globals.css";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"], weight: ["400"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <div className="h-screen bg-primary-dark flex max-w-3xl mx-auto">
          <main className="flex-1">
            <div className="px-10 py-16">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
