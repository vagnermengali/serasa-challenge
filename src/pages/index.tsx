import Image from "next/image";

import Layout from "@/components/Layout";
import Form from "@/components/Ui/Form/index";
import DynamicText from "@/components/Ui/DynamicText";

const Homepage = () => {
  return (
    <Layout
      titleSeo="Serasa"
      descriptionSeo="A Serasa é lider em dados e soluções para empresas. Serasa Score de crédito,Consulta CNPJ, Proteção Antifraude e mais. Confira!"
    >
      <Form>
        <Image src="" alt="" />
        <DynamicText ariaLabel="" level="p" title="" className="">Conte o quanto você está satisfeito com nossas serviços</DynamicText>
        <DynamicText ariaLabel="" level="p-bold" title="" className="">Marque de 1 à 5 estrelas</DynamicText>
        <p></p>
        <p>Marque de 1 à 5 estrelas</p>
        <div>
          <button>O</button>
          <button>O</button>
          <button>O</button>
          <button>O</button>
          <button>O</button>
        </div>
        <div>
          <label>Nome</label>
          <input />
        </div>
        <div>
          <label>Comentário(Opcional)</label>
          <input />
        </div>
        <button>Enviar avaliação</button>
      </Form>
    </Layout>
  )
};

export default Homepage;