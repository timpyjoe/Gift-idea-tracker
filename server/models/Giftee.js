const { Schema, model } = require('mongoose');

const gifteeSchema = new Schema({
  name: {
    type: String,
    required: true,
    default: "placeholder"
  },
  birthday: {
    type: Date,
    required: true,
    default: Date.now
  },
  gifter: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  relationship: {
    type: String,
    default: "Friend"
  },
  favorites: {
    colors: {
      type: String,
      default: ""
    },
    music: {
      type: String,
      default: ""
    },
    flowers: {
      type: String,
      default: ""
    },
    clothes: {
      type: String,
      default: ""
    },
    foodSnacks: {
      type: String,
      default: ""
    },
    candy: {
      type: String,
      default: ""
    },
    coffeetea: {
      type: String,
      default: ""
    },
    stores: {
      type: String,
      default: ""
    },
    beverages: {
      type: String,
      default: ""
    },
    movies: {
      type: String,
      default: ""
    },
    shows: {
      type: String,
      default: ""
    },
    scents: {
      type: String,
      default: ""
    },
    accessories: {
      type: String,
      default: ""
    },
    dessert: {
      type: String,
      default: ""
    },
    sports: {
      type: String,
      default: ""
    }
  },
  sizes: {
    shirttop: {
      type: String,
      default: ""
    },
    pantsbottom: {
      type: Number,
      defualt: ""
    },
    dress: {
      type: Number,
      default: ""
    },
    shoe: {
      type: Number,
      default: ""
    },
    ring: {
      type: Number,
      default: ""
    }
  },
  hobbies: {
    type: String,
    default: ""
  },
  collections: {
    type: String,
    default: ""
  },
  dontneed: {
    type: String,
    default: ""
  },
  blank: {
    type: String,
    default: ""
  }
});

const Giftee = model('Giftee', gifteeSchema);
module.exports = Giftee;
