/**
 * Created by Akhil on 23-07-2016.
 */

import {controller, inject} from 'ng-app';
import 'ngtemplate?relativeTo=/app/!html!./view.html'
import template from '!html!./view.html';
import BaseController from '../common/BaseController';
import 'components/toolBox';
import 'components/sketchPad';
import 'components/attrPanel';
import {DEFA_TOOLS} from 'constants';
import {SketchModel} from 'models/sketchModel';

@controller()
@inject('$scope', '$injector', '$state', 'ToolsDataService', 'SketchDataService', '$stateParams', '$rootScope')
class ViewController extends BaseController {
    constructor() {
        super(arguments);
        this.init();
       // if(!this.model.readonly) {
            this.$scope.$on('tool-dropped', this.toolDropped.bind(this));
            this.$scope.$on('active-item-changed', this.activeItemChanged.bind(this));
            this.$scope.$on('active-tool-attribute-changed', this.attrChanged.bind(this));
        //}
    }

    init() {   // default init
        this.model = {
            readonly:true,
            tools: DEFA_TOOLS,
            items: []
        };
        debugger;
        const {id,readonly} = this.sparam;
        if(id<0){
           if(this.$rs.model.user){
               this.model.items =[];
               this.model.readonly = false;
           }
        } else {
            this.sds.get(id).then((sketch)=> {
                const model = this.model;
                model.items = SketchModel.parseList(sketch.items || []);
                if (this.$rs.model.user && sketch.author == this.$rs.model.user) {
                    model.readonly = false;
                }
            });
        }
        this.tds.getAll().then(tools=> {
            if (tools && tools.length > 0)   this.model.tools = tools;
        })

    }

    save() {
        const title = window.prompt("Please enter title","New Sketch");
        if(!title) return;
        const author = this.$rs.model.user;
        const items = this.model.items;
        const id = this.sparam.id;
        if(id<0) {
            this.sds.insert({title, author, items})
                .then(()=>this.$state.go('sketches'));
        } else{
            this.sds.update(id,{title, author, items})
                .then(()=>this.$state.go('sketches'));
        }

    }

    attrChanged(arg, {key, selectedValue}) {
        debugger;
        var item = this.model.items[this.model.selectedItem];
        item.attrs[key] = selectedValue;
    }

    activeItemChanged(arg, data) {
        this.cleanActiveItem();
        const model = this.model;
        const toolName = model.items[data.index].name;
        model.items[data.index].active = true;
        model.activeAttrs = model.tools.find(i=>i.name == toolName).supportedAttr;
        model.selectedItem = data.index;// model.items[];
    }

    toolDropped(arg, tool) {
        this.cleanActiveItem();
        tool.active = true;
        tool.attrs = {};
        delete tool.supportedAttr;
        this.model.items.push(new SketchModel(tool));
        this.$scope.$emit('active-item-changed', {index: this.model.items.length - 1, itm: tool});
    }

    cleanActiveItem() {
        const activeItem = this.model.items.find(i=>i.active);
        if (activeItem) activeItem.active = false;
    }

    get mapDI() {
        return ['$scope', '$ig', '$state', 'tds', 'sds', 'sparam', '$rs'];
    }

}

export default {
    url: '/edit/:id', template: template, controller: ViewController, controllerAs: 'vm',
    onEnter: ()=> {
        // debugger;
    }
};
