const core = require("@actions/core");

const options = {
  method: "GET",
  uri: "https://icanhazdadjoke.com/",
  headers: {
    Accept: "application/json",
    "User-Agent": "Writing JavaScript action GitHub Skills course.",
  },
  json: true,
};

async function getJoke() {
  const res = await fetch(options.uri, { options });
  const joke = await res.json().then((data) => data.joke);
  console.log({ joke });
  return body.joke;
}

module.exports = getJoke;
