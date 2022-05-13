let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

// se é um numero
function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

// se ja esta na lista
function inLista(n, lista) {
    if(lista.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)) {    //só add se for num e nao tiver na lista
        valores.push(Number(num.value))
        let item = document.createElement('option') //criando 
        item.text = `Valor ${num.value} adicionado.`    //adicionando
        lista.appendChild(item)     //jogando para lista
        res.innerHTML = ''      //tornar vazio depois de alguma alteração
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''  //limpa caixa de entrada 
    num.focus()
}


//finalizar as operações
function finalizar() {
    if(valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores) {       //vendo maior, menor, soma
            soma += valores[pos]        //soma
            if(valores[pos] > maior) {
                maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
            }
        }
        
        media = soma / total       // media

        //printando informações na tela!
        res.innerHTML = ''  //zerar
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}