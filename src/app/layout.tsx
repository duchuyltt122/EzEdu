import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin", "vietnamese"],
  variable: "--font-nunito",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "EzEdu - Ứng dụng phát triển kĩ năng ngôn ngữ qua trò chơi Tiếng Việt",
  description: "Ứng dụng giáo dục tương tác giúp trẻ em phát triển kĩ năng ngôn ngữ tiếng Việt qua các trò chơi vui nhộn và bài tập thú vị",
  keywords: "học tiếng việt, trẻ em, giáo dục, trò chơi, tương tác",
  authors: [{ name: "EzEdu Team" }],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${nunito.variable} ${inter.variable} font-nunito antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
