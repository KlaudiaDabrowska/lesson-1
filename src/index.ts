export class TurboNumber {
    num: number; 
    constructor( num: number){
        this.num = num
    }

    subtract(x: number) : TurboNumber {
       this.num = this.num - x;
    //    if ( x === Number.MAX_SAFE_INTEGER && this.num < 0){
    //        throw new Error("integer overflow");
    //    }
        return this
    }

    divide(x:number) : TurboNumber {
        if (x === 0){
            throw new Error("Cannot divide by zero")
        }
        this.num = this.num / x
        return this
    }

    result(): number{
        return this.num
    }
}