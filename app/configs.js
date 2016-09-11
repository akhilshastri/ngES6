import {config, inject} from './ng-app';
//import sketches from './views/sketches';
//import edit from './views/edit';
import search from './views/search';

class ApplicationConfig{

    @inject('$stateProvider', '$urlRouterProvider')
    @config()
    Routing(sp,urp){
        sp.state('search', search) ;
        urp.otherwise('/search');
    }

}