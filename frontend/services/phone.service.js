import HTTPService from './http.service';


export default class PhoneService {
  static get(phoneId, callback) {
    let url = `/phones/${phoneId}.json`;

    HTTPService.sendRequest(url, callback);
  }

  static getAll(callback) {
    let url = `/phones/phones.json`;

    HTTPService.sendRequest(url, callback);
  }
}

