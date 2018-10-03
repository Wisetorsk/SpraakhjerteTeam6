// JavaScript source code
//import { Draggable } from '@shopify/draggable';


function trekk() {
    document.getElementById('korttekst').innerHTML = kortstokk[randomInt(kategorier.length)].kategori;
}



function randomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
