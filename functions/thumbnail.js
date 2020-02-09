const axios = require("axios");
let url = "https://iss.ndl.go.jp/thumbnail/";

exports.handler = (event, context, callback) => {
  let isbn = (event.queryStringParameters || { isbn: "" }).isbn;

  axios
    .get(url + isbn)
    .then(res => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({ content: res.data })
      });
    })
    .catch(callback);

};
