// JavaScript source code
this.touch = "ontouchstart" in window || (window.DocumentTouch && document instanceof DocumentTouch);

//----------------------------------------------------------------------
// Objects
//----------------------------------------------------------------------


var hDim = {
    width: 400,
    height: 400,
    roofWidth: 300, //50px added per side to get full width
    roofHeight: 100
};

//----------------------------------------------------------------------
// END Objects
//----------------------------------------------------------------------

//----------------------------------------------------------------------
// Variables
//----------------------------------------------------------------------

var enddiv = '</div>';
var endsvg = '</svg>';
var kategorier = ['klær', 'mat', 'kjøretøy', 'skole', 'verktøy', 'mennesker', 'dyr', 'grønnsaker', 'frukt'];
var subkategorier = {
    'klær': ['sko', 'hatt'],
    'mat': ['grønnsaker', 'frukt'],
    'kjøretøy': ['bil', 'lastebil'],
    'skole': [],
    'verktøy': [],
    'mennesker': [],
    'dyr': [],
    'grønnsaker': ['mat'],
    'frukt': ['mat']
};
var kategorierObj = {};
var antallKort = imagesJson.length;
var kortstokk = [];
var houses;
var currentCard, selected = NaN;
var drawnCards = [];


//----------------------------------------------------------------------
// END Variables
//----------------------------------------------------------------------

//----------------------------------------------------------------------
// Object definitions
//----------------------------------------------------------------------

class Kategori {
    constructor(kategori, subkategorier) {
        this.kategori = kategori;
        this.subkategorier = subkategorier; //array

    }
}

class Kort {
    constructor(kategori, img, navn = 'TEST', debug = false) {
        /*
         * Kort Object
         * Kategori: kategori
         * img: image url
         * navn: card name
         */
        this.kategori = kategori;
        this.navn = navn;
        this.img = img;
        this.debug = debug;
    }
}

//----------------------------------------------------------------------
// END Object definitions
//----------------------------------------------------------------------

//----------------------------------------------------------------------
// Page functions
//----------------------------------------------------------------------
function init() {
    for (index in kategorier) {
        var kategorinavn = kategorier[index];
        kategorierObj[kategorinavn] = new Kategori(kategorinavn, subkategorier[kategorinavn]);
    }
    buildDeck();
}

function buildDeck() {
    for (var index = 0; index < antallKort; index++) { //Building the card deck
        kortstokk[index] = new Kort(imagesJson[index].kategori, imagesJson[index].src, imagesJson[index].src.slice(4, -4)); //Construct new object based on JSON data in imagesJson
    }
}


function showHouse(houseNumber) {
    /*
     * House generation function
     * Assemble html grid elements and insert into houses element
     */
    if (kategorier.length > 0) {
        var currKategori = kategorier.splice([Math.floor(Math.random() * kategorier.length)], 1);
        houseString = '';
        houseString += div('plot');
        houseString += div('roof');
        houseString += '<svg width=400 height=100>';
        houseString += '<polygon points="' + corPair(50, 0) + corPair((50 + hDim.roofWidth), 0) + corPair((100 + hDim.roofWidth), hDim.roofHeight) + corPair(0, hDim.roofHeight, true) + '"  fill="red" stroke="black" />';
        houseString += '<polyline points="' + corPair(100, 70) + corPair(100, 20) + corPair(150, 20) + corPair(150, 70, true) + '" stroke="black" stroke-width="5px" fill="red"/>';
        houseString += endsvg;
        houseString += enddiv;
        houseString += div('house', currKategori, currKategori);
        for (var i = 0; i < 9; i++) { houseString += '<div style="" class="dropzone empty" id="hus' + houseNumber + 'rom' + i + '" ></div>'; }
        houseString += enddiv;
        houseString += div('kategori', 'kategori');
        houseString += currKategori; //Chooses a random element in "kategorier", returns it and removes it from the array
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

function drawCard() { //Page Function
    var index = Math.floor(Math.random() * antallKort);
    console.log('NEW CARD!');
    var card = document.getElementById('trukketKort');
    var drawn = kortstokk[index];
    resetCardPosition();
    card.src = drawn.img;
    card.name = drawn.kategori;
    currentCard = drawn;
    drawnCards.push(drawn);
}

function resetHouses() {
    console.log('Reset houses');
    document.getElementById('houses').innerHTML = "";
    for (var i = 0; i < houses; i++) { showHouse(i); }
}

function select(element) {
    selected = element;
}

//----------------------------------------------------------------------
// END Page Functions
//----------------------------------------------------------------------

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
        console.log('Dragged in');
    },
    ondragleave: function (event) {
        event.target.classList.remove('drop-target');
        event.relatedTarget.classList.remove('can-drop');
        console.log('Dragged out');
    },
    ondrop: function (event) {

        var card = event.relatedTarget;
        var room = event.target;
        var roomImg = document.createElement("IMG");

        if (room.parentNode.id === currentCard.kategori || kategorierObj[currentCard.kategori].subkategorier.includes(room.parentNode.id)) {
            if (room.classList.contains('empty')) {
                room.classList.remove('empty');
                console.log('Placed in : ' + room.id);

                roomImg.setAttribute('src', currentCard.img);
                roomImg.setAttribute('width', '70');
                roomImg.setAttribute('height', '70');
                room.appendChild(roomImg);

                card.setAttribute('data-x', 0);
                card.setAttribute('data-y', 0);
                card.style.transform =
                    'translate(' + 0 + 'px, ' + 0 + 'px)';
                drawCard();
                console.log(room.parentNode.id); //Prints the house category to console.
            } else {
                console.log('Room already occupied');
            }
        } else {
            console.log('Wrong category');
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
            console.log('Moved');
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

//----------------------------------------------------------------------
// END Drag and drop functions
//----------------------------------------------------------------------


//----------------------------------------------------------------------
// MAIN
//----------------------------------------------------------------------

function main() {
    console.log('main');
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