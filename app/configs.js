import {config, inject} from './ng-app';
import sketches from './views/sketches';


class ConfigClass{

    @inject('$stateProvider', '$urlRouterProvider')
    @config()
    Routing(sp,urp){

        // sp.state('sketchs', {
        //     url:'/sketchs',
        //     templateUrl: "views/sketches/view.html"
        //     // template: '<h1>My Contacts</h1>'
        // }) ;

        sp.state('sketchs', sketches) ;
        urp.otherwise('/sketchs');
    }


}