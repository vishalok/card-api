const express = require('express');
const router = express.Router();
const {
  createCard,
  getAllCards,
  getCardByTitle
} = require('../controllers/card.controller');

// Create a new card
router.post('/cards', createCard);

// Get all cards
router.get('/cards', getAllCards);

// Get a specific card by title
router.get('/cards/:title', getCardByTitle);

module.exports = router;
