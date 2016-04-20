/**
* Post.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	attributes: {
		title: { type: 'string' },
		description: { type: 'text' },

		//Post.find(1).populate('meta').exec(console.log)
        meta: {
        	collection: 'postmeta',
        	via: 'post'
        },

        /*
            Post.finddOne(1).exec(funtion(err, post){
                post.tags.add(1); //This will add tag_id = 2 for post_id = 1
                post.tags.add([1,2,3,4]); //This way we can also add multiple capabilities
                post.tags.remove(1); //Remove any capability from role
                post.save(function(){});
            });
        */
        //Post.findOne(1).populate('tags').exec( console.log );
        tags: {
            collection: 'tag',
            via: 'tag',
            through: 'posttag'
        }
	}
};