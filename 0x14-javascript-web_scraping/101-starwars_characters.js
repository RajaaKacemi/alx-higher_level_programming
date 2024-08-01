const request = require('request');

const movieId = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }

  if (response.statusCode === 200) {
    const film = JSON.parse(body);
    const characters = film.characters;

    // Function to fetch character name by URL
    const fetchCharacterName = (url, callback) => {
      request(url, (charError, charResponse, charBody) => {
        if (charError) {
          callback(charError, null);
          return;
        }

        if (charResponse.statusCode === 200) {
          const character = JSON.parse(charBody);
          callback(null, character.name);
        } else {
          callback(new Error(`Unable to fetch character data from ${url}`), null);
        }
      });
    };

    // Sequentially fetch character names to maintain order
    const fetchCharactersSequentially = (urls, index = 0) => {
      if (index >= urls.length) {
        return;
      }

      fetchCharacterName(urls[index], (err, name) => {
        if (err) {
          console.error('Error:', err);
        } else {
          console.log(name);
        }
        fetchCharactersSequentially(urls, index + 1);
      });
    };

    fetchCharactersSequentially(characters);
  } else {
    console.log(`Error: Unable to fetch movie data from ${url}`);
  }
});
