const request = require("request");

request(
  "https://api.thecatapi.com/v1/breeds/search?q=siberian",
  (err, res, body) => {
    console.log(body);
  }
);
