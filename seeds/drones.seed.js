// Iteration #1
const drone = require('../models/Drone.model.js')

const openConnection = require('../db/index.js')
const { default: mongoose } = require('mongoose')


const drones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 },
  ]

  async function seeddrone() {
  const createDrones  = await drone.create(drones)
  console.log(`Created ${createDrones.length} drones.`)
  await mongoose.connection.close()
  console.log('Connection closed.')
  }
  seeddrone()