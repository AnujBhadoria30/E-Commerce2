const mongoose = require('mongoose');

// Define the schema for users
const varifySchema = new mongoose.Schema({
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
const Verifymodel = mongoose.model('Verify', varifySchema);  
const Item = mongoose.model('Item', itemSchema,"mydata"); 

// Export both models
module.exports = {
    Verifymodel,
    Item
};
