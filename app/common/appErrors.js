
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
export class InvalidEndpointsException extends Error{
    constructor(){
        super();
        this.message = "Endpoints not defined";
    }
}
export class LocalStorageNotSupportedException extends Error{
    constructor(){
        super();
        this.message = "Local Storage is not supported";
    }
}
export class InvalidJSONException extends Error{
    constructor(){
        super();
        this.message = "JSON format is not supported";
    }
}