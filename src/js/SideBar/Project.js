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
              const ListsPannel = document.querySelector('.lists');

              project.lists.forEach(list => {
                ListsPannel.innerHTML = `
                <div class='list'>
                  <h2>List 1</h2>
                  <div class='tasks'>

                  </div>
                </div>
                `;
                const tasksPannel = document.querySelector('.tasks');

                list.tasks.forEach(task => {
                  console.log(task);
                  const task2 = document.createElement('input');
                  task2.setAttribute('type', 'checkbox');
                  console.log(task2);
                  task2.innerHTML = `${task.name}`;
                  tasksPannel.appendChild(task2);
                });
              });
            }
          });
        });
  }
}

export default Project;
