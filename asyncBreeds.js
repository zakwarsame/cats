// asyncBreeds.js
const fs = require("fs");

const breedDetailsFromFile = function (breed, callback) {
  console.log("breedDetailsFromFile: Calling readFile...");
  fs.readFile(`./data/${breed}.txt`, "utf8", (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    if (!error) return callback(data);
});

};

const callback = breed => {
    console.log('Return Value: ', breed)
}

// we try to get the return value
const bombay = breedDetailsFromFile("Bombay", callback);
console.log("Return Value: ", bombay); // => will NOT print out details, instead we will see undefined!


