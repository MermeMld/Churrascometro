let inputAdultos = document.getElementById("adulto");
let inputCriancas = document.getElementById("crianca");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    //console.log("calcular")

    let adulto = inputAdultos.value;
    let crianca = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePP(duracao) * adulto + (carnePP(duracao) / 2 * crianca);
    let qtdTotalCerveja = cervejaPP(duracao) * adulto;
    let qtdTotalBebidas = bebidaPP(duracao) * adulto + (bebidaPP(duracao) / 2 * crianca);

    resultado.innerHTML = `<p>${qtdTotalCarne / 1000}Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 355)} Latas de Cerveja </p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas / 2000)} Garrafas de Bebidas</p>`


    //console.log(qtdTotalCarne);

}

function carnePP(duracao){
    if(duracao >= 6){
        return 650;
    } else {
        return 400;
    }
}

function cervejaPP(duracao){
    if(duracao >= 6){
        return 2000;
    } else {
        return 1200;
    }
}

function bebidaPP(duracao){
    if(duracao >= 6){
        return 1500;
    } else {
        return 1000;
    }
}