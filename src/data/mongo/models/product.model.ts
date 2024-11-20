import mongoose, { Schema } from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    unique: true,
  },
  price: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
  },
  available: {
    type: Boolean,
    default: false,
  },

  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },

  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  }
});

export const ProductModel = mongoose.model('Product', productSchema);
