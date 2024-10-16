import mongoose from 'mongoose';

// Define the review schema as a separate model
const reviewSchema = new mongoose.Schema({
  comicBook: { type: mongoose.Schema.Types.ObjectId, ref: 'ComicBook', required: true }, // Reference to the comic book
  // Optional: Reference to the customer/user
  // customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  rating: { type: Number, min: 1, max: 5, required: true },
  comment: { type: String, required: false }
}, { timestamps: true });

export default mongoose.model('Review', reviewSchema);
