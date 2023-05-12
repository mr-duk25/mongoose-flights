const Ticket = require('../models/ticket')
const Flight = require('../models/flight')


module.exports = {
    new: newTicket,
    create,
    show
};

async function newTicket(req, res) {
    console.log('test')
    res.render('tickets/new', {title: 'Add Ticket', flightId: req.params.id})
}




async function create(req, res) {
    try {
        req.body.flight = req.params.id
        const ticket = await Ticket.create(req.body)
        console.log('ticket', ticket)
        res.redirect(`/flights/${req.params.id}`);
    } catch (err) {
        console.log(err);
    }
}


async function show(req, res) {
    flight.findById(req.params.id, function (err, flight) {
        Ticket.find({flight: flight._id}, function (err, tickets) {
            res.render ('flights/show', {tickets});
        })
    })
}


