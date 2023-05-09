var express = require('express');
var router = express.Router();

const flightsCtrl = require('../controllers/flights');

// GET /flights
router.get('/', flightsCtrl.index);
// GET /movies/new
router.get('/new', flightsCtrl.new);
// GET	/posts/:id 'show'(details)
router.get('/:id', flightsCtrl.show);

// POST	/posts  'create'
router.post('/', flightsCtrl.create);

module.exports = router;







