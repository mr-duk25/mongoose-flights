const Ticket = require('../models/ticket')

module.exports = {
    new: newTicket,
};



function newTicket(req, res) {
    res.render('tickets/new');
  }