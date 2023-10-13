const express = require('express');

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require("./routes/notes")
const DB_URL = "mongodb+srv://root:prakash143@cluster0.1ly2v5i.mongodb.net/F2023_COMP3125?retryWrites=true&w=majority"
const app = express();
const v1 = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

mongoose.Promise = global.Promise;

// TODO - Update your mongoDB Atals Url here to Connect to the database
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});



app.get('/', (req, res) => {
    res.send("<h1>Welcome to Note taking application - Week06 Exercise</h1>");
});


app.use("/",router);


app.listen(8608, () => {
    console.log("Server is listening on port 8081");
});