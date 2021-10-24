const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const { Videogame, Genre } = require("../db")
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/videogames", async (req, res) =>{
    const name = req.query.name;
    const videogames = await Videogame.findAll();
    res.send(videogames);
});

router.get("/videogames/:idVideogame", (req, res) =>{
    const idVideogame = req.params.name;
    res.send("soy GET /videogames/:idVideogame");
});

router.get("/genres", (req, res) =>{
    res.send("soy GET /genres");
});

router.post("/videogame", async (req, res) => {
    const {name, description, date, rating, platforms} = req.body;
    const newGame = await Videogame.create({
        name,
        description,
        date,
        rating,
        platforms
    });
    res.send(newGame);
});

module.exports = router;
