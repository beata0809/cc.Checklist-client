import List from './List';
import Api from '../Api/Api';

import MainPannel from '../MainPannel';

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
                >

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
        `;

    // const showProjectButton = document.querySelector('.btn-link');
    // showProjectButton.addEventListener('click', () => {
    //   JSON.parse(localStorage.getItem('user')).projects.forEach(project => {
    //     if(this.name === project.title) {
    //       const MainPannel = document.querySelector('#MainPannel');
    //       MainPannel.innerHTML = '';

    //       const projectDiv = document.createElement('div');
    //       projectDiv.setAttribute('class', 'project');

    //       const projectTitleDiv = document.createElement('div');
    //       projectTitleDiv.setAttribute('class', 'header');

    //       const projectTitle = document.createElement('h1');
    //       projectTitle.textContent = `${project.title}`;

    //       const ListsPannel = document.createElement('div');
    //       ListsPannel.setAttribute('class', 'lists');

    //       MainPannel.appendChild(projectDiv);
    //       projectDiv.appendChild(projectTitleDiv);
    //       projectTitleDiv.appendChild(projectTitle);
    //       projectDiv.appendChild(ListsPannel);

    //       /*const projectTitle = document.querySelector('.header');
    //       projectTitle.innerHTML = `<h1>${project.title}</h1>`;*/

    //       //const ListsPannel = document.querySelector('.lists');

    //       project.lists.forEach(list => {
    //         const listDiv = document.createElement('div');
    //         listDiv.setAttribute('class', 'list');
    //         const listTitle = document.createElement('h2');
    //         listTitle.textContent = `${list.title}`;
    //         const tasksDiv = document.createElement('div');
    //         tasksDiv.setAttribute('class', 'tasks');
    //         listDiv.appendChild(listTitle);
    //         listDiv.appendChild(tasksDiv);
    //         ListsPannel.appendChild(listDiv);
    //         /*ListsPannel.innerHTML = `
    //         <div class='list'>
    //           <h2>${list.title}</h2>
    //           <div class='tasks'>

    //           </div>
    //         </div>
    //         `;*/

    //         const listStatusCheck = () => {
    //           let listStatus = list.tasks.every((el) => {
    //             return (el.done === true);
    //           });

    //           if (listStatus) {
    //             //listDiv.style.display = 'none'; //inaczej będzie znikać po zaznaczeniu tego jednego tasku
    //           } else {
    //             listDiv.style.display = '';
    //           }
    //         }
    //         const tasksPannel = document.querySelector('.tasks');

    //         list.tasks.forEach(task => {
    //           const checkbox = document.createElement('input');
    //           checkbox.setAttribute('type', 'checkbox');
    //           tasksPannel.appendChild(checkbox);

    //           const taskText = document.createElement('span');
    //           taskText.innerText = `${task.name}`;
    //           tasksPannel.appendChild(taskText);

    //           const lineBreak = document.createElement('br');
    //           tasksPannel.appendChild(lineBreak);

    //           checkbox.addEventListener('click', () => {
    //             if (checkbox.checked) {
    //               taskText.style.textDecoration = 'line-through';
    //               task.done = true;
    //             } else {
    //               taskText.style.textDecoration = 'none';
    //               task.done = false;
    //             }

    //             listStatusCheck();
    //           });
    //         });

    //       });
    //     }
    //   });
    // });
  }
}

export default Project;
