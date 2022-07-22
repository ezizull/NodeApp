import express from "express";
import {
  getProducts,
  getProductById,
  saveProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
var router = express.Router();

router.get("/", getProducts);
// Route get single Product
router.get("/:id", getProductById);
// Route CREATE Product
router.post("/", saveProduct);
// Route UPDATE Product
router.patch("/:id", updateProduct);
// Route DELETE Product
router.delete("/:id", deleteProduct);

export default router;
