const express = require("express");
const router = express.Router();

const {
  getAllUser,
  saveUser,
  getSingleUser,
  updateUser,
  removeUser,
} = require("../controller/userController");

router.get("/", getAllUser);

router.post("/", saveUser);

router.get("/:id", getSingleUser);

router.put("/:id", updateUser);

router.delete("/:id", removeUser);

module.exports = router;
