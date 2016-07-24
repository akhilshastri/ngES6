/**
 * Created by Akhil on 24-07-2016.
 */

import {service, inject} from 'ng-app';
import BaseDataService from './baseService';
import {rest} from './decorator/rest';

@inject('DataService')
@rest({endpoint:'sketch'})
@service({name:'SketchDataService'})
class SketchDataService extends BaseDataService  {
    constructor(ds) {
        super(arguments);
        this.ds= ds;
    }

    getEndPointService(){
     return this.ds.getEndPointService() ;
    }
}
