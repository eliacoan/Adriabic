class charactersEngine {
    static Create(id: number, name: string, lastName: string) : Character {
        let c = new Character(id, name, lastName, new Appearence)
        c.appearence.random()
        return c
    }
}