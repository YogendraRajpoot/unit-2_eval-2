const mongoose = require(`mongoose`);

const FixedAccount = mongoose.Schema(
  {
    accountNumber: __id,
    balance: { type: Number, required: true },
    interestRate: { type: number, required: true },
    startDate: { type: Date, required: true },
    maturityDate: { type: Date, required: true },
  },
  {
    timestamps: { createdAt: true, upDatedAt: true },
  }
);

module.exports = mongoose.model("FixedAccount", FixedAccount);
