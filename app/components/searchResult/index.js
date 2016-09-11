import template from '!html!./view.html';
import {directive, inject} from 'ng-app';
import './style.less';
import 'components/searchItem';
import 'components/searchTitle';

@directive({selector: 'search-result'})
class SearchResult {
    constructor() {
        this.replace = true;
        this.template = template;
        this.link = this.link.bind(this);
    }

    link(scope,el,attr){

    }

    static directiveFactory() {
        return new SearchResult();
    }
}