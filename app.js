const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./models/user');

const port = 3000; 

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/db', (err) => {
	if (err) throw err;
	console.log('Successfully connected');
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('./public'));
app.use(express.static('./public'));


app.get('/', (req, res) => {
	res.send('Express!');
});

app.get('/main', (req, res) => {
	User.find({}, (err, docs) => {
		if (err) {
			console.log(err);
		}
		res.send(docs);
		
	});
	
	//res.sendFile('./public/view/main.html', { root: __dirname });
});

app.get('/about', (req, res) => {
	res.sendFile('./public/view/about.html', { root: __dirname });
});

app.get('/form', (req, res) => {
	res.sendFile('./public/view/form.html', { root: __dirname });
});

app.get('/test', (req, res) => {
	res.sendFile('./public/view/test.html', {root: __dirname});
});

app.post('/form', (req, res) => {
	var user = new User({
		name: req.body.name,
		age: req.body.age
	});

	user.save((err, user) => {
		if (err) {
			console.log('Err: ' + err);
		}
		console.log('Saved user: ' + user);
	});

	res.redirect('/main');
});

app.listen(port, function() {
	console.log('Server is running');
});