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
    colors:  String,
    music: String,
    flowers: String,
    clothes: String,
    foodSnacks: String,
    candy: String,
    coffeetea: String,
    stores: String,
    beverages: String,
    movies: String,
    shows: String,
    scents: String,
    accessories: String,
    dessert: String,
    sports: String
  },
  sizes: {
    shirttop: String,
    pantsbottom: Schema.Types.Mixed,
    dress: Number,
    shoe: Number,
    ring: Number
  },
  hobbies: {
    type: String
  },
  collections: {
    type: String
  },
  dontneed: {
    type: String
  },
  blank: {
    type: String
  }
});

const Giftee = model('Giftee', gifteeSchema);
module.exports = Giftee;
