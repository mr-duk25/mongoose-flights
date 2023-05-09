var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['LAX', 'AUS', 'DFW', 'DEN', 'SAN']
    },
    arival: {
        type: Date,
    }
})

var flightSchema = new Schema ({
    airport: {
        type: String,
        enum: ['LAX', 'AUS', 'DFW', 'DEN', 'SAN'],
        default: 'SAN'
    }, 
    airline: {
        type: String,
        enum: ['Spirit', 'United', 'American Airlines', 'Jetblue', 'Delta']
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 999
    },
    departs: { 

        type: Date,
        default: function () {
            return new Date(new Date().setFullYear(new Date ().getFullYear() + 1));
        },
   
    },
    destinations: [destinationSchema]
});

module.exports = mongoose.model('Flight', flightSchema);