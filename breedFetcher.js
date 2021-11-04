const request = require("request");
const args = process.argv.slice(2);

request(
  `https://api.thecatapi.com/v1/breeds/search?q=${args}`,
  (err, res, body) => {
    //edge case: if there is an error with request (broken url)
    if (err) {
      console.log(`Error: Request failed\nError code: ${err.code}`);
      return;
    }

    //Use JSON.parse to obtain string into object
    const data = JSON.parse(body);

    //edge case: if there is an error (no breeds found)
    if (data.length === 0) {
      console.log("Error: No Breeds found");
      return;
    }

    //Return description for search results
    console.log("\n------Description------\n");
    console.log(data[0].description);
  }
);
