export class TurboNumber {
    num: number; 
    constructor( num: number){
        this.num = num
    }

    substract(x: number): void {
       this.num = this.num - x;
    //    if ( x === Number.MAX_SAFE_INTEGER && this.num < 0){
    //        throw new Error("integer overflow");
    //    }
    }

    divide(x:number): void {
        this.num = this.num / x
    }

    result(): number{
        return this.num
    }
}