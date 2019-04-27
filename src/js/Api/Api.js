import checklist from './checklist';

class Api {
  static async Login(loginData) {
    try {
      const { data } = await checklist.post('/auth', loginData);
      return data;
    } catch (ex) {
      console.log(ex.response.data);
    }
  }

  static async getUserById(id) {
    try {
      const { data } = await checklist.get(`/users/${id}`);
      return data;
    } catch (ex) {
      console.log(ex);
    }
  }

  static async addProject(projectData) {
    try {
      const { data } = await checklist.post('/projects', projectData);
      return data;
    } catch (ex) {
      console.log(ex);
    }
  }

  static async addList(listData) {
    try {
      const { data } = await checklist.post('/lists', listData);
      return data;
    } catch (ex) {
      console.log(ex);
    }
  }
}

export default Api;
