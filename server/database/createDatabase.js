import db from './connection.js';
import { hashedPassword } from '../util/passwordHashing.js';

const deleteMode = process.argv.includes('--delete');

if (deleteMode) {
  await db.exec('DROP TABLE IF EXISTS users;');
  await db.exec('DROP TABLE IF EXISTS favorite_pokemon;');
}

await db.exec(`
CREATE TABLE IF NOT EXISTS users(
    username TEXT PRIMARY KEY NOT NULL UNIQUE,
    email TEXT NOT NULL,
    hashed_password TEXT NOT NULL
);


CREATE TABLE IF NOT EXISTS favorite_pokemon(
    username TEXT,
    pokemon_name TEXT PRIMARY KEY NOT NULL UNIQUE,
    FOREIGN KEY (username) REFERENCES users (username)
);

`);

if (deleteMode) {
  const password = await hashedPassword(process.env.SECRET_PASSWORD);

  await db.run('INSERT INTO users VALUES (?, ?, ? );', ['cami', 'cami.the.developer@gmail.com', password]);

  await db.run('INSERT INTO users VALUES (?, ?, ? );', ['mads', 'cami.the.developer@gmail.com', password]);

  await db.run('INSERT INTO favorite_pokemon VALUES (\'cami\', \'raichu\');');

  await db.run('INSERT INTO favorite_pokemon VALUES (\'cami\', \'skitty\');');

  await db.run('INSERT INTO favorite_pokemon VALUES (\'cami\', \'raikou\');');

  await db.run('INSERT INTO favorite_pokemon VALUES (\'cami\', \'mew\');');

  await db.run('INSERT INTO favorite_pokemon VALUES (\'cami\', \'espeon\');');

  await db.run('INSERT INTO favorite_pokemon VALUES (\'mads\', \'charizard\');');

  await db.run('INSERT INTO favorite_pokemon VALUES (\'mads\', \'eevee\');');

  await db.run('INSERT INTO favorite_pokemon VALUES (\'mads\', \'psyduck\');');

  await db.run('INSERT INTO favorite_pokemon VALUES (\'mads\', \'onix\');');

  await db.run('INSERT INTO favorite_pokemon VALUES (\'mads\', \'nidoking\');');
}
