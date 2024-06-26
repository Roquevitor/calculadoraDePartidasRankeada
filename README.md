# README - Sistema de Classificação de Jogadores

Este é um exemplo simples de um sistema de classificação de jogadores em um jogo. A função `calcularClassificacao` determina a classificação de um jogador com base no número de vitórias e derrotas que ele possui.

## Conteúdo

- [Descrição](#descrição)
- [Funcionamento](#funcionamento)
- [Como Usar](#como-usar)
- [Exemplo de Código](#exemplo-de-código)

## Descrição

A função `calcularClassificacao` recebe o número de vitórias e derrotas de um jogador e calcula o saldo de vitórias (victories - defeats). Com base nesse saldo, a função atribui uma classificação ao jogador de acordo com faixas predefinidas.

## Funcionamento

- **Ferro**: Saldo de até 10 vitórias.
- **Bronze**: Saldo de até 20 vitórias.
- **Prata**: Saldo de até 50 vitórias.
- **Ouro**: Saldo de até 80 vitórias.
- **Diamante**: Saldo de até 90 vitórias.
- **Lendário**: Saldo de até 100 vitórias.
- **Imortal**: Saldo acima de 100 vitórias.

## Como Usar

1. Clone este repositório:


2. Navegue até o diretório do projeto:


3. Abra o arquivo `index.js` em um editor de texto ou IDE de sua preferência.

4. Execute o código JavaScript em um ambiente que suporte, como um navegador ou um ambiente Node.js.

## Exemplo de Código

```javascript
// Definição da função calcularClassificacao, que recebe o número de vitórias e derrotas de um jogador
function calcularClassificacao(vitorias, derrotas) {
    // Calcula o saldo de vitórias subtraindo as derrotas das vitórias
    let saldoRankeadas = vitorias - derrotas;
    // Variável para armazenar a classificação do jogador
    let classificacao = '';

    // Switch para determinar a classificação com base no saldo de vitórias
    switch (true) {
        // Caso o saldo seja menor ou igual a 10
        case saldoRankeadas <= 10:
            // Define a classificação como "Ferro"
            classificacao = "Ferro";
            break;
        // Caso o saldo seja menor ou igual a 20.
        case saldoRankeadas <= 20:
            // Define a classificação como "Bronze"
            classificacao = "Bronze";
            break;
        // Caso o saldo seja menor ou igual a 50
        case saldoRankeadas <= 50:
            // Define a classificação como "Prata"
            classificacao = "Prata";
            break;
        // Caso o saldo seja menor ou igual a 80
        case saldoRankeadas <= 80:
            // Define a classificação como "Ouro"
            classificacao = "Ouro";
            break;
        // Caso o saldo seja menor ou igual a 90
        case saldoRankeadas <= 90:
            // Define a classificação como "Diamante"
            classificacao = "Diamante";
            break;
        // Caso o saldo seja menor ou igual a 100
        case saldoRankeadas <= 100:
            // Define a classificação como "Lendário"
            classificacao = "Lendário";
            break;
        // Caso contrário
        default:
            // Define a classificação como "Imortal"
            classificacao = "Imortal";
    }

    // Retorna uma mensagem contendo o saldo de vitórias e a classificação do jogador
    return "O herói tem um saldo de " + saldoRankeadas + " vitórias e está no nível " + classificacao;
}

// Exemplo de uso:
var vitorias = 100;
var derrotas = 15;

// Chama a função calcularClassificacao com o número de vitórias e derrotas e armazena o resultado
var resultado = calcularClassificacao(vitorias, derrotas);
// Imprime o resultado no console
console.log(resultado);

ste README fornece uma visão geral do código, explicando o que ele faz, como utilizá-lo e inclui um exemplo de código para demonstrar sua funcionalidade.


