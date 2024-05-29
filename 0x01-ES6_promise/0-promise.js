function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous API call with setTimeout
    setTimeout(() => {
      const success = true; // Simulate API success/failure

      if (success) {
        resolve('API call successful!');
      } else {
        reject(new Error('failure'));
      }
    });
  });
}

export default getResponseFromAPI;
