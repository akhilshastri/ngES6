import template from '!html!./view.html';
import {directive, inject} from 'ng-app';
import './style.less';
import 'components/tabs';
import 'components/dateBox';
import {APP_CONFIG} from 'constants';


@directive({selector: 'search-box'})
class SearchBox {

    constructor() {
        this.replace = true;
        this.template = template;
        this.link = this.link.bind(this);
    }

    link(scope, el, attr) {
        scope.passengers = [1,2,3,4,5,6,7,8,9,10];
        scope.tabSelected = (e, arg)=> {
            const $return = $('.return-date', el);
            if (arg.index == 0) {
                $return.addClass('hide');
            } else {
                $return.animateCss('fadeIn');
                $return.removeClass('hide');
                $return.datePicker();
            }
        }

        $(document).ready(function() {
            $(".js-example-basic-single").select2();
        });
    }

    static directiveFactory() {
        return new SearchBox();
    }
}