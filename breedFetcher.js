const request = require("request");

const url = "https://api.thecatapi.com/v1/breeds/search?q=";

const fetchBreedDescription = function(breedname, callback) {
  request(url + breedname, (err, res, body) => {
    //edge case: if there is an error with request (broken url)
    if (err) {
      callback(err.code, null);
      return;
    }

    //Use JSON.parse to obtain string into object
    const data = JSON.parse(body);

    //edge case: if there is an error (no breeds found)
    if (data.length === 0) {
      callback("No Breeds Found", null);
      return;
    }

    //Return description for search results
    callback(null, data[0].description);
  });
};

module.exports = { fetchBreedDescription };
