const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Item = require('./itemSchema'); 

const app = express();
app.use(express.json());
app.use(cors());

//mongodb+srv://anujbhadoria:bhadoriaanuj6363@cluster0.8cybfre.mongodb.net/yeh DB ka naam h =>{E-Commerce}?retryWrites=true&w=majority&appName=Cluster0
mongoose.connect("mongodb+srv://anujbhadoria:bhadoriaanuj6363@cluster0.8cybfre.mongodb.net/E-Commerce?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("MongoDB connected", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }))
    .catch(err => console.error("MongoDB connection error:", err));

const ShopingSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

const Shoppingmodel = mongoose.model('Shoping', ShopingSchema);

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true  // Name field required hai
    },
    description: {
        type: String,
        required: true  // Description field required hai
    },
    imageUrl: {
        type: String,
        required: true  // Image URL bhi required hai
    }
});

const Item = mongoose.model('Item', itemSchema);


app.get('/api/items', async (req, res) => {
    try {
        const items = await Item.find(); 
        res.json(items);                 
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await Shoppingmodel.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        if (user.password !== password) {
            return res.status(400).json({ message: "Invalid password" });
        }

        res.json("Success");
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
        console.log("Login Request received: ", email, password);
    }
})
app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
       
        const newEmployee = new Shoppingmodel({ name, email, password });

      
        await newEmployee.save();

        res.status(200).json({ message: 'User registered successfully!' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error saving user' });
        console.log("Register Request received: ", email, password);
    }
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
















































// app.use(express.json()) isliye use kiya jaata hai taaki aapko client se jo bhi JSON format mein data milta hai, usko automatically JavaScript object mein convert kar sakein. Isse aap request body ke data ko easily access aur handle kar paate ho, jaise form submission ya API ke through data bhejna.