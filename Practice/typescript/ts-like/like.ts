export class Like{
    constructor(private _likes?:number, private _selected?:boolean){

    }

    
    get likes(){return this._likes}

    get selected() {return this._selected}

    toggleLike(){
        this._likes += (this._selected) ? -1 : +1 // if true -1 else +1 use ternary operator instead of if else
        this._selected =!this._selected //toggle the value 
    }
    
}