/**
 * MainController
 *
 * @description :: Server-side logic for managing mains
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	/**
	* `MainController.index()`
	*/
	index: function (req, res) {
		var login = req.session.user;
    	res.view({login});
	}
};

