const mongoose = require('mongoose');

//"mongodb://localhost/baseapi"
mongoose.connect('mongodb+srv://Naldim:root@cluster-e0qov.gcp.mongodb.net/Projeto-Turismo?retryWrites=true', {
  useCreateIndex: true,
  useNewUrlParser: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

module.exports = mongoose;
