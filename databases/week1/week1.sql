#1
SELECT COUNT(*) AS number_of_tasks
FROM task;

#2
SELECT COUNT(*)
FROM task 
WHERE  due_date IS NULL;

#3
SELECT * FROM task 
 JOIN status on task.status_id=status.id
 WHERE name = "Done";
 
 #4
 SELECT * FROM task 
 JOIN status on task.status_id=status.id
 WHERE name != "Done";
 
 #5
 SELECT * 
 FROM task
 ORDER BY created DESC;
 
 #6
 SELECT * 
 FROM task
 ORDER BY created DESC LIMIT 1;
 
 #7
 SELECT title,description
 FROM task
 WHERE title LIKE '%database%' OR description LIKE '%database%';

#8
SELECT title, status.name AS status
 FROM task 
 JOIN status on task.status_id=status.id;
 
 #9
SELECT status.name, COUNT(status.name) AS count
 FROM task 
 JOIN status on task.status_id=status.id
 GROUP BY name;
 
#10
SELECT status.name, COUNT(status.name) 
 FROM task 
 JOIN status on task.status_id=status.id
 GROUP BY name
 ORDER BY COUNT(status.name) DESC;

