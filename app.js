const express = require('express');
const app = express();

const routes = require('./src/routes');
const connection = require('./src/connectDB')


connection.connect(()=>{
    console.log(`DB conectada !`);
});


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/',express.static('public'));
app.use('/',routes);



app.listen(3000,()=>{
    console.log('SERVER RUNING ON PORT 3000...');
})