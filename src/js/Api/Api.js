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

  static async updateTask(status, id) {
    try {
      const { data } = await checklist.put(`/tasks/${id}`, status);
      console.log(data);
    } catch (ex) {
      console.log(ex);
    }
  }

  static async addTask(taskData) {
    try {
      const { data } = await checklist.post('/tasks', taskData);
      return data;
    } catch (ex) {
      console.log(ex);
    }
  }
  static async createUser(registerData){
    try {
      const {data} = await checklist.post('/users/', registerData)
      return data;
    } catch (ex){
      return ex.response
    }
  }
}

export default Api;
