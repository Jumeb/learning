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
                            success: message
                        })
                    })
            } else if (events) {
                let title = 'Welcome, ' + events[0].userId.name;
                res.render('user/index', {
                    pageTitle: title,
                    path: '/user',
                    events: events,
                    success: message
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
    const date = req.body.date;
    const time = req.body.time;
    const image = req.body.image;
    const event = new Event({
        name: name,
        image: image,
        purpose: purpose,
        date: date,
        time: time,
        userId: req.user
    });

    event
        .save()
        .then(result => {
            res.redirect('/user');
        })
        .catch(err => {
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
    const updatedDate = req.body.date;
    const updatedTime = req.body.time;
    const updatedImage = req.body.image;
    Event.findById(eventId)
        .then(event => {
            event.name = updatedName;
            event.purpose = updatedPurpose;
            event.date = updatedDate;
            event.image = updatedImage;
            event.time = updatedTime;
            return event.save();
        })
        .then(result => {
            res.redirect('/user');
        })
        .catch(err => {
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
            res.redirect('/user');
        })
        .catch(err => {
            console.log(err);
        })
}


exports.getCart = (req, res, next) => {
    const eventId = req.params.eventId;
    Event.findById(eventId)
        .populate('cart.items.pastryId')
        .populate('userId')
        // .exec()
        .then(pastries => {
            event = pastries;
            pastries = pastries.cart.items;
            res.render('user/eventCart', {
                pageTitle: event.name,
                path: '/user/event-cart',
                event: event,
                pastries: pastries,
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
            res.redirect(path);
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
            res.redirect('/user/cakes');
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
                            event: user,
                            success: message
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
                    purpose: event.purpose,
                    date: event.date,
                    time: event.time
                },
                pastries: pastries
            });

            return order.save();
        })
        .then(clear => {
            event.clearCart();
        })
        .then(result => {
            res.redirect('/user/orders');
        })
        .catch(err => {
            console.log(err)
        });
};