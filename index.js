const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv").config();
const jwt = require("jsonwebtoken");
const connectDB = require("./server");


const usersRegRoutes = require('./routes/usersRegRoutes');
const usersLogRoutes = require('./routes/userLogRoutes');
const getMeRoutes = require('./routes/getMeRoutes');
const discoverExplorersRoutes = require('./routes/discoverExplorersRoutes');

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Ovigo App is working! YaY!");
});


app.use('/usersReg', usersRegRoutes);
app.use('/usersLog', usersLogRoutes);
app.use('/getMe', getMeRoutes);
app.use('/discoverExplorers', discoverExplorersRoutes);



connectDB();

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Ovigo app is running on port ${port}`);
});



// index.js -> routes -> controllers -> services -> models.