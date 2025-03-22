import type { Metadata } from "next";
import { Inter, Nunito, Funnel_Sans } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";

const primaryFont = Funnel_Sans({ 
  subsets: ["latin"], 
  variable: '--font-primary',
  weight: ["400","700" , "800"] 
});
const secondaryFont = Nunito({ subsets: ["latin"], variable: '--font-secondary' , weight: ["400", '500' ,"700"] });
const tertiaryFont = Inter({ subsets: ["latin"], variable: '--font-tertiary', weight: ["400", '500' , "700"] });


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${primaryFont.className} antialiased `}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
