class Appearence {
    // Fields and properties
    gender: number
    eyes: number
    hair: number
    moustache: number
    beard: number
    hat: number
    glasses: number
    scar: number
    body: number
    hueRotate: number
    // Constructor
    constructor(gender: number = -1, eyes: number = -1, hair: number = -1, moustache: number = -1, beard: number = -1, hat: number = -1, glasses: number = -1, scar: number = -1, body: number = -1, hueRotate = 0) {
        this.gender = gender
        this.eyes = eyes
        this.hair = hair
        this.moustache = moustache
        this.beard = beard
        this.hat = hat
        this.glasses = glasses
        this.scar = scar
        this.body = body
        this.hueRotate = hueRotate
    }
    // Methods
    hasGender(): boolean {
        return this.gender !== -1
    }
    hasHair(): boolean {
        return this.hair !== -1
    }
    hasMoustache(): boolean {
        return this.moustache !== -1
    }
    hasBeard(): boolean {
        return this.beard !== -1
    }
    hasHat(): boolean {
        return this.hat !== -1
    }
    hasGlasses(): boolean {
        return this.glasses !== -1
    }
    hasScar(): boolean {
        return this.scar !== -1
    }
    hasBody(): boolean {
        return this.body !== -1
    }
    random(): void {
        this.gender = Utils.rnd(genders.length)
        this.eyes = Utils.rnd(eyes.length)
        this.hair = Utils.rnd(hairs.length)
        if (this.gender === 0) {
            this.moustache = Utils.chance() ? Utils.rnd(moustaches.length) : moustaches.length - 1
            this.beard = Utils.chance() ? Utils.rnd(beards.length) : beards.length - 1
            this.scar = Utils.chance() ? Utils.rnd(scars.length) : scars.length - 1
        }
        else {
            this.moustache = moustaches.length - 1
            this.beard = beards.length - 1
            this.scar = scars.length - 1
        }
        this.hat = Utils.rnd(hats.length)
        this.glasses = Utils.chance() ? Utils.rnd(glasses.length) : glasses.length - 1
        this.body = Utils.rnd(bodies.length)
        this.hueRotate = Utils.rnd(360)
    }
    randomGender(gender: number): void {
        this.gender = gender
        this.eyes = Utils.rnd(eyes.length)
        this.hair = Utils.rnd(hairs.length)
        if (this.gender === 0) {
            this.hair = Utils.rnd(hairs.length)
            this.moustache = Utils.chance() ? Utils.rnd(moustaches.length) : moustaches.length - 1
            this.beard = Utils.chance() ? Utils.rnd(beards.length) : beards.length - 1
            this.scar = Utils.chance() ? Utils.rnd(scars.length) : scars.length - 1
        }
        else {
            this.hair = Utils.rnd(hairs.length - 1)
            this.moustache = moustaches.length - 1
            this.beard = beards.length - 1
            this.scar = scars.length - 1
        }
        this.hat = Utils.rnd(hats.length)
        this.glasses = Utils.chance() ? Utils.rnd(glasses.length) : glasses.length - 1
        this.body = Utils.rnd(bodies.length)
        this.hueRotate = Utils.rnd(360)
    }
}