// Imagine uma loja de roupas que dê um desconto ao cliente, dependendo do valor que ele pague. Faça um programa para loja, que solicite o valor total da compra ao usuário e assim, aplique um desconto de acordo com o valor total da compra. Siga a tabela:
// Valor total da compra até R$ 100,00: sem desconto.
// Valor total da compra de R$ 100,01 a R$ 200,00: desconto de 10%.
// Valor total da compra acima de R$ 200,00: desconto de 20%.
// Exiba o valor final da compra com o desconto aplicado.

let valorTotal = parseFloat(prompt("Digite o valor da compra"))
let desconto;


if(valorTotal > 200.00){
    desconto = valorTotal * 0.20
} else if(valorTotal > 100.00 && valorTotal <= 200.00){
    desconto = valorTotal * 0.10
}

if(valorTotal <= 100){
    desconto = 0;
    console.log("O valor de desconto foi: " + desconto)
}
else if(valorTotal <=200){
    desconto - 0.1;
    console.log("O valor de desconto foi de: " + (desconto*100)+"%")
}else{
    desconto - 0.2;
    console.log("O valor de desconto foi de: " + (desconto*100)+"%")
}

let valorFinal = valorTotal - (valorTotal*desconto);
console.log("Valor Final: " + valorFinal.toFixed(2))


// let vt = parseFloat(prompt("Digite o valor da compra"))
// let desconto = 0
// if(vt > 200.00){
//     desconto = vt * 0.20
// } else if(vt > 100.00 && vt <= 200.00){
//     desconto = vt * 0.10
// }
// let final = vt - desconto
// console.log("Valor Final: " + final.toFixed(2))