const axios = require('axios')
const convert = require('xml-js')
const url = 'https://iss.ndl.go.jp/api/opensearch?cnt=20&title='

exports.handler = (event, context, callback) => {
  const title = (event.queryStringParameters || { title: '' }).title

  axios
    .get(url + encodeURIComponent(title))
    .then((res) => {
      const mycontent = convert
        .xml2js(res.data, { ignoreComment: true, alwaysChildren: true })
        .elements[0].elements[0].elements.filter(
          (element) => element.name === 'item'
        )

      callback(null, {
        statusCode: 200,
        body: JSON.stringify({ content: mycontent })
      })
    })
    .catch(callback)
}
