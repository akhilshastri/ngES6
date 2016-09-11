/**
 * Created by Akhil on 24-07-2016.
 */
import {InvalidEndpointsException} from 'common/appErrors';

export default class BaseDataService {
    getAll() {
        const srvc  = this.getEndPointService();
        const method = this.methods.GET;
        return srvc[method](this.buildGetAllURL());
    }
    get(id) {
        const srvc  = this.getEndPointService();
        const method = this.methods.GET;
        return srvc[method](this.buildGetURL(id));
    }

    insert(model) {
        const srvc  = this.getEndPointService();
        const method = this.methods.PUT;
        return srvc[method](this.buildInsertURL(),model);
    }

    update(id, newModel) {
        const srvc  = this.getEndPointService();
        const method = this.methods.POST;
        return srvc[method](this.buildUpdateURL(),id,newModel);
    }

    delete(id) {
        const srvc  = this.getEndPointService();
        const method = this.methods.DELETE;
        return srvc[method](this.buildDeleteURL());
    }

    buildGetAllURL() {
        return `${this.getEndPointURL()}`;
    }

    buildGetURL(id) {
        return `${this.getEndPointURL()}/${id}`;

    }

    getEndPointURL() {
        if (!this.endpoint) {
            throw new InvalidEndpointsException();
        }
        return this.endpoint;
    }

    buildInsertURL() {
        return `${this.getEndPointURL()}`;

    }

    buildUpdateURL() {
        return `${this.getEndPointURL()}`;
    }

    buildDeleteURL() {
        return `${this.getEndPointURL()}`;
    }

    getEndPointService(){
        throw new Error('Method not implemented');
    }
}