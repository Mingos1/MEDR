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
router.post("/medication", async (req, res) => {
  try {
    const {
      med_id,
      user_id,
      name,
      dosage_size,
      dosage_unit,
      dosage,
      medication_type,
      taken,
      duration,
      duration_unit,
      morning,
      afternoon,
      evening,
    } = req.body;

    const medication = await pool.query(
      "INSERT INTO medications (med_id, user_id, medication_name, dosage_size, dosage_unit, dosage, medication_type, taken, duration, duration_unit, morning, afternoon, evening) VALUES ($1,$2,$3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)",
      [
        med_id,
        user_id,
        name,
        dosage_size,
        dosage_unit,
        dosage,
        medication_type,
        taken,
        duration,
        duration_unit,
        morning,
        afternoon,
        evening,
      ]
    );
    res.status(200).json({ msg: "Added to database" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
