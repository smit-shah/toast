/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

	'/': 'MainController.index',

	'get /signup': { view: 'signup' },
	'get /login': 'AuthController.login',
	'post /login': 'AuthController.login',
	'/logout': 'AuthController.logout',

	'/test': 'IndexController.main',

	'get /dashboard': 'UserController.dashboard',
  'get /admin/users': 'UserController.all',
  'get /admin/users/new': 'UserController.new',
  'get /admin/users/:id/edit': 'UserController.edit',
  'get /admin/users/me': 'UserController.myProfile',
	/*'get /user/dashboard': { 
		view: 'user/dashboard',
		locals: { layout: 'admin' }
    },*/
	'get /admin/posts': 'PostController.all',
	
	//Pages
	'get /admin/pages': 'PageController.all',
	'get /admin/pages/new': 'PageController.new',
	'post /admin/pages/create': 'PageController.create',
	'get /admin/pages/:id/edit': 'PageController.edit',

  //Media
  'get /admin/media': 'MediaController.all',
  'get /admin/media/new': 'MediaController.new',
  'post /admin/media/upload': 'MediaController.upload',

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
