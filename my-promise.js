'use strict';

function getUser(token, callback) {
  setTimeout(() => {
    callback(data);
  }, 1000);
}


getUser(
  '123123',
  (data) => {
    // success
  },
  (error) => {
    // error
  }
);




function getUser(token) {

  return new MyPromise(

    (resolve, reject) => {
      xhr.onerror = () => {
        reject(new Error('User not found'));
      };

      xhr.onload = () => {
        if (xhr.statusCode !== 200) {
          reject(new Error('User not found'));
        } else {
          resolve(data);
        }
      };

    }

  );
}

class MyPromise {
  constructor(behaviourFunction) {
    this._successCallbacks = [];
    this._errorCallbacks = [];

    this._result = undefined;
    this._state = 'pending';

    behaviourFunction(this._resolve.bind(this), this._reject.bind(this));
  }

  then(successCallback) {
    this._successCallbacks.push(successCallback);
  }

  catch(errorCallback) {
    this._errorCallbacks.push(successCallback);
  }

  _resolve(data) {
    if (this._state !== 'pending') {
      return;
    }

    this._state = 'Fulfilled (Successfully finished)';
    this._result = data;

    this._successCallbacks.forEach((callback) => {
      callback(this._result);
    });
  }

  _reject(error) {
    if (this._state !== 'pending') {
      return;
    }

    this._state = 'Rejected (Finished with error)';
    this._result = error;

    this._errorCallbacks.forEach((callback) => {
      callback(this._result);
    });
  }
}



let userPromise = getUser('1231');

userPromise
  .catch((error) => {

  });


userPromise
  .then((data) => {
    // print data
  });


userPromise
  .then((data) => {
    // send to email
  });


/// data recieved


userPromise
  .then((data) => {
    // send to email
  });
