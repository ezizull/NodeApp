import mongoose from "mongoose";

// Buat Schema
const Book = mongoose.Schema({
  judul: {
    type: String,
    required: true,
  },
  pengarang: {
    type: String,
    required: true,
  },
  harga: {
    type: Number,
    required: true,
  },
});

// export model
export default mongoose.model("book", Book);
