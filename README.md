# Desafio Serasa

## Desafio 1 - Tipografia

Este documento apresenta as diretrizes para a utilização dos componentes de texto e cores em um projeto desenvolvido.

## Componentes de Texto

Para garantir consistência na estilização dos textos, foram definidos os seguintes componentes:

- **h1**: Utilize a classe `.display`.
- **h2**: Utilize a classe `.heading-l`.
- **h3**: Utilize a classe `.heading-m`.
- **h4**: Utilize a classe `.heading-s`.
- **h5**: Utilize a classe `.display`.
- **h6**: Utilize a classe `.sub-heading`.
- **p bold**: Utilize a classe `.body-bold`.
- **p regular**: Utilize a classe `.body-regular`.

## Cores

As cores podem ser aplicadas a qualquer texto, bem como a outras propriedades do CSS, tais como background, bordas, filtros, etc. As opções de cores disponíveis são:

- **Magenta**: Utilize a classe `.magenta`.
- **Dark High**: Utilize a classe `.text-dark-high`.
- **Dark Medium**: Utilize a classe `.text-dark-medium`.
- **Dark Low**: Utilize a classe `.text-dark-low`.
- **Light Light**: Utilize a classe `.text-light-light`.
- **Light Solid**: Utilize a classe `.text-light-solid`.

## Exemplos de Utilização

A seguir estão alguns exemplos de como utilizar os componentes de texto e as cores disponíveis:

```html
<!-- Exemplo de utilização de h1 com cor magenta -->
<h1 className="display magenta">Título Principal</h1>

<!-- Exemplo de utilização de h2 com cor dark-high -->
<h2 className="heading-l text-dark-high">Subtítulo</h2>

<!-- Exemplo de utilização de p regular com cor text-light-light -->
<p className="body-regular text-light-light">Este é um parágrafo com texto regular.</p>

<!-- Exemplo de utilização de p bold com cor text-dark-medium -->
<p className="body-bold text-dark-medium">Este é um parágrafo com texto em negrito.</p>
