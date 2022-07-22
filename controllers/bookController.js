import Book from "../models/book.js";

// function get All Books
export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

// function get single Book
export const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.json(book);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
};

// function Create Book
export const saveBook = async (req, res) => {
  const book = new Book(req.body);
  try {
    const savedBook = await book.save();
    res.status(201).json(savedBook);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
};

// function Update Book
export const updateBook = async (req, res) => {
  const cekId = await Book.findById(req.params.id);
  if (!cekId) return res.status(404).json({message: "Data tidak ditemukan"});
  try {
    const updatedBook = await Book.updateOne(
      {_id: req.params.id},
      {$set: req.body}
    );
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
};

// function Delete Book
export const deleteBook = async (req, res) => {
  const cekId = await Book.findById(req.params.id);
  if (!cekId) return res.status(404).json({message: "Data tidak ditemukan"});
  try {
    const deletedBook = await Book.deleteOne({_id: req.params.id});
    res.status(200).json(deletedBook);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
};
