function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value >= ano){
        alert('[ERRO] Verifique os dados e tente novamente')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 5 ){
                //bebe
                img.setAttribute('src', 'imagens/bebeh.jpg')
            }else if (idade >= 5 && idade < 14){
                //criança
                img.setAttribute('src', 'imagens/criancah.jpg')
            }else if (idade >= 14 && idade < 18){
                //Jovem
                img.setAttribute('src', 'imagens/jovemh.jpg')
            }else if (idade >= 18 && idade < 50){
                //Adulto
                img.setAttribute('src', 'imagens/adultoh.jpg')
            }else {
                //Idoso
                img.setAttribute('src', 'imagens/idosoh.jpg')
            }

        }else if(fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 5 ){
                //bebe
                img.setAttribute('src', 'imagens/bebem.jpg')
            }else if (idade >= 5 && idade < 14){
                //criança
                img.setAttribute('src', 'imagens/criancam.jpg')
            }else if (idade >= 14 && idade < 18){
                //Jovem
                img.setAttribute('src', 'imagens/jovemm.jpg')
            }else if (idade >= 18 && idade < 50){
                //Adulto
                img.setAttribute('src', 'imagens/adultom.jpg')
            }else {
                //Idoso
                img.setAttribute('src', 'imagens/idosom.jpg')
            }
        }
        
        res.innerHTML = `Detectamos ${genero} com ${idade} Anos`
        res.appendChild(img)
    }
    
}