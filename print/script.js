function mostrar(){
    var texto = document.getElementById("i1").value;
    var printTexto = document.getElementById("printTexto");
    printTexto.textContent = `Seu nome é: ${texto}`;

    var cor = document.getElementById("i2").value;
    var printColor = document.getElementById("printColor");
    printColor.textContent = `Sua cor favorita é: ${cor}`;

    var data = document.getElementById("i3").value
    var printData = document.getElementById("printData");
    printData.textContent = `Sua data de nascimento é: ${data}`;

    var checkbox = document.getElementById("i4").checked;
    var printCheckbox = document.getElementById("printCheckbox");
    printCheckbox.textContent = `Você é maior de idade: ${checkbox}`;

    printCheckbox.style.color = cor;
    printColor.style.color = cor;
    printData.style.color = cor;
    printTexto.style.color = cor;

    console.log(texto, typeof texto);
    console.log(cor, typeof cor);
    console.log(data, typeof data);
    console.log(checkbox, typeof checkbox);
}