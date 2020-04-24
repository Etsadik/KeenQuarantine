const model = require('./model.js')

const getNeighbors = (req, res) => {
  model.getNeighbors((data, err) => {
    if(err) {
      console.log('err in getneig controller')
    } else {
      res.send(data)
    }
  })
}

// const getRuns = (req, res) => {
//   model.getRuns((data, err) => {
//     if(err) {
//       console.log(err)
//     } else {
//       console.log('efore send')
//       res.send(data)
//     }
//   })
// }

const postNeighbor = (req, res) => {
  const neighbor = req.body
  console.log(neighbor)
  model.addNeighbor(neighbor, (data, err) => {
    if(err) {
      console.log('err adding new neighbor')
    } else {
      console.log('added neighbor successfully')
    }
  })
}

// const postRun = (req, res) => {
//   const run = req.body
//   model.addRun(run, (data, err) => {
//     if(err) {
//       console.log('err adding new run')
//     } else {
//       console.log('added run successfully')
//     }
//   })
// }

module.exports = { getNeighbors, postNeighbor}