import '../scss/style.scss';
import "@babel/polyfill";
import "bootstrap";
import Api from './Api/Api';
import UserBar from './UserBar';

const userBar = new UserBar('#UserBar');

window.onload = () => {
    console.log('Hello World');
    Api.fetchExample();
    userBar.render();
}