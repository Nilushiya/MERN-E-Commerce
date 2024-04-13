const express = require('express');
const body_parser = require('body-parser');
const {userRouter, productRouter} = require('./routers/indexRouter');
const multer = require("multer");
const path = require('path');
const cors = require('cors');


const app = (express());
app.use(cors());
app.use(body_parser.json());
app.use('/user',userRouter);
app.use('/images', express.static('upload/images'));
app.use('/product',productRouter);

module.exports = app;