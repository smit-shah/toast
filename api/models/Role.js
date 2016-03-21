/**
* Role.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	attributes: {
		title: { type: 'string', required: true, unique: true },
		desc:  { type: 'string' },

		/*
			Role.finddOne(1).exec(funtion(err, role){
				role.capabilites.add(1); //This will add capabilty_id = 2 for role_id = 1
				role.capabilites.add([1,2,3,4]); //This way we can also add multiple capabilities
				role.capabilites.remove(1); //Remove any capability from role
				role.save(function(){});
			});
		*/

		//Role.findOne(1).populate('capabilities').exec( console.log );
		capabilities: {
	    	collection: 'capability',
	    	via: 'can',
	    	dominant: true
	    }
	}
};