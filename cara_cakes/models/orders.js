const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    user: {
        name: {
            type: String,
            required: true
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    },
    pastries: [{
        pastry: {
            type: Object,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        }
    }],
    event: {
        name: {
            type: String,
            required: true
        },
        purpose: {
            type: String,
            required: true
        },
        eventId: {
            type: Schema.Types.ObjectId,
            ref: 'Event',
            required: true
        },
        date: {
            type: String,
            required: true
        },
        time: {
            type: String,
            requred: true
        }
    }
});

module.exports = mongoose.model('Order', orderSchema);