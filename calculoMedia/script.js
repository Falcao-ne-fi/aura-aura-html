function calcularMedia(){
    var nota1 = parseFloat(document.getElementById('n1').value)
    var nota2 = parseFloat(document.getElementById('n2').value)
    var nota3 = parseFloat(document.getElementById('n3').value)
    var resp = document.getElementById('resposta')
    var media = (nota1 + nota2 + nota3) / 3

    if(media >= 7){
        resp.textContent = `${media.toFixed(2)} - PASSOU DE ANO😘`
    }
    else{
        resp.textContent = `${media.toFixed(2)} - REPROVOU DE ANO😎`  
    }
}