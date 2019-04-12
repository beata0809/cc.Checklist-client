import checklist from './checklist';

class Api {
    static async fetchExample() {
        const resp = await checklist.get('/example');
        console.log(resp.data);
    }
}

export default Api;