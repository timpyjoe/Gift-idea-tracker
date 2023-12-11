const router = require('express').Router();
const User = require("../../models/User")

// Import any controllers needed here
const { getAllGiftees, getGifteeById, createGiftee, updateGifteeById, deleteGifteeById } = require('../../controllers/giftee.controller');

// Declare the routes that point to the controllers above
router.get("/", async (req, res) => {
  try {
    const payload = await getAllGiftees()
    res.status(200).json({ result: "success", payload })
  } catch(err){
    res.status(500).json({ result: "error", payload: err.message })
  }
})

router.get("/:id", async (req, res) => {
  try {
    const payload = await getGifteeById(req.params.id)
    res.status(200).json({ result: "success", payload })
  } catch(err){
    res.status(500).json({ result: "error", payload: err.message })
  }
})

router.post("/", async (req, res) => {
  try {
    const payload = await createGiftee(req.body)
    const gifteeObject = await User.findById(req.body.gifter, {'giftees':1, "_id":0})
    console.log(payload._id);
    gifteeObject.giftees.push(payload._id)
    console.log(gifteeObject)
    const user = await User.findByIdAndUpdate(req.body.gifter, {giftees: gifteeObject.giftees})
    console.log(user)
    res.status(200).json({ result: "success", payload })
  } catch(err){
    res.status(500).json({ result: "error", payload: err.message })
  }
})

router.put("/:id", async (req, res) => {
  try {
    const payload = await updateGifteeById(req.params.id, req.body)
    res.status(200).json({ result: "success", payload })
  } catch(err){
    res.status(500).json({ result: "error", payload: err.message })
  }
})

router.delete("/:id", async (req, res) => {
  try {
    const payload = await deleteGifteeById(req.params.id)
    res.status(200).json({ result: "success", payload })
  } catch(err){
    res.status(500).json({ result: "error", payload: err.message })
  }
})

module.exports = router;