const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
  index,
  new: addFlight,
  create,
  show,
  delete: deleteOne,
  createDestination
};

async function deleteOne(req, res) {
  await Flight.deleteOne({_id: req.params.id})
  res.redirect('/flights')
}

async function show(req, res) {
  const flight = await Flight.findById(req.params.id);
  const tickets = await Ticket.find({flight: flight._id});
  console.log(tickets)
  res.render('flights/show', { title: 'Flight Details', flight, tickets });
  console.log(flight)
}

async function create(req, res) {
  console.log('req.body', req.body);
  try {
    await Flight.create(req.body);
    // always redirect after CUDing data
    // refactor to redirect after we implement it
    res.redirect('/flights/new');
  } catch (err) {
    console.log(err);
    res.render('flights/new', {title: 'Add Flight', errorMsg: err.message});
  }
}
async function createDestination(req, res) {
  console.log('req.body', req.body);
  try {
    const flight = await Flight.findById(req.params.id);
    flight.destinations.push(req.body);
    await flight.save();
    // always redirect after CUDing data
    // refactor to redirect after we implement it
    res.redirect(`/flights/${req.params.id}`);
  } catch (err) {
    console.log(err);
    res.redirect(`/flights/${req.params.id}`);
  }
}

function addFlight(req, res) {
   // We'll want to be able to render an
  // errorMsg if the create action fails
  res.render('flights/new', { errorMsg: '' });
}

async function index(req, res) {
  const flights= await Flight.find({});
  res.render('flights/index', { title: 'All Flights', flights });
}