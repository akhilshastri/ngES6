
export class DependenciesMissMatchException extends Error{
    constructor(){
        super();
        this.message = " Dependencies lengths not per param length ";
    }
}