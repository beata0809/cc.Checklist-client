import checklist from './checklist';

class Api {
  static async fetchExample() {
    const resp = await checklist.get('/example');
    console.log(resp.data);
  }

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
