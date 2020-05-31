const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const app = express();

//Connect Database
connectDB();

//Init Middleware(To use req.body in different routes we need this middleware to use !! important)
app.use(express.json({ extended: false }));

//DEFINE ROUTES

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

//Server static assests in production

if (process.env.NODE_ENV === 'production') {
  //Set static folder
  app.use(express.static('/client/build'));

  app.use(
    '*',
    (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    //__dirname means looking for current directory
  );
}
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
