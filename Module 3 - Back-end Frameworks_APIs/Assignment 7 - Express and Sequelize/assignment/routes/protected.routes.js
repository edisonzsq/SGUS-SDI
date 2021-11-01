const express = require('express');
const router = express.Router();
const VehicleController = require('../controllers/vehicle.controller')

const vehicleController = new VehicleController();

router.get('/protected', (request, response) => {
    response.send('You have accessed a protected route.');
});

router.post('/protected/onboard', async (req,res) => await vehicleController.onboard(req,res));
router.post('/protected/offboard', async (req,res) => await vehicleController.offboard(req,res));
router.put('/protected/vehicle', async(req,res) => await vehicleController.change(req, res));
router.delete('/protected/driver/:driverId', async(req,res) => await vehicleController.removeDriver(req,res));

module.exports = router;