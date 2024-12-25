const { Client } = require("pg");
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS artists (
  artist_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT,
  img TEXT
);

CREATE TABLE IF NOT EXISTS records (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title TEXT,
  artist_id INTEGER REFERENCES artists (artist_id),
  yr INTEGER,
  genre TEXT,
  label TEXT,
  art TEXT
);

INSERT INTO artists (name, img) 
VALUES
  ('The Strokes', 'https://i.scdn.co/image/ab6761610000e5ebc3b137793230f4043feb0089'),
  ('Father John Misty', 'https://upload.wikimedia.org/wikipedia/commons/4/40/Father_John_Misty_Piknik_i_Parken_2017_%28213349%29.jpg'),
  ('Momma', 'https://www.luckynumbermusic.com/wordpress/wp-content/uploads/2023/03/Bang-Bang-AshleyZhang-1-low-1024x819.jpg');

INSERT INTO records (title, artist_id, yr, genre, label, art) 
VALUES
  ('Is This It?', 1, 2001, 'Rock', 'RCA', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQstTHGvzRi_k5lOhUdiwezPljOfE-q9O_OHg&s'),
  ('Room on Fire', 1, 2003, 'Rock', 'RCA', 'https://upload.wikimedia.org/wikipedia/en/9/9f/Room_on_Fire_cover.jpg'),
  ('The New Abnormal', 1, 2020, 'Rock', 'Cult Records', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrFKbdhEYaNmdQFwnbzx2WwJOUV7dhsjb7zg&s'),
  ('I Love You Honeybear', 2, 2015, 'Singer/Songwriter', 'Sub Pop', 'https://upload.wikimedia.org/wikipedia/en/c/cb/I_Love_You%2C_Honeybear.jpg'),
  ('Pure Comedy', 2, 2017, 'Singer/Songwriter', 'Sub Pop', 'https://upload.wikimedia.org/wikipedia/en/c/c7/Pure_Comedy.jpg'),
  ('Household Name', 3, 2020, 'Rock', 'Polyvinyl', 'https://upload.wikimedia.org/wikipedia/en/7/7b/Household_Name_Momma.jpeg');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DATABASE_PUBLIC_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
