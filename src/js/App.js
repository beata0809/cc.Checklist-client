import Sidebar from './SideBar/SideBar';
import Userbar from './UserBar';

class App {
  static render() {
    document.getElementById('root').innerHTML = `
      <div id="app"></div>
    `;
    Userbar.render();
    Sidebar.render();
  }
}

export default App;
