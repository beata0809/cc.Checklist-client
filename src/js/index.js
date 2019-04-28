import '../scss/style.scss';
import '@babel/polyfill';
import 'bootstrap';
import App from './App';
import LoginPage from './LoginPage';
import router from './router';

const user = JSON.parse(localStorage.getItem('user'));

const routes = {
  '/': user ? App : LoginPage,
  '/lists': App,
};

const onload = () => {
  const url = window.location.hash.slice(1).toLowerCase() || '/';

  const page = router(url, routes);
  page.render();
};

window.addEventListener('hashchange', onload);

window.addEventListener('load', onload);
