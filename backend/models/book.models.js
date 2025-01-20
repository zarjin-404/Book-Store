import mongoose from 'mongoose';

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },

    publishedYear: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const bookModels = mongoose.model('book', bookSchema);
