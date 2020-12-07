const express = require("express");
const router = express.Router();
const pool = require("./db");

// Test
router.get("/", (req, res) => {
  res.json("Hello world");
});

//  Medication CRUD
//!not done Add medication
router.post("user/post/medtodb", (req, res, next) => {
  const values = [];

  pool.query("INSERT INTO medication() VALUES($1, ETC, NOW())"),
    values,
    (q_err, q_res) => {
      if (q_err) return next(q_err);
      res.json(q_res.rows);
    };
});

// Delete medication

router.delete("/user/delete/med", (req, res, next) => {
  const medication_id = req.body.medication_id;
  pool.query(
    `DELETE FROM medication WHERE mid = $1`,
    [medication_id],
    (q_err, q_res) => {
      res.json(q_res.rows);
      console.log(q_err);
    }
  );
});

//!not done Update medication (Name, dosage, etc.)
router.put("/user/put/updatemed", (req, res, next) => {
  const values = [];

  pool.query(`UPDATE medication SET ${values}`, values, (q_err, q_res) => {
    res.json(q_res.rows);
    console.log(q_err);
  });
});

// Get one medication (not sure why this would be useful)
router.get("/user/get/med", (req, res, next) => {
  const medication_id = req.query.medication_id;

  pool.query(
    `SELECT * FROM medication WHERE mid=$1`,
    [medication_id],
    (q_err, q_res) => {
      res.json(q_res.rows);
    }
  );
});

// Show all medications
router.get("/user/get/allmed", (req, res, next) => {
  pool.query("SELECT * FROM medication", (q_err, q_res) => {
    res.json(q_res.rows);
  });
});

// Mark medication as taken (toggle between that)

// User CRUD
// Create a new user (create)
router.post("/user/userprofiletodb", (req, res, next) => {
  const values = [];

  pool.query(
    `INSERT INTO users(values) VALUES(values, NOW()) ON CONFLICT DO NOTHING`,
    values,
    (q_err, q_res) => {
      res.json(q_res.rows);
    }
  );
});

// login as a user (read) - Change email to uid

router.get("/user/get/userprofilefromdb", (req, res, next) => {
  const email = req.query.email;
  console.log();
  pool.query(`SELECT * FROM users WHERE email=$1`, [email], (q_err, q_res) => {
    res.json(q_res.rows);
  });
});

// get user medications
router.get("/user/get/usermed", (req, res, next) => {
  const user_id = req.query.user_id;
  console.log(user_id);
  pool.query(
    `SELECT * FROM medication WHERE user_id=$1`,
    [user_id],
    (q_err, q_res) => {
      res.json(q_res.rows);
    }
  );
});

// delete user (delete)
// update user settings (update)

module.exports = router;
