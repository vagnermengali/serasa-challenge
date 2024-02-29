# Desafio Serasa

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

## Desafio 2 - Tipografia
