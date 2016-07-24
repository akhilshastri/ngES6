import 'flexboxgrid';
import 'normalize.css';
import './app/css/animate.min.css';
import './app/css/common.less';
import './app';

setTimeout(()=> {
    angular.bootstrap(document.getElementById('myApp'), ['myApp']); /* Boot Strapping NgApp*/
}, 1000);
