var API_URL = "https://www.mercadobitcoin.net/api/";

setInterval(function () {
    listarValores();
}, 5000);

function listarValores() {
    atualizaValor('BTC');
    atualizaValor('LTC');
    atualizaValor('ETH');
    atualizaValor('DOGE');

    const dateNow = new Date().toLocaleString();
    const lastUpdate = document.getElementById("lastUpdate");
    lastUpdate.textContent = dateNow;
}

function atualizaValor(moeda) {
    const criptoMoeda = document.getElementById(moeda);

    fetch(API_URL + moeda + "/ticker")
    .then(data => data.json())
    .then(data => {
        const valor = new Number(data.ticker.last);
        criptoMoeda.textContent = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    });
}