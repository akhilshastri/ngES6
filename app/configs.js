import {config, inject} from './ng-app';
import sketches from './views/sketches';
import edit from './views/edit';


class ApplicationConfig{

    @inject('$stateProvider', '$urlRouterProvider')
    @config()
    Routing(sp,urp){
        sp.state('sketches', sketches) ;
        sp.state('edit', edit) ;
        urp.otherwise('/sketches');
    }

}