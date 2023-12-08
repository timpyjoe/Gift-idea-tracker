const { Schema, model } = require('mongoose');

const gifteeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  birthday: {
    type: String,
    required: true
  },
  favorites: {
    
  }
});

const Giftee = model('Giftee', gifteeSchema);
module.exports = Giftee;
