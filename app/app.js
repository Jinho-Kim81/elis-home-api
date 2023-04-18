"use strict";

//모듈
const express = require("express");
const app = express();

//라우터
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`)); // ` <-- ~ 표시로 위치 처리

app.use("/", home); //미들웨어

module.exports = app;
