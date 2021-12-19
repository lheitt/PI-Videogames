//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
// const { API_KEY } = process.env;
// const axios = require("axios");
// const Videogames = require("../api/src/db");

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  // let videogames = [];
  // let apiAllGames = `https://api.rawg.io/api/games?key=${API_KEY}`;
  // for (let i = 0; i < 5; i++) {
  //   const videogamesApi = (await axios.get(apiAllGames)).data;
  //   videogamesApi.results.forEach((videogame) => {
  //     videogames.push({
  //         id: videogame.id,
  //         name: videogame.name,
  //         image: videogame.background_image,
  //         released: videogame.released,
  //         rating: videogame.rating,
  //         genres: videogame.genres
  //     })
  //   });
  //   apiAllGames = videogamesApi.next;
  // }
  // await Videogames.bulkCreate(videogames)
  server.listen(process.env.PORT || 3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
