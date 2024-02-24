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
  const body = await res.body;
  console.log({ body, joke });
  return body.joke;
}

module.exports = getJoke;
