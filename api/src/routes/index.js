const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const { Op } = require("sequelize");
const  axios = require("axios");
const { Videogame, Genre } = require("../db");
const router = Router();
const { API_KEY } = process.env;

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/videogames", async (req, res, next) =>{
    try {
        const name = req.query.name;
        if(name) {
            let videogamesDb = [];
            const videogameDbPromise = await Videogame.findAll({
                where: {
                    name: {
                        [Op.iLike]: "%" + name + "%"
                    }
                },
                include: Genre,
            });
            if(videogameDbPromise.length > 0) {
                videogamesDb = videogameDbPromise.map((videogame) => {
                    return {
                        id: videogame.id,
                        name: videogame.name,
                        image: videogame.image,
                        released: videogame.released,
                        rating: videogame.rating,
                        genres: videogame.genres
                    }
                })
            };
            const videogameApiPromise = (await axios.get(`https://api.rawg.io/api/games?search=${name}&search_precise=true&key=${API_KEY}`)).data.results;
            let videogamesApi = [];
            if(videogameApiPromise.length > 0) {
                videogamesApi = videogameApiPromise.map((videogame) => {
                    return {
                        id: videogame.id,
                        name: videogame.name,
                        image: videogame.background_image,
                        released: videogame.released,
                        rating: videogame.rating,
                        genres: videogame.genres
                    }
                })
            };
            const videogames = [...videogamesDb, ...videogamesApi];
            videogames.length === 0? res.json("There is no game with that name") : res.send(videogames);
        } else {
            let videogames = [];
            const videogamesDb = await Videogame.findAll({
                include: Genre,
                limit: 100
            });
            videogamesDb.forEach((videogame) => {
                videogames.push({
                    id: videogame.id,
                    name: videogame.name,
                    image: videogame.image,
                    released: videogame.released,
                    rating: videogame.rating,
                    genres: videogame.genres
                })
            })
            let apiAllGames = `https://api.rawg.io/api/games?key=${API_KEY}`;
            for (let i = 0; i < 5; i++) {
                const videogamesApi = (await axios.get(apiAllGames)).data;
                videogamesApi.results.forEach((videogame) => {
                    videogames.push({
                        id: videogame.id,
                        name: videogame.name,
                        image: videogame.background_image,
                        released: videogame.released,
                        rating: videogame.rating,
                        genres: videogame.genres
                    })
                });
                apiAllGames = videogamesApi.next;
            }
            // console.log(videogames.length, "videogames")
            res.send(videogames);
        }
    } catch(error) {
        next(error)
    }
});

router.get("/videogames/:idVideogame", async(req, res, next) =>{
    try {
        const idVideogame = req.params.idVideogame;
        if(idVideogame.length > 8) {
            const videogameDbPromise = await Videogame.findOne({
                where: {
                    id: idVideogame
                },
                include: Genre
            });
            const videogameDb = {
                id: videogameDbPromise.id,
                name: videogameDbPromise.name,
                image: videogameDbPromise.image,
                description: videogameDbPromise.description,
                released: videogameDbPromise.released,
                rating: videogameDbPromise.rating,
                platforms: videogameDbPromise.platforms,
                genres: videogameDbPromise.genres
            }
            res.send(videogameDb);
        } else {
            const videogameApiPromise = await axios.get(`https://api.rawg.io/api/games/${idVideogame}?key=${API_KEY}`);
            const videogameApi = {
                id: videogameApiPromise.data.id,
                name: videogameApiPromise.data.name,
                image: videogameApiPromise.data.background_image,
                description: videogameApiPromise.data.description,
                released: videogameApiPromise.data.released,
                rating: videogameApiPromise.data.rating,
                platforms: videogameApiPromise.data.platforms,
                genres: videogameApiPromise.data.genres
            };
            res.send(videogameApi);
        }
    } catch(error) {
        next(error)
    }
});

router.get("/genres", async (req, res, next) =>{
    try {
        const genresApi = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
        genresApi.data.results.forEach(async(genre) => {
            await Genre.findOrCreate({
                where: {
                    name: genre.name
                }
            })
        })
        const genresDb = await Genre.findAll();
        res.send(genresDb);      
    } catch(error) {
        next(error)
    }
});

router.get("/platforms", async (req, res, next) =>{
    try {
        const platformsApi = await axios.get(`https://api.rawg.io/api/platforms?key=${API_KEY}`);
        const platforms = platformsApi.data.results.map((genre) => 
            genre.name
        )
        res.send(platforms);      
    } catch(error) {
        next(error)
    }
});

router.post("/videogame", async (req, res, next) => {
    try {
        const {name, image, description, released, rating, platforms, genres} = req.body;
        const newGame = await Videogame.create({
            name,
            image,
            description,
            released,
            rating,
            platforms
        });
        genres.forEach(async(genre) => {
            let genreFound = await Genre.findOne({
                where: {
                    name: genre
                }
            })
            await newGame.addGenre(genreFound);
        })
        res.send(newGame);
    } catch(error) {
        next(error)
    }
});

module.exports = router;
