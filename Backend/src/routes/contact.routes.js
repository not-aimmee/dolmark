import express from 'express';
import Contact from '../models/contact.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    // 1. Create a new document using the data from the frontend (req.body)
    const newEntry = new Contact(req.body);
    
    // 2. SAVE IT TO THE DATABASE
    await newEntry.save();
    
    // 3. Send a success response back to the frontend
    res.status(201).json({ message: "Saved to Database!" });
    console.log("✅ Data successfully saved to MongoDB!");
  } catch (error) {
    console.error("❌ Database Save Error:", error);
    res.status(500).json({ error: "Failed to save data" });
  }
});

export default router;