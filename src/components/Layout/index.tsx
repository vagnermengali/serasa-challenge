import { Roboto } from "next/font/google";

import Seo from "@/components/Seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { LayoutInterface } from "@/interfaces/LayoutInterface";

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

const Layout = ({ titleSeo, descriptionSeo, children }: LayoutInterface) => {
  return (
    <div className="flex justify-between flex-col min-h-screen">
      <style jsx global>{`
        * {
              font-family: ${roboto.style.fontFamily};
            }
      `}</style>
      <Seo title={titleSeo} description={descriptionSeo} />
      <Header />
      <main className="container mx-auto px-4 py-8 flex justify-center">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
