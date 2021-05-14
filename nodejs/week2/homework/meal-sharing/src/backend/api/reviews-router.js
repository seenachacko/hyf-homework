const express = require("express");
const router = express.Router();

const reviews = require("./../data/reviews.json");

router.get("/", async (request, response) => {
  try {
    console.log(reviews);
    console.log("in /api/reviews");
  } catch (error) {
    response.status(500).send({ error: "internal server error" });

  }
});
router.get("/:id", async (request, response) => {
  try {
    console.log(reviews);
    console.log("in /api/reviews");
    const id = parseInt(request.params.id);
    if(isNaN(id)){
    const selected = reviews.filter(review => review.id === id);
    response.send(selected);
    }
    else{
      response.status(400).send('Review IDs must be numbers.');
    }
  } catch (error) {
    response.status(500).send({ error: "internal server error" });

  }

});


module.exports = router;
