import express from "express";
var router = express.Router();

/* GET home page. */
router.post("/newtodo", (req, res) => {
  res.redirect("/home");
});
router.post("/deltodo", (req, res) => {
  res.redirect("/home");
});
router.post("/comment", (req, res) => {
  res.send("POST comment");
});

router.get("/", (req, res) => {
  res.render("wikiped");
});
router.get("/home", (req, res) => {
  res.render("wikiped", {});
});
router.get("/about", (req, res) => {
  res.render("about");
});
router.get("/comment", (req, res) => {
  res.render("comment");
});
router.get("/photo", (req, res) => {
  res.render("photo");
});
router.get("/tabel", (req, res) => {
  res.render("tabel");
});
router.get("/price", (req, res) => {
  res.render("price/price");
});
router.get("/tags/:subreddit", (req, res) => {});

export default router;
