const mongoose = require(`mongoose`);

const BranchDetails = mongoose.Schema(
  {
    name: { type: String, required: true },
    BankAddress: { type: String, required: true },
    IFSC: { type: String, required: true },
    MICR: { type: Number, required: true },
  },
  {
    timestamps: { createdAt: true, upDatedAt: true },
  }
);

module.exports = mongoose.model("BranchDetails", BranchDetails);
