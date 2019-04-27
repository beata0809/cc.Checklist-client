
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
        `;

    // Trzeba dodac taski do div'a .tasks
    // wzor taska "<input type="checkbox">Task example</input><br>"

    document.querySelector('.lists').appendChild(element);
  }
}

export default List;
