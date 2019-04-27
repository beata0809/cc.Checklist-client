class MainPannel {
  static getLists(title) {
    JSON.parse(localStorage.getItem('user')).projects.forEach(project => {
      if (title === project.title) {
        const MainPannel = document.querySelector('#MainPannel');
        MainPannel.innerHTML = '';

        const projectDiv = document.createElement('div');
        projectDiv.setAttribute('class', 'project');

        const projectTitleDiv = document.createElement('div');
        projectTitleDiv.setAttribute('class', 'header');

        const projectTitle = document.createElement('h1');
        projectTitle.textContent = `${title}`;

        const ListsPannel = document.createElement('div');
        ListsPannel.setAttribute('class', 'lists');

        MainPannel.appendChild(projectDiv);
        projectDiv.appendChild(projectTitleDiv);
        projectTitleDiv.appendChild(projectTitle);
        projectDiv.appendChild(ListsPannel);

        /*const projectTitle = document.querySelector('.header');
          projectTitle.innerHTML = `<h1>${project.title}</h1>`;*/

        //const ListsPannel = document.querySelector('.lists');

        project.lists.forEach(list => {
          const listDiv = document.createElement('div');
          listDiv.setAttribute('class', 'list');
          const listTitle = document.createElement('h2');
          listTitle.textContent = `${list.title}`;
          const tasksDiv = document.createElement('div');
          tasksDiv.setAttribute('class', 'tasks');
          listDiv.appendChild(listTitle);
          listDiv.appendChild(tasksDiv);
          ListsPannel.appendChild(listDiv);
          /*ListsPannel.innerHTML = `
            <div class='list'>
              <h2>${list.title}</h2>
              <div class='tasks'>

              </div>
            </div>
            `;*/

          const listStatusCheck = () => {
            let listStatus = list.tasks.every(el => {
              return el.done === true;
            });

            if (listStatus) {
              //listDiv.style.display = 'none'; //inaczej będzie znikać po zaznaczeniu tego jednego tasku
            } else {
              listDiv.style.display = '';
            }
          };
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

            checkbox.addEventListener('click', () => {
              if (checkbox.checked) {
                taskText.style.textDecoration = 'line-through';
                task.done = true;
              } else {
                taskText.style.textDecoration = 'none';
                task.done = false;
              }

              listStatusCheck();
            });
          });
        });
      }
    });
  }

  static render() {
    const element = document.createElement('section');
    element.id = 'MainPannel';
    element.innerHTML = `
        <div id='MainPannel'>
          <div class='header'>
            <h1>Project 1</h1>
          </div>
          <div class='lists'>
            <div class='list'>
              <h2>List 1</h2>
              <div class='tasks'>
                <input type="checkbox">Umyć zęby!</input><br>
                <input type="checkbox">Wyjść z psem</input><br>
                <input type="checkbox">Umyć naczynia</input><br>
                <input type="checkbox">Udemy - React - Udemy - React - Udemy - React</input><br>
                <input type="checkbox">Udemy - React - Udemy - React - Udemy - React</input><br>
                <input type="checkbox">Udemy - React - Udemy - React - Udemy - React</input><br>
                <input type="checkbox">Udemy - React - Udemy - React - Udemy - React</input><br>
              </div>
            </div>
            <div class='list'></div>
            <div class='list'></div>
            <div class='list'></div>
            <div class='list'></div>
            <div class='list'></div>
            <div class='list'></div>
          </div>
        </div>
        `;
    document.querySelector('.wrapper').appendChild(element);
  }
}

export default MainPannel;
