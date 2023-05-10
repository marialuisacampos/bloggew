import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen bg-omni-dark flex max-w-3xl mx-auto">
          <main className="flex-1">
            <div className="px-10 py-16">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
