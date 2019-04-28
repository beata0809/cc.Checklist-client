
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
    const taskName = input.value;
    console.log(taskName);
    this.render(taskName);
  }
  static changeStatus (showTask, task, data, element) {
    //wykreślanie i zmiana statusu task'ów
    const checkbox = showTask.querySelector('[type=checkbox]');
    checkbox.addEventListener('click', () => {
      if (checkbox.checked) {
        showTask.style.textDecoration = 'line-through';
        task.done = true;

      } else {
        showTask.style.textDecoration = 'none';
        task.done = false;
      }
       console.log(task);
      listStatusCheck();
    });

    //status i znikanie list
    const listStatusCheck = () => {
      let listStatus = data.tasks.every(el => {
        return el.done === true;
      });

      if (listStatus) {
        //element.style.display = 'none'; //inaczej będzie znikać po zaznaczeniu tego jednego tasku
      } else {
        element.style.display = '';
      }
    };

  }
  // render pojedynczej listy
  static render(data) {
    const titleNoSpaces = data.titleNoSpaces;
    const element = document.createElement('div');
    element.className = 'list';
    element.innerHTML = `
        <h2>${data.title}</h2>
          <div class='tasks'>
          </div>

          <form id="${titleNoSpaces}-form">
            <div class="input-group mb-3 addList">
              <input
                id="${titleNoSpaces}-input"
                type="text"
                class="form-control"
                placeholder="Dodaj nowe zadanie"
                aria-label="Dodaj nowe zadanie"
                aria-describedby="basic-addon2"
              >

              <div class="input-group-append">
                <button id="${titleNoSpaces}-btn" class="btn btn-outline-dark" type="button">Dodaj</button>
              </div>
          </form>
        `;

    // Trzeba dodac taski do div'a .tasks
    // wzor taska "<input type="checkbox">Task example</input><br>"
    console.log(data.tasks);

      data.tasks.forEach(task => {
        const showTask = document.createElement('div');
        showTask.innerHTML = `
        <input type="checkbox">${task.name}</input>
        <br>
        `;
        element.querySelector('.tasks').appendChild(showTask);
        this.changeStatus(showTask, task, data, element);

      })


    element.querySelector('button').addEventListener('click', () => {
      // utworzenie nowego taska
      const task = document.createElement('input');
      task.setAttribute=('type', 'checkbox');
      const textInput = document.querySelector(`#${titleNoSpaces}-input`)
      this.addTask(textInput);
      // TODO
      // pobranie tekstu z inputa

        //console.log(document.querySelectorAll(`#${titleNoSpaces}-input`)[0].value);

      //console.log(document.querySelector(`#${titleNoSpaces}-input`))
      // dolaczenie go do listy
      // dolaczenie go do bazy

    })

    document.querySelector('.lists').appendChild(element);
  }

}

export default List;
