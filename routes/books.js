import express from "express";
import {
  getBooks,
  getBookById,
  saveBook,
  updateBook,
  deleteBook,
} from "../controllers/bookController.js";
var router = express.Router();

router.get("/", getBooks);
// Route get single Book
router.get("/:id", getBookById);
// Route CREATE Book
router.post("/", saveBook);
// Route UPDATE Book
router.patch("/:id", updateBook);
// Route DELETE Book
router.delete("/:id", deleteBook);

export default router;
