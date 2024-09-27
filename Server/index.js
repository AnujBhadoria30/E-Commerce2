const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { Shoppingmodel, Item } = require('./models/E-commerce');  // Import models from E-commerce.js

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb+srv://anujbhadoria:bhadoriaanuj6363@cluster0.8cybfre.mongodb.net/E-Commerce?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err));

// Item routes
app.get('/api/items', async (req, res) => {
    try {
        const items = await Item.find();
        const items_get = await Shoppingmodel.find();
        console.log("items getting ",items_get);
        
        console.log(items);
          // Fetch all items from the Item model
        res.json(items);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// User login route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await Shoppingmodel.findOne({ email });  // Find user by email in Shoppingmodel (Shoping collection)

        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        if (user.password !== password) {
            return res.status(400).json({ message: "Invalid password" });
        }

        res.json("Login successful");
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

// User registration route
app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const newEmployee = new Shoppingmodel({ name, email, password });  // Create a new user using the Shoppingmodel
        await newEmployee.save();
        res.status(200).json({ message: 'User registered successfully!' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error saving user' });
    }
});

// Start the server
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
