const Ticket = require('../models/ticket')

module.exports = {
    index
};


function index(req, res) {
    res.render('flights/ticketsview', {
    //   tickets: Ticket.getAll()
    });
  }