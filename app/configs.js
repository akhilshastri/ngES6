import {config, inject} from './ng-app';
import sketches from './views/sketches';


class ConfigClass{

    @inject('$stateProvider', '$urlRouterProvider')
    @config()
    Routing(sp,urp){
        debugger;
        sp.state('sketchs', {templateUrl:'views/sketches/view.html'}) ;

        urp.otherwise('/sketchs');
    }


}