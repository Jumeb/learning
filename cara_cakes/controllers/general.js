

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

exports.getSignUp = (req, res, next) => {
    res.render('general/signup', {
        pageTitle: 'SignUp for Cara Cakes',
        path: '/signup',
        headerType: '',
        bodyType: 'back-signup body'
    })
}

exports.getSignIp = (req, res, next) => {
    res.render('general/login', {
        pageTitle: 'Login to Cara Cakes',
        path: '/login',
        headerType: '',
        bodyType: 'back-signup body'
    })
}