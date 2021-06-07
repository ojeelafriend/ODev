const lobby = require('../components/lobby/network');
const blog = require('../components/blog/network');
const about = require('../components/about/network');
const portfolio = require('../components/portfolio/network');

routes = (server) => {
	server.use('/', lobby);
	server.use('/blog', blog);
	server.use('/about', about);
	server.use('/portfolio', portfolio);
};
module.exports = routes;
