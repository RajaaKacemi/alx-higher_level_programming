const axios = require('axios');

const url = process.argv[2];

axios.get(url)
  .then(response => {
    console.log(`code: ${response.status}`);
  })
  .catch(error => {
    if (error.response) {
      // The request was made and the server responded with a status code
      console.log(`code: ${error.response.status}`);
    } else if (error.request) {
      // The request was made but no response was received
      console.log('code: No response received');
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('code: Error', error.message);
    }
  });
