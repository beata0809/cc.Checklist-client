import Task from './Task';

class List {
  static renderLists(lists) {
    const listsPannel = document.querySelector('.lists');
    listsPannel.innerHTML = '';
    lists.forEach(list => {
      this.render(list);
      Task.renderTasks(list);
    });
  }

  static render({ title, _id }) {
    const titleNoSpaces = title.replace(/\s/g, '');
    const element = document.createElement('div');
    element.className = 'list';
    element.innerHTML = `
            <h2>${title}</h2>
              <form id="${titleNoSpaces}-main-form">
                <div class="input-group mb-3 addList">
                    <input
                      id="${titleNoSpaces}-main-input"
                      type="text"
                      class="form-control"
                      placeholder="Dodaj nowy task"
                      aria-label="Dodaj nowy task"
                      aria-describedby="basic-addon2"
                    />
                    <div class="input-group-append">
                      <button id="${titleNoSpaces}-main-btn" class="btn btn-outline-secondary" type="button">Dodaj</button>
                    </div>
                </div>
              </form>
            <ul class="list-group list-group-flush" id="list-main-${titleNoSpaces}"></ul>
        `;
    document.querySelector('.lists').appendChild(element);
    const taskInput = document.querySelector(`#${titleNoSpaces}-main-input`);
    document
      .querySelector(`#${titleNoSpaces}-main-btn`)
      .addEventListener('click', () => Task.addTask(taskInput, title, _id));
  }
}

export default List;
