const mongoose = require('mongoose');

// Define the schema for users
const ShopingSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

// Define the schema for items
const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
});

// Create models for both schemas
const Shoppingmodel = mongoose.model('Shoping', ShopingSchema);  // Model for 'Shoping' collection
const Item = mongoose.model('Item', itemSchema,"mydata");  // Model for 'Item' collection

// Export both models
module.exports = {
    Shoppingmodel,
    Item
};
