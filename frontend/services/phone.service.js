import HTTPService from './http.service';


export default class PhoneService {
  static get(phoneId) {
    return HTTPService.send(`/phones/${phoneId}.json`);
  }

  static getAll() {
    return HTTPService.send(`/phones/phones.json`);
  }
}

