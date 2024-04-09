const express = require('express');
const body_parser = require('body-parser');
const {userRouter, productRouter} = require('./routers/indexRouter');
const jwt = require('jsonwebtoken');
const multer = require("multer");
const path = require('path');
const cors = require('cors');

// app.use(cors());
const app = (express());
app.use(body_parser.json());
app.use('/user',userRouter);
app.use('/product',productRouter);
module.exports = app;