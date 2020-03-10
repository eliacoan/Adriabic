class City {
    // Fields and properties
    id: number
    name: string
    size: CitySize
    marina?: Place
    market?: Place
    brothel?: Place
    police?: Place
    hospital?: Place
    blackMarket?: Place
    // Constructor
    constructor(id: number, name: string, size: CitySize) {
        this.id = id
        this.name = name
        this.size = size
        this.marina = undefined
        this.market = undefined
        this.brothel = undefined
        this.police = undefined
        this.hospital = undefined
        this.blackMarket = undefined
    }
    // Methods
}