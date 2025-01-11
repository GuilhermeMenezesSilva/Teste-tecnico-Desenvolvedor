const faturamentoDistri =
    [
        {
            "nome": "SP",
            "faturamento": 67836.43
        },
        {
            "nome": "RJ",
            "faturamento": 36678.66
        },
        {
            "nome": "MG",
            "faturamento": 29229.88
        },
        {
            "nome": "ES",
            "faturamento": 27165.48
        },
        {
            "nome": "Outros",
            "faturamento": 19849.53
        }
]

const valor = faturamentoDistri;
let totMensal = 0

for (let i = 0; i < valor.length; i++) {
    totMensal += valor[i].faturamento
}
console.log("Total mensal: " + totMensal)

for(let i = 0; i < valor.length; i++){
    let representacao = (valor[i].faturamento / totMensal) * 100
    console.log(`${valor[i].nome} representa ${representacao.toFixed(2)}%`)

}