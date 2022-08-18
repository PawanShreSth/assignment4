const express = require('express');

const { routes: addUserRoutes } = require('./routes/addUser');
const userRoutes = require('./routes/user');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/', addUserRoutes);
app.use('/users', userRoutes);

app.listen(3001);
