const faturamentoMensal = [
    { semana: "Semana 1", dia: "Segunda-feira", valor: 100 },
    { semana: "Semana 1", dia: "Terça-feira", valor: 200 },
    { semana: "Semana 1", dia: "Quarta-feira", valor: 300 },
    { semana: "Semana 1", dia: "Quinta-feira", valor: 0 },
    { semana: "Semana 1", dia: "Sexta-feira", valor: 150 },
    { semana: "Semana 1", dia: "Sábado", valor: 50 },
    { semana: "Semana 1", dia: "Domingo", valor: 400 },
    { semana: "Semana 2", dia: "Segunda-feira", valor: 250 },
    { semana: "Semana 2", dia: "Terça-feira", valor: 0 },
    { semana: "Semana 2", dia: "Quarta-feira", valor: 200 },
    { semana: "Semana 2", dia: "Quinta-feira", valor: 300 },
    { semana: "Semana 2", dia: "Sexta-feira", valor: 100 },
    { semana: "Semana 2", dia: "Sábado", valor: 70 },
    { semana: "Semana 2", dia: "Domingo", valor: 500 },
    { semana: "Semana 3", dia: "Segunda-feira", valor: 150 },
    { semana: "Semana 3", dia: "Terça-feira", valor: 300 },
    { semana: "Semana 3", dia: "Quarta-feira", valor: 200 },
    { semana: "Semana 3", dia: "Quinta-feira", valor: 0 },
    { semana: "Semana 3", dia: "Sexta-feira", valor: 100 },
    { semana: "Semana 3", dia: "Sábado", valor: 80 },
    { semana: "Semana 3", dia: "Domingo", valor: 400 },
    { semana: "Semana 4", dia: "Segunda-feira", valor: 0 },
    { semana: "Semana 4", dia: "Terça-feira", valor: 200 },
    { semana: "Semana 4", dia: "Quarta-feira", valor: 300 },
    { semana: "Semana 4", dia: "Quinta-feira", valor: 150 },
    { semana: "Semana 4", dia: "Sexta-feira", valor: 100 },
    { semana: "Semana 4", dia: "Sábado", valor: 60 },
    { semana: "Semana 4", dia: "Domingo", valor: 500 }
];

let menor = null;
let maior = null;
let soma = 0;
let diasValidos = 0;


for (let i = 0; i < faturamentoMensal.length; i++) {
    let valor = faturamentoMensal[i].valor;

    if (valor > 0) {
        diasValidos++;


        if (menor === null || valor < menor) {
            menor = valor;
        }

        if (maior === null || valor > maior) {
            maior = valor;
        }

        soma += valor;
    }
}

let media = 0;
if (diasValidos > 0) {
    media = soma / diasValidos;
}

let diasAcimaMedia = 0;
for (let i = 0; i < faturamentoMensal.length; i++) {
    let valor = faturamentoMensal[i].valor;

    if (valor > 0 && valor > media) {
        diasAcimaMedia++;
    }
}

if (menor !== null && maior !== null) {
    console.log("Menor valor de faturamento:", menor);
    console.log("Maior valor de faturamento:", maior);
    console.log("Dias acima da média:", diasAcimaMedia);
} else {
    console.log("Não houve faturamento válido no mês.");
}
