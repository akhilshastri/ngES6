import 'flexboxgrid';
import 'normalize.css';
import './app/css/animate.min.css';
// import './app/css/pure-min.css';

import './app/css/common.less';
import './app';

setTimeout(()=>{
angular.bootstrap(document.getElementById('myApp'),['myApp']);
},1000);
// import {controller} from './decorators';
//
// debugger;
// @controller()
// class HelloController {
//
//     sayHello(name){
//         console.log(`Hello ${name}`);
//     }
// }
//
// // @controller
// // class ByeController{
// //     bye(name){
// //         console.log(`bye ${name}`);
// //     }
// // }
// //
// //
// // var by = new ByeController();
// // by.bye('akhil');
//
// var hc = new HelloController();
// debugger;
// hc.sayHello('akhil');
// hc.bye('akhil');
//
// var app =  angular.module('app',[]);
//
