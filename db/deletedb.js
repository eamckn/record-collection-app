const { Client } = require("pg");
require("dotenv").config();

const SQL = `
DROP TABLE records;

DROP TABLE artists;
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
