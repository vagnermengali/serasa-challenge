import Head from "next/head";
import { useEffect } from "react";
import { SeoInterface } from "@/interfaces/SeoInterface";

const Seo = ({ title, description }: SeoInterface) => {
  useEffect(() => {
    // Função para remover a diretiva noindex
    const removeNoindexTag = () => {
      const metaTags = document.getElementsByTagName('meta');
      for (let i = 0; i < metaTags.length; i++) {
        if (metaTags[i]?.getAttribute('name') === 'robots' && metaTags[i]?.getAttribute('content') === 'noindex') {
          metaTags[i]?.parentNode?.removeChild(metaTags[i]);
        }
      }
    }

    // Chama a função para remover a diretiva noindex quando o componente for montado
    removeNoindexTag();
  }, []); // Executa apenas uma vez após o montagem do componente

  return (
    <Head>
      <meta name="author" content="Vagner Mengali" />
      <meta name="keywords" content="Javascript" />
      <link rel="fluid-icon" href="/favicon.webp" title="Serasa" />
      <link rel="icon" type="svg+xml" href="/favicon.webp" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <link rel="shortcut icon" href="/favicon.webp" type="x-icon" />
      <link rel="icon" href="/favicon.webp" sizes="32x32" />
      <link rel="icon" href="/favicon.webp" sizes="48x48" />
      <link rel="icon" href="/favicon.webp" sizes="96x96" />
      <link rel="icon" href="/favicon.webp" sizes="144x144" />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Serasa" />
      <meta property="og:type" content="website" key="ogtype" />
      <meta property="og:url" content="https://www.serasaexperian.com.br/" />
      <meta property="og:image:alt" content={description} />
      <meta property="og:image" content="/banner.webp" />
      <meta name="twitter:title" content="Serasa" />
      <meta name="twitter:site" content="@vagnermengali" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="/banner.webp" />
      <meta name="twitter:description" content={description} />
      <meta property="al:ios:app_name" content="Serasa" />
      <meta property="al:ios:url" content="https://www.serasaexperian.com.br/" />
      <meta property="al:android:app_name" content="Serasa" />
      <meta property="al:android:url" content="https://www.serasaexperian.com.br/" />
      <link rel="canonical" href="https://www.serasaexperian.com.br/" />
      <meta name="theme-color" content="#E63888" />
      <meta name="msapplication-TileColor" content="#E63888" />
      <meta name="msapplication-navbutton-color" content="#E63888" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#E63888" />
      <link rel="manifest" href={"/manifest.webmanifest"} />
    </Head>
  );
};

export default Seo;
