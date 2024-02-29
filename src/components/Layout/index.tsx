import Seo from "@/components/Seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { LayoutInterface } from "@/interfaces/LayoutInterface";

const Layout = ({ titleSeo, descriptionSeo, children }: LayoutInterface) => {
  return (
    <>
      <Seo title={titleSeo} description={descriptionSeo} />
      <Header />
      <main className=''>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;