class Character {
    // Fields and properties
    id: number
    name: string
    lastName: string
    appearence: Appearence
    // Constructor
    constructor(id: number, name: string, lastName: string, appearence: Appearence) {
        this.id = id
        this.name = name
        this.lastName = lastName
        this.appearence = appearence
    }
    // Methods
    fullname() {
        return this.lastName + ' ' + this.name;
    }
}