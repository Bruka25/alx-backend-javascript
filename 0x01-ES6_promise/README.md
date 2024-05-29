The following codes are for ALX 0x01-ES6_promise for the alx-backend-javascript curriculum, inside it contains the following javascript codes:

* Return a Promise using this prototype function getResponseFromAPI()
* Using the prototype below, return a promise. The parameter is a boolean

getFullResponseFromAPI(success)

* Using the function prototype below append three handlers to the function

function handleResponseFromAPI(promise)

* Use the prototype below to collectively resolve all promises and log body firstName lastName to the console

function handleProfileSignup()

* Using the following prototype

function signUpUser(firstName, lastName) {
}

That returns a resolved promise with this object:

{
  firstName: value,
  lastName: value,
}

* Write and export a function named uploadPhoto. It should accept one argument fileName (string)
  The function should return a Promise rejecting with an Error and the string $fileName cannot be processed

  export default function uploadPhoto(filename) {

  }

* Write and export a function named handleProfileSignup. It should accept three arguments firstName (string), lastName (string), and 
  fileName (string). The function should call the two other functions. When the promises are all settled it should return an array with the   following structure:

[
    {
      status: status_of_the_promise,
      value: value or error returned by the Promise
    },
    ...
  ]

* Write and export a function named loadBalancer. It should accept two arguments chinaDownload (Promise) and USDownload (Promise)
  The function should return the value returned by the promise that resolved the first
  
  export default function loadBalancer(chinaDownload, USDownload) {

  }

* Write a function named divideFunction that will accept two arguments: numerator (Number) and denominator (Number)
  When the denominator argument is equal to 0, the function should throw a new error with the message cannot divide by 0. Otherwise it 
  should return the numerator divided by the denominator

  export default function divideFunction(numerator, denominator) {

  }

* Write a function named guardrail that will accept one argument mathFunction (Function)
  This function should create and return an array named queue

* Import uploadPhoto and createUser from utils.js
  Write an async function named asyncUploadUser that will call these two functions and return an object with the following format:

  {
   photo: response_from_uploadPhoto_function,
   user: response_from_createUser_function,
  }
