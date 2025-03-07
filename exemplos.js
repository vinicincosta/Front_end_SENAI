// alert('Olá mundo')
//
// var teste = prompt('Digite algo')
// alert(teste)


// EXEMPLOS:
function testeTexto () {
    document.getElementById("titulo").InnerHTML += 'Boa Tarde'
}

function testeColor () {
    const titulo = document.getElementById("titulo")
    titulo.style.color = 'red'
    titulo.style.fontSize = '50px'
}

function voltar () {
    const titulo = document.getElementById("titulo")
    titulo.style.color = 'blue'
    titulo.style.fontSize = '55px'
}

function reset () {
    document.getElementById("titulo").innerHTML = ' Bem vindo ao nosso site'
}

function testInput() {
    document.getElementById("input").value = 'Tarde'
}
//.............................................................

function confirma() {
    if (confirm('Deseja limpar mesmo ')){
        document.getElementById("inputEmail4").value = ''
        document.getElementById("inputPassword4").value = ''
        document.getElementById("inputAddress").value = ''
        document.getElementById("inputAddress2").value = ''
        document.getElementById("inputCity").value = ''
        document.getElementById("inputZip").value = ''
    }
}

function label_color() {
    document.getElementById("label_email").style.color = "red"

}

function texto_email() {
    document.getElementById("inputEmail4").value = 'Boa Tarde'
}
//###############################################################

function label_color_dois() {
    document.getElementById("label_senha").style.color = "red"
}

function texto_senha() {
    document.getElementById("inputPassword4").value = 'Insira sua senha'
}
//###############################################################

function label_color_tres() {
    document.getElementById("label_address").style.color = "red"
}

function texto_address() {
    document.getElementById("inputAddress").value = 'Endereço, numero'
}
//###############################################################


function label_color_quatro() {
    document.getElementById("label_address_2").style.color = "red"
}

function texto_address_2() {
    document.getElementById("inputAddress2").value = 'ENDEREÇO 2'
}

//###############################################################

function label_color_cinco() {
    document.getElementById("label_city").style.color = "red"
}

function texto_city() {
    document.getElementById("inputCity").value = 'CIDADE (ex:guararapes)'
}
//###############################################################

function label_color_seis() {
    document.getElementById("label_cep").style.color = "red"
}

function texto_cep() {
    document.getElementById("inputZip").value = 'Insira seu cep'
}
//###############################################################
function label_color_sete() {
    document.getElementById("label_estado").style.color = "red"
}
function texto_estado() {
    document.getElementById("inputState").value = 'ESTADO (ex:sp)'
}
//###############################################################