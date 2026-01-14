import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config'; // This ensures your .env is loaded immediately

const app = express();
app.use(cors());
app.use(express.json());

// 1. The Model
const Contact = mongoose.model('Contact', new mongoose.Schema({
  name: String,
  email: String,
  company: String,
  phone: String,
  service: String,
  message: String,
  date: { type: Date, default: Date.now }
}));

// 2. The Route
app.post('/api/contact', async (req, res) => {
  try {
    const newEntry = new Contact(req.body);
    const saved = await newEntry.save();
    console.log("✅ Data saved with ID:", saved._id);
    res.status(201).json({ success: true });
  } catch (error) {
    console.error("❌ Save Error:", error);
    res.status(500).json({ success: false });
  }
});

// 3. The Connection (Safely check if URI exists)
const uri = process.env.MONGODB_URI;
if (!uri) {
  console.error("❌ ERROR: MONGODB_URI is missing in .env file!");
  process.exit(1);
}

mongoose.connect(uri)
  .then(() => console.log('✅ Successfully connected to MongoDB'))
  .catch(err => console.log('❌ Could not connect:', err));

app.listen(5000, () => console.log('🚀 Server active on port 5000'));