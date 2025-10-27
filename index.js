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

app.post('/Komik', async (requestAnimationFrame, res) => {
    const data = req.body;
    try {
        const Komik = awaitdb.Komik.create(data);
        res.send(Komik);
    }catch (err) {
        res.send(err);
    }
});

app.get('/komik', async (req, res) => {
    try {
        const komik = await db.Komik.findAll();
        res.send(komik);
    }catch (err) {
        res.send(err);
    }
});

app.put('/komik/:id', async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    try {
        const komik = await db.Komik.findByPk(id);
        if (!komik) {
            return res.status(404).send({ message: 'Komik not found' });
        }
        await komik.update(data);
        res.send( {message: 'Komik updated successfully', komik} );

    }   catch (err) {
        res.status(500).send(err);
    }
});

app.delete('/komik/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const komik = await db.Komik.findByPk(id);
        if (!komik) {
            return res.status(404).send({ message: 'Komik not found' });
        }
        await komik.destroy();
        res.send( {message: 'Komik deleted successfully'} );
    }   catch (err) {
        res.status(500).send(err);
    }
});
