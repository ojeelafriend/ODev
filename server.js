const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();
const routes = require('./routes/network');

//settings
app.use(express.json(), express.urlencoded({ extended: false }));
app.use(express.static('./public'));
app.set('views', path.join(__dirname, 'views'));
app.engine(
	'.hbs',
	exphbs({
		defaultLayout: 'main',
		layoutsDir: path.join(app.get('views'), 'layouts'),
		partialsDir: path.join(app.get('views'), 'partials'),
		extname: '.hbs',
	})
);
app.set('view engine', '.hbs');
//routes
routes(app);

app.listen(3000, () => {
	console.log('Connect successfully');
});
