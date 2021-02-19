# What is it?
A backend proto-type that should save unchanging user data, such as username, password, but more specifically related to the eDia app, such as entries and goals.
The proto-type in its current stage can save user login information and encrypt the password. It also detects whether a username has already been used or not. 

# Framework / Tech used 
- Node.JS
- Mongoose
- MongoDB 
- Express
- EJS templating
- Bcrypt
- Visual Studio Code
- nodemon
- Models
- Seeds

# How to use the prototype
- through the terminal, connect to MongoDB and open database 'users' (db.users.find())
- In a separate terminal tab, boot index.js using node or nodemon
- connect to localhost 8080 on browser to open the front-end pages. http://localhost:8080/ should bring to the home page
- create an account
- view user information on Mongo

