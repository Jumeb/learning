const Cake = require('../models/product');



exports.getIndex = (req, res, next) => {
    res.render('admin/index', {
        pageTitle: 'Welcome Admin',
        path: '/admin',
        bodyType: 'admin__center back-admin'

    });
}

exports.getGeneral = (req, res, next) => {
    res.render('admin/general', {
        pageTitle: 'Welcome Admin',
        path: '/admin/general',
        editing: false
    });
}

exports.getBds = (req, res, next) => {
    Cake.find({
            genre: 'Birthday-cake'
        })
        .then(cakes => {
            res.render('admin/admin-products', {
                pageTitle: 'Your Birthday cakes',
                path: '/admin/cakes',
                pastries: cakes
            });
        })
        .catch(err => {
            console.log(err)
        })
}

exports.getWeds = (req, res, next) => {
    Cake.find({
            genre: 'Wedding-cake'
        })
        .then(cakes => {
            res.render('admin/admin-products', {
                pageTitle: 'Your Wedding cakes',
                path: '/admin/weds',
                pastries: cakes
            });
        })
        .catch(err => {
            console.log(err)
        })
}

exports.getCookie = (req, res, next) => {
    Cake.find({
            genre: 'Cookie'
        })
        .then(cakes => {
            res.render('admin/admin-products', {
                pageTitle: 'Your Cookies',
                path: '/admin/cookies',
                pastries: cakes
            });
        })
        .catch(err => {
            console.log(err)
        })
}

exports.getPans = (req, res, next) => {
    Cake.find({
            genre: 'Pancake'
        })
        .then(cakes => {
            res.render('admin/admin-products', {
                pageTitle: 'Your Pancakes',
                path: '/admin/pans',
                pastries: cakes
            });
        })
        .catch(err => {
            console.log(err)
        })
}

exports.getDons = (req, res, next) => {
    Cake.find({
            genre: 'Doughnuts'
        })
        .then(cakes => {
            res.render('admin/admin-products', {
                pageTitle: 'Your Doughnuts',
                path: '/admin/dons',
                pastries: cakes
            });
        })
        .catch(err => {
            console.log(err)
        })
}

exports.getCups = (req, res, next) => {
    Cake.find({
            genre: 'Cupcake'
        })
        .then(cakes => {
            res.render('admin/admin-products', {
                pageTitle: 'Your Cupcakes',
                path: '/admin/cups',
                pastries: cakes
            });
        })
        .catch(err => {
            console.log(err)
        })
}

exports.getVal = (req, res, next) => {
    Cake.find({
            genre: 'Valentine'
        })
        .then(cakes => {
            res.render('admin/admin-products', {
                pageTitle: 'Your Valentine gifts',
                path: '/admin/vals',
                pastries: cakes
            });
        })
        .catch(err => {
            console.log(err)
        })
}


exports.getCake = (req, res, next) => {
    const pastryId = req.params.pastryId;
    Cake.findById(pastryId)
        .then(cake => {
            console.log(cake)
            res.render('admin/admin-detail', {
                pageTitle: cake.name,
                path: '/admin/pastry',
                pastry: cake,
                editing: false
            });
        })
        .catch(err => {
            console.log(err);
        })
}

exports.getBdaClients = (req, res, next) => {
    res.render('admin/bdaClients', {
        pageTitle: 'Bamenda Clients',
        path: '/admin/bamenda',

    });
}

exports.getAddBds = (req, res, next) => {
    res.render('admin/updates', {
        pageTitle: 'Add Birthday Cake',
        path: '/admin/add-bds',
        editing: false
    });
}

exports.getAddWeds = (req, res, next) => {
    res.render('admin/updates', {
        pageTitle: 'Add Wedding Cake',
        path: '/admin/add-weds',
        editing: false
    });
}

exports.getAddDon = (req, res, next) => {
    res.render('admin/updates', {
        pageTitle: 'Add Doughnuts',
        path: '/admin/add-dons',
        editing: false
    });
}

