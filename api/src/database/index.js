const mongoose = require('mongoose');

//"mongodb://localhost/baseapi"
mongoose.connect('mongodb+srv://Wellyson:root@cluster0-dcmhr.mongodb.net/Tourism?retryWrites=true&w=majority'
, {
  useCreateIndex: true,
  useNewUrlParser: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

module.exports = mongoose;
