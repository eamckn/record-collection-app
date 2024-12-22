const { Client } = require("pg");
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS artists (
  artist_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT
);

CREATE TABLE IF NOT EXISTS records (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title TEXT,
  artist_id INTEGER REFERENCES artists (artist_id),
  yr INTEGER,
  genre TEXT,
  label TEXT
);

INSERT INTO artists (name) 
VALUES
  ('The Strokes'),
  ('Father John Misty'),
  ('Momma');

INSERT INTO records (title, artist_id, yr, genre, label) 
VALUES
  ('Is This It?', 1, 2001, 'Rock', 'RCA'),
  ('Room on Fire', 1, 2003, 'Rock', 'RCA'),
  ('The New Abnormal', 1, 2020, 'Rock', 'Cult Records'),
  ('I Love You Honeybear', 2, 2015, 'Singer/Songwriter', 'Sub Pop'),
  ('Pure Comedy', 2, 2017, 'Singer/Songwriter', 'Sub Pop'),
  ('Household Name', 3, 2020, 'Rock', 'Polyvinyl');
`;

async function main() {
  console.log("seeding...");
  console.log(process.env.DATABASE_PUBLIC_URL);
  const client = new Client({
    connectionString: process.env.DATABASE_PUBLIC_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
