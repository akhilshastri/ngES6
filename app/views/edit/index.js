/**
 * Created by Akhil on 23-07-2016.
 */

import {controller, inject} from 'ng-app';
import 'ngtemplate?relativeTo=/app/!html!./view.html'
import template from '!html!./view.html';
import BaseController from '../common/BaseController';
import 'components/toolBox';


@controller()
@inject('$scope', '$injector', '$state', 'SketchDataService')
class ViewController extends BaseController {
    constructor() {
        super(arguments);
        this.init();
    }

    init() {   // default init
        this.model = {
            sketches: [],
            tools : [
                {name:"Tingle",attr:{ color:['red','green','yellow'] }},
                {name:"Circle",attr:{ color:['red','green','yellow'] }},
                {name:"TextBox",attr:{ font:['serif','times'],size:[10,20,30] }},
            ]
        };

    }

    get mapDI() {
        return ['$scope', '$ig', '$state', 'sds'];
    }

}

export default {url: '/edit/:id', template: template, controller: ViewController, controllerAs: 'vm',
    onEnter:()=>{
        debugger;
    }
};
