const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const bugSchema = new Schema ({
  name: { type: String },
  reproduce: { type: String },
  whatItDoes: { type: String },
  supposedToDo: { type: String },
  status: { type: String, default: "Submitted", enum: [
    "Submitted",
    "In Progress",
    "Complete"
  ]}
}, {
  timestamps: true
});

const Bug = mongoose.model('Bug', bugSchema);

module.exports = Bug;