/**
 * Tag.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    attributes: {
        title: { type: 'string' },
        slug: { type: 'string' },
        description: { type: 'text' },

        //Tag.findOne(1).populate('posts').exec(function(err, tag){ console.log });
        posts: {
            collection: 'post',
            via: 'post',
            through: 'posttag'
        }
    },
};