

exports.get404 = (req, res, next) => {
    res.status(404).render('404', {
        pageTitle: 'Page Not Found',
        path: '/404',
        headerType: 'ba',
        bodyType: 'back-page404 body'
    });
}