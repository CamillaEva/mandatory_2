import { Router } from 'express';
import db from '../database/connection.js';

const router = Router();

router.get('/api/dashboard', async (req, res) => {
  if (!req.session.user) {
    return res.status(401).send({ error: 'Not authenticated' });
  }

  const username = req.session.user.username;

  const result = await db.all(`
        SELECT pokemon_name FROM favorite_pokemon
        WHERE username = ?
        `, [username]);

  const pokemonList = result.map(function (row) {
    return row.pokemon_name;
  });

  res.send({
    user: req.session.user.username,
    pokemons: pokemonList
  });
});

export default router;
