import 'dotenv/config';

console.log(process.env.SESSION_SECRET);

import express from 'express';

import cors from 'cors';

const app = express();

app.use(express.json());


app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
})); 


import session from 'express-session';

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
  }
));


import loginRouter from './routers/loginRouter.js';
app.use(loginRouter);

import pokemonRouter from './routers/pokemonRouter.js';
app.use(pokemonRouter);



const PORT = process.env.PORT ?? 8080;

app.listen(PORT, () => {
    console.log('server is running on port', PORT);
});