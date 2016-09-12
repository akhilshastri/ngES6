/**
 * Created by Akhil on 23-07-2016.
 */

import {controller, inject} from 'ng-app';
import 'ngtemplate?relativeTo=/app/!html!./view.html'
import template from '!html!./view.html';
import BaseController from '../common/BaseController';

import {DEFA_TOOLS} from 'constants';
import {SketchModel} from 'models/sketchModel';
import 'components/searchBox';
import 'components/searchResult';

@controller()
@inject('$scope', '$injector', '$state', '$stateParams', '$rootScope','FlightsDataService')
class ViewController extends BaseController {
    constructor() {
        super(arguments);
      //  this.init();
        this.model={
            errorDictionary:{
                'requireddestination':'Destination is require',
                'requiredorigin':'Origin is require',
                'requirednoOfPassengers':'No of passengers is require',
                'requiredjurny-date':'Journey date is require',
                'requiredreturn-date':'Return date is require',
                "minlengthorigin" : "Minimum length for Origin is 3",
                "minlengthdestination" : "Minimum length for Destination is 3",
                "maxlengthorigin" : "Maximum length for Origin is 8",
                "maxlengthdestination" : "Maximum length for Destination is 8"
            },
            search:{
                origin:'',
                destination:'',
                isReturn:false
            },
            flightResult:[]
        }
    }
    onResetClick(){
        var conf = confirm('This will clear the search form');
        if(conf){
            if(this.form && this.form.ngForm){
                this.form.ngForm.$setPristine();
            }
            this.model.search={isReturn:false};
            this.model.flightResult=[];
        }
    }
    onSubmitClick(){
        alert('submit clicked');
        this.fds.findFlights({origin:'pune',rtn:'true'}).then((result)=>{
            this.model.flightResult=[1,2,3];

        });
    }
    init() {   // default init
        this.model = {
            readonly: true,
            tools: DEFA_TOOLS,
            items: []
        };
        debugger;
        const {id, readonly} = this.sparam;
        if (id < 0) {
            if (this.$rs.model.user) {
                this.model.items = [];
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
        const title = window.prompt("Please enter title", "New Sketch");
        if (!title) return;
        const author = this.$rs.model.user;
        const items = this.model.items;
        const id = this.sparam.id;
        if (id < 0) {
            this.sds.insert({title, author, items})
                .then(()=>this.$state.go('sketches'));
        } else {
            this.sds.update(id, {title, author, items})
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
        return ['$scope', '$ig', '$state', 'sparam', '$rs','fds'];
    }

}

export default {
    url: '/search', template: template, controller: ViewController, controllerAs: 'vm',
    onEnter: ()=> {
        // debugger;
    }
};
