const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");

router.get("/", async (request, response) => {
  try {
    console.log(meals);
    console.log("in /api/meals");
    let selectedMeals = meals;
    if ('maxPrice' in request.query) {
      const maxPrice = parseInt(request.query.maxPrice);
      if (isNaN(maxPrice)) {
        res.status(400).send({ error: "maxPrice should be an integer" });
        return;
      }
      selectedMeals = selectedMeals.filter(meal => meal.price < maxPrice);
    }
    if ('title' in request.query) {
      const title = request.query.title;
      selectedMeals = selectedMeals.filter(meal => meal.title.toLowerCase().includes(title.toLowerCase()));
    }
    if ('createdAfter' in request.query) {
      const createdAfter = new Date(request.query.createdAfter);
      if (!createdAfter.getDate()) {
        response.status(404).send('must be a valid date.');
        return;
      }
      selectedMeals = selectedMeals.filter(meal => new Date(meal.createdAt).getDate() > createdAfter.getDate());
    }
    if ('limit' in request.query) {
      const limit = parseInt(request.query.limit);
      if (isNaN(limit)) {
        res.status(400).send({ error: "limit should be an integer" });
        return;
      }
      selectedMeals = selectedMeals.slice(0, limit);
    }
  
    response.send(selectedMeals);
  } catch (error) {
    throw error;
  }

});
router.get("/:id", async (request, response) => {
  try {
    const id = parseInt(request.params.id);
    if (isNaN(id)) {
      response.status(404).send('User IDs should be integers.');
      return;
    }
    if (meals.length > 0){
       const selectedMeals = meals.filter(meal => meal.id === id);
      response.send(selectedMeals);
    }
    else
      response.status(404).send(`There is no meal with id  ${id}`);
  } catch (error) {
    response.status(500).send(`Internal Server Error`) ;
  }

});

module.exports = router;
