const fs = require('fs')
const faturamentoDiario = JSON.parse(fs.readFileSync('dados.json', 'utf-8'))

const diaFaturamentoZero = faturamentoDiario.filter(dia => dia.valor > 0);

const menorFaturamento = Math.min(...diaFaturamentoZero.map(dia => dia.valor))
const maiorFaturamento = Math.max(...diaFaturamentoZero.map(dia => dia.valor))

const somaFaturamento = diaFaturamentoZero.reduce((acc, dia) => acc + dia.valor, 0);
const mediaFaturamento = somaFaturamento / diaFaturamentoZero.length;

const diasMaiorMensal = diaFaturamentoZero.filter(dia => dia.valor > mediaFaturamento).length;

console.log("Menor valor de faturamento:", menorFaturamento);
console.log("Maior valor de faturamento:", maiorFaturamento);
console.log("Número de dias com faturamento acima da média:", diasMaiorMensal);