import Api from '../Api/Api';

class Task {
  //Renderowanie tasków
  static renderTasks({ title, tasks }) {
    tasks.forEach(task => this.render(title, task.name, task.done, task._id));
  }

  //Zmiana statusu istniejącego już taska
  static async changeStatus(elem, status, _id) {
    const userId = JSON.parse(localStorage.getItem('user'))._id; //pobranie id usera z localStorage
    elem.classList.toggle('done'); //dodanie/usunięcie klasy done (czyli przekreslenia zrobienego tasku)
    const done = !status; //zmiana statusu na odwrotny
    await Api.updateTask({ done }, _id); //zaasktualizowanie statusu taska w bazie
    const newUserData = await Api.getUserById(userId); //pobranie zaaktualizowanych danych usera
    localStorage.setItem('user', JSON.stringify(newUserData)); //zapisanie aktualnych danych usera w localStorage
  }

  //Dodawane tasków
  static async addTask(input, listName, listId) {
    const userId = JSON.parse(localStorage.getItem('user'))._id; //pobranie id usera z localStorage
    const name = input.value; //przypisane wartości podanej w inpuice do zmiennej
    //obiekt nowego taska, który bedzie wysłany na bakcend
    const newTask = {
      listId: listId,
      task: {
        name: name,
        done: false,
      },
    };
    const addedTask = await Api.addTask(newTask); //wysłanie powyższego obiektu na backend
    const newUserData = await Api.getUserById(userId); //pobranie zaaktualizowanych danych usera
    localStorage.setItem('user', JSON.stringify(newUserData)); //zapisanie aktualnych danych usera w localStorage
    this.render(listName, name, false, addedTask._id); //wyrenderowanie dodanego tasku
    document.querySelector(`#${listName.replace(/\s/g, '')}-main-form`).reset(); //zresetowanie inputa
  }

  //Renderowanie pojedynczego taska
  static render(listName, taskName, status, _id) {
    const taskNameNoSpaces = taskName.replace(/\s/g, ''); //utworzenie zmiennej zawierającej nazwe taska bez spacji
    const listItem = document.createElement('li'); //utworzenie elementu listy
    listItem.className = 'list-group-item'; //nadanie mu klasy
    listItem.innerHTML = `
    <input id="${taskNameNoSpaces}-checkbox" type="checkbox" ${status ? 'checked class="done"' : ''}>
      <span id="${taskNameNoSpaces}-span" ${status ? 'class="done"' : ''}>${taskName}</span>
      </input>`; // dodanie do elementu listy html'a
    document.querySelector(`#list-main-${listName.replace(/\s/g, '')}`).appendChild(listItem); //dołączenie elemntu listy do listy
    const checkbox = document.querySelector(`#${taskNameNoSpaces}-checkbox`); // chwycenie checkboxa
    const innerText = document.querySelector(`#${taskNameNoSpaces}-span`); //chwycenie spana wewnątrz checkboxa
    checkbox.addEventListener('click', async () => await this.changeStatus(innerText, status, _id)); //wywołanie change status po klinkięciu
  }
}

export default Task;
