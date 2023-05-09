var express = require('express');
var router = express.Router();

const flightsCtrl = require('../controllers/flights');

// GET /flights
router.get('/', flightsCtrl.index);
// GET /flights/new
router.get('/new', flightsCtrl.new);
// GET	/flights/:id 'show'(details)
router.get('/:id', flightsCtrl.show);
// GET	/flights/:id/destinations

// POST	/flights  'create'
router.post('/', flightsCtrl.create);

module.exports = router;







