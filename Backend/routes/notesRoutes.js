const express = require("express");
const { addnotes, allnotes } = require("../controller/notesController");
const notesRoutes = express.Router();

notesRoutes.post("/newnotes", addnotes);
notesRoutes.get("/getnotes/:userId", allnotes);
module.exports = notesRoutes;
