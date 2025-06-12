import express from 'express';


import router from './src/routes/index.router.js';
import {config} from './src/config/config.js'

const app = express();  



const PORT = config.PORT||8080;


app.get('/', (req, res) => {
  res.send('Prueba tecnica - JUAN DAVID LOPEZ ');
});


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)  ;
}); 

