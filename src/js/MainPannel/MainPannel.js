import List from './List';

class MainPannel {
  static getLists(title) {
    JSON.parse(localStorage.getItem('user')).projects.forEach(project => {
      if (title === project.title) {
        const MainPannel = document.querySelector('h1');
        MainPannel.innerHTML = `${title}`;

        List.renderLists(project.lists);
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
