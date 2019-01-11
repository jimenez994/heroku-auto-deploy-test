
const path = require("path");
const express = require("express");

module.exports = (app) => {
    

    // // Server static assets if in production
    // if(process.env.NODE_ENV === 'production'){
        // Set static folder
        app.use(express.static('client/build'));

        // Any route that gets hit will go to the index.html 
        app.get('*', (req, res) => {
            res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
        })

    // }

    app.get('/', (req, res) => {
        res.send({message: "great!, is it working?"});
    })

}