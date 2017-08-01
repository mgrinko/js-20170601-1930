'use strict';

import { API_URL } from '../../config';

export default class HTTPService {
  static sendRequest(url, successCallback, errorCallback, method = 'GET') {
    let xhr = new XMLHttpRequest();

    xhr.open(method, API_URL + url, true);
    xhr.send();

    xhr.onerror = () => {
      errorCallback(xhr.status);
    };

    xhr.onload = () => {
      if (xhr.status !== 200) {
        errorCallback( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found

        return;
      }

      let data = JSON.parse(xhr.responseText);

      successCallback(data);
    };
  }

  static send(url, method = 'GET') {
    return new Promise(
      (resolve, reject) => {

        let xhr = new XMLHttpRequest();

        xhr.open(method, API_URL + url, true);
        xhr.send();

        xhr.onerror = () => {
          reject(xhr.status + ': ' + xhr.statusText);
        };

        xhr.onload = () => {
          if (xhr.status !== 200) {
            reject( xhr.status + ': ' + xhr.statusText );

            return;
          }

          let data = JSON.parse(xhr.responseText);

          resolve(data);
        };

      }
    );

  }
}