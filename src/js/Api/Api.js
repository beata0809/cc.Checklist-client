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
}

export default Api;
