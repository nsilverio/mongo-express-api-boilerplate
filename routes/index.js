const merchatRoutes = require('./merchant_routes');

module.exports = function(router, db){
    merchatRoutes(router,db);
}