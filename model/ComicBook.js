import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

// Define review schema
const reviewSchema = new mongoose.Schema({
  rating: { type: Number, min: 1, max: 5, required: true },
  comment: { type: String, required: false }
}, { timestamps: true });

// Define comic book schema
const comicBookSchema = new mongoose.Schema({
  bookName: { type: String, required: true },
  authorName: { type: String, required: true },
  yearOfPublication: { type: Number, required: true },
  price: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  numberOfPages: { type: Number, required: true },
  condition: { type: String, enum: ['new', 'used'], required: true },
  description: { type: String },
  unitsSold: { type: Number, default: 0 },
  customerReviews: [reviewSchema],
}, { timestamps: true });

// Add pagination plugin
comicBookSchema.plugin(mongoosePaginate);

export default mongoose.model('ComicBook', comicBookSchema);
