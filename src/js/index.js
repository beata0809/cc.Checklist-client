import '../scss/style.scss';
import "@babel/polyfill";
import "bootstrap";
import Api from './Api/Api';

window.onload = () => {
    console.log('Hello World');
    Api.fetchExample();
}