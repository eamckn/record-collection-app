const { Client } = require("pg");
require("dotenv").config();

const SQL = `
DROP TABLE IF EXISTS records;

DROP TABLE IF EXISTS artists;
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
