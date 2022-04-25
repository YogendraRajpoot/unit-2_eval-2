const mongoose = require(`mongoose`);
class mongo {
  constructor() {
    this.createMongoConnection();
  }
  createMongoConnection() {
    // mongoose.connect(`mongodb://@localhost:27017/BankingSystem`);
    mongoose.connect(`mongodb+srv://BankingSystem:iDATGpblgC1hW4rS@cluster0.akslf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
    mongoose.connection.once(`open`, () => {
      console.log(`MongoDB is connected`);
    });
    mongoose.connection.on(`error`, () => {
      console.log(`Error occured in mongoDB connection`);
    });
  }
}
module.exports = mongo;
