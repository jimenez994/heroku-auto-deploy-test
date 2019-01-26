const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport')
const port = process.env.PORT || 5000; 
const app = express();
const cors = require('cors');

app.use(bodyParser.json());
app.use(express.json());
app.use(cors())

require("./server/config/mongoose");
app.use(express.static('client/build'));

// ---------->>> the order matters!!! <<<-------------
// passport middleware
app.use(passport.initialize())
// passport config
require("./server/config/passport")(passport)
require("./server/config/routes")(app);

app.listen(port, () => {
    console.log(`Hey! you are in port ${port}`);
});


