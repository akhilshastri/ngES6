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
        this.scope = {
            onSubmit:"&",
            onReset:"&",
            formModel:"=ngModel",
            searchForm:"=?form"
        };
        this.link = this.link.bind(this);
    }

    link(scope, el, attr) {
        const form = scope.flightSearch;
        scope.passengers = [1,2,3,4,5,6,7,8,9,10];
        scope.tabSelected = (e, arg)=> {
            const $return = $('.return-date', el);
            if (arg.index == 0) {
                $return.addClass('hide');
            } else {
                $return.animateCss('fadeIn');
                $return.removeClass('hide');
            }
        };
        scope.$watch(()=> form.$pristine ||Object.keys(form.$error).length, (nv)=>{
            let formEr = [];
            if(!form.$pristine){
                Object.keys(form.$error).forEach((key)=>{
                    form.$error[key].forEach((er)=>{
                        formEr.push({name:er.$name,key:key});
                    })
                });
            }
            scope.searchForm = { errors: formEr,ngForm:form};
        })
    }

    static directiveFactory() {
        return new SearchBox();
    }
}