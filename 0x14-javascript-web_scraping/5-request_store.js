const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }

  if (response.statusCode === 200) {
    fs.writeFile(filePath, body, 'utf8', (err) => {
      if (err) {
        console.error('Error writing to file:', err);
        return;
      }
      console.log('File saved successfully.');
    });
  } else {
    console.log(`Error: Received status code ${response.statusCode}`);
  }
});
