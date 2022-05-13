function verificar() {
    var data = new Date();  //data atual
    var ano = data.getFullYear();   //ano atual com 4 digitos
    var fano = document.getElementById('txtano');    //ano que veio do formulario
    var resposta = document.querySelector('div#resposta');  //resposta

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex');    //sexo do formulario
        var idade = ano - Number(fano.value);   //calculando idade
        var genero = '';     

        var img = document.createElement('img');    //para as imagens!!
        img.setAttribute('id', 'foto');             // pode ser feito no html

        if (fsex[0].checked) {  //opção masculino
            genero = 'Homem';

            if (idade >= 0 && idade < 10) {    //criança
                img.setAttribute('src', 'img/foto-bebe-m.png');
            } else if (idade > 10 && idade < 21) {
                img.setAttribute('src', 'img/foto-jovem-m.png');
            } else if (idade < 50) {
                img.setAttribute('src', 'img/foto-adulto-m.png');
            } else {
                img.setAttribute('src', 'img/foto-idoso-m.png');
            }

        } else if (fsex[1].checked) {   //opção feminina
            genero = 'Mulher';

            if (idade >= 0 && idade < 10) {    //criança
                img.setAttribute('src', 'img/foto-bebe-f.png');
            } else if (idade > 10 && idade < 21) {
                img.setAttribute('src', 'img/foto-jovem-f.png');
            } else if (idade < 50) {
                img.setAttribute('src', 'img/foto-adulto-f.png');
            } else {
                img.setAttribute('src', 'img/foto-idoso-f.png');
            }
        }

        resposta.style.textAlign = 'center'; //alinhar por js
        resposta.innerHTML = `Detectamos ${genero} com ${idade} anos!`
        resposta.appendChild(img);  //adicionar a imagem
    }
}