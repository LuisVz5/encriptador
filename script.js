const textA = document.querySelector(".text-Area");
const buttonE = document.querySelector(".encriptBtn");
const mensaje = document.querySelector(".mostrar");
const copiarM = document.querySelector(".copiar")

function btnEncriptar() {
    let texto = textA.value;
    var caracteres = texto.match(/^[a-z\s]*$/);
    let reemplazar = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]

    if (!caracteres) {
        alert("Recuerda no usar mayusculas y acentos")

    }
    else{
        reemplazar.forEach(function(replace) {
            texto = texto.replaceAll(replace[0], replace[1])
        });
        mensaje.value = texto;
        mensaje.style.backgroundImage = "none";
        copiarM.style.display = "block";
        
    }

    textA.value = "";

}

function btnDesencriptar() {
    let texto = textA.value;
    let caracteres = texto.match(/^[a-z\s]*$/);
    let reemplazar = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]]

    if (!caracteres) {
        alert("Recuerda no usar mayusculas y acentos")

    }
    else{
        reemplazar.forEach(function(replace) {
            texto = texto.replaceAll(replace[0], replace[1])
        });
        mensaje.value = texto;
        mensaje.style.backgroundImage = "none";
        copiarM.style.display = "block";
        
    }
}

function copia(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
}