class Utils {
    static rnd(value: number = 100): number {
        return Math.floor(Math.random() * value)
    }
    static rndRange(min: number = 0, max: number = 0) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    static chance(threshold: number = 50): boolean {
        return this.rnd() > threshold
    }
    static log(text: string) {
        console.log('INF    ' + text)
    }
    static err(text: string) {
        console.log('ERR    ' + text)
    }
    static wrn(text: string) {
        console.log('WRN    ' + text)
    }
}