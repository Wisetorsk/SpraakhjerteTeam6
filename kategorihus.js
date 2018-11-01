// JavaScript source code
//this.touch = "ontouchstart" in window || (window.DocumentTouch && document instanceof DocumentTouch);

//----------------------------------------------------------------------
// Objects
//----------------------------------------------------------------------

var hDim = {
    width: 400,
    height: 400,
    roofWidth: 300, //50px added per side to get full width
    roofHeight: 100
};

var subkategorier = {
    'clothes': [''],
    'food': [''],
    'vehicle': [''],
    'school': [''],
    'tools': [''],
    'people': [''],
    'animal': [''],
    'vegetables': ['food'],
    'fruit': ['food']
};

var kategorierObj = {};

var dict = {
    'clothes': { eng: 'clothes', nor: 'klær' },
    'food': { eng: 'food', nor: 'mat' },
    'vehicle': { eng: 'vehicle', nor: 'kjøretøy' },
    'school': { eng: 'school', nor: 'skole' },
    'tools': { eng: 'tools', nor: 'verktøy' },
    'people': { eng: 'people', nor: 'mennesker' },
    'animal': { eng: 'animal', nor: 'dyr' },
    'vegetables': { eng: 'vegetables', nor: 'grønnsaker' },
    'fruit': { eng: 'fruit', nor: 'frukt' }    
}

//----------------------------------------------------------------------
// Variables
//----------------------------------------------------------------------

var language = 'norwegian'; //'english'; // Angi språk.
var enddiv = '</div>';
var endsvg = '</svg>';
var kategorier = ['clothes', 'food', 'vehicle', 'school', 'tools', 'people', 'animal', 'vegetables', 'fruit'];
var antallKort = imagesJson.length;
var kortstokk = [];
var houses;
var currentCard, selected = NaN;
var drawnCards = [];
var debug = false;

//----------------------------------------------------------------------
// Object definitions
//----------------------------------------------------------------------

class Kategori {
    constructor(kategori, subkategorier) {
        /** :Object: Kategori
         * :param kategori: kategori
         * :param subkategorier: subcategories under kategori in array
         */
        this.kategori = kategori;
        this.subkategorier = subkategorier; //array

    }
}

class Kort {
    constructor(params, debug=false) {
        /** :Object: Kort
         * :param Kategori: kategori
         * :param img: image url
         * :param navn: card name
         */
        this.kategori = params.kategori;
        this.navn = params.name[language.slice(0, 3)];
        this.subkategorier = subkategorier[this.kategori];
        this.img = params.src;
        this.debug = debug;
    }
}

//----------------------------------------------------------------------
// Page functions
//----------------------------------------------------------------------

function init() {
    initPage();
    for (index in kategorier) {
        var kategorinavn = kategorier[index];
        kategorierObj[kategorinavn] = new Kategori(kategorinavn, subkategorier[kategorinavn]);
    }
    buildDeck();
}

function buildDeck() {
    for (var index = 0; index < antallKort; index++) { //Building the card deck
        kortstokk[index] = new Kort(imagesJson[index]); //Construct new object based on JSON data in imagesJson
    }
}

function initPage() {
    switch (language) {
        case 'norwegian':
            document.getElementById('beskrivelse').innerHTML = 'Slik spiller man: Klikk og dra bildet over til ett tomt rom i riktig kategori.Hvis det er riktig kategori, vil kortet flyttes inn i rommet og ett nytt kort dukker opp. Hvis det ikke finner noen hus med riktig kategori, kan du trekke nytt kort ved å trekke på "TREKK"';
            document.getElementById('kortstokkSpan').innerHTML = 'Kortstokk';
            document.getElementById('dataPanelHeader').innerHTML = 'KORTSTOKK';
            document.getElementById('drawButton').innerHTML = 'TREKK';
            document.getElementById('resetButton').innerHTML = 'RESET';
            break;
        case 'english':
            document.getElementById('beskrivelse').innerHTML = 'How to play: Click and drag the card over to a vacant room in the house with the same category as the card. If it\'s the correct house and the room is vacant, the card will drop into the room. If there are no houses with a category that matches the card, you can draw a new card by pressing the button labelled "DRAW".';
            document.getElementById('kortstokkSpan').innerHTML = 'Deck';
            document.getElementById('dataPanelHeader').innerHTML = 'DECK';
            document.getElementById('drawButton').innerHTML = 'DRAW';
            document.getElementById('resetButton').innerHTML = 'RESET';
            break;
        default:
            throw "Invalid language selection";
            break;
    }
}

