/**
 * Created by Akhil on 23-07-2016.
 */

import {controller, inject} from './../../ng-app';
import 'ngtemplate?relativeTo=/app/!html!./view.html'
import template from '!html!./view.html';
import BaseController from '../common/BaseController';


@inject('$scope', '$injector','$state')
@controller()
class Controller extends BaseController {
    constructor() {
        super(arguments);
        //debugger;
        this._msg = 'hello msg  AA';
    }

    get mapDI(){
        return  ['$s', '$ig','$state'];
    }
    get msg() {
        return this._msg;
    }

    set msg(val) {
        this._msg = val;
    }
}

export default {
     template
    ,controller:Controller,
    controllerAs:'vw'
}