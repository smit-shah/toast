module.exports = function(req, res, next) {
   if (req.session.user) {
   		var url = req.url;
   		if (url == '/admin/pages' || url == '/admin/pages/new') {
            req.page = 'active';
            if (url == '/admin/pages')
                req.allPage = 'active';
            else if (url == '/admin/pages/new')
                req.newPage = 'active';
        }
        return next();
    }
    else{
        return res.redirect('/login');
    }
};