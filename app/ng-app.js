//import header from '!html!./partials/header/header.html';
//import footer from '!html!./partials/footer.html';
//import listItem from '!html!./partials/sketch-list-item.html';

const App = angular.module('myApp', ['ui.router']);



export function service(options) {
    return function decorator(target) {
        options = options ? options : {};
        if (!options.name) {
            throw new Error('@Service() must contains serviceName property!');
        }
        App.service(options.name, target);
    };
}
export function directive(options) {
    return function decorator(target) {
        const directiveName = dashCaseToCamelCase(options.selector);
        App.directive(directiveName, target.directiveFactory);
    };
}

export function controller (){
    return function(target){
        //const app = App;
        App.controller(target.name,target);
    }
}

export  function config() {
    return function decorator(target, key, descriptor) {
        //debugger;
        App.config(descriptor.value);
    };
}

export function inject(...dependencies) {
    return function decorator(target, key, descriptor) {
        if(descriptor) {
            const fn = descriptor.value;
            fn.$inject = dependencies;
        } else {
            target.$inject = dependencies;
        }
    };
}

// Utils functions
function pascalCaseToCamelCase(str) {
    return str.charAt(0).toLowerCase() + str.substring(1);
}

function dashCaseToCamelCase(string) {
    return string.replace( /-([a-z])/ig, function( all, letter ) {
        return letter.toUpperCase();
    });
}
