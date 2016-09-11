import template from '!html!./view.html';
import {directive, inject} from 'ng-app';
import {APP_CONFIG} from 'constants';
import './style.less';
import moment from 'moment';

@directive({selector: 'date-box'})
class AppHeader {
    constructor() {
        this.replace = true;
        this.template = template;
        // this.scope = {
        //     tip:'=',
        //     dateOptions:[]
        // };
        this.link = this.link.bind(this);
    }

    link(scope, el) {
        let currentDate = new Date();
        scope.dateOptions = [];
        for (let i = 0; i < 60; i++) {
            let toDate = new Date();
            toDate.setDate(currentDate.getDate() + i);
            let m = moment(toDate);
            scope.dateOptions.push({ label:m.format('DD/MMM/YYYY'), dt:m});
        }
        scope.tip = scope.tip || APP_CONFIG.datePlaceHolder;
        console.log(scope.dateOptions);
    }

    static directiveFactory() {
        return new AppHeader();
    }
}