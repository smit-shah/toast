module.exports.connections = {
  mysql: {
    adapter: 'sails-mysql',
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'toast'
  },
  localMongo: {
    adapter: 'sails-mongo',
    host: 'localhost',
    port: 27017,
    user: 'toast',
    //password: 'just$123',
    database: 'toast'
  },
  mongolab: {
  	adapter: 'sails-mongo',
    url: 'mongodb://toast:just$123@ds061391.mongolab.com:61391/toast'
  }
};