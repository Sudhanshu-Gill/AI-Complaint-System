const express = require("express");

const router = express.Router();

const Complaint =
  require("../models/Complaint");

const authMiddleware =
  require("../middleware/authMiddleware");


// ADD COMPLAINT

router.post(
  "/",

  authMiddleware,

  async (req, res) => {

    try {

      const complaint =
        new Complaint({

          ...req.body,

          userId: req.user.id

        });

      await complaint.save();

      res.status(201).json({

        message:
          "Complaint Added",

        complaint

      });

    } catch (error) {

      res.status(500).json({

        message:
          "Complaint Failed",

        error: error.message

      });

    }

  }

);


// GET USER COMPLAINTS

router.get(
  "/",

  authMiddleware,

  async (req, res) => {

    try {

      const complaints =
        await Complaint.find({

          userId: req.user.id

        });

      res.status(200).json(
        complaints
      );

    } catch (error) {

      res.status(500).json({

        error: error.message

      });

    }

  }

);


// UPDATE STATUS

router.put(
  "/:id",

  async (req, res) => {

    try {

      const updatedComplaint =
        await Complaint.findByIdAndUpdate(

          req.params.id,

          {
            status:
              req.body.status
          },

          {
            new: true
          }

        );

      res.status(200).json({

        message:
          "Status Updated",

        updatedComplaint

      });

    } catch (error) {

      res.status(500).json({

        error: error.message

      });

    }

  }

);


// DELETE

router.delete(
  "/:id",

  async (req, res) => {

    try {

      await Complaint.findByIdAndDelete(
        req.params.id
      );

      res.status(200).json({

        message:
          "Complaint Deleted"

      });

    } catch (error) {

      res.status(500).json({

        error: error.message

      });

    }

  }

);

module.exports = router;