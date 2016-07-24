import template from '!html!./view.html';
import {directive, inject} from 'ng-app';
import './style.less';

@directive({selector: 'sketch-list-item'})
class SketchListItem {

    constructor(rs) {
        this.replace = true;
        this.template = template;
        this.scope = {
            author: "=",
            title: "=",
            id: "="
        };
        this.rs = rs;
        this.link = this.link.bind(this);
    }

    link(scope) {
        scope.isValidUser = ()=> !!(this.rs.model.user && (scope.author == this.rs.model.user));
        scope.showSketch=(id)=>{
            this.rs.$state.go('edit',{id:id,readonly:true});
        };
    }

    @inject('$rootScope')
    static directiveFactory(rs) {
        return new SketchListItem(rs);
    }
}