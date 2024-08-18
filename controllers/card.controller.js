const Card = require('../models/card.model');

// Create a new card
const createCard = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newCard = new Card({  title, description });
    await newCard.save();
    res.status(201).json(newCard);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all cards
const getAllCards = async (req, res) => {
  try {
    const cards = await Card.find();
    res.status(200).json(cards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a specific card by title
const getCardByTitle = async (req, res) => {
  try {

    const title = req.params.title;
    //handling case sensitive/search part
   // const regex = new RegExp(`^${title}$`, 'i'); 

    const regex = new RegExp(title, 'i'); 

    const card = await Card.findOne({ title: { $regex: regex }  });
    if (!card) return res.status(404).json({ message: 'Card not found' });
    res.status(200).json(card);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createCard,
  getAllCards,
  getCardByTitle
};
