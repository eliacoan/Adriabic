class Appearence {
    // Fields and properties
    gender: number
    hair: number
    moustache: number
    beard: number
    hat: number
    glasses: number
    scar: number
    // Constructor
    constructor(gender: number = -1, hair: number = -1, moustache: number = -1, beard: number = -1, hat: number = -1, glasses: number = -1, scar: number = -1) {
        this.gender = gender
        this.hair = hair
        this.moustache = moustache
        this.beard = beard
        this.hat = hat
        this.glasses = glasses
        this.scar = scar
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
    random(): void {
        this.gender=Utils.rnd(genders.length)
        this.hair=Utils.rnd(hairs.length)
        this.moustache=Utils.rnd(moustaches.length)
        this.beard=Utils.rnd(beards.length)
        this.hat=Utils.rnd(hats.length)
        this.glasses=Utils.rnd(glasses.length)
        this.scar=Utils.rnd(scars.length)
    }
}