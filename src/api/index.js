const express = require("express");
const router = express.Router();
const greeting = require("../logic/greeting");

router.get("/", (req, res) => {
  res.status(200).send({ options: { greeting: "/api/greeting/NAME" } });
});

router.get("/greeting", (req, res) => {
  res.status(404).send({ error: "I don't know you" });
});

router.get("/greeting/:name", (req, res) => {
  res.status(200).send({ greeting: greeting(req.params.name) });
});

module.exports = router;
