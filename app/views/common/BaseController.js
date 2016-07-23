/**
 * Created by Akhil on 23-07-2016.
 */
import {DependenciesMissMatchException} from 'common/appErrors';

export default class BaseController {
    constructor(args){
        //debugger;
        const deps =  this.mapDI;
        if(deps && deps.length>0 ){
            this.applyDIMappings(args,deps);
        }
    }
    applyDIMappings(params, dependencies) {
        if (params.length != dependencies.length) {
            throw new DependenciesMissMatchException();
        }
        dependencies.forEach((de,idx)=>{
            this[de] = params[idx];
        });
    }
}