import Project from './Project';

class SideBar {
  genererateProjects = data => {
    data.projects;
  };

  static render() {
    const element = document.createElement('section');
    element.id = 'SideBar';
    element.innerHTML = `
          <div class="accordion" id="accordionExample">
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <button class="btn btn-success" type="button" id="button-addon1">Add</button>
          </div>
            <input type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">
          </div>
        `;
    document.querySelector('.wrapper').appendChild(element);

    const addProjectButton = document.getElementById('button-addon1');
    addProjectButton.addEventListener('click', () => {
      const value = document.querySelector('input[type=text]').value;
      const project = new Project(value);
      project.render();
    });
    JSON.parse(localStorage.getItem('user')).projects.forEach(project => {
      const newProject = new Project(project.title);
      newProject.render();
    });
  }
}

export default SideBar;
