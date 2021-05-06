const express = require("express");
const router = express.Router();

const reviews = require("./../data/reviews.json");

router.get("/", async (request, response) => {
  try {
    console.log(reviews);
    console.log("in /api/reviews");
  } catch (error) {
    throw error;
  }
});
router.get("/:id", async (request, response) => {
  try {
    console.log(reviews);
    console.log("in /api/reviews");
    const id = parseInt(request.params.id);
    const selected = reviews.filter(review => review.id === id);
    response.send(selected);
  } catch (error) {
    throw error;
  }

});


module.exports = router;
