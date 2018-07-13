const express = require('express');
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, function() {
    console.log('🌎 ==> API Server listening on PORT' + PORT);
})





