# Desafio Serasa

<div align="center">
  Você pode acessar o deploy do projeto <a href="https://serasa-challenge-vagnermengali.vercel.app/">aqui</a>.
</div>

---

<div align="center">
  <a href="#desafio-1---tipografia">Desafio 1 - Tipografia</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="#desafio-2---formulário">Desafio 2 - Formulário</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="#desafio-3---análise-do-blog">Desafio 3 - Análise do Blog</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</div>

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
      <DynamicText level="p" title="Texto regular" ariaLabel="Texto de exemplo" className="magenta">
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

Este componente é utilizado para criar inputs dinâmicos, com suporte a validação de erros e labels.

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
    level="h2"
    ariaLabel="Título da seção"
    title="Título da Seção"
>
    Este é um título de seção
</DynamicText>
```
---

## Desafio 3 - Análise do Blog

Neste documento, realizaremos uma análise das tecnologias, frameworks, padrões de código, arquiteturas e práticas de desenvolvimento adotadas para otimizar a performance, acessibilidade e eficiência no desenvolvimento dos projetos no blog da Serasa.

## Tecnologias Front-end
- **Next.js:** Framework utilizado para renderização do lado do servidor (SSR) e geração de sites estáticos (SSG), oferecendo desempenho aprimorado.
- **TypeScript:** Linguagem de programação que adiciona tipagem estática ao JavaScript, proporcionando maior segurança e manutenção do código.
- **Tailwind CSS:** Framework de CSS utilitário que permite o desenvolvimento rápido e consistente de interfaces de usuário.

## Tecnologias Back-end
- **Node.js:** Plataforma que permite a execução de JavaScript no servidor, proporcionando eficiência e escalabilidade no desenvolvimento.
- **Prisma.js com Next.js:** ORM moderno para interação com bancos de dados, integrado com o Next.js para facilitar o desenvolvimento.
- **PostgreSQL:** Sistema de gerenciamento de banco de dados relacional, oferecendo confiabilidade e desempenho.

## Arquitetura e Práticas de Desenvolvimento
- **Component-Based Architecture (Arquitetura Baseada em Componentes):** Abordagem que preza pela criação de componentes independentes e reutilizáveis, promovendo modularidade e escalabilidade no desenvolvimento front-end.
- **Test-Driven Development (TDD):** Prática de desenvolvimento que incentiva escrever testes automatizados antes do código de produção, garantindo a qualidade do software.

## Ferramentas de DevOps
- **Docker:** Plataforma para desenvolvimento, envio e execução de aplicativos em contêineres, proporcionando consistência entre os ambientes.
- **Kubernetes:** Plataforma de orquestração de contêineres para automação de implantação, escala e gerenciamento de aplicativos.

## Segurança
- **HTTPS:** Protocolo de transferência de hipertexto seguro para comunicação entre cliente e servidor.
- **JWT (JSON Web Tokens):** Método seguro de autenticação e autorização.
- **OWASP Top 10:** Diretrizes para proteção contra as principais vulnerabilidades de segurança web.

## Documentação: Utilização do Next.js com Tailwind CSS e Modelo Component-Based Architecture Front-end

Nesta documentação, vamos abordar a utilização do Next.js em conjunto com o Tailwind CSS para desenvolvimento de aplicações full stack. O Next.js é uma ferramenta que oferece suporte tanto para o front-end quanto para o back-end, simplificando o gerenciamento de rotas e proporcionando uma experiência de desenvolvimento mais fluída.

### Vantagens do Next.js:

1. **Aplicação Full Stack:** Com o Next.js, é possível desenvolver tanto o front-end quanto o back-end da aplicação, tudo em um único framework.
2. **Facilidade de Rotas:** O Next.js oferece um sistema de rotas simplificado, facilitando a navegação entre as páginas da aplicação.
3. **Tailwind CSS:** A utilização do Tailwind CSS agrega muito à performance da aplicação, proporcionando estilos pré-configurados e uma abordagem baseada em utilitários que facilita o desenvolvimento.

### Modelo Component-Based Architecture Front-end:

A abordagem Component-Based Architecture (Arquitetura Baseada em Componentes) preza pela criação de componentes independentes e reutilizáveis, promovendo modularidade e escalabilidade no desenvolvimento front-end.

### Boas Práticas e Acessibilidade:

Ao utilizar o Next.js em conjunto com o Tailwind CSS e seguindo o modelo Component-Based Architecture Front-end, garantimos que o desenvolvimento siga as boas práticas e seja acessível a todos os usuários. Componentes padronizados e acessíveis facilitam a manutenção do código e proporcionam uma experiência de usuário melhorada.

### Conclusão:

A utilização do Next.js com Tailwind CSS e o modelo Component-Based Architecture Front-end proporciona uma base sólida para o desenvolvimento de aplicações web modernas e eficientes. Ao seguir esse padrão, garantimos uma experiência de desenvolvimento mais fluida e uma aplicação mais performática e acessível.
