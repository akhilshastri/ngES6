/**
 * Created by Akhil on 24-07-2016.
 */
import {LocalStorageNotSupportedException, InvalidJSONException} from 'common/appErrors';
import {service} from 'ng-app';

@service({name: 'LocalDataService'})
class LocalDataService {
    constructor() {
        if (!window || !window.localStorage) {
            throw new LocalStorageNotSupportedException();
        }
    }

    get(url) {
        const promise = new Promise(
            (resolve, reject) => {
                const [key,id] =  url.split('/');
                var data = this.storage.getItem(key) || '[]';
                try {
                    data = JSON.parse(data);
                } catch (e) {
                    reject(new InvalidJSONException(e));
                }
                resolve(
                    ( typeof id === 'undefined') ? data : data[parseInt(id)]
                )
            }
        );
        return promise;
    }

    put(url,model){
        debugger;
       const promise = new Promise((resolve,reject)=> {
           this.get(url).then((data)=> {
               debugger;
                data.push(model);
               this.storage.setItem(url,JSON.stringify(data));
               resolve();
           })
       });
        return promise;
    }

    post(url,id,model){
        debugger;
        const promise = new Promise((resolve,reject)=> {
            this.get(url).then((data)=> {
                debugger;
                data[id]=model;
                this.storage.setItem(url,JSON.stringify(data));
                resolve();
            })
        });
        return promise;
    }

    get storage() {
        return window.localStorage;
    }

}
