const express = require('express');
const app = express();
const PORT = 3308;
const db = require("./models");
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.listen(PORT, () => {
        console.log('Server started on port 3308');
    })

db.sequelize.sync()
    .then((result) => {
        applisten(3308, () => {
            console.log('Server Started')
        })
    })
    .catch((err) => {
        console.log(err);
    });