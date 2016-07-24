import template from '!html!./view.html';
import {directive, inject} from 'ng-app';
import './style.less';

@directive({selector: 'sketch-pad'})
class SketchPad {

    constructor() {
        this.replace = true;
        this.template = template;
        this.scope={
            items:"="
        };
        this.link = this.link.bind(this);
    }

    link(scope,el,attr){

        scope.activeItemChanged=(index,itm)=>{
            debugger;
            scope.$emit('active-item-changed',{itm,index});
        }
    }

    static directiveFactory() {
        return new SketchPad();
    }
}