const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const morgan = require('morgan');
const { connection } = require('./database/connection.js');

//env vars
require('dotenv').config();

//routes
const usersRouter = require('./routes/users');
const stockRouter = require('./routes/stocks');
const loginRouter = require('./routes/login');
const newsRouter = require('./routes/news');

//app and port
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//route handlers
app.use('/users', usersRouter);
app.use('/stocks', stockRouter);
app.use('/login', loginRouter);
app.use('/news', newsRouter);

//serve static build files
app.use(express.static(path.join(__dirname, '../build')));

//routes everything to html page, troubleshoots refreshing
app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, "../client/resume_site/dist/"));
});

// Listen
app.listen(port, () => {
    console.log(`server is live on port ${port}`);
});
