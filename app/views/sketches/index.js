/**
 * Created by Akhil on 23-07-2016.
 */

import {controller, inject} from 'ng-app';
import 'ngtemplate?relativeTo=/app/!html!./view.html'
import template from '!html!./view.html';
import Base from 'common/Base';
import 'components/sketchListItem';


@controller()
@inject('$scope', '$injector','$state','DataService')
class Controller extends Base {
    constructor() {
        super(arguments);
        this._msg = 'hello msg  AA';
        debugger;
    }

    get mapDI(){
        return  ['$s', '$ig','$state','ds'];
    }
    get msg() {
        return this._msg;
    }

    set msg(val) {
        this._msg = val;
    }
}

export default { url:'/sketchs', template: template, controller:Controller, controllerAs:'vm' };
