const express = require('express');
const path = require('path');
const mainRouter = require('./src/routes/mainRouter');

const app = express();

app.use('/', mainRouter);  

app.use(express.static(path.resolve(__dirname, './public')));

app.set('view engine', 'ejs')

app.listen(3000, () => {
    console.log("Server on");
});