function showHouse(houseNumber) {
    /**
     * House generation function
     * Assemble html grid elements and insert into houses element
     */
    if (kategorier.length > 0) {
        var currKategori = kategorier.splice([Math.floor(Math.random() * kategorier.length)], 1); //Chooses a random element in "kategorier", returns it and removes it from the array
        houseString = '';
        houseString += div('plot');
        houseString += div('roof');
        houseString += '<svg class="roofSVG" width=400 height=100>';
        houseString += '<polygon points="' + corPair(50, 0) + corPair((50 + hDim.roofWidth), 0) + corPair((100 + hDim.roofWidth), hDim.roofHeight) + corPair(0, hDim.roofHeight, true) + '"  fill="red" stroke="black" />';
        houseString += '<polyline points="' + corPair(100, 70) + corPair(100, 20) + corPair(150, 20) + corPair(150, 70, true) + '" stroke="black" stroke-width="5px" fill="red"/>';
        houseString += endsvg;
        if(debug) console.log(currKategori);
        if(debug) console.log(titleImages[currKategori]);
        houseString += '<img class="titleImg" src="' + titleImages[currKategori] + '" width="auto" height="90px"/>';
        houseString += enddiv;
        houseString += div('house', currKategori, currKategori);
        for (var i = 0; i < 9; i++) { houseString += '<div style="" class="dropzone empty" id="hus' + houseNumber + 'rom' + i + '" ></div>'; }
        houseString += enddiv;
        houseString += div('kategori', 'kategori');
        switch (language) {
            case 'norwegian':
                houseString += dict[currKategori].nor;
                break;
            case 'english':
                houseString += dict[currKategori].eng;
                break;
            default:
                throw "Invalid language selection";
                break;
        }
        
        houseString += enddiv + enddiv;
        document.getElementById('houses').innerHTML += houseString;
    } else {
        location.reload();
    }
}


function div(cls, identity = "", name = false) {
    if (name) {
        var DivStr = '<div class="' + cls + '" id="' + identity + '" value = "' + name + '">';

    } else {
        var DivStr = '<div class="' + cls + '" id="' + identity + '">';
    }
    return DivStr;
}


function corPair(x, y, end = false) {
    var assembledString = '';
    assembledString += x;
    assembledString += ' ';
    assembledString += y;
    if (!end) {
        assembledString += ','
    }
    return assembledString;
}

function drawCard() { 
    var index = Math.floor(Math.random() * antallKort);
    if(debug) console.log('NEW CARD!');
    var card = document.getElementById('trukketKort');
    var cardName = document.getElementById('kortstokkSpan');
    var drawn = kortstokk[index];
    if(debug) console.table(drawn);
    resetCardPosition();
    card.src = drawn.img;
    cardName.innerHTML = drawn.navn;
    card.name = drawn.kategori;
    currentCard = drawn;
    drawnCards.push(drawn);
    checkFull();
}

function resetHouses() {
    if(debug) console.log('Reset houses');
    document.getElementById('houses').innerHTML = "";
    for (var i = 0; i < houses; i++) { showHouse(i); }
}

function select(element) {
    selected = element;
}

//----------------------------------------------------------------------
// Drag and drop functions
//----------------------------------------------------------------------

