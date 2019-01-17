
const path = require("path");

module.exports = (app) => {
    
    
    // // Server static assets if in production
    // if(process.env.NODE_ENV === 'production'){
        // Set static folder
        
        // // Any route that gets hit will go to the index.html 
        // app.get('*', (req, res) => {
        //     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
        // })
        app.all("*", (req, res,next) => {
            res.sendFile(path.resolve("./client/build/index.html"));
        })
        
    // }
        
        app.get('/user', (req, res) => {
            res.send({message: "great!, is it working?"});
        })

}