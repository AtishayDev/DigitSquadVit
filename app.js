const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//EJS and APP Config
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/'));

//routes
app.use('/', require('./routes/index'));

let port = process.env.PORT;
if (port == null || port == '') {
	port = 9000;
}
app.listen(port, console.log(`Server started on port ${port}`));
