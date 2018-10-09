// JavaScript source code

var antallKort = 10;
var kortstokk = [];
var kategorier = ['klær', 'mat', 'kjøretøy', 'skole', 'verktøy', 'mennesker'];

class hus {
    constructor(kategori) {
        this.kategori = kategori;
        this.rom = [[null, null, null],
                    [null, null, null],
                    [null, null, null]];
    }
}

class kort {
    constructor(kategori, navn='test') {
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
        // Places card in cell
    }
}

function main() {
    for (var i = 0; i < antallKort; i++) {
        kortstokk[i] = new kort(kategorier[randomInt(kategorier.length)]);
    }
    document.getElementById('kategoriHus1').innerHTML = kategorier[randomInt(kategorier.length)];
    document.getElementById('kategoriHus2').innerHTML = kategorier[randomInt(kategorier.length)];
    document.getElementById('kategoriHus3').innerHTML = kategorier[randomInt(kategorier.length)];

}

function argTest(...args) {
    
    for (var x in args) {
        console.log(args[x]);
    }
}
