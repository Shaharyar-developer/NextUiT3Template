import "@/styles/globals.css";

import { Inter } from "next/font/google";

import { Providers } from "./providers";

import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Tasks By Shaharyar",
  description: "A web application with multiple 'tasks' that can be done",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${inter.variable}`}>
        <Toaster richColors />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
