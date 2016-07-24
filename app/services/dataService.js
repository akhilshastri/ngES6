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
        if(!MOCK_HTTP){
            throw new Error ('$http implementation is not supported');
        }
        return this.ld;
    }
}


