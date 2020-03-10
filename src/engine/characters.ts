class charactersEngine {
    static Create(id: number, name: string, lastName: string, gender: number): Character {
        let c = new Character(id, name, lastName, new Appearence)
        c.appearence.randomGender(gender)
        return c
    }
    static CreateRandom(id: number, name: string, lastName: string): Character {
        let c = new Character(id, name, lastName, new Appearence)
        c.appearence.random()
        return c
    }
}