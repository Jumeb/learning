const Event = require('../models/events');
const Cake = require('../models/product');
const Order = require('../models/orders');
const User = require('../models/user')

exports.getBds = (req, res, next) => {
    const eventId = req.params.eventId;
    Cake.find({
            genre: 'Birthday-cake'
        })
        .then(cakes => {
            res.render('user/cakes', {
                pageTitle: 'Add anything',
                path: '/user/cakes',
                pastries: cakes,
                eventId: eventId,
                authenticated: req.session.loggedIn,
                csrfToken: req.csrfToken()
            });
        })
        .catch(err => {
            console.log(err);
        })
}

exports.getWeds = (req, res, next) => {
    const eventId = req.params.eventId;
    Cake.find({
            genre: 'Wedding-cake'
        })
        .then(cakes => {
            res.render('user/cakes', {
                pageTitle: 'Add anything',
                path: '/user/weds',
                pastries: cakes,
                eventId: eventId,
                authenticated: req.session.loggedIn,
                csrfToken: req.csrfToken()
            });
        })
        .catch(err => {
            console.log(err);
        })
}

exports.getCookies = (req, res, next) => {
    const eventId = req.params.eventId;
    Cake.find({
            genre: 'Cookie'
        })
        .then(cakes => {
            res.render('user/cakes', {
                pageTitle: 'Add anything',
                path: '/user/cookies',
                pastries: cakes,
                eventId: eventId,
                authenticated: req.session.loggedIn,
                csrfToken: req.csrfToken()
            });
        })
        .catch(err => {
            console.log(err);
        })
}

exports.getPans = (req, res, next) => {
    const eventId = req.params.eventId;
    Cake.find({
            genre: 'Pancake'
        })
        .then(cakes => {
            res.render('user/cakes', {
                pageTitle: 'Add anything',
                path: '/user/pans',
                pastries: cakes,
                eventId: eventId,
                authenticated: req.session.loggedIn,
                csrfToken: req.csrfToken()
            });
        })
        .catch(err => {
            console.log(err);
        })
}

exports.getDons = (req, res, next) => {
    const eventId = req.params.eventId;
    Cake.find({
            genre: 'Doughnuts'
        })
        .then(cakes => {
            res.render('user/cakes', {
                pageTitle: 'Add anything',
                path: '/user/dons',
                pastries: cakes,
                eventId: eventId,
                authenticated: req.session.loggedIn,
                csrfToken: req.csrfToken()
            });
        })
        .catch(err => {
            console.log(err);
        })
}

exports.getCups = (req, res, next) => {
    const eventId = req.params.eventId;
    Cake.find({
            genre: 'Cupcake'
        })
        .then(cakes => {
            res.render('user/cakes', {
                pageTitle: 'Add anything',
                path: '/user/cups',
                pastries: cakes,
                eventId: eventId,
                authenticated: req.session.loggedIn,
                csrfToken: req.csrfToken()
            });
        })
        .catch(err => {
            console.log(err);
        })
}

exports.getVals = (req, res, next) => {
    const eventId = req.params.eventId;
    Cake.find({
            genre: 'Valentine'
        })
        .then(cakes => {
            res.render('user/cakes', {
                pageTitle: 'Add anything',
                path: '/user/vals',
                pastries: cakes,
                eventId: eventId,
                authenticated: req.session.loggedIn,
                csrfToken: req.csrfToken()
            });
        })
        .catch(err => {
            console.log(err);
        })
}

exports.getPastry = (req, res, next) => {
    const pastryId = req.params.cakeId;
    Cake.findById(pastryId)
        .then(cake => {
            res.render('user/shop-detail', {
                pageTitle: cake.name,
                path: '/user/pastry-detail',
                pastry: cake,
                authenticated: req.session.loggedIn,
                csrfToken: req.csrfToken()
            })
        })
}

