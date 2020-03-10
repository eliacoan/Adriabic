"use strict";
class Appearence {
    // Constructor
    constructor(gender = -1, eyes = -1, hair = -1, moustache = -1, beard = -1, hat = -1, glasses = -1, scar = -1, body = -1) {
        this.gender = gender;
        this.eyes = eyes;
        this.hair = hair;
        this.moustache = moustache;
        this.beard = beard;
        this.hat = hat;
        this.glasses = glasses;
        this.scar = scar;
        this.body = body;
    }
    // Methods
    hasGender() {
        return this.gender !== -1;
    }
    hasHair() {
        return this.hair !== -1;
    }
    hasMoustache() {
        return this.moustache !== -1;
    }
    hasBeard() {
        return this.beard !== -1;
    }
    hasHat() {
        return this.hat !== -1;
    }
    hasGlasses() {
        return this.glasses !== -1;
    }
    hasScar() {
        return this.scar !== -1;
    }
    hasBody() {
        return this.body !== -1;
    }
    random() {
        this.gender = Utils.rnd(genders.length);
        this.eyes = Utils.rnd(eyes.length);
        this.hair = Utils.rnd(hairs.length);
        if (this.gender === 0) {
            this.moustache = Utils.chance() ? Utils.rnd(moustaches.length) : moustaches.length - 1;
            this.beard = Utils.chance() ? Utils.rnd(beards.length) : beards.length - 1;
            this.scar = Utils.chance() ? Utils.rnd(scars.length) : scars.length - 1;
        }
        else {
            this.moustache = moustaches.length - 1;
            this.beard = beards.length - 1;
            this.scar = scars.length - 1;
        }
        this.hat = Utils.rnd(hats.length);
        this.glasses = Utils.chance() ? Utils.rnd(glasses.length) : glasses.length - 1;
        this.body = Utils.rnd(bodies.length);
    }
    randomGender(gender) {
        this.gender = gender;
        this.eyes = Utils.rnd(eyes.length);
        this.hair = Utils.rnd(hairs.length);
        if (this.gender === 0) {
            this.moustache = Utils.chance() ? Utils.rnd(moustaches.length) : moustaches.length - 1;
            this.beard = Utils.chance() ? Utils.rnd(beards.length) : beards.length - 1;
            this.scar = Utils.chance() ? Utils.rnd(scars.length) : scars.length - 1;
        }
        else {
            this.moustache = moustaches.length - 1;
            this.beard = beards.length - 1;
            this.scar = scars.length - 1;
        }
        this.hat = Utils.rnd(hats.length);
        this.glasses = Utils.chance() ? Utils.rnd(glasses.length) : glasses.length - 1;
        this.body = Utils.rnd(bodies.length);
    }
}
class Character {
    // Constructor
    constructor(id, name, lastName, appearence) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.appearence = appearence;
    }
    // Methods
    fullname() {
        Utils.log(this.id.toString());
        return this.lastName + ' ' + this.name;
    }
}
class City {
    // Constructor
    constructor(id, name, size) {
        this.id = id;
        this.name = name;
        this.size = size;
        this.marina = undefined;
        this.market = undefined;
        this.brothel = undefined;
        this.police = undefined;
        this.hospital = undefined;
        this.blackMarket = undefined;
    }
}
var PlaceType;
(function (PlaceType) {
    PlaceType[PlaceType["Marina"] = 1] = "Marina";
    PlaceType[PlaceType["Market"] = 2] = "Market";
    PlaceType[PlaceType["Brothel"] = 3] = "Brothel";
    PlaceType[PlaceType["Police"] = 4] = "Police";
    PlaceType[PlaceType["Hospital"] = 5] = "Hospital";
    PlaceType[PlaceType["BlackMarket"] = 6] = "BlackMarket";
})(PlaceType || (PlaceType = {}));
class Place {
    // Constructor
    constructor(id, type, npc) {
        this.id = id;
        this.type = type;
        this.npc = npc;
    }
}
class Utils {
    static rnd(value = 100) {
        return Math.floor(Math.random() * value);
    }
    static rndRange(min = 0, max = 0) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    static chance(threshold = 50) {
        return this.rnd() > threshold;
    }
    static log(text) {
        console.log('INF    ' + text);
    }
    static err(text) {
        console.log('ERR    ' + text);
    }
    static wrn(text) {
        console.log('WRN    ' + text);
    }
}
let genders = ['Male', 'Female'];
let eyes = ['Little', 'Tired', 'Vicious', 'Kid', 'Bad'];
let hairs = ['Short', 'Long', 'Normal', 'Mohawk', 'High', 'Curly', 'Chinese', 'Young', 'Bald'];
let moustaches = ['Big', 'Tiny', 'Dalì', 'Forebrow', 'No'];
let beards = ['Big', 'Sideburns', 'Tiny', 'No'];
let hats = ['Baseball', 'Beanie', 'No'];
let glasses = ['Sunglasses', 'Prescription', 'Prescription 2', 'Glamour', 'No'];
let scars = ['Eyebrow', 'Cheeck', 'No'];
let bodies = ['Blue', 'Yellow', 'Red', 'Jacket'];
var CitySize;
(function (CitySize) {
    CitySize[CitySize["Small"] = 1] = "Small";
    CitySize[CitySize["Medium"] = 2] = "Medium";
    CitySize[CitySize["Big"] = 3] = "Big";
})(CitySize || (CitySize = {}));
let cities = new Array({
    id: 0,
    name: 'Doruk',
    size: CitySize.Medium
}, {
    id: 1,
    name: 'Ostaber',
    size: CitySize.Small
}, {
    id: 2,
    name: 'Gratia',
    size: CitySize.Big
}, {
    id: 3,
    name: 'Kokrol',
    size: CitySize.Medium
}, {
    id: 4,
    name: 'Publaziv',
    size: CitySize.Big
}, {
    id: 5,
    name: 'Lenfor',
    size: CitySize.Small
}, {
    id: 6,
    name: 'Fonais',
    size: CitySize.Medium
});
class charactersEngine {
    static Create(id, name, lastName, gender) {
        let c = new Character(id, name, lastName, new Appearence);
        c.appearence.randomGender(gender);
        return c;
    }
    static CreateRandom(id, name, lastName) {
        let c = new Character(id, name, lastName, new Appearence);
        c.appearence.random();
        return c;
    }
}
const STORAGE_CITIES = 'AG_CITIES';
class gameEngine {
    static CreateGame() {
        // Create Doruk places
        cities[0].marina = new Place(100, PlaceType.Marina, charactersEngine.Create(1000, "Tony", "De Franco", 0));
        cities[0].market = new Place(101, PlaceType.Market, charactersEngine.Create(1001, "Sam", "Krasin", 0));
        cities[0].brothel = new Place(102, PlaceType.Brothel, charactersEngine.Create(1002, "Kushina", "Leti", 1));
        // Create Ostaber places
        cities[1].marina = new Place(110, PlaceType.Marina, charactersEngine.Create(1003, "Renata", "Jotia", 1));
        // Create Gratia places
        cities[2].marina = new Place(120, PlaceType.Marina, charactersEngine.CreateRandom(1004, "Ho", "Lipora"));
        cities[2].brothel = new Place(121, PlaceType.Brothel, charactersEngine.Create(1005, "Harry", "Perry", 0));
        cities[2].police = new Place(122, PlaceType.Police, charactersEngine.Create(1006, "Jason", "Young", 0));
        cities[2].hospital = new Place(123, PlaceType.Hospital, charactersEngine.Create(1007, "Laura", "Jeong", 1));
        // Create Kokrol places
        cities[3].marina = new Place(130, PlaceType.Marina, charactersEngine.Create(1008, "Paolo", "Ferro", 0));
        cities[3].market = new Place(131, PlaceType.Market, charactersEngine.CreateRandom(1009, "Doris", "Dumble"));
        // Create Publaziv places
        cities[4].marina = new Place(140, PlaceType.Marina, charactersEngine.Create(1010, "Gunther", "Lloyd", 0));
        cities[4].blackMarket = new Place(141, PlaceType.BlackMarket, charactersEngine.Create(1011, "Lady", "Fox", 1));
        // Create Lenfor places
        cities[5].marina = new Place(150, PlaceType.Marina, charactersEngine.Create(1012, "Erika", "Terry", 1));
        // Create Fonais places
        cities[6].marina = new Place(160, PlaceType.Marina, charactersEngine.Create(1013, "Henry", "Reigns", 0));
        cities[6].brothel = new Place(161, PlaceType.Brothel, charactersEngine.Create(1014, "Sister", "Kelly", 1));
        Utils.log('Cities generated');
    }
    static SaveGame() {
        window.localStorage.setItem(STORAGE_CITIES, JSON.stringify(cities));
        Utils.log(cities.length + ' cities saved on storage');
    }
    static LoadGame() {
        var _cities = window.localStorage.getItem(STORAGE_CITIES);
        if (_cities !== null) {
            cities = JSON.parse(_cities);
            Utils.log(cities.length + ' cities loaded');
        }
        else {
            Utils.wrn('no cities found on storage');
        }
    }
}
