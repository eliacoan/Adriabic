"use strict";
class Appearence {
    // Constructor
    constructor(gender = -1, eyes = -1, hair = -1, moustache = -1, beard = -1, hat = -1, glasses = -1, scar = -1) {
        this.gender = gender;
        this.eyes = eyes;
        this.hair = hair;
        this.moustache = moustache;
        this.beard = beard;
        this.hat = hat;
        this.glasses = glasses;
        this.scar = scar;
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
    random() {
        this.gender = Utils.rnd(genders.length);
        this.eyes = Utils.rnd(eyes.length);
        this.hair = Utils.rnd(hairs.length);
        if (this.gender === 0) {
            this.moustache = Utils.rnd(moustaches.length);
            this.beard = Utils.rnd(beards.length);
            this.scar = Utils.chance() ? Utils.rnd(scars.length) : scars.length - 1;
        }
        else {
            this.moustache = moustaches.length - 1;
            this.beard = beards.length - 1;
            this.scar = scars.length - 1;
        }
        this.hat = Utils.rnd(hats.length);
        this.glasses = Utils.rnd(glasses.length);
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
        return this.lastName + ' ' + this.name;
    }
}
class City {
    // Constructor
    constructor(id, name, size) {
        this.id = id;
        this.name = name;
        this.size = size;
    }
    // Methods
    static lcName() {
        return this.name.toLowerCase();
    }
}
class Utils {
    static rnd(limit = 100) {
        return Math.floor(Math.random() * limit);
    }
    static chance(limit = 50) {
        return this.rnd() > limit;
    }
}
let genders = ['Male', 'Female'];
let eyes = ['Little', 'Tired', 'Vicious', 'Kid', 'Bad'];
let hairs = ['Short', 'Long', 'Friar', 'Punk', 'High', 'No'];
let moustaches = ['Big', 'Tiny', 'No'];
let beards = ['Big', 'Sideburns', 'Tiny', 'No'];
let hats = ['Baseball', 'Beanie', 'No'];
let glasses = ['Sunglasses', 'Prescription', 'Prescription 2', 'No'];
let scars = ['Eyebrow', 'Cheeck', 'No'];
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
    static Create(id, name, lastName) {
        let c = new Character(id, name, lastName, new Appearence);
        c.appearence.random();
        return c;
    }
}
