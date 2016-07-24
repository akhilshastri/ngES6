/**
 * Created by Akhil on 23-07-2016.
 */

import {controller, inject} from 'ng-app';
import 'ngtemplate?relativeTo=/app/!html!./view.html'
import template from '!html!./view.html';
import BaseController from '../common/BaseController';
import 'components/sketchListItem';


@controller()
@inject('$scope', '$injector', '$state', 'SketchDataService')
class ViewController extends BaseController {
    constructor() {
        super(arguments);
        this.msg='hello akhil';
        this.model = {sketches: []};
        this.sds.getAll().then((data)=> {
             this.$scope.$apply( ()=>{
                 this.model.sketches = data;
                 }
             );
        });
    }

    get mapDI() {
        return ['$scope', '$ig', '$state', 'sds'];
    }

}

export default {url: '/sketches', template: template, controller: ViewController, controllerAs: 'vm'};
