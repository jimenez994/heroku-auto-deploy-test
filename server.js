const express = require('express');
const bodyParser = require('body-parser');
const port = 8000; 
const app = express();

app.use(bodyParser).urlencoded({ extended:  false });
app.use(bodyParser.json());
app.use(express.json());
// app.use()

require("./server/config/mongoose");
require("./server/config/routes")(app);

app.listen(port, () => {
    console.log(`Hey you are in port ${port}`);
})