interact('.dropzone').dropzone({
    accept: '#kortholder',
    overlap: 0.2,
    ondropactivate: function (event) {
        event.target.classList.add('drop-active');
    },
    ondragenter: function (event) {
        var draggableElement = event.relatedTarget,
            dropzoneElement = event.target;
        dropzoneElement.classList.add('drop-target');
        draggableElement.classList.add('can-drop');
    },
    ondragleave: function (event) {
        event.target.classList.remove('drop-target');
        event.relatedTarget.classList.remove('can-drop');
    },
    ondrop: function (event) {
        var card = event.relatedTarget;
        var room = event.target;
        var roomImg = document.createElement("IMG");
        if (room.parentNode.id === currentCard.kategori || kategorierObj[currentCard.kategori].subkategorier.includes(room.parentNode.id)) {
            if (room.classList.contains('empty')) {
                room.classList.remove('empty');
                if(debug) console.log('Placed in : ' + room.id);
                roomImg.setAttribute('src', currentCard.img);
                roomImg.setAttribute('width', '80');
                roomImg.setAttribute('height', 'auto');
                roomImg.setAttribute('object-fit', 'cover');
                room.appendChild(roomImg);
                card.setAttribute('data-x', 0);
                card.setAttribute('data-y', 0);
                card.style.transform =
                    'translate(' + 0 + 'px, ' + 0 + 'px)';
                drawCard();
                if(debug) console.log(room.parentNode.id); //Prints the house category to console.
            } else {
                if(debug) console.log('Room already occupied');
            }
        } else {
            if(debug) console.log('Wrong category');
        }

    },
    ondropactivate: function (event) {
        event.target.classList.remove('drop-active');
        event.target.classList.remove('drop-target');
    }
});

interact('.drag-drop').draggable({
    inertia: true,
    restrict: {
        restriction: "#dynamicContent",
        endOnly: true,
        elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },
    autoScroll: true,
    onmove: dragMoveListener,
});

interact('.draggable')
    .draggable({
        // enable inertial throwing
        inertia: false,
        // keep the element within the area of it's parent
        restrict: {
            restriction: "#dynamicContent",
            endOnly: true,
            elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
        },
        autoScroll: true,
        onmove: dragMoveListener,
        onend: function (event) {
            //console.log('Moved');
        }
    });

function dragMoveListener(event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
        target.style.transform =
        'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
}

function resetCardPosition() {
    document.getElementById('kortholder').setAttribute('data-x', 0);
    document.getElementById('kortholder').setAttribute('data-y', 0);
    document.getElementById('kortholder').style.transform = 'translate(' + 0 + 'px, ' + 0 + 'px)';
}

function checkFull() {
    /*Checks if any of the houses are full*/
    var houses = document.getElementsByClassName("house");
    for (var house = 0; house < houses.length; house++) {
        var rooms = houses[house].getElementsByClassName("empty");
        if (rooms.length === 0) {
            if(debug) console.log("FULL HOUSE");
            if(debug) console.log("Hus: " + houses[house].id + " Full");
        }
    }
}

function selectLanguage() {
    language = (confirm('Norsk?')) ? 'norwegian' : 'english';
}

//----------------------------------------------------------------------
// MAIN
//----------------------------------------------------------------------

function main() {
    selectLanguage();
    if(debug) console.log('main');
    init();

    while (true) {
        try {
            var housesString = prompt("Hvor mange Hus: (1 - 6)", "3"); //Prompt user to enter number of houses to generate
            if (housesString == null || housesString == "") { //Controls if the input is a valid string
                throw "Vennligst spesefiser anntal hus"; //if the input is null, or has no content, altert user.
            } else {
                houses = parseInt(housesString); //Convert from string to integer
                if (houses > 0 && houses < 7) {
                    for (var i = 0; i < houses; i++) { showHouse(i); } //Generate houses 
                    break;
                } else {
                    if (houses <= 0) {
                        throw "Alt for få hus"; //Throw error
                    } else {
                        throw "Alt for mange hus"; //Throw error 
                    }
                }
            }
        }
        catch (err) { //Catch any errors from main code, display content to user in console and main heading
            console.log(err);
            window.alert(err + "Angi 1, 2, 3, 4 eller 5 hus"); //Alert user if given number is too low or too high
        }
    }
    drawCard();
}
