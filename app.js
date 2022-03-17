const express = require('express');
const path = require('path');
const mainRouter = require('./src/routes/mainRouter');
const cors = require('cors');

const app = express();

app.use(cors())
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use('/', mainRouter);  

app.use(express.static(path.resolve(__dirname, './public')));

app.listen(process.env.PORT || 3000, () => {
    console.log("Server on");
});

module.exports = app;
