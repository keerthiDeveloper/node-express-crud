const express = require("express");
const ObjectId = require("mongoose").Types.ObjectId;

const { User } = require("../models/user");

const userController = {};

// Get All User Data

userController.getAllUser = (req, res) => {
  try {
    User.find((err, docs) => {
      if (!err) {
        res.send({ message: "success", data: docs });
      } else {
        res.send({ message: "Failed", data: "", error: err.message });
      }
    });
  } catch (error) {
    res.status(500).send({
      message: error?.message,
    });
  }
};

// Save User

userController.saveUser = (req, res) => {
  try {
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
  } catch (error) {
    res.status(500).send({
      message: error?.message,
    });
  }
};

// get User

userController.getSingleUser = (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id))
      return res.status(404).send({
        message: `No Record with given id:${req.params.id}`,
        data: "",
      });
    User.findById(req.params.id, (err, doc) => {
      if (!err) {
        res.send({ message: "success", data: doc });
      } else {
        res.send({ message: "Failed", data: "", error: err.message });
      }
    });
  } catch (error) {
    res.status(500).send({
      message: error?.message,
    });
  }
};

// Update User

userController.updateUser = (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id))
      return res.status(404).send({
        message: `No Record with given id:${req.params.id}`,
        data: "",
      });
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
  } catch (error) {
    res.status(500).send({
      message: error?.message,
    });
  }
};

// Remove user

userController.removeUser = (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id))
      return res.status(404).send({
        message: `No Record with given id:${req.params.id}`,
        data: "",
      });
    User.findByIdAndRemove(req.params.id, (err, doc) => {
      if (!err) {
        res.send({ message: "success", data: doc });
      } else {
        res.send({ message: "Failed", data: "", error: err.message });
      }
    });
  } catch (error) {
    res.status(500).send({
      message: error?.message,
    });
  }
};

module.exports = userController;
