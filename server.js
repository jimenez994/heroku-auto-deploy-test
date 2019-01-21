const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000; 
const app = express();

app.use(bodyParser.json());
app.use(express.json());

require("./server/config/mongoose");
app.use(express.static('client/build'));
require("./server/config/routes")(app);

app.listen(port, () => {
    console.log(`Hey! you are in port ${port}`);
});


