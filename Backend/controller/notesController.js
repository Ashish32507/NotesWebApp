const notesModule = require("../models/notesModule");

exports.addnotes = async (req, res) => {
  try {
    const { title, data, user } = req.body;
    if (!title || !data || !user) {
      return res.status(400).json({
        success: false,
        message: "Something Missing",
      });
    }

    const newNotes = await notesModule.create({
      title,
      data,
      user,
    });

    if (newNotes) {
      return res.status(200).json({
        success: true,
        newNotes,
        message: "Your Notes Add Successfully",
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Error During Adding The Notes",
      });
    }
  } catch (err) {
    console.log("Intrenal Error in Add Notes Controller");
    console.log(err);
  }
};

exports.allnotes = async (req, res) => {
  try {
    // Correctly extract userId from req.params
    const { userId } = req.params;

    // Query the database for notes created by the user
    const response = await notesModule.find({ user: userId });

    // Handle case where no notes are found
    if (!response || response.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No Notes Created By The Particular User",
      });
    }

    // Return all notes created by the user
    return res.status(200).json({
      success: true,
      response, // returning all notes
      message: "These notes were created by this user",
    });
  } catch (err) {
    console.error("Internal Error in Allnotes Notes Controller");
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
