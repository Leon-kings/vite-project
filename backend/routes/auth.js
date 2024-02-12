const express = require("express");
const router = express.Router();
const { signUp, signIn } = require("../controller/auth");
const {  
  isRequestValidated,
  validateSignUpRequest,
  validateSignIpRequest,
} = require("../validation/auth");


router.route("/Login").post(validateSignIpRequest, isRequestValidated, signIn);


router.route("/Login").post(validateSignUpRequest, isRequestValidated, signUp);


module.exports = router;