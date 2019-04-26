import Sidebar from './SideBar/SideBar';
import Userbar from './UserBar';
import MainPannel from './MainPannel';

class App {
  static render() {
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
