import List from './List';
import Api from '../Api/Api';

import MainPannel from '../MainPannel/MainPannel';

class Project {
  static renderProjects(data) {
    const { projects } = data;
    projects.forEach(project => {
      this.render(project.title);
    });
  }

  static async addProject(input) {
    const userData = JSON.parse(localStorage.getItem('user'));
    const name = input.value;
    const newProject = {
      userId: userData._id,
      project: {
        title: name,
      },
    };
    this.render(name);
    const data = await Api.addProject(newProject);
    userData.projects.push({ title: name, _id: data._id, lists: [] });
    localStorage.setItem('user', JSON.stringify(userData));
    document.querySelector('form').reset();
  }

  static render(title) {
    const titleNoSpaces = title.replace(/\s/g, '');
    const project = document.createElement('div');
    project.id = 'accordion';
    project.innerHTML = `
          <div class="card">
            <div class="card-header" id="heading-${titleNoSpaces}">
              <h5 class="mb-0">
                <button
                  class="btn btn-link"
                  data-toggle="collapse"
                  data-target="#collapse-${titleNoSpaces}"
                  aria-expanded="true"
                  aria-controls="collapse-${titleNoSpaces}"
                >
                  ${title}
                </button>
              </h5>
            </div>
            <div
              id="collapse-${titleNoSpaces}"
              class="collapse hide"
              aria-labelledby="heading-${titleNoSpaces}"
              data-parent="#accordion"
            >
            <div class="card-body">
            <form id="${titleNoSpaces}-form">
              <div class="input-group mb-3 addList">
                <input
                  id="${titleNoSpaces}-input"
                  type="text"
                  class="form-control"
                  placeholder="Dodaj nową listę"
                  aria-label="Dodaj nową listę"
                  aria-describedby="basic-addon2"
                />

                <div class="input-group-append">
                  <button id="${titleNoSpaces}-btn" class="btn btn-outline-secondary" type="button">Dodaj</button>
                </div>
              </form>
              </div>
            <ul class="list-group list-group-flush" id="list-${titleNoSpaces}"></ul>
            </div>
          </div>
          </div>
    `;
    document.querySelector('#SideBar').appendChild(project);
    const listInput = document.querySelector(`#${titleNoSpaces}-input`);
    document.querySelector(`#${titleNoSpaces}-btn`).addEventListener('click', () => List.addList(listInput, title));
    const projects = document.getElementsByClassName('btn-link');
    for (let i = 0; i < projects.length; i++) {
      project.addEventListener('click', () => MainPannel.getLists(title));
    }
  }
}

export default Project;
