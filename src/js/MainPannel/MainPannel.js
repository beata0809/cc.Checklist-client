import List from "./List";

class MainPannel {
  static getLists(title) {
    JSON.parse(localStorage.getItem('user')).projects.forEach(project => {
      if (title === project.title) {
        const MainPannel = document.querySelector('h1');
        MainPannel.innerHTML = `${title}`;

        List.renderLists(project.lists);

        // project.lists.forEach(list => {
        //   const listDiv = document.createElement('div');
        //   listDiv.setAttribute('class', 'list');
        //   const listTitle = document.createElement('h2');
        //   listTitle.textContent = `${list.title}`;
        //   const tasksDiv = document.createElement('div');
        //   tasksDiv.setAttribute('class', 'tasks');
        //   listDiv.appendChild(listTitle);
        //   listDiv.appendChild(tasksDiv);
        //   ListsPannel.appendChild(listDiv);
        //   /*ListsPannel.innerHTML = `
        //     <div class='list'>
        //       <h2>${list.title}</h2>
        //       <div class='tasks'>

        //       </div>
        //     </div>
        //     `;*/

        //   const listStatusCheck = () => {
        //     let listStatus = list.tasks.every(el => {
        //       return el.done === true;
        //     });

        //     if (listStatus) {
        //       //listDiv.style.display = 'none'; //inaczej będzie znikać po zaznaczeniu tego jednego tasku
        //     } else {
        //       listDiv.style.display = '';
        //     }
        //   };
        //   const tasksPannel = document.querySelector('.tasks');

        //   list.tasks.forEach(task => {
        //     const checkbox = document.createElement('input');
        //     checkbox.setAttribute('type', 'checkbox');
        //     tasksPannel.appendChild(checkbox);

        //     const taskText = document.createElement('span');
        //     taskText.innerText = `${task.name}`;
        //     tasksPannel.appendChild(taskText);

        //     const lineBreak = document.createElement('br');
        //     tasksPannel.appendChild(lineBreak);

        //     checkbox.addEventListener('click', () => {
        //       if (checkbox.checked) {
        //         taskText.style.textDecoration = 'line-through';
        //         task.done = true;
        //       } else {
        //         taskText.style.textDecoration = 'none';
        //         task.done = false;
        //       }

        //       listStatusCheck();
        //     });
        //   });
        // });
      }
    });
  }

  static render() {
    const element = document.createElement('section');
    element.id = 'MainPannel';
    element.innerHTML = `
        <div id='MainPannel'>
          <div class='header'>
            <h1></h1>
          </div>
          <div class='lists'>

          </div>
        </div>
        `;
    document.querySelector('.wrapper').appendChild(element);
  }
}

export default MainPannel;
