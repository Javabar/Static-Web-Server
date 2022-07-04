// importing entire express library
const express = require ("express");
const port = process.env.PORT || 5001;
// creating our app object that houses our sever instructions
const app = express();
// telling app to use the public folder, when a rquest is made to /static
app.use("/static", express.static("public"))
// listening on localhost:5001 for request to our webserver
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
