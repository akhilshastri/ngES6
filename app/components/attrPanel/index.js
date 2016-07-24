import template from '!html!./view.html';
import {directive, inject} from 'ng-app';
import './style.less';

@directive({selector: 'attr-panel'})
class AttrPanel {

    constructor() {
        this.replace = true;
        this.template = template;
        this.scope={
            attrs:"="
        };
        this.link = this.link.bind(this);
    }

    link(scope,el,attr){
        scope.valueChanged=(key,selectedValue)=>{
            scope.$emit('active-tool-attribute-changed',{key,selectedValue});
        }
    }

    static directiveFactory() {
        return new AttrPanel();
    }
}