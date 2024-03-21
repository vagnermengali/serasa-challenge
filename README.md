<h1 align="center">
  Desafio Serasa
</h1>

<div align="center">
  <img src='https://github.com/vagnermengali/serasa-challenge/blob/main/public/perfomace.webp'/>
</div>

<div align="center">
  <a href="https://serasa-challenge-vagnermengali.vercel.app/" target="_blank">Deploy</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://pagespeed.web.dev/analysis/https-serasa-challenge-vagnermengali-vercel-app/a5i1ffpe59?form_factor=desktop"   target="_blank">Perfomace</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</div>

---

<div align="center">
  <a href="#instalação">Instalação</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="#desafio-1---tipografia">Desafio 1 - Tipografia</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="#desafio-2---formulário">Desafio 2 - Formulário</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="#desafio-3---análise-do-blog">Desafio 3 - Análise do Blog</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="#entrega">Entrega</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</div>

---

# Instalação

Para iniciar o projeto, siga os passos abaixo:

1. Clone o repositório do GitHub:

```bash
git clone https://github.com/vagnermengali/serasa-challenge/
```

2. Navegue até o diretório clonado:

```bash
cd serasa-challenge
```

3. Instale as dependências utilizando o Yarn:

```bash
yarn install
```

4. Inicie o servidor de desenvolvimento:

```bash
yarn dev
```

5. Acesse o servidor:

```bash
http://localhost:3000
```

---

## Desafio 1 - Tipografia

Este documento apresenta as diretrizes para a utilização dos componentes de texto e cores no projeto desenvolvido.

## Componente de Texto

O componente `DynamicText` é uma ferramenta versátil para exibir texto com diferentes estilos e níveis de hierarquia.

## Props

- `level`: Define o tipo de elemento HTML para renderizar o texto. Os valores possíveis são:
  - `1` para `<h1>`
  - `2` para `<h2>`
  - `3` para `<h3>`
  - `4` para `<h4>`
  - `5` para `<h5>`
  - `6` para `<h6>`
  - `p` para `<p>`
  - `p-bold` para `<p>` em negrito
  - `span` para `<span>`
  - `span-bold` para `<span>` em negrito

- `title`: Título opcional para adicionar ao texto.

- `ariaLabel`: Rótulo ARIA opcional para acessibilidade.

- `className`: Classe CSS adicional para estilização personalizada.

## Cores

Você pode aplicar diferentes cores ao texto, bem como a outras propriedades do CSS, tais como background, bordas, filtros, etc, utilizando as seguintes classes:

- **Magenta**: `.magenta`
- **Dark High**: `.text-dark-high`
- **Dark Medium**: `.text-dark-medium`
- **Dark Low**: `.text-dark-low`
- **Light Light**: `.text-light-light`
- **Light Solid**: `.text-light-solid`

## Exemplo de Utilização

Suponha que você queira exibir um cabeçalho em negrito com o título "Bem-vindo" e um parágrafo regular com o texto "Este é um exemplo de utilização do componente DynamicText." em sua aplicação. Você também deseja destacar uma parte desse texto com a cor magenta.

```jsx
import React from 'react';
import DynamicText from './DynamicText';

const WelcomeMessage = () => {
  return (
    <div>
      {/* Cabeçalho em negrito com título "Bem-vindo" */}
      <DynamicText level="1" title="Bem-vindo" ariaLabel="Título de boas-vindas" className="text-dark-high">
        Bem-vindo
      </DynamicText>

      {/* Parágrafo regular com destaque em magenta */}
      <DynamicText level="p" title="Texto regular" ariaLabel="Texto de exemplo" className="text-magenta">
        Este é um exemplo de utilização do componente DynamicText.
      </DynamicText>
    </div>
  );
};

export default WelcomeMessage;
```
---

## Desafio 2 - Formulário

Neste desafio, foi desenvolvido um formulário de avaliação utilizando o Design System da empresa. Ele conta com um campo de estrelas obrigatório para avaliação, um campo de nome obrigatório e um campo de comentário opcional. A aplicação foi projetada para ser responsiva, adaptando-se tanto a dispositivos desktop quanto a dispositivos móveis. A integração com a API `/rating` permite enviar os dados da avaliação, incluindo `name`, `rating` e `comment`. Todo o projeto foi concebido com foco em acessibilidade, garantindo que pessoas com diferentes tipos de deficiências (visuais, auditivas, motoras ou cognitivas) possam utilizar o formulário sem problemas. Isso foi possível graças à utilização de uma estrutura HTML semântica e às tecnologias `yup`, `react-hook-form` e `@hookform/resolvers`.

Além disso, foram adicionados modais de loading e de sucesso para melhorar a experiência do usuário durante o envio da avaliação.

É importante ressaltar que a aplicação obteve a pontuação máxima em todos os aspectos no PageSpeed Insights, garantindo um desempenho excepcional em termos de velocidade e otimização.

Embora inicialmente tenha sido desenvolvido apenas o frontend, no final o projeto se tornou um projeto full stack, pois o backend também foi desenvolvido para receber e processar os dados enviados pelo formulário.

## Tecnologias Utilizadas

- **Tailwind CSS**: Utilizado para estilizar os componentes de forma rápida e eficiente.
- **Next.js**: Framework de React utilizado para criar a aplicação de forma simples e escalável.
- **TypeScript**: Utilizado para adicionar tipagem estática ao código, melhorando a qualidade e a robustez do projeto.

## Componentes

### DynamicInput

Este componente é utilizado para criar inputs dinâmicos com react-hook-form, com suporte a validação de erros e labels junto ao yup.

Exemplo de uso:

```jsx
<DynamicInput
    label="Nome"
    placeholder="Digite seu nome"
    value={name}
    errors={errors.name}
    type="text"
    registerName="name"
    register={register}
/>
```

