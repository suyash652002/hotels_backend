const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const app = express();
const port = 3000;

app.use(bodyParser.json());

const Person = require("./models/Person");
const MenuItem = require("./models/Menu");

app.get('/', (req, res) => {
    res.send("Welcome to my hotel... How Can I help you?, We have list of menus!!!")
})




const personRoutes = require('./routes/personRoutes');
const MenuItemRoutes = require('./routes/menuItemRoutes');

app.use('/person', personRoutes);
app.use('/menu', MenuItemRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})