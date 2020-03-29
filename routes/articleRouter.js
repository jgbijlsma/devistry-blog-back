const router = require("express").Router();
const Article = require("../models/articleModel");

router.post("/", async (req, res) => {
  const { title, markdown } = req.body;

  if (!title || !markdown)
    return res
      .status(400)
      .json({ msg: "Not all required data has been received." });

  try {
    const newArticle = new Article({
      title,
      markdown
    });

    const savedArticle = await newArticle.save();
    res.json(savedArticle);
  } catch (err) {
    res.status(500).json({ err });
  }
});

router.get("/", async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (err) {
    res.status(500).json({ err });
  }
});

router.get("/single/:id", async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    res.json(article);
  } catch (err) {
    res.status(500).json({ err });
  }
});

module.exports = router;
