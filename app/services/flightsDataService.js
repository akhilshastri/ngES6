/**
 * Created by Akhil on 24-07-2016.
 */

import {service, inject} from 'ng-app';
import BaseDataService from './baseService';
import {rest} from './decorator/rest';

@inject('DataService')
@rest({endpoint:'api/flights'})
@service({name:'FlightsDataService'})
class FlightsDataService extends BaseDataService  {
    constructor(ds) {
        super(arguments);
        this.ds= ds;
    }

    getEndPointService(){
     return this.ds.getEndPointService() ;
    }

    findFlights({origin,rtn}){
        let query = `origin_eq=${origin}&&return_ne=${rtn}` ;
      return this.getAll(query);
    }
}
