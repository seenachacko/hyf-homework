USE meal_sharing;
#Get meals that has a price smaller than a specific price fx 90
SELECT * FROM meal
WHERE price < 90;
#Get meals that still has available reservations
SELECT
    meal.id AS meal_id,
    title,
    description,
    location,
    price,
    max_reservations,
    COALESCE(SUM(number_of_guests), 0) AS total_reservations
FROM
    meal
    LEFT JOIN reservation ON meal.id = meal_id
GROUP BY
    meal.id
HAVING
    max_reservations > total_reservations;
#Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT id,title,description,location,`when`,max_reservations,price,created_date
FROM meal 
WHERE title LIKE  "%Rødgrød med%";
#Get meals that has been created between two dates
SELECT id,title,description,location,`when`,max_reservations,price,created_date
 FROM meal 
WHERE created_date 
BETWEEN '2021-04-21' AND '2021-04-25';
#Get only specific number of meals 
SELECT * FROM meal 
LIMIT 4;
#Get the meals that have good reviews
SELECT meal.id, meal.title, review.stars 
FROM meal
JOIN review ON meal.id=review.meal_id
WHERE stars >3;
#Get reservations for a specific meal sorted by created_date
SELECT id,number_of_guests,meal_id,created_date,contact_phonenumber,contact_name,contact_email
 FROM reservation
WHERE meal_id = 3
ORDER BY created_date ASC;
#Sort all meals by average number of stars in the reviews
SELECT meal.id, meal.title, avg(review.stars) 
FROM meal
JOIN review ON meal.id = review.meal_id
GROUP BY(meal.id)
ORDER BY avg(stars) DESC;