exports.getUser = (req, res, next) => {
    let message = req.flash('success');
    let msg = req.flash('error');
    if (msg.length > 0) {
        msg = msg[0];
    } else {
        msg = null;
    }
    if (message.length > 0) {
        message = message[0];
    } else {
        message = null;
    }
    Event.find({
            userId: req.session.user
        })
        .populate('cart.items.pastryId')
        .populate('userId')
        .exec()
        .then(events => {
            if (events[0] == null) {
                User.findById(req.session.user)
                    .then(user => {
                        let title = 'Welcome, ' + user.name;
                        res.render('user/index0', {
                            pageTitle: title,
                            path: '/user',
                            event: user,
                            success: message,
                            errorMessage: msg
                        })
                    })
            } else if (events) {
                let title = 'Welcome, ' + events[0].userId.name;
                res.render('user/index', {
                    pageTitle: title,
                    path: '/user',
                    events: events,
                    success: message,
                    errorMessage: msg
                })
            }

        })
}

exports.getAddEvent = (req, res, next) => {
    Event.find({
            userId: req.user
        })
        .populate('userId')
        .then(events => {
            if (events[0] == null) {
                User.findById(req.session.user)
                    .then(user => {
                        res.render('user/add-event0', {
                            pageTitle: 'Welcome',
                            path: '/user/add-event',
                            event: user,
                            editing: false
                        })
                    })
            } else if (events) {
                res.render('user/add-event', {
                    pageTitle: 'Add your event',
                    path: '/user/add-event',
                    editing: false,
                    events: events
                })
            }
        })
        .catch(err => {
            console.log(err);
        });
}

exports.postAddEvent = (req, res, next) => {
    const name = req.body.name;
    const purpose = req.body.purpose;
    const day = req.body.day;
    const month = req.body.month;
    const year = req.body.year;
    const hour = req.body.hour;
    const mins = req.body.minute;
    const per = req.body.period;
    const image = req.body.image;
    const location = req.body.location;
    console.log(day);
    console.log(per)
    const event = new Event({
        name: name,
        image: image,
        purpose: purpose,
        day: day,
        month: month,
        year: year,
        hour: hour,
        mins: mins,
        per: per,
        userId: req.user,
        location: location
    });

    event
        .save()
        .then(result => {
            req.flash('success', 'Event successfully added.');
            res.redirect('/user');
        })
        .catch(err => {
            req.flash('error', 'Could not add event, Please try again later.')
            console.log(err);
        })
};


exports.getEditEvent = (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode) {
        res.redirect('/user');
    }
    const eventId = req.params.eventId;

    Event.findById(eventId)
        .populate('userId')
        .then(event => {
            if (!event) {
                req.flash('error', 'Could not find this event.')
                res.redirect('/user');
            }
            res.render('user/add-event', {
                pageTitle: "Edit your event",
                path: '/user/edit-event',
                event: event,
                editing: editMode,
                authenticated: req.session.loggedIn,
                csrfToken: req.csrfToken()
            })
        })
}

exports.postEditEvent = (req, res, next) => {
    const eventId = req.body.eventId
    const updatedPurpose = req.body.purpose;
    const updatedName = req.body.name;
    const updatedDay = req.body.day;
    const updatedMonth = req.body.month;
    const updatedYear = req.body.year;
    const updatedHour = req.body.hour;
    const updatedMins = req.body.minute;
    const updatedPer = req.body.period;
    const updatedLoc = req.body.location;
    const updatedImage = req.body.image;
    Event.findById(eventId)
        .then(event => {
            event.name = updatedName;
            event.purpose = updatedPurpose;
            event.day = updatedDay;
            event.month = updatedMonth;
            event.year = updatedYear;
            event.hour = updatedHour;
            event.mins = updatedMins;
            event.image = updatedImage;
            event.per = updatedPer;
            event.location = updatedLoc;
            return event.save();
        })
        .then(result => {
            req.flash('success', 'Event successfully updated.');
            res.redirect('/user');
        })
        .catch(err => {
            req.flash('error', 'Could not edit event, Please try again later.');
            console.log(err);
        });
}

exports.getDeleteEvent = (req, res, next) => {
    const eventId = req.params.eventId;
    Event.findById(eventId)
        .populate('userId')
        .then(event => {
            if (!event) {
                res.redirect('/user');
            }
            res.render('user/confirm', {
                pageTitle: 'Deleting event',
                path: '/user/delete-event',
                event: event,
                authenticated: req.session.loggedIn,
                csrfToken: req.csrfToken()
            })
        })
}

