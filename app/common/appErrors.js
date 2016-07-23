
export class DependenciesMissMatchException extends Error{
    constructor(){
        super();
        this.message = " Dependencies lengths not per param length ";
    }
}
export class InvalidArgumentTypeException extends Error{
    constructor(){
        super();
        this.message = " Dependencies lengths not per param length ";
    }
}