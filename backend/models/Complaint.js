const mongoose = require("mongoose");

const ComplaintSchema =
  new mongoose.Schema({

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },

    name: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true
    },

    title: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: true
    },

    category: {
      type: String,
      required: true
    },

    location: {
      type: String,
      required: true
    },

    status: {
      type: String,
      default: "Pending"
    }

  },

  {
    timestamps: true
  }

);

module.exports =
  mongoose.model(
    "Complaint",
    ComplaintSchema
  );