// JavaScript source code
var antallKort = 10;
var kortstokk = [];
var kategorier = ['klær', 'mat', 'kjøretøy', 'skole', 'verktøy'];
var antKategorier = kategorier.length;

class kort {
    constructor(kategori, navn) {
        this.width = 70;
        this.height = 70;
        this.kategori = kategori;
        this.navn = navn;
    }

    display() { 
        //console.log(this.kategori);
        //return this.kategori;
    }

    place() {
        //
    }
}

function trekk() {
    document.getElementById('demokort').innerHTML = kortstokk[randomInt(antKategorier)].kategori;
}

function main() {
    for (var i = 0; i < antallKort; i++) {
        kortstokk[i] = new kort(kategorier[randomInt(antKategorier)], 'TEST');
    }
    document.getElementById('category_text').innerHTML = kategorier[randomInt(antKategorier)];
}

function randomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

//main();