exports.getAddCookie = (req, res, next) => {
    res.render('admin/updates', {
        pageTitle: 'Add Cookie',
        path: '/admin/add-cookies',
        editing: false
    });
}

exports.getAddPan = (req, res, next) => {
    res.render('admin/updates', {
        pageTitle: 'Add Pancake',
        path: '/admin/add-pans',
        editing: false
    });
}

exports.getAddVal = (req, res, next) => {
    res.render('admin/updates', {
        pageTitle: 'Add Valentine Gifts',
        path: '/admin/add-vals',
        editing: false
    });
}

exports.getAddCup = (req, res, next) => {
    res.render('admin/updates', {
        pageTitle: 'Add Cupcake',
        path: '/admin/add-cups',
        editing: false
    });
}

exports.postAddPastry = (req, res, next) => {
    let path;
    const name = req.body.name;
    const price = req.body.price;
    const img = req.body.image;
    const desc = req.body.desc;
    const type = req.body.type;
    const product = new Cake({
        name: name,
        price: price,
        image: img,
        description: desc,
        genre: type,
        adminId: req.admin
    });

    if (type == 'Birthday-cake') {
        path = '/admin/add-bds'
    } else if (type == 'Wedding-cake') {
        path = '/admin/add-weds';
    } else if (type == 'Doughnuts') {
        path = '/admin/add-dons';
    } else if (type == 'Cupcake') {
        path = '/admin/add-cups';
    } else if (type == 'Cookie') {
        path = '/admin/add-cookies';
    } else if (type == 'Valentine') {
        path = '/admin/add-vals';
    } else if (type == 'Pancake') {
        path = '/admin/add-pans';
    }

    product
        .save()
        .then(result => {
            console.log('Created Product');
            res.redirect(path);
        })
        .catch(err => {
            console.log(err);
        })

};


exports.getEditPastry = (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode) {
        res.redirect('/admin');
    }
    const cakeId = req.params.pastryId;
    Cake.findById(cakeId)
        .then(cake => {
            if (!cake) {
                return res.redirect('/');
            }
            res.render('admin/updates', {
                pageTitle: 'Edit Birthday cake',
                path: '/admin/edit-pastry',
                editing: editMode,
                pastry: cake
            });
        })
}




exports.postEditPastry = (req, res, next) => {
    let path;
    const type = req.body.type;
    const pastryId = req.body.pastryId;
    const updatedName = req.body.name;
    const updatedPrice = req.body.price;
    const updatedImage = req.body.image;
    const updatedDesc = req.body.desc;

    if (type == 'Birthday-cake') {
        path = '/admin/cakes'
    } else if (type == 'Wedding-cake') {
        path = '/admin/weds';
    } else if (type == 'Doughnuts') {
        path = '/admin/dons';
    } else if (type == 'Cupcake') {
        path = '/admin/cups';
    } else if (type == 'Cookie') {
        path = '/admin/cookies';
    } else if (type == 'Valentine') {
        path = '/admin/vals';
    } else if (type == 'Pancake') {
        path = '/admin/pans';
    }

    Cake.findById(pastryId)
        .then(cake => {
            cake.name = updatedName;
            cake.image = updatedImage;
            cake.price = updatedPrice;
            cake.description = updatedDesc;
            return cake.save()
        })
        .then(result => {
            res.redirect(path)
        })
        .catch(err => {
            console.log(err);
        });

}

exports.getDeletePastry = (req, res, next) => {
    const pastryId = req.params.pastryId;
    Cake.findById(pastryId)
        .then(cake => {
            res.render('admin/admin-delete', {
                pageTitle: 'Deleting',
                path: '/admin/delete-pastry',
                pastry: cake
            });
        })
        .catch(err => {
            console.log(err)
        })
}



exports.postDeletePastry = (req, res, next) => {
    const pastryId = req.body.pastryId;
    console.log(pastryId)
    Cake.findByIdAndRemove(pastryId)
        .then(result => {
            console.log('destroyed')
            res.redirect('/admin/cakes');
        });
}