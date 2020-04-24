const request = require('request');
const config = require('./config.js')


const maps = (req, res, callback) => {
  const options = {
    url: '',
    headers: {
      'User': 'request',
      'Authorization': `token ${config.token}`
    }
  }

  request(options, (err, res, data) => {
    if(err) {
      console.log('error in api req', err)
    } else {
      console.log(data)
      callback(null, data)
    }
  })
}

module.exports = { maps }