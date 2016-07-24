/**
 * Created by Akhil on 24-07-2016.
 */

import {service, inject} from 'ng-app';
import BaseDataService from './baseService';
import {rest} from './decorator/rest';

@inject('DataService')
@rest({endpoint:'tools'})
@service({name:'ToolsDataService'})
class ToolsDataService extends BaseDataService  {
    constructor(ds) {
        super(arguments);
        this.ds= ds;
    }

    getEndPointService(){
     return this.ds.getEndPointService() ;
    }
}
