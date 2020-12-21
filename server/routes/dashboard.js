const pool = require("../db");
const router = require("express").Router();
const authorize = require("../middleware/auth");

router.get("/", authorize, async (req, res) => {
  try {
    // res.json(req.user);
    const user = await pool.query("SELECT * FROM users WHERE user_id = $1", [
      req.user,
    ]);

    res.status(200).json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.get("/medication", authorize, async (req, res) => {
  try {
    const medication = await pool.query(
      "SELECT * FROM medications WHERE user_id = $1",
      [req.user]
    );
    res.status(200).json(medication.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//! not done - fix query formatting
router.post("/medication", authorize, async (req, res) => {
  try {
    const addMedication = await pool.query(
      "INSERT INTO medications (name, user_email, user_password) VALUES ($1,$2,$3) RETURNING *",
      [name, email, bcryptPassword]
      "INSERT INTO medications(med_id, user_id, medication_name, dosage_size, 
        dosage_unit, dosage, medication_type, 
        taken, duration, duration_unit,morning, 
        afternoon, evening) values ", [1, '862a2782-1bc7-49c8-b16e-43b2f03266eb',
       'Tubersol Max', 80, 'mg', 5, 'pill', 
        true, 0,'day', true, false, false];
    );
    const medication = await pool.query(
      "SELECT * FROM medications WHERE user_id = $1",
      [req.user]
    );
    res.status(200).json(medication.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
