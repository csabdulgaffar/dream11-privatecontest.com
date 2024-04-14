const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');


require('dotenv').config({ path: path.resolve(__dirname, '..', '.env') });



// Create Express app
const app = express();

// Define middleware
app.use(cors());
app.use(express.json());


// Define server port
const PORT = process.env.PORT || 5000;


async function main() {
    await mongoose.connect(process.env.MONGODB_URI);

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

main().catch(err => console.log(err));
main().then(console.log('Connected to MongoDB'));

// Define Contest schema
const contestSchema = new mongoose.Schema({
    contestName: { type: String, required: true },
    timeValidity: { type: Date, required: true },
    amount: { type: Number, required: true },
    participationAmount: { type: Number, required: true },
    numOfSpots: { type: Number, required: true },
    firstPrize: { type: String, required: true },
    contestCode: { type: String, required: true },
    platform: { type: String },
});

// Create Contest model
const Contest = mongoose.model('Contest', contestSchema);

// API routes
app.get('/api/contests', async (req, res) => {
    try {
        const contests = await Contest.find();
        res.json(contests);
    } catch (err) {
        console.error('Failed to fetch contests', err);
        res.status(500).json({ error: 'Failed to fetch contests' });
    }
});

app.post('/api/contests', async (req, res) => {
    try {
        const contest = new Contest(req.body);
        const savedContest = await contest.save();
        res.status(201).json(savedContest);
    } catch (err) {
        console.error('Failed to create contest', err);
        res.status(500).json({ error: 'Failed to create contest' });
    }
});

app.delete('/api/contests/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Contest.findByIdAndDelete(id);
        res.sendStatus(204);
    } catch (err) {
        console.error('Failed to delete contest', err);
        res.status(500).json({ error: 'Failed to delete contest' });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));