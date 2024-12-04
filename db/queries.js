const pool = require("./pool");

const getAllRecords = async () => {
  const { rows } = await pool.query("SELECT * FROM records");
  console.log(rows);
  return rows;
};

module.exports = {
  getAllRecords,
};
