const mongoose = require('mongoose');
const db = require('../index.js')

// const runSchema = mongoose.Schema({
//   runner: String,
//   location: String,
//   time: String,
//   neighbors: [],
//   items: []
// })
const neighborSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  address: String,
  email: {type: 'String', unique: true},
  photoUrl: String,
  run: {
    day: String,
    time: String,
    store: String,
  }
});


// const Run = mongoose.model('Run', runSchema);
const Neighbor = mongoose.model('Neighbor', neighborSchema);


const getNeighbors = (callback) => {
  console.log('in the get')
  Neighbor.find((err, data) => {
    if(err) {
      console.log('error in the db find')
    } else {
      callback(data)
    }
  })
}

const addNeighbor = (neighbor, callback) => {
  const newNeighbor = new Neighbor({
    firstName: neighbor.firstName,
    lastName: neighbor.lastName,
    email: neighbor.email,
    photoUrl: neighbor.photoUrl,
    run: {
      day: neighbor.run.day,
      time: neighbor.run.time,
      store: neighbor.run.store
    }
  })
  newNeighbor.save((err) => {
    if (err) {
      callback(null, err)
    } else {
      callback(neighbor)
    }
  })
}

// const getRuns = (callback) => {
//   Run.find((err, data) => {
//     if(err) {
//     } else {
//       console.log('in the get run', data)
//       callback(data)
//     }
//   })
// }

// const addRun = (run, callback) => {
//   const newRun = new Run({
//     runner: run.runner,
//     location: run.location,
//     time: run.time,
//     neighbors: run.neighbors,
//     items: run.items
//   })

//   newRun.save((err) => {
//     if (err) {
//       callback(null, err)
//     } else {
//       callback(run)
//     }
//   })
// }

module.exports = { getNeighbors, addNeighbor }