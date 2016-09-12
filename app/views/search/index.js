/**
 * Created by Akhil on 23-07-2016.
 */

import {controller, inject} from 'ng-app';
import 'ngtemplate?relativeTo=/app/!html!./view.html'
import template from '!html!./view.html';
import BaseController from '../common/BaseController';

import {DEFA_TOOLS} from 'constants';
import {SketchModel} from 'models/sketchModel';
import 'components/searchBox';
import 'components/searchResult';

@controller()
@inject('$scope', '$injector', '$state', '$stateParams', '$rootScope', 'FlightsDataService')
class ViewController extends BaseController {
    constructor() {
        super(arguments);
          this.init();
    }

    onResetClick() {
        var conf = confirm('This will clear the search form');
        if (conf) {
            if (this.form && this.form.ngForm) {
                this.form.ngForm.$setPristine();
            }
            this.model.search = {isReturn: false};
            this.model.flightResult = [];
        }
    }

    onSubmitClick() {
        this.fds.findFlights({origin: 'pune', rtn: 'true'}).then((result)=> {
            this.model.flightResult = [1, 2, 3];
            setTimeout(()=> {
                var el = $('.search-title').get(0);
                if (el)el.scrollIntoView();
            }, 100);
        });
    }

    init() {   // default init
        this.model = {
            errorDictionary: {
                'requireddestination': 'Destination is require',
                'requiredorigin': 'Origin is require',
                'requirednoOfPassengers': 'No of passengers is require',
                'requiredjurny-date': 'Journey date is require',
                'requiredreturn-date': 'Return date is require',
                "minlengthorigin": "Minimum length for Origin is 3",
                "minlengthdestination": "Minimum length for Destination is 3",
                "maxlengthorigin": "Maximum length for Origin is 8",
                "maxlengthdestination": "Maximum length for Destination is 8"
            },
            search: {
                origin: '',
                destination: '',
                isReturn: false
            },
            flightResult: []
        }
    }

    get mapDI() {
        return ['$scope', '$ig', '$state', 'sparam', '$rs', 'fds'];
    }

}

export default {
    url: '/search', template: template, controller: ViewController, controllerAs: 'vm',
    onEnter: ()=> {
        // debugger;
    }
};
