// JavaScript source code

function trekk() {
    document.getElementById('korttekst').innerHTML = kortstokk[randomInt(kategorier.length)].kategori;
}



function randomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
