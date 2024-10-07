const express = require('express');
const router = express.Router();
const FoodItem = require('../Models/FoodItem');

// GET all food items
router.get('/', async (req, res) => {
    try {
        const foodItems = await FoodItem.find();
        res.json(foodItems);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// GET a single food item by ID
router.get('/:id', async (req, res) => {
    try {
        const foodItem = await FoodItem.findById(req.params.id);
        if (!foodItem) return res.status(404).json({ error: 'Item not found' });
        res.json(foodItem);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// POST a new food item
router.post('/', async (req, res) => {
    const { name, description, price, category, image, available } = req.body;

    const newItem = new FoodItem({
        name,
        description,
        price,
        category,
        image,
        available
    });

    try {
        const savedItem = await newItem.save();
        res.json(savedItem);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// PUT update a food item by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedItem = await FoodItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedItem);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// DELETE a food item by ID
router.delete('/:id', async (req, res) => {
    try {
        await FoodItem.findByIdAndDelete(req.params.id);
        res.json({ message: 'Item deleted' });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
