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
