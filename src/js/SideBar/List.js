import Api from '../Api/Api';
import MainPannel from '../MainPannel/MainPannel';

class List {
  static renderLists(data) {
    const { projects } = data;
    projects.forEach(project => {
      project.lists.forEach(list => {
        this.render(list.title, project.title);
      });
    });
  }

  static findProjectByTitle(title) {
    const { projects } = JSON.parse(localStorage.getItem('user'));
    const project = projects.filter(project => project.title === title);
    return project[0];
  }

  static async addList(input, projectTitle) {
    let userData = JSON.parse(localStorage.getItem('user'));
    const name = input.value;
    const projectData = this.findProjectByTitle(projectTitle);
    const index = userData.projects.findIndex(project => project._id === projectData._id);
    const newList = {
      projectId: projectData._id,
      list: {
        title: name,
      },
    };

    this.render(name, projectTitle);
    const data = await Api.addList(newList);
    projectData.lists.push({ title: name, _id: data._id, tasks: [] });
    userData.projects[index] = projectData;
    localStorage.setItem('user', JSON.stringify(userData));
    document.querySelector(`#${projectTitle.replace(/\s/g, '')}-form`).reset();

    MainPannel.getLists(userData.projects[index].title)
  }

  static render(listName, projectTitle) {
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item';
    listItem.innerText = listName;
    document.querySelector(`#list-${projectTitle.replace(/\s/g, '')}`).appendChild(listItem);
  }
}

export default List;
