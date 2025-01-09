const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

let total = Object.values(faturamento).reduce((soma, v) => soma + v, 0);

for (let estado in faturamento) {
    console.log(`Percentual de ${estado}: ${(faturamento[estado] / total * 100).toFixed(2)}%`);
}
