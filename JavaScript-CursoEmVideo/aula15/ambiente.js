// array (vetor)

let num = [5, 8, 2, 9, 3]
num.push(1)     //add ao final
num.sort()      //ordenar array
console.log(num)
console.log(`O vetor tem ${num.length} posições`)   //quantidade
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(8)    //pega valor do indici
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}
