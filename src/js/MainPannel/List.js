
class List {

  static renderLists(lists) {
    const listsPannel = document.querySelector('.lists');
    listsPannel.innerHTML = '';

    lists.forEach(list => {
      this.render(list);
    });
  }

  // dodanie do bazy
  static async addTask(input) {

  }

  // render pojedynczej listy
  static render(data) {
    const element = document.createElement('div');
    element.className = 'list';
    element.innerHTML = `
        <h2>${data.title}</h2>
          <div class='tasks'>
          </div>
        <button type="button" class="btn btn-outline-dark">
          Dodaj
        </button>
        <input type="textarea">
        `;

    // Trzeba dodac taski do div'a .tasks
    // wzor taska "<input type="checkbox">Task example</input><br>"
    data.tasks.forEach(task => {
      const showTask = document.createElement('div');
        showTask.innerHTML = `
        <input type="checkbox">${task.name}</input>
        <br>
        `;
      element.querySelector('.tasks').appendChild(showTask);
    })


    element.querySelector('button').addEventListener('click', () => {
      element.querySelector('[type=textarea]').style.display = 'initial';
    })
    document.querySelector('.lists').appendChild(element);
  }
}

export default List;
