const mongoose = require(`mongoose`);

const SavingsAccount = mongoose.Schema(
  {
    accountNumber: __id,
    balance: { type: Number, required: true },
    interestRate: { type: number, required: true },
  },
  {
    timestamps: { createdAt: true, upDatedAt: true },
  }
);

module.exports = mongoose.model("SavingsAccount", SavingsAccount);
