const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const contactRouter = require('./routes')


const app = express();
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.set('view engine', 'ejs')
app.use('/contacts', contactRouter)

app.get('/', (req, res) => {
    res.send(' <h2>Hello World!!!</h2> ')
})


const PORT = process.env.PORT || 3000;


mongoose.connect('mongodb://localhost:27017/practiceMongoDB',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        app.listen(PORT, () => {
            console.log('Database is Connected!!!');
            console.log(`Server is running PORT: ${PORT}`);
        })
    })
    .catch(err => {
        console.log(err);
    })