exports.postDeleteEvent = (req, res, next) => {
    const eventId = req.body.eventId;
    Event.findByIdAndRemove(eventId)
        .then(result => {
            req.flash('success', 'Event successfully deleted.')
            res.redirect('/user');
        })
        .catch(err => {
            console.log(err);
        })
}


exports.getCart = (req, res, next) => {
    let message = req.flash('success');
    if(message.length > 0) {
        message = message[0];
    } else {
        message = null;
    }
    const eventId = req.params.eventId;
    Event.findById(eventId)
        .populate('cart.items.pastryId')
        .populate('userId')
        // .exec()
        .then(pastries => {
            event = pastries;
            pastries = pastries.cart.items;
            console.log(event)
            res.render('user/eventCart', {
                pageTitle: event.name,
                path: '/user/event-cart',
                event: event,
                pastries: pastries,
                success: message,
                authenticated: req.session.loggedIn,
                csrfToken: req.csrfToken()
            })
        })
}


exports.postCartDelete = (req, res, next) => {
    const eventId = req.body.eventId;
    const pastryId = req.body.pastryId;
    let path = '/user/event-cart/' + eventId.toString();
    Event.findById(eventId)
        .then(event => {
            event.removeFromCart(pastryId)
        })
        .then(result => {
            req.flash('success', 'Pastry successfully removed from cart.')
            res.redirect(path);
        })
}


exports.postAddCart = (req, res, next) => {
    const pastryId = req.body.pastryId;
    const eventId = req.body.eventId;
    let path = '/user/cakes/' + eventId.toString();
    Cake.findById(pastryId)
        .then(pastry => {
            Event.findById(eventId)
                .then(event => {
                    return event.addToCart(pastry);
                })
        })
        .then(result => {
            setTimeout(() => {
                res.redirect(path);
            }, 3600000)
        });
};

exports.postSubCart = (req, res, next) => {
    const pastryId = req.body.pastryId;
    const eventId = req.body.eventId;
    Cake.findById(pastryId)
        .then(pastry => {
            Event.findById(eventId)
                .then(event => {
                    return event.subFromCart(pastry);
                })
        })
        .then(result => {
            setTimeout(() => {
                res.redirect('/user/cakes');
            }, 3600000)
        });
};

exports.getOrders = (req, res, next) => {
    Order.find({
            "user.userId": req.user
        })
        .populate('userId')
        .then(orders => {
            if (orders[0] == null) {
                User.findById(req.user)
                    .then(user => {
                        res.render('user/userOrder0', {
                            path: '/user/orders',
                            pageTitle: 'Your Orders',
                            event: user
                        })
                    })
            } else if (orders) {
                res.render('user/userOrder', {
                    path: '/user/orders',
                    pageTitle: 'Your Orders',
                    order: orders,
                    event: orders
                })
            }
        })
}


exports.postOrder = (req, res, next) => {
    const eventId = req.body.eventId;
    const totalAmount = req.body.totalAmount;
    Event.findById(eventId)
        .populate('cart.items.pastryId')
        .then(event => {
            const pastries = event.cart.items.map(i => {
                return {
                    quantity: i.quantity,
                    pastry: {
                        ...i.pastryId._doc
                    }
                }
            });
            const order = new Order({
                user: {
                    name: req.user.name,
                    userId: req.user
                },
                event: {
                    name: event.name,
                    eventId: event,
                    location: event.location,
                    purpose: event.purpose,
                    day: event.day,
                    month: event.month,
                    min: event.mins,
                    per: event.per,
                    hour: event.hour,
                    year: event.year,
                    totalAmount: totalAmount

                },
                pastries: pastries
            });

            return order.save();
        })
        .then(clear => {
            event.clearCart();
        })
        .then(result => {
            req.flash('success', 'Order successfully placed.')
            res.redirect('/user/orders');
        })
        .catch(err => {
            console.log(err)
        });
};