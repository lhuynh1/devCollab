const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const db = require('./models');
const apiroutes = require('./routes/api-routes');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api', apiroutes);
app.use(express.static('client/build'));

app.use('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

// mongoose.Promise = Promise;
mongoose.Promise = require('bluebird');

if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI);
}
else {
    mongoose.connect("mongodb://localhost:27017/devCollab", { useNewUrlParser: true });
}

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });

module.exports = app;
