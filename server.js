const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect Database
connectDB();

//Init Middleware(To use req.body in different routes we need this middleware to use !! important)
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.json({ msg: 'Welcome to ContactKeeper API..' }));

//DEFINE ROUTES

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
