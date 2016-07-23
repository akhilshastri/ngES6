import template from '!html!./view.html';
import {directive, inject} from '../../ng-app';
import './style.less';

@directive({selector: 'app-header'})
class AppHeader {

    constructor() {
        this.replace = true;
        this.template = template;
    }

    static directiveFactory() {
        return new AppHeader();
    }
}