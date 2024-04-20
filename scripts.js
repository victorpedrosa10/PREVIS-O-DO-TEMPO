let chave = "b05c778f48090160660114211b1151ef"

function colocanatela(dados) {
    console.log(dados)

    document.querySelector(".cidade") .innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp") .innerHTML = Math.floor(dados.main.temp) + "ºC Graus"
    document.querySelector(".icone") .src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon +".png"
    document.querySelector(".umidade") .innerHTML = "Umidade " + dados.main.humidity + "%"
}


async function buscarcidade(cidade) {
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
        cidade +
        "&appid=" +
        chave +
        "&lang=pt-br" +
        "&units=metric").then((resposta) => resposta.json())

    colocanatela(dados)

}

function cliqueinobotao() {
    let cidade = document.querySelector(".input-cidade").value
    buscarcidade(cidade)
}