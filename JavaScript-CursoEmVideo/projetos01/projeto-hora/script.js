function carregar () {
    var mensagem = document.getElementById('mensagem')
    var imagem = document.getElementById('imagem')
    var data = new Date()   //function para saber a data
    var hora = data.getHours()  //function para saber a hora
    mensagem.innerHTML = `Agora são ${hora} horas.`     //trocar o valor de 'mensagem'

    if (hora >= 0 && hora < 12) {
        imagem.src = 'img/fotomanha.png'    //bom dia!
        document.body.style.background = '#5c98cc'      //para mudar a cor de fundo
    } else if (hora >= 12 && hora < 18) {
        imagem.src = 'img/fototarde.png'    //boa tarde!
        document.body.style.background = '#daa392'
    } else {
        imagem.src = 'img/fotonoite.png'    //boa noite!
        document.body.style.background = '  #132038'
    }
}
