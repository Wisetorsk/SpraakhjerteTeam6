// JavaScript source code
var titleImages =
{
    clothes: 'img/clothesTitle.png'
    ,

    people: 'img/peopleTitle.png'
    ,

    tools: 'img/toolTitle.png'
    ,

    animal: 'img/animalsTitle.png'
    ,

    fruit: 'img/fruitTitle.png'
    ,

    school: 'img/schoolTitle.png'
    ,

    vegetables: 'img/vegetablesTitle.png'
    ,

    vehicle: 'img/vehicleTitle.png'
    ,

    food: 'img/foodTitle.png'
};


var imagesJson = [
    { kategori: 'fruit', src: 'img/bananas.png', name: {nor: 'Banan', eng: 'Banana'}, audio: '' },
    { kategori: 'animal', src: 'img/bear.png', name: { nor: 'Bj\u00F8rn', eng: 'Bear' }, audio: '' },
    { kategori: 'animal', src: 'img/sloth.png', name: { nor: 'Dovendyr', eng: 'Sloth' }, audio: ''  },
    { kategori: 'animal', src: 'img/hippo.png', name: { nor: 'Flodhest', eng: 'Hippo' }, audio: ''  },
    { kategori: 'animal', src: 'img/beaver.png', name: { nor: 'Bever', eng: 'Beaver' }, audio: ''  },
    { kategori: 'school', src: 'img/blackboard.png', name: { nor: 'Tavle', eng: 'Blackboard' }, audio: ''  },
    { kategori: 'people', src: 'img/boy.png', name: { nor: 'Gutt', eng: 'Boy' }, audio: ''  },
    { kategori: 'people', src: 'img/people.png', name: { nor: 'Mennesker', eng: 'People' }, audio: ''  },
    { kategori: 'people', src: 'img/girl2.png', name: { nor: 'Jente', eng: 'Girl' }, audio: ''  },
    { kategori: 'people', src: 'img/roman.png', name: { nor: 'Romersk Mann', eng: 'Roman Man' }, audio: ''  },
    { kategori: 'people', src: 'img/girl3.png', name: { nor: 'Jente', eng: 'Girl' }, audio: ''  },
    { kategori: 'people', src: 'img/dude.png', name: { nor: 'Gutt', eng: 'Boy' }, audio: ''  },
    { kategori: 'people', src: 'img/greek.png', name: { nor: 'Gr\u00E6sk Dame', eng: 'Greek Lady' }, audio: ''  },
    { kategori: 'people', src: 'img/fisher.png', name: { nor: 'Gutt Fisker', eng: 'Boy Fishing' }, audio: ''  },
    { kategori: 'people', src: 'img/belgian.png', name: { nor: 'Mann', eng: 'Man' }, audio: ''  },
    { kategori: 'clothes', src: 'img/jumper.png', name: { nor: 'Genser', eng: 'Jumper' }, audio: ''  },
    { kategori: 'vegetables', src: 'img/broccoli.png', name: { nor: 'Brokkoli', eng: 'Broccoli' }, audio: ''  },
    { kategori: 'clothes', src: 'img/cap.png', name: { nor: 'Caps', eng: 'Cap' }, audio: ''  },
    { kategori: 'vehicle', src: 'img/car1.png', name: { nor: 'Bil', eng: 'Car' }, audio: ''  },
    { kategori: 'vehicle', src: 'img/car2.png', name: { nor: 'Bil', eng: 'Car' }, audio: ''  },
    { kategori: 'people', src: 'img/carpenter.png', name: { nor: 'Snekker', eng: 'Carpenter' }, audio: ''  },
    { kategori: 'vegetables', src: 'img/carrot.png', name: { nor: 'Gulrot', eng: 'Carrot' }, audio: ''  },
    { kategori: 'animal', src: 'img/chicken.png', name: { nor: 'H\u00F8ne', eng: 'Chicken' }, audio: ''  },
    { kategori: 'fruit', src: 'img/coconut.png', name: { nor: 'Kokosnøtt', eng: 'Coconut' }, audio: ''  },
    { kategori: 'animal', src: 'img/cow.png', name: { nor: 'Ku', eng: 'Cow' }, audio: ''  },
    { kategori: 'animal', src: 'img/dog.png', name: { nor: 'Hund', eng: 'Dog' }, audio: ''  },
    { kategori: 'clothes', src: 'img/dress.png', name: { nor: 'Kjole', eng: 'Dress' }, audio: ''  },
    { kategori: 'animal', src: 'img/elephant.png', name: { nor: 'Elefant', eng: 'Elephant' }, audio: ''  },
    { kategori: 'vehicle', src: 'img/firetruck.png', name: { nor: 'Brannbil', eng: 'Firetruck' }, audio: ''  },
    { kategori: 'animal', src: 'img/fox.png', name: { nor: 'Rev', eng: 'Fox' }, audio: '' },
    { kategori: 'school', src: 'img/geometry.png', name: { nor: 'Geometri', eng: 'Geometry' }, audio: '' },
    { kategori: 'food', src: 'img/hamburger.png', name: { nor: 'Hamburger', eng: 'Hamburger' }, audio: '' },
    { kategori: 'tools', src: 'img/hammer.png', name: { nor: 'Hammer', eng: 'Hammer' }, audio: '' },
    { kategori: 'clothes', src: 'img/hat.png', name: { nor: 'Hatt', eng: 'Hat' }, audio: '' },
    { kategori: 'clothes', src: 'img/jeans.png', name: { nor: 'Bukser', eng: 'Jeans' }, audio: '' },
    { kategori: 'vehicle', src: 'img/mc.png', name: { nor: 'Motorsykkel', eng: 'Motorbike' }, audio: '' },
    { kategori: 'animal', src: 'img/mouse.png', name: { nor: 'Mus', eng: 'Mouse' }, audio: '' },
    { kategori: 'fruit', src: 'img/orange.png', name: { nor: 'Appelsin', eng: 'Orange' }, audio: '' },
    { kategori: 'animal', src: 'img/panda.png', name: { nor: 'Panda', eng: 'Panda' }, audio: '' },
    { kategori: 'school', src: 'img/pencil.png', name: { nor: 'Blyant', eng: 'Pencil' }, audio: '' },
    { kategori: 'animal', src: 'img/pig.png', name: { nor: 'Gris', eng: 'Pig' }, audio: '' },
    { kategori: 'vegetables', src: 'img/radish.png', name: { nor: 'Reddik', eng: 'Radish' }, audio: '' },
    { kategori: 'tools', src: 'img/screwdriver.png', name: { nor: 'Skrutrekker', eng: 'Screwdriver' }, audio: '' },
    { kategori: 'clothes', src: 'img/shoes1.png', name: { nor: 'Sko', eng: 'Shoes' }, audio: '' },
    { kategori: 'clothes', src: 'img/shoes2.png', name: { nor: 'Sko', eng: 'Shoes' }, audio: '' },
    { kategori: 'tools', src: 'img/spanner.png', name: { nor: 'Fastn\u00F8kkel', eng: 'Spanner' }, audio: '' },
    { kategori: 'fruit', src: 'img/strawberry.png', name: { nor: 'Jordb\u00E6r', eng: 'Strawberry' }, audio: '' },
    { kategori: 'fruit', src: 'img/tomato.png', name: { nor: 'Tomat', eng: 'Tomato' }, audio: '' },
    { kategori: 'vehicle', src: 'img/tractor.png', name: { nor: 'Traktor', eng: 'Tractor' }, audio: '' },
    { kategori: 'vehicle', src: 'img/truck.png', name: { nor: 'Lastebil', eng: 'Truck' }, audio: '' },
    { kategori: 'tools', src: 'img/wrench.png', name: { nor: 'Skiften\u00F8kkel', eng: 'Wrench' }, audio: '' },
    { kategori: 'animal', src: 'img/cat.png', name: { nor: 'Katt', eng: 'Cat' }, audio: '' },
    { kategori: 'school', src: 'img/schoolchildren.png', name: { nor: 'Skolebarn', eng: 'School class' }, audio: '' },
    { kategori: 'animal', src: 'img/snake.png', name: { nor: 'Slange', eng: 'Snake' }, audio: '' },
    { kategori: 'people', src: 'img/caveman.png', name: { nor: 'Steinaldermenneske', eng: 'Caveman' }, audio: '' },
    { kategori: 'animal', src: 'img/zebra.png', name: { nor: 'Zebra', eng: 'Zebra' }, audio: '' },
    { kategori: 'vehicle', src: 'img/car3.png', name: { nor: 'Bil', eng: 'Car' }, audio: '' },
    { kategori: 'fruit', src: 'img/cherries.png', name: { nor: 'Kirseb\u00E6r', eng: 'Cherries' }, audio: '' },
    { kategori: 'tools', src: 'img/drill.png', name: { nor: 'Drill', eng: 'Drill' }, audio: '' },
    { kategori: 'fruit', src: 'img/kiwi.png', name: { nor: 'Kiwi', eng: 'Kiwi' }, audio: '' },
    { kategori: 'food', src: 'img/sandwich.png', name: { nor: 'Sm\u00F8rbr\u00F8d', eng: 'Sandwich' }, audio: '' },
    { kategori: 'animal', src: 'img/bee.png', name: { nor: 'Bie', eng: 'Bee' }, audio: '' },
    { kategori: 'animal', src: 'img/frog.png', name: { nor: 'Frosk', eng: 'Frog' }, audio: '' },
    { kategori: 'animal', src: 'img/cod.png', name: { nor: 'Torsk', eng: 'Cod' }, audio: '' },
    { kategori: 'vegetables', src: 'img/pepper.png', name: { nor: 'Paprika', eng: 'Bell Pepper' }, audio: '' },
    { kategori: 'vehicle', src: 'img/car4.png', name: { nor: 'Bil', eng: 'Car' }, audio: '' },
    { kategori: 'animal', src: 'img/whale.png', name: { nor: 'Hval', eng: 'Whale' }, audio: '' },
    { kategori: 'animal', src: 'img/crab.png', name: { nor: 'Krabbe', eng: 'Crab' }, audio: '' },
    { kategori: 'people', src: 'img/girl.png', name: { nor: 'Jente', eng: 'Girl' }, audio: '' },
    { kategori: 'animal', src: 'img/lamb.png', name: { nor: 'Lam', eng: 'Lamb' }, audio: '' },
    { kategori: 'tools', src: 'img/shovel.png', name: { nor: 'Spade', eng: 'Shovel' }, audio: '' },
    { kategori: 'tools', src: 'img/shovel2.png', name: { nor: 'Spade', eng: 'Shovel' }, audio: '' },
    { kategori: 'tools', src: 'img/hammer2.png', name: { nor: 'Hammer', eng: 'Hammer' }, audio: '' },
    { kategori: 'tools', src: 'img/hammer3.png', name: { nor: 'Hammer', eng: 'Hammer' }, audio: '' },
    { kategori: 'tools', src: 'img/pliers.png', name: { nor: 'Tang', eng: 'Pliers' }, audio: '' },
    { kategori: 'food', src: 'img/juicebox.png', name: { nor: 'Jusboks', eng: 'Juice Box' }, audio: '' },
    { kategori: 'food', src: 'img/pizza.png', name: { nor: 'Pizza', eng: 'Pizza' }, audio: '' },
    { kategori: 'food', src: 'img/hotdog.png', name: { nor: 'P\u00F8lse', eng: 'Hot Dog' }, audio: '' },
    { kategori: 'food', src: 'img/cheese.png', name: { nor: 'Ost', eng: 'Cheese' }, audio: '' },
    { kategori: 'food', src: 'img/icecream.png', name: { nor: 'Iskrem', eng: 'Icecream' }, audio: '' },
    { kategori: 'food', src: 'img/fries.png', name: { nor: 'Pommes Frittes', eng: 'French Fries' }, audio: '' },
    { kategori: 'tools', src: 'img/saw.png', name: { nor: 'Sag', eng: 'Sag' }, audio: '' },
    { kategori: 'tools', src: 'img/pliers2.png', name: { nor: 'Tang', eng: 'Pliers' }, audio: '' },
    { kategori: 'tools', src: 'img/tapemeasure.png', name: { nor: 'M\u00E5leb\u00E5nd', eng: 'Tape Measure' }, audio: '' },
    { kategori: 'tools', src: 'img/pliers3.png', name: { nor: 'Tang', eng: 'Pliers' }, audio: '' },
    { kategori: 'tools', src: 'img/swissarmy.png', name: { nor: 'Multiverkt\u00F8y', eng: 'Multi Tool' }, audio: '' },
    { kategori: 'animal', src: 'img/bird.png', name: { nor: 'Fugl', eng: 'Bird' }, audio: '' }
];
