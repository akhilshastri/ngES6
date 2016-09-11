import template from '!html!./view.html';
import {directive, inject} from 'ng-app';
import './style.less';

@directive({selector: 'tabs'})
class SearchTitle {

    constructor() {
        this.replace = true;
        this.template = template;
        this.scope = {
            onTabSelected: "@"
        };
        this.link = this.link.bind(this);
    }

    link(scope, el, attr) {
        const tabs = $('li', el);
        let activeEl = tabs[0];

        tabs.click(function (e) {
            activeEl = $(this);
            tabs.toggleClass('is-active');
            scope.$parent[scope.onTabSelected](e, {activeEl,index:tabs.index(activeEl)});
        });
    }

    static directiveFactory() {
        return new SearchTitle();
    }
}