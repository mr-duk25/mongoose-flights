const Ticket = require('../models/ticket')

module.exports = {
    index
};


function index(req, res) {
    res.render('tickets/new', {
    //   tickets: Ticket.getAll()
    });
  }