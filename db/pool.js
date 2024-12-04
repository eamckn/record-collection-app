const { Pool } = require("pg");

module.exports = new Pool({
  connectionString: "postgresql://Eamon:1108madison@localhost:5432/top_records",
});
