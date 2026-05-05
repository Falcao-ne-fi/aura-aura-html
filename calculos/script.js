function somar(){
    var num1 = document.getElementById("n1").valueAsNumber
    var num2 = document.getElementById("n2").valueAsNumber
    var res = document.getElementById("res-soma")
    res.textContent = num1 + num2
}
function dividir(){
    var num3 = parseFloat(document.getElementById("n3").value)
    var num4 = parseFloat(document.getElementById("n4").value)
    var res = document.getElementById("res-div")
    if (num4 !== 0){
       res.textContent = num3 / num4 
    }
    else{
        res.textContent = "invalido fi"
    }
}
function subtrair(){
    var num1 = document.getElementById("n5").valueAsNumber
    var num2 = document.getElementById("n6").valueAsNumber
    var res = document.getElementById("res-sub")
    res.textContent = num1 - num2
}
function multiplicar(){
    var num1 = document.getElementById("n7").valueAsNumber
    var num2 = document.getElementById("n8").valueAsNumber
    var res = document.getElementById("res-mult")
    res.textContent = num1 * num2
}
