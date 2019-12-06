const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const sendgrid = require('nodemailer-sendgrid-transport');

const User = require('../models/user')

const transporter = nodemailer.createTransport(sendgrid({
    auth: {
        api_key: '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'
    }
}));

exports.getIndex = (req, res, next) => {
    res.render('general/index', {
        pageTitle: 'Resting place for flavours',
        path: '/',
        headerType: 'head-home',
        bodyType: 'back-home body'
    });
}

exports.getGallery = (req, res, next) => {
    res.render('general/gallery', {
        pageTitle: 'View our pantry',
        path: '/gallery',
        headerType: 'head-gall',
        bodyType: 'back-gall body'
    });
}

exports.getStories = (req, res, next) => {
    res.render('general/stories', {
        pageTitle: 'People stories',
        path: '/stories',
        headerType: 'head-story',
        bodyType: 'back-story body'
    });
}

exports.getAbout = (req, res, next) => {
    res.render('general/about', {
        pageTitle: 'About Cara Cakes',
        path: '/about',
        headerType: 'head-abt',
        bodyType: 'back-abt body'
    })
}


///////////////////////////////////
//                               //
//         SIGNUP USER           //
//                               //
///////////////////////////////////


exports.getSignUp = (req, res, next) => {
    let message = req.flash('error');
    if (message.length > 0) {
        message = message[0];
    } else {
        message = null;
    }
    res.render('general/signup', {
        pageTitle: 'SignUp for Cara Cakes',
        path: '/signup',
        headerType: '',
        bodyType: 'back-signup body',
        authenticated: false,
        errorMessage: message
    })
}

exports.postSignup = (req, res, next) => {
    const email = req.body.email;
    const name = req.body.name;
    const telNo = req.body.telNo;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    User.findOne({
            email: email
        })
        .then(userDoc => {
            if (userDoc) {
                req.flash('error', 'Existing E-mail, please try another.')
                return res.redirect('/signup')
            }
            return bcrypt.hash(password, 12)
                .then(hashedPassword => {
                    const user = new User({
                        name: name,
                        email: email,
                        telNo: telNo,
                        password: hashedPassword
                    });
                    return user.save();
                })
                .then(result => {
                    res.redirect('/login');
                    return transporter.sendMail({
                        to: email,
                        from: 'cara_cakes@gmail.com',
                        subject: 'Signyp succeeded!',
                        html: '<h1>You successfully signed up!<h1>'
                    })
                })
                .catch(err => {
                    console.log(err);
                })
        })
        .catch(err => {
            console.log(err);
        })


}


///////////////////////////////////
//                               //
//         LOGIN USER            //
//                               //
///////////////////////////////////



exports.getLogin = (req, res, next) => {
    let message = req.flash('error');
    if (message.length > 0) {
        message = message[0];
    } else {
        message = null;
    }
    res.render('general/login', {
        pageTitle: 'Login to Cara Cakes',
        path: '/login',
        headerType: '',
        bodyType: 'back-signup body',
        errorMessage: message
    })
}

exports.postLogin = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({
            email: email
        })
        .then(user => {
            let name = user.name;
            if (!user) {
                req.flash('error', 'Invalid email or password.');
                return res.redirect('/login');
            }
            bcrypt.compare(password, user.password)
                .then(doMatch => {
                    let message = 'Welcome, ' + name;
                    if (doMatch) {
                        req.session.loggedIn = true;
                        req.session.user = user;
                        return req.session.save(err => {
                            console.log(err);
                            req.flash('success', message);
                            res.redirect('/user');
                        });
                    }
                    req.flash('error', 'Invalid email or password.');
                    res.redirect('/login');
                })
                .catch(err => {
                    console.log(err)
                    res.redirect('/login');
                })
        })
        .catch(err => {
            console.log(err)
        })
}

exports.postLogout = (req, res, next) => {
    req.session.destroy((err) => {
        console.log(err)
        res.redirect('/');
    });
}