const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    purpose: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    day: {
        type: String,
        required: true
    },
    month: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    hour: {
        type: String,
        required: true
    },
    mins: {
        type: String,
        required: true
    },
    per: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    cart: {
        items: [{
            pastryId: {
                type: Schema.Types.ObjectId,
                ref: 'Pastry',
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }]
    }
});

eventSchema.methods.addToCart = function (pastry) {
    const cartProductIndex = this.cart.items.findIndex(cp => { // this.cart.items... is used to goto the cart, then the specific items using the findindex method
        return cp.pastryId.toString() === pastry._id.toString(); // if there is a match between the cart item id and the product id, it returns the index of where it was found
    });
    let newQuantity = 1;
    const updatedCartItems = [...this.cart.items]; // here you create a new array using the spread operator and store in the variable

    if (cartProductIndex >= 0) {
        newQuantity = this.cart.items[cartProductIndex].quantity + 1; // here I access the index of the cart item using the index i got from the above function and increament its quatity
        updatedCartItems[cartProductIndex].quantity = newQuantity; //using the new array i created from the spread operator, i access the index of the item and update the item quantity by one
    } else { //if there was no match for the product in the cart i create the new one and push it to the array
        updatedCartItems.push({
            pastryId: pastry._id,
            quantity: newQuantity
        })
    }
    const updatedCart = { //here i set the updatedCart after all the operations above have been done
        items: updatedCartItems
    };
    this.cart = updatedCart; // now i set now the cart afresh to the updatedCart then i save it
    return this.save();
}

eventSchema.methods.subFromCart = function (pastry) {
    const cartProductIndex = this.cart.items.findIndex(cp => {
        return cp.pastryId.toString() === pastry._id.toString();
    });
    const updatedCartItems = [...this.cart.items];
    // let quantity = updatedCartItems[cartProductIndex].quantity;

    if (cartProductIndex >= 0) {
        if (updatedCartItems[cartProductIndex].quantity > 0) {
            quantity = this.cart.items[cartProductIndex].quantity - 1;
            updatedCartItems[cartProductIndex].quantity = quantity;
        } else if (updatedCartItems[cartProductIndex].quantity === 0) {
            updatedCartItems.splice(cartProductIndex, 1);
        }
    }
    const updatedCart = {
        items: updatedCartItems
    };
    this.cart = updatedCart;
    return this.save();
}

eventSchema.methods.removeFromCart = function(pastryId) {
    const updatedCartItems = this.cart.items.filter(item => {
        return item.pastryId.toString() !== pastryId.toString();
    });

    this.cart.items = updatedCartItems;
    return this.save();
}

eventSchema.methods.clearCart = function() {
    this.cart = {items: [] };
    return this.save();
}


module.exports = mongoose.model('Event', eventSchema);


// const mongodb = require('mongodb');

// const getDb = require('../util/database').getDb;

// const ObjectId = mongodb.ObjectId;

// class Event {
//     constructor(name, purpose, image, date, time, id) {
//         this.name = name;
//         this.purpose = purpose;
//         this.image = image;
//         this.date = date;
//         this.time = time;
//         this._id = id ? new ObjectId(id) : null;
//     }

//     save() {
//         const db = getDb();
//         let dbOp;

//         if (this._id) {
//             dbOp = db.collection('events').updateOne({
//                 _id: this._id
//             }, {
//                 $set: this
//             })
//         } else {
//             dbOp = db.collection('events').insertOne(this)
//         }

//         return dbOp
//             .then(result => {
//                 console.log('Event Created');
//             })
//             .catch(err => {
//                 console.log(err);
//             })
//     }

//     static fetchAll() {
//         const db = getDb();
//         return db
//             .collection('events')
//             .find()
//             .toArray()
//             .then(events => {
//                 return events;
//             })
//             .catch(err => {
//                 console.log(err);
//             });
//     }

//     static findById(eventId) {
//         const db = getDb();
//         return db.collection('events').find({
//                 _id: new ObjectId(eventId)
//             })
//             .next()
//             .then(event => {
//                 return event;
//             })
//             .catch(err => {
//                 console.log(err);
//             })
//     }

//     static deleteById(eventId) {
//         const db = getDb();

//         return db.collection('events').deleteOne({
//                 _id: new ObjectId(eventId)
//             })
//             .then(result => {
//                 console.log('deleted');
//             })
//             .catch(err => {
//                 console.log(err);
//             })
//     }
// }

// module.exports = Event;