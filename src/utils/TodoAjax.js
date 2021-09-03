import axios from 'axios';

export class TodoAjax {
  static get(page) {
    return axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=10&_page=${page}`);
  }
}
