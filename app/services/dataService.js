/**
 * Created by Akhil on 24-07-2016.
 */

import {service, inject} from 'ng-app';
import {MOCK_HTTP} from 'constants';

@service({name: 'DataService'})
@inject('$http', 'LocalDataService')
class DataServiceAdaptor {
    constructor(http, ld) {
        this.http = http;
        this.ld = ld;
    }

    getEndPointService(){
        debugger;
        if(!MOCK_HTTP){
            return this.http;
        }
        return this.ld;
    }
}


