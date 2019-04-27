import Sidebar from './SideBar/SideBar';
import Userbar from './UserBar';
import MainPannel from './MainPannel';
import Project from './SideBar/Project';
import List from './SideBar/List';

class App {
  static render() {
    const userData = JSON.parse(localStorage.getItem('user'));

    document.getElementById('root').innerHTML = `
      <div id="app"></div>
    `;

    Userbar.render();

    const element = document.createElement('div');
    element.className = 'wrapper';
    document.querySelector('#app').appendChild(element);

    Sidebar.render();
    MainPannel.render();
  }
}

export default App;
