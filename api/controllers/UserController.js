/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	/**
	* `UserController.dashboard()`
	*/
	dashboard: function (req, res) {
		console.log(req.session.user);
		res.view({ user: req.session.user, layout: 'admin' });
	}
	
};

