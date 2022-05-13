function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''  // limpando tabuada antes da nova

        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`    //tabuada
            item.value = `tab${c}`      // dando valor para cada elemento
            tab.appendChild(item)
            c++
        }
    }
}