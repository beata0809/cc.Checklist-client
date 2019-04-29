import axios from 'axios';

export default axios.create({
  baseURL: 'https://cc-to-do-list.herokuapp.com/api',
});
