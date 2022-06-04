const express = require('express')
const router = express.Router()

// require the Drone model here
const Drone =  require('../models/Drone.model.js')


router.get('/drones', async (req, res, next) => {
  try {
    const allDrones = await Drone.find()
    res.status(200).json(allDrones)
  } catch (err) {
    next(err)
  }
  
  // Iteration #2: List the drones
  // ... your code here
})

router.post('/drones', async (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const drone= req.body
  const addOneDrone = await Drone.create(drone);
  if (!drone.name){
    res.status(400).json({
      message: 'BAD REQUEST',
    })
    return
  }
  res.status(201).json({
    message: 'CREATED ',
    body: req.body,
  })

})

router.post('/drones/:id', async(req, res, next) => {
  try {
    const droneId = req.params.id
    // the "{new: true}" option allows us to get the updated version of the document instead of the previous one 
    const updateddroneId = await Drone.findByIdAndUpdate(droneId, req.body, {new: true})
    res.status(200).json(updateddroneId)
} catch (err) {

    next(err)
}
  
  
  // Iteration #4: Update the drone
  // ... your code here
})

router.delete('/drones/:id', async(req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  try {
    const deletedThing = await Drone.findByIdAndDelete(req.params.id)
    console.log(deletedThing)
    res.json({message: `I deleted ${deletedThing.name}`})
} catch (err) {

    next(err)
}


})

module.exports = router
