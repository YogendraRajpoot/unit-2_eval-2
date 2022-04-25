const mongoose = require(`mongoose`);

const User = mongoose.Schema(
  {
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    gender: { type: String, default: "Female" },
    type: { type: String, default: "customer" },
  },
  {
    timestamps: { createdAt: true, upDatedAt: true },
  }
);

module.exports = mongoose.model("User", User);
