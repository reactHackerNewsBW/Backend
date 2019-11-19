# Backend

## Un-authorized endpoints:

GET all stories: https://bw-backend-hn.herokuapp.com/api/stories
GET story by id: https://bw-backend-hn.herokuapp.com/api/stories/:id <--- (USE number to index through stories like /1) 
POST story: https://bw-backend-hn.herokuapp.com/api/poststories 

## Authorized endpoints:

GET all stories: https://bw-backend-hn.herokuapp.com/authapi/stories
GET story by id: https://bw-backend-hn.herokuapp.com/authapi/stories/:id <--- (USE number to index through stories like /1) 
POST story: https://bw-backend-hn.herokuapp.com/authapi/poststories

## Register User:

POST http://localhost:5200/api/auth/register 
-You need a username and a password. Required

## Login with User:

POST http://localhost:5200/api/auth/login
-You need a username and a password. Required 
	                

