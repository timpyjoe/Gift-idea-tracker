const { Giftee } = require('../models');
const Model = Giftee; 

async function getAllItems() {
  try {
    return await Model.find().populate("gifter");
  } catch (err) {
    throw new Error(err)
  }
}

async function getItemById(id) {
  try {
    return await Model.findById(id).populate("gifter");
  } catch (err) {
    throw new Error(err)
  }
}

async function createItem(data) {
  try {
    return await Model.create(data);
  } catch (err) {
    throw new Error(err)
  }
}

async function updateItemById(id, data) {
  try {
    return await Model.findByIdAndUpdate(
      id,
      data,
      { new: true }
    );
  } catch (err) {
    throw new Error(err)
  }
}

async function deleteItemById(id) {
  try {
    return await Model.findByIdAndDelete(id);
  } catch (err) {
    throw new Error(err)
  }
}

module.exports = {
  getAllGiftees: getAllItems,
  getGifteeById: getItemById,
  createGiftee: createItem,
  updateGifteeById: updateItemById,
  deleteGifteeById: deleteItemById
}
