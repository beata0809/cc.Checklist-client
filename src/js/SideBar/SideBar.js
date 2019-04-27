import Project from './Project';

class Sidebar {
  static render() {
    const sidebar = document.createElement('div');
    sidebar.id = 'SideBar';
    sidebar.innerHTML = `
              <form>
                <div class="input-group mb-3 addProject">
                  <input
                    id="projectInput"
                    type="text"
                    class="form-control"
                    placeholder="Dodaj nowy projekt"
                    aria-label="Dodaj nowy projekt"
                    aria-describedby="basic-addon2"
                  >
                  <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button" id="addProjectBtn">Dodaj</button>
                  </div>
                </div>
              </form>
    `;
    document.querySelector('.wrapper').appendChild(sidebar);
    const projectInput = document.querySelector('#projectInput');
    document.querySelector('#addProjectBtn').addEventListener('click', () => Project.addProject(projectInput));
  }
}

export default Sidebar;
