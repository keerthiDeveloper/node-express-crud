const express = require("express");
const ObjectId = require("mongoose").Types.ObjectId;

const { User } = require("../models/user");

const userController = {};

// Get All User Data

userController.getAllUser = (req, res) => {
  User.find((err, docs) => {
    if (!err) {
      res.send({ message: "success", data: docs });
    } else {
      res.send({ message: "Failed", data: "", error: err.message });
    }
  });
};

// Save User

userController.saveUser = (req, res) => {
  const user = new User({
    name: req.body.name,
    mobileNo: req.body.mobileNo,
    email: req.body.email,
    location: req.body.location,
    pinCode: req.body.pinCode,
  });
  user.save((err, doc) => {
    if (!err) {
      res.send({ message: "success", data: doc });
    } else {
      res.send({ message: "Failed", data: "", error: err.message });
    }
  });
};

// get User

userController.getSingleUser = (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id:${req.params.id}`);
  User.findById(req.params.id, (err, doc) => {
    if (!err) {
      res.send({ message: "success", data: doc });
    } else {
      res.send({ message: "Failed", data: "", error: err.message });
    }
  });
};

// Update User

userController.updateUser = (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`user not match id:${req.params.id}`);
  const user = {
    name: req.body.name,
    mobileNo: req.body.mobileNo,
    email: req.body.email,
    location: req.body.location,
    pinCode: req.body.pinCode,
  };
  User.findByIdAndUpdate(
    req.params.id,
    { $set: user },
    { new: true },
    (err, doc) => {
      if (!err) {
        res.send({ message: "success", data: doc });
      } else {
        res.send({ message: "Failed", data: "", error: err.message });
      }
    }
  );
};

// Remove user

userController.removeUser = (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No Record with given id:${req.params.id}`);
  User.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      res.send({ message: "success", data: doc });
    } else {
      res.send({ message: "Failed", data: "", error: err.message });
    }
  });
};

module.exports = userController;
