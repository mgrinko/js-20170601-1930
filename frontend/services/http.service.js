'use strict';

// const BASE_API_URL = 'https://mgrinko.github.io/js-20170601-1930/data';
const BASE_API_URL = '//localhost:3000/data';


export default class HTTPService {
  static sendRequest(url, successCallback, method = 'GET') {
    let xhr = new XMLHttpRequest();

    xhr.open(method, '/data' + url, true);
    xhr.send();

    xhr.onerror = () => {
      alert(xhr.status);
    };

    xhr.onload = () => {
      if (xhr.status !== 200) {
        console.error( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found

        return;
      }

      let data = JSON.parse(xhr.responseText);

      successCallback(data);
    };
  }
}