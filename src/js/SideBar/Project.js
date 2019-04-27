import MainPannel from '../MainPannel';

class Project {
  constructor(name) {
    this.element = document.createElement('section');
    this.name = name;
    console.log(name);
  }

  render() {
    document.querySelector('#accordionExample').appendChild(this.element);
    this.element.innerHTML = `
            <div class="card">
              <div class="card-header" id="headingOne">
                <h2 class="mb-0">
                  <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse-${
                    this.name
                  }" aria-expanded="true" aria-controls="collapse-${this.name}">
                    ${this.name}
                  </button>
                </h2>
              </div>

              <div id="collapse-${
                this.name
              }" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div class="card-body">
                  Coś
                </div>
                <div class="card-body">
                  Coś
                </div>
              </div>
            </div>
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
