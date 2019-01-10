const express = require('express');
const bodyParser = require('body-parser');
const port = 8003; 
const app = express();

// app.use(bodyParser).urlencoded({ extended:  false });
app.use(bodyParser.json());
app.use(express.json());
// app.use()

// app.get('/', (req, res) => {
//     res.send({message: "great it works?"});
// })

// require("./server/config/mongoose");
require("./server/config/routes")(app);

app.listen(port, () => {
    console.log(`Hey you are in port ${port}`);
});


