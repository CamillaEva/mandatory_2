import 'dotenv/config';

import express from 'express';

import cors from 'cors';

import session from 'express-session';

import loginRouter from './routers/loginRouter.js';

import pokemonRouter from './routers/pokemonRouter.js';

const app = express();

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}
));
app.use(loginRouter);
app.use(pokemonRouter);

const PORT = process.env.PORT ?? 8080;

app.listen(PORT, () => {
  console.log('server is running on port', PORT);
});
