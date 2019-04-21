import '../scss/style.scss';
import "@babel/polyfill";
import "bootstrap";
import Api from './Api/Api';
import UserBar from './UserBar';
import SideBar from './SideBar/SideBar'

const userBar = new UserBar('UserBar');
const sideBar = new SideBar('SideBar');

window.onload = () => {
    console.log('Hello World');
    Api.fetchExample();
    userBar.render();
    sideBar.render();
}