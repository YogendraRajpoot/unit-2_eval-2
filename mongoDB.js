const mongoose = require(`mongoose`);
class mongo {
  constructor() {
    this.createMongoConnection();
  }
  createMongoConnection() {
    mongoose.connect(`mongodb://BankingSystem:abc123@localhost:27017/BankingSystem`);
    // mongoose.connect(`mongodb+srv://BankingSystem:zDAdGpflgC1gW4rF@cluster0.akslf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
    mongoose.connection.once(`open`, () => {
      console.log(`MongoDB is connected`);
    });
    mongoose.connection.on(`error`, () => {
      console.log(`Error occured in mongoDB connection`);
    });
  }
}
module.exports = mongo;


db.createUser({user: "BankingSystem", pwd: "abc123", roles: [ { role: "userAdminAnyDatabase", db: "BankingSystem" } ]})