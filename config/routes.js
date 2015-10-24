module.exports.routes = {
    '/': { 
        view: 'homepage',
        locals: { layout: 'front' }
    },

    'get /user/login': { 
        view: 'login',
        locals: { layout: 'front' }
    },
    'post /user/login': 'AuthController.login',
    '/user/logout': 'AuthController.logout',
    'get /signup': { view: 'signup' }
};