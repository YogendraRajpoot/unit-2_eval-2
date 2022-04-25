const mongoose = require(`mongoose`);

const MasterAccount = mongoose.Schema(
  {
    balance: { type: Number, required: true },
  },
  {
    timestamps: { createdAt: true, upDatedAt: true },
  }
);

module.exports = mongoose.model("MasterAccount", MasterAccount);
