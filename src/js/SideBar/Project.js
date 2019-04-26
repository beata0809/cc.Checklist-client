import MainPannel from "../MainPannel";

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

        const showProjectButton = document.querySelector('.btn-link');
        showProjectButton.addEventListener('click', () => {
          JSON.parse(localStorage.getItem('user')).projects.forEach(project => {
            if(this.name === project.title) {
              const projectTitle = document.querySelector('.header');
              projectTitle.innerHTML = `<h1>${project.title}</h1>`;

              const ListsPannel = document.querySelector('.lists');

              project.lists.forEach(list => {
                ListsPannel.innerHTML = `
                <div class='list'>
                  <h2>${list.title}</h2>
                  <div class='tasks'>

                  </div>
                </div>
                `;

                const tasksPannel = document.querySelector('.tasks');

                list.tasks.forEach(task => {
                  const checkbox = document.createElement('input');
                  checkbox.setAttribute('type', 'checkbox');
                  tasksPannel.appendChild(checkbox);
                  const taskText = document.createElement('span');
                  taskText.innerText = `${task.name}`;
                  tasksPannel.appendChild(taskText);
                  const lineBreak = document.createElement('br');
                  tasksPannel.appendChild(lineBreak);
                });
              });
            }
          });
        });
  }
}

export default Project;
