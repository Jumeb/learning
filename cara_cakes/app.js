// DEPENDENCIES

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const mongoDbStore = require('connect-mongodb-session')(session);
const csrf = require('csurf');
const flash = require('connect-flash');

/////////////////////////////
const MONGODB_URI = 'mongodb://localhost:27017/CaraCakes';
// STARTING THE APP

const app = express();
const store = new mongoDbStore({
    uri: MONGODB_URI,
    collection: 'sessions'
});
/////////////////

const csrfProtection = csrf();

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

/////////////////////////////

// PARSING THE VIEW

app.use(bodyParser.urlencoded({
    extended: false
}));

///////////////////////////


// USING PUBLIC FILES LIKE CSS, IMG, JS etc

app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'mySecretIsBest',
    resave: false,
    saveUninitialized: false,
    store: store
}));

app.use(csrfProtection);

app.use(flash());

/////////////////////////////

app.use((req, res, next) => {
    if(!req.session.user){
        return next();
    }
    User.findById(req.session.user._id)
        .then(user => {
            req.user = user;
            next();
        })
        .catch(err => {
            console.log(err);
        })
});


app.use((req, res, next) => {
    if(!req.session.admin){
        return next();
    }
    Admin.findById(req.session.admin._id)
        .then(admin => {
            req.admin = admin;
            next();
        })
        .catch(err => {
            console.log(err);
        })
})

app.use((req, res, next) => {
    res.locals.authenticated = req.session.loggedIn;
    res.locals.csrfToken  = req.csrfToken()
    next();
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
mongoose.connect(MONGODB_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(result => {
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