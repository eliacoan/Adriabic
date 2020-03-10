enum PlaceType {
    Marina = 1,
    Market = 2,
    Brothel = 3,
    Police = 4,
    Hospital = 5,
    BlackMarket = 6
}

class Place {
    // Fields and properties
    id: number
    type: PlaceType
    npc: Character
    // Constructor
    constructor(id: number, type: PlaceType, npc: Character) {
        this.id = id
        this.type = type
        this.npc = npc
    }
}