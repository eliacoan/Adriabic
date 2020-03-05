class Utils {
    static rnd(limit: number = 100) : number {
        return Math.floor(Math.random() * limit)
    }
    static chance(limit: number = 50) : boolean {
        return this.rnd() > limit
    }
}