import '../scss/style.scss';
import '@babel/polyfill';
import 'bootstrap';
import Api from './Api/Api';
import UserBar from './UserBar';
import LoginPage from './LoginPage';
import router from './router';

const routes = {
  '/': LoginPage,
  '/lists': UserBar,
};

const onload = () => {
  const url = window.location.hash.slice(1).toLowerCase() || '/';

  const page = router(url, routes);
  page.render();
};

window.addEventListener('hashchange', onload);

window.addEventListener('load', onload);
