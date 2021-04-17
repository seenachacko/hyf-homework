USE hyf_lesson2;
select * from task;
select * from user_task;
#Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT  INTO task (title, description, created, updated, due_date, status_id)
VALUES ("Making biriyani","I am starving","2020-10-25 06:54:16","2021-10-25 06:54:16","2022-10-25 06:54:16",2);
#insert into task (title, description, created, updated, due_date, status_id)
#value ('new task','new task description',now(),now(),now(),1);
INSERT INTO user_task(user_id,task_id)
VALUES (10,36);
#Change the title of a task
  UPDATE task 
  SET title = "Making salad"
  WHERE task.id = 37;
  
  #Change a task due date
  UPDATE task 
  SET due_date = "2021-12-25 06:54:16"
  WHERE task.id = 37;
  
  #Change a task status
  UPDATE task 
  SET status_id= 1
  WHERE task.id = 37;
  #Mark a task as complete
  UPDATE task 
  SET status_id= 3
  WHERE task.id = 37;
  
  # Delete a task
  DELETE FROM task
  WHERE task.id = 37;
  
  
  #part2
  
  
  
  
