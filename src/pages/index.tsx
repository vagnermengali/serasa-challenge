import Layout from "@/components/Layout";
import DynamicText from "@/components/Ui/dynamic-text";

const Homepage = () => {
  return (
    <Layout
      titleSeo="Serasa"
      descriptionSeo="A Serasa é lider em dados e soluções para empresas. Serasa Score de crédito,Consulta CNPJ, Proteção Antifraude e mais. Confira!"
    >
      <div>
        <DynamicText ariaLabel="" level="1" title="">Abc</DynamicText>
        <DynamicText ariaLabel="" level="2" title="">Abc</DynamicText>
        <DynamicText ariaLabel="" level="3" title="">Abc</DynamicText>
        <DynamicText ariaLabel="" level="4" title="">Abc</DynamicText>
        <DynamicText ariaLabel="" level="5" title="">Abc</DynamicText>
        <DynamicText ariaLabel="" level="6" title="">Abc</DynamicText>
        <DynamicText ariaLabel="" level="p-bold" title="">Abc</DynamicText>
        <DynamicText ariaLabel="" level="p-regular" title="">Abc</DynamicText>
      </div>
    </Layout>
  )
};

export default Homepage;