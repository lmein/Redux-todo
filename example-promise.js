//two values - pass in value (location) and received value (callback)
function getTempCallback (location, callback) {
  //successful
  callback(undefined, 78);
  //not successful
  callback('City not found');
}

//Philadephia is the passed in value, the function is the received value
//The function has two values, an error if returned value doesn't generate properly and
//the returned value of temp.

//1st problem - an if else has to be written each time to determine if error or not.
//2nd problem - success and error case can both be called in the above function.
getTempCallback('Philadephia', function (err, temp) {
  if (err) {
    console.log('error', err);
  } else {
    console.log('success', temp);
  }
});

//promises:
//promises only need one argument
function getTempPromise (location) {
  //the promise returns the value.
  //the promise constructor () gets a function with a resolve and reject argument.
  //the promise will only do one of the resolve or reject based on what is returned.
  return new Promise (function (resolve, reject) {
    resolve(80);
    reject('City not found');
  });
}

//The .then method waits for the function to complete.
//the first function is success case and the second one is for errors.
getTempPromise('Philadephia').then(function (temp) {
  console.log('Promise success: ',temp);
}, function (err) {
  console.log('Promise error: ',err);
});
