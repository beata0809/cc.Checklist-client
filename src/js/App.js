import Sidebar from './SideBar/SideBar';
import Userbar from './UserBar';

class App {
  static render() {
    const app = document.createElement('div');
    app.id = 'app';
    document.getElementById('root').appendChild(app);

    Userbar.render();
    Sidebar.render();
  }
}

export default App;
