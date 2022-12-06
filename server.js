const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const colors = require('colors');

const app = require('./app');

mongoose.connect(process.env.DATABASE, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
.then(()=> {
    console.log(`Database connection is successfull.`.red.bold);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`App is running on port ${port}`.green.bold);
});