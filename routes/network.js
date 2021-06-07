const index = require('../components/lobby/network');

routes = (server) => {
	server.use('/', index);
};
module.exports = routes;
