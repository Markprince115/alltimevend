import { Aclonica } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const  aclonica = Aclonica({ subsets: ["latin"], weight: '400' });

export const metadata = {
  title: "AllTimeVend | Home page",
  description: "AllTimeVend an unmanned automated retail service company that renders service and operations fo automated services ",
  keywords: "AllTimeVend, automated retailing, vending website, automated retail website"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ aclonica.className}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