### DynamicLink

Este componente é utilizado para criar links dinâmicos.

Exemplo de uso:

```jsx
<DynamicLink
    level="p"
    ariaLabel="Ir para a página inicial"
    title="Página Inicial"
    href="/"
>
    Página Inicial
</DynamicLink>
```

### DynamicText

Este componente é utilizado para renderizar textos dinâmicos, com suporte a diferentes níveis de hierarquia.

Exemplo de uso:

```jsx
<DynamicText
    level="2"
    ariaLabel="Título da seção"
    title="Título da Seção"
>
    Este é um título de seção
</DynamicText>
```
---

## Desafio 3 - Análise do Blog

Minha proposta de arquitetura para o blog da Serasa visa abordar os desafios de SEO, acessibilidade, baixo tempo de carregamento das páginas, melhor experiência para o consumidor e gerenciamento de conteúdo. Abaixo, detalhamos as tecnologias, padrões de código e práticas que recomendamos para alcançar esses objetivos:

### Tecnologias e Frameworks Recomendados

#### Front-end:
- **Next.js**: Utilização do Next.js para renderização do lado do servidor (SSR) e geração de sites estáticos (SSG) trará melhor performance e SEO.
- **React.js**: Framework JavaScript para construção de interfaces de usuário, proporcionando uma experiência interativa e responsiva.
- **TypeScript**: Adoção de TypeScript para tipagem estática, melhorando a manutenção e segurança do código.

#### Estilização:
- **Tailwind CSS**: Framework de CSS utilitário que oferece desenvolvimento rápido e consistente de interfaces, reduzindo o tempo de desenvolvimento e mantendo a consistência visual.

#### Back-end:
- **Node.js**: Utilização do Node.js no servidor para eficiência e escalabilidade.
- **Prisma.js**: ORM moderno para interação com bancos de dados, oferecendo uma camada de abstração para manipulação de dados.

#### Banco de Dados:
- **PostgreSQL**: Sistema de gerenciamento de banco de dados relacional, oferecendo confiabilidade e desempenho.

### Padrões de Código e Práticas Recomendadas

#### Arquitetura:
- **Arquitetura Baseada em Componentes**: Adoção de uma abordagem modular, com componentes independentes e reutilizáveis, promovendo a escalabilidade e manutenibilidade do código.

#### SEO e Acessibilidade:
- **Meta Tags Otimizadas**: Utilização adequada de meta tags para melhorar a visibilidade nos mecanismos de busca.
- **HTML Semântico**: Utilização correta de elementos HTML semânticos para uma melhor compreensão do conteúdo pelos motores de busca e acessibilidade.
- **A11y**: Implementação de práticas de acessibilidade (A11y), como alt text em imagens, foco visível em elementos interativos e estruturação correta do conteúdo.

#### Performance:
- **Otimização de Imagens para webp**: Compressão e otimização de imagens para webp para reduzir o tempo de carregamento da página.
- **Carregamento Lazy**: Implementação do carregamento lazy para adiar o carregamento de recursos não essenciais, melhorando a velocidade de carregamento da página inicial.

## Conclusão

A adoção dessa arquitetura proposta, juntamente com as tecnologias e práticas recomendadas, permitirá que o blog da Serasa atenda aos desafios e problemas apresentados, proporcionando uma melhor experiência para o usuário, melhorando o SEO, garantindo a acessibilidade, otimizando o tempo de carregamento das páginas e facilitando o gerenciamento de conteúdo.

# Entrega

## Projetos e Artigos

### Projetos Desenvolvidos

- [Vagner Mengali](https://vagnermengali.com/)
- [Yrprey](https://yrprey.vercel.app/)
- [Grupo Dogma](https://www.grupo-dogma.com/)
- [Developer Blue Portfolio](https://developer-blue-portfolio.vercel.app/)
- [Developer Green Portfolio](https://developer-green-portfolio.vercel.app/)

---

### Projetos em que Trabalhei e Tive Participação

- [Pliemed](https://www.pliemed.com.br/)
- [New Old Oficial](https://www.newoldoficial.com.br/)
- [Marabraz](https://marabraz.com.br/)
- [Soulier](https://www.soulier.com.br/)
- [Sonho dos Pés Oficial](https://www.sonhodospesoficial.com.br/)
- [Elegancy Design](https://www.elegancydesign.com.br/)
- [Buckman](https://www.buckmanbck.com.br/)
- [King Joe](https://www.kingjoe.com.br/)
- [Fitoxs](https://fitoxs.com/)
- [Shop Makai](https://www.shopmakai.com.br/)
- [Pneu Barato](https://www.pneubarato.com.br/)
- [Cem Por Cento Cristão](https://www.cemporcentocristao.com.br/)
- [Abrakadabra](https://www.abrakadabra.com.br/)
- [Sapatella Oficial](https://www.sapatellaoficial.com.br/)
- [Sestini](https://www.sestini.com.br/)
- [Ad Lifestyle](https://www.adlifestyle.com.br/)
- [TNG](https://www.tng.com.br/)
- [Ladeira Armarinhos](https://www.ladeiraarmarinhos.com.br/)
- [Black Skull USA](https://www.blackskullusa.com.br/)
- [Toy Mania](https://www.toymania.com.br/)
- [Highstil](https://www.highstil.com.br/)
- [Barão Distribuidor](https://www.baraodistribuidor.com.br/)

---

## Feedback

Gostei muito dos exercícios. Achei que a variedade tipográfica e de cores, juntamente com a liberdade de escolher quais stacks, frameworks e bibliotecas utilizar, torna o desafio muito mais interessante. Além disso, a opção de modificar o design também acrescenta uma sensação de liberdade criativa.
