const express = require("express");
const router = express.Router();
const medication_controller = require("../controllers/medication.controller");

router.get("/medication", medication_controller.listMedication);
router.post("/medication/create", medication_controller.addMedication);

module.exports = router;

// /// CREATE
// const userSignup = function (req, res, next) {
//     if (req.method == "POST") {
//       const user = new User({
//         username: req.body.username,
//         first: req.body.first,
//         last: req.body.last,
//         avatar: req.body.avatar,
//         medicationList: [req.body.medicationList],
//       });

//       console.log("post signup called", req.body);

//       user.save((err, user) => {
//         if (err) return res.status(500).send(err);
//         return res.status(200).json(user);
//         //res.redirect("/users");
//       });
//     }
//   };

//   // INDEX
//   function usersIndex(req, res) {
//     User.find(function (err, users) {
//       if (err) res.json({ message: "There are no users here." });
//       res.render("users/index", { users: users });
//     });
//   }

//   // SHOW
//   function usersShow(req, res) {
//     var id = req.params.id;

//     User.findById({ _id: id }, function (err, user) {
//       if (err) res.json({ message: "There is not a user with that id." });
//       console.log(user);
//       res.render("users/show", { user: user });
//     });
//   }

//   module.exports = {
//     userSignup,
//     usersIndex,
//     usersShow,
//   };
