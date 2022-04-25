const mongoose = require(`mongoose`);

const user = mongoose.Schema(
  {
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    gender: { type: String, default: Female },
    type: { type: String, default: customer },
  },
  {
    timestamps: { createdAt: true, upDatedAt: true },
  }
);
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
const masterAccount = mongoose.Schema(
  {
    balance: { type: Number, required: true },
  },
  {
    timestamps: { createdAt: true, upDatedAt: true },
  }
);

const savingsAccount = mongoose.Schema(
  {
    accountNumber: __id,
    balance: { type: Number, required: true },
    interestRate: { type: number, required: true },
  },
  {
    timestamps: { createdAt: true, upDatedAt: true },
  }
);
const fixedAccount = mongoose.Schema(
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

module.exports = mongoose.model("user", user);
