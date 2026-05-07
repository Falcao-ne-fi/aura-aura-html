function check(){
    var wasBorn = parseInt(document.getElementById('birth').value)
    var res = document.getElementById('result')
    var clientAge = document.getElementById('age')

    if(isNaN(wasBorn)){
        res.textContent = "Type only numbers 🚫"
        res.style.color = 'red'
        return
    }

    const thisYear = new Date().getFullYear()
    const age = thisYear - wasBorn

    if(age >= 18){
        res.textContent = "You can enter! ✅"
        res.style.color = 'green'
        clientAge.textContent = age
        document.getElementById('v1').style.display = 'block'
        document.getElementById('v2').style.display = 'none'


    }else{
        res.textContent = "You cannot enter! ❌"
        res.style.color = 'red'
        clientAge.textContent = age
        document.getElementById('v2').style.display = 'block'
        document.getElementById('v1').style.display = 'none'
    }

    
}
