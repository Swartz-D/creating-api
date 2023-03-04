// ========= import/require dependencies ============
const express = require("express");
const { Pool } = require("pg");

// ============== global variables ===============
const PORT = 3031;
const app = express();
const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "password",
  database: "myexample",
  port: 5432,
});

// ============= client/pool connect ================
pool.connect((err) => {
  if (err) {
    console.error("connection error", err.stack);
  } else {
    console.log("connected");
  }
});
// ========== middleware to handle json data ===========
app.use(express.json());
// ================ listener ==================
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
// ============= test route ==============
app.get("/", (req, res) => {
  res.send("Hello world!");
});
// =========== GET route for all people ==============

// ============== POST ================

// ======== GET for single person from people's table =======

// =============== PATCH ===============

// ============== DELETE ==============
