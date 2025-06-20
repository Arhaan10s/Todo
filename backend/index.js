const express = require('express');
const cors = require('cors');
const {readdirSync} = require('fs');
const dotenv = require('dotenv');
const seq = require('./connection/Sequelize');

dotenv.config();

const app= express();

app.use(cors());
app.use(express.json());
const port =process.env.SERVER_PORT ;

readdirSync('./Routes').map((route) => app.use('/api',require('./Routes/' + route)));

app.listen(port,()=>console.log(`Server is running on port ${port}`));