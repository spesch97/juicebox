const express = require("express");
const { getAllTags } = require("../db");
const tagsRouter = express.Router();

tagsRouter.use((req, res, next) => {
  console.log("A request is being made to /tags");

  next();
});

tagsRouter.get("/", async (req, res) => {
  try {
    const allTags = await getAllTags();

    const tags = allTags.filter((tag) => {
      if (tag.active) {
        return true;
      }

      if (req.user && tag.author.id === req.user.id) {
        return true;
      }

      return false;
    });

    res.send({
      tags,
    });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

tagsRouter.get("/:tagName/posts", async (req, res, next) => {
  // read the tagname from the params
  try {
    // use our method to get posts by tag name from the db
    // send out an object to the client { posts: // the posts }
  } catch ({ name, message }) {
    // forward the name and message to the error handler
  }
});

module.exports = tagsRouter;
