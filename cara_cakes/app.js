// DEPENDENCIES

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

/////////////////////////////

// STARTING THE APP

const app = express();

/////////////////

// SETTING THE ENGINE

app.set('view engine', 'ejs');
app.set('views', 'views');

////////////////////////////

// ROUTES

const errRoute = require('./controllers/errors');
const generalRoute = require('./routes/general');
const userRoute = require('./routes/user');
const adminRoute = require('./routes/admin');

const Admin = require('./models/admin');
const User = require('./models/user');
const Event = require('./models/events');

/////////////////////////////

// PARSING THE VIEW

app.use(bodyParser.urlencoded({
    extended: false
}));

///////////////////////////


// USING PUBLIC FILES LIKE CSS, IMG, JS etc

app.use(express.static(path.join(__dirname, 'public')));

/////////////////////////////

app.use((req, res, next) => {
    User.findById('5ddeeb523f92d10d645a2deb')
        .then(user => {
            req.user = user;
            console.log(user);
            next();
        })
        .catch(err => {
            console.log(err);
        })
});


app.use((req, res, next) => {
    Admin.findById('5dc523fa0a61f71fb8fefabf')
        .then(admin => {
            req.admin = admin;
            next();
        })
        .catch(err => {
            console.log(err);
        })
})

// USING THE ROUTES

app.use('/user', userRoute);
app.use('/admin', adminRoute);
app.use(generalRoute);

//////////////////

// ERROR ROUTES

app.use(errRoute.get404);


///////////////////////////

// CONNECT TO DB
mongoose.connect('mongodb://localhost:27017/CaraCakes', {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(result => {
        User.findOne().then(user => {
            if (!user) {
                const user = new User({
                    name: 'Jume Brice',
                    email: 'bricejume@gmail.com'
                })
                user.save();
            }
        })
        Admin.findOne().then(admin => {
            if (!admin) {
                const admin = new Admin({
                    name: 'Tuijah Chr',
                    email: 'tuijah@gmail.com'
                })
                admin.save();
            }
        })

        app.listen(4000);
    })
    .catch(err => {
        console.log(err);
    });



////////////////////////