const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");
document.getElementById("div-aparece").style.display = "none";

// codificar

function btnCriptografar() {
    const textoEncriptado = encriptar(inputTexto.value);
    mensagem.value = textoEncriptado;
    mensagem.style.backgroundImage = "none";
    aparece()
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

// decodificar

function btnDescriptografar() {
    const textoDesencriptado = desencriptar(inputTexto.value);
    mensagem.value = textoDesencriptado;
    mensagem.style.backgroundImage = "none";
    aparece()  
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

// copiar texto

function copiar() {
    let textoCopiado = mensagem;
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(textoCopiado.value);
    //alert(`O texto copiado é ${textoCopiado.value}!`);
}

function aparece() {
    document.getElementById("div-aparece").style.display = "block";
}
