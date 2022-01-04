let pesoPeca = 101;
let quantidadePeca = 5;
let nomePeca = "Disco de freio";
let numCaracterePeca = nomePeca.length;

if (pesoPeca > 100)
{
    console.log("Peso ok, cadastro permitido");
}else{
    console.log("Peso não ok, cadastro não permitido");
}

if (quantidadePeca < 10)
{
    console.log("Caixa possui espaço, cadastro permitido");
}else{
    console.log("Caixa lotado, cadastro não permitido")
}

if(numCaracterePeca<3)
{
    console.log("Cadastro não permitido, pois o número de caracteres é:", numCaracterePeca, "<3");
}else{
    console.log("Cadastro permitido, pois o número de caracteres é:", numCaracterePeca, ">3");
}