import template from '!html!./view.html';
import {directive, inject} from 'ng-app';
import './style.less';

@directive({selector: 'search-title'})
class SearchTitle {

    constructor() {
        this.replace = true;
        this.template = template;
        this.link = this.link.bind(this);
    }

    link(scope,el,attr){

    }

    static directiveFactory() {
        return new SearchTitle();
    }
}