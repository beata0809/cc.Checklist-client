import '../scss/style.scss';
import "@babel/polyfill";
import "bootstrap";
import Api from './Api/Api';
import UserBar from './UserBar';
import LoginPage from './LoginPage';

const userBar = new UserBar('#UserBar');
const loginPage = new LoginPage('LoginPage');

window.onload = () => {
    console.log('Hello World');
    Api.fetchExample();
    userBar.render();

    //loginPage.render();
}