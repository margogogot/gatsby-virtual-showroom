var axios = require('axios');

exports.handler = function(event, context, callback) {
    const body = JSON.parse(event.body).payload;
    axios.post('https://api.forms-surfaces.net/v1/contact', body.data,
    {headers: {'Content-Type': 'application/json'}})
    .then((data)=>{
      return callback(null, {
        statusCode: 200,
        body: "Beep, boop, you just got serverless."
      })
    })
    .catch((error)=>{
      console.log('failed')
      return callback(null, {
        statusCode: error.status,
        body: JSON.stringify({
          message: error.message,
          error: error,
        })
      })
    })
}
