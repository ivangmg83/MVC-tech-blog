const router = require("express").Router();
const { PostComment} = require("../../models");

// CREATE new post
router.post("/", async (req, res) => {
  try {
    console.log(req.body.content);
    const postComment = await PostComment.create({
      title: req.body.title,
      content: req.body.content,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(postComment);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const postComment = await PostComment.findAll();

    const getData = postComment.map((postComment) =>
      getData.get({ plain: true })
    );
    res.render("homepage", {
      postComment,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
