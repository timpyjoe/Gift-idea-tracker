const db = require("../config/connection");
const {User, Giftee} = require('../models');
const userData = require('./user.json')
const gifteeData = require('./giftee.json')
/*
  To seed data:

  1. Import your model
  2. Create an array of data with the variable name seedData
  3. Uncomment the code above and replace MODEL with your imported model

*/

db.once("open", async () => {
  await User.insertMany(userData);
  console.log("seeding complete");
  process.exit(0);
});
db.once("open", async () => {
  await Giftee.insertMany(gifteeData);
  console.log("seeding complete");
  process.exit(0);
});
