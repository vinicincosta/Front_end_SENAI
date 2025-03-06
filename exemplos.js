// alert('Olá mundo')
//
// var teste = prompt('Digite algo')
// alert(teste)





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