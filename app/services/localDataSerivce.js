/**
 * Created by Akhil on 24-07-2016.
 */

import {service, inject} from 'ng-app';
import Base from 'common/Base';

@service({name:'SketchDataService'})
@inject('DataService')
class SketchDataService extends Base  {
    constructor() {
        super(arguments);
        debugger;
    }
    get mapDI(){
        return  ['$h'];
    }


    get http(){

    }
}
