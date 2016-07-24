import template from '!html!./view.html';
import {directive, inject} from 'ng-app';
import './style.less';

@directive({selector: 'app-header'})
class AppHeader {

    constructor(rs) {
        this.replace = true;
        this.template = template;
        this.rs = rs;
        this.link = this.link.bind(this);
    }

    link(scope, el) {
        scope.loginClick = ()=> {
            let confirm = window.prompt('Enter your login name', 'user-name');
            if (confirm) {
                if (typeof this.rs.model == 'undefined') {
                    this.rs.model = {}
                }
                this.rs.$state.go('sketches');
                this.rs.model.user = confirm;
                this.rs.$broadcast('user-changed', this.rs.model);
            }
        };

        scope.newSketch = ()=> {
            this.rs.$state.go('edit',{id:-1});
        };

        scope.getUserLogin = ()=> !this.rs.model.user;
        scope.getUserName = ()=> this.rs.model.user;
    }

    @inject('$rootScope')
    static directiveFactory(rs) {
        return new AppHeader(rs);
    }
}