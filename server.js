const express = require('express')
const app = express()
const { signup } = require('./controllers/users')
const cors = require("cors");
app.use(cors())
const morgan = require("morgan");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.post('/signup', signup)


const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('App is running on port: ' + port)
})  