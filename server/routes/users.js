var express = require("express");
var router = express.Router();
const User = require("../models/user");

//const data = require("./data.json");

/* GET users listing. */
/*
router.get("/", function (req, res, next) {
  res.json(data);
});
*/

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async function (req, res) {
  console.log(req.body);
  const user = new User({
    username: req.body.username,
    password: req.body.password,
    first: req.body.first,
    last: req.body.last,
    avatar: req.body.avatar,
    medicationList: [req.body.medicationList],
  });

  console.log("User signup called", req.body);

  try {
    const newUser = await user.save();
    res.json(newUser);
  } catch (err) {
    res.json({ message: err });
  }

  //(err, user) => {
  //if (err) return res.status(500).send(err);
  //return res.status(200).json(user);
  //res.redirect("/users");
});

// GET SPECIFIC USER

router.get("/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    res.json(user);
  } catch (err) {
    res.json({ message: err });
  }
});

// Delete User

router.delete("/:userId", async (req, res) => {
  try {
    const deletedUser = await User.remove({ _id: req.params.userId });
    res.json(deletedUser);
  } catch (err) {
    res.json({ message: err });
  }
});

// UPDATE one user variable

router.patch("/:userId", async (req, res) => {
  try {
    const updatedUser = await User.updateOne(
      { _id: req.params.userId },
      { $set: { title: req.body.first } }
    );
    res.json(updatedUser);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;

// const addMedication = function (req, res, next) {
//   if (req.method == "POST") {
//     const medication = new Medication({
//       _id: new Schema.Types.ObjectId(),
//       name: req.body.name,
//       dosage_size: req.body.dosage_size,
//       dosage_unit: req.body.dosage_unit,
//       dosage: req.body.dosage,
//       type: req.body.type,
//       taken: req.body.taken,
//       duration: req.body.duration,
//       duration_unit: req.body.duration_unit,
//       morning: req.body.morning,
//       afternoon: req.body.afternoon,
//       evening: req.body.evening,
//       createdAt: req.body.createdAt,
//     });

//     console.log(req.body);

//     medication.save((err, medication) => {
//       if (err) return res.status(500).send(err);
//       return res.status(200).json(medication);
//     });
//   }
// };

// const listMedication = function (req, res) {
//   Medication.find(function (err, medication) {
//     if (err) res.json({ message: "There are no medications here." });
//     Medication.find({})
//       .populate("_medication")
//       .populate("medicationList._medication")
//       .exec(function (err, medication) {
//         res.render("medication/index", { medication: medication });
//       });
//   });
// };

// module.exports = {
//   addMedication,
//   listMedication,
// };
