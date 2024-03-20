const fetch = require("node-fetch");

const getUser = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/9"
    );
    const userData = response.json();
    return userData;
  } catch (err) {
    console.error(`The following ${err} occured while fetching the data`);
  }
};

module.exports = getUser;
