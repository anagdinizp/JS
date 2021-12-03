function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = window.document.createElement("img")
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'menino.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'garoto.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'homem.jpg')
            } else if (idade >= 50 && idade < 120) {
                img.setAttribute('src', 'idoso.jpg')
            } else {
                img.setAttribute('src', 'caveira.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'menina.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'garota.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'mulher.jpg')
            } else if (idade >= 50 && idade < 120) {
                img.setAttribute('src', 'idosa.jpg')
            } else {
                img.setAttribute('src', 'caveira.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        
    }
        
} 