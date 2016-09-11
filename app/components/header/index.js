import template from '!html!./view.html';
import {directive, inject} from 'ng-app';
import {APP_CONFIG} from 'constants';
import './style.less';

@directive({selector: 'app-header'})
class AppHeader {
    constructor() {
        this.replace = true;
        this.template = template;
        this.link = this.link.bind(this);
    }

    link(scope, el) {
        scope.appTitle = APP_CONFIG.title;
    }

    static directiveFactory() {
        return new AppHeader();
    }
}