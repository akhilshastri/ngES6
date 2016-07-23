import template from '!html!./view.html';
import {directive, inject} from 'ng-app';
import './style.less';

@directive({selector: 'app-footer'})
class AppFooter {

    constructor() {
        this.replace = true;
        this.template = template;
    }

    static directiveFactory() {
        return new AppFooter();
    }
}