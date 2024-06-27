const express = require('express');
const app = express();
const address =  require('./router/address');

app.use(express.static(__dirname+'/web'))

app.use('/address',address);














app.listen(8080,() => 
    console.log('Server is running on port 8080')
);