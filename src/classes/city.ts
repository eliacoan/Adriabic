class City {
    // Fields and properties
    id: number
    name: string
    size: CitySize
    // Constructor
    constructor(id: number, name: string, size: CitySize) {
        this.id = id
        this.name = name
        this.size = size
    }
    // Methods
    static lcName(): string {
        return this.name.toLowerCase()
    }
}