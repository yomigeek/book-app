# Book-app

## Description 
Create a community of like minded authors to foster inspiration and innovation by leveraging the modern web.

# Table of Contents
- [Technologies](#technology)
- [Features](#features)

## Technologies 
- Nodejs/Express Framework
- PostgresSQL Database
- Sequelize

## Pivotal Tracker
https://www.pivotaltracker.com/n/projects/2184976


## Features
### User
- Signup
- Login
- Create a Book
- Get all Books
- Get a Book
- Update a Book Details
- Delete a Book

<table>

<tr><th>HTTP VERB</th><th>ENDPOINT</th><th>TASK</th></tr>

<tr><td>POST</td> <td>api/v1/signup</td> <td>Signup a User</td></tr>

<tr><td>POST</td> <td>api/v1/login</td> <td>Login a User</td></tr>

<tr><td>POST</td> <td>api/v1/users/books</td> <td>Create a Book</td></tr>

<tr><td>GET</td> <td>api/v1/users/books</td> <td>Get All Books</td></tr>

<tr><td>GET</td> <td>api/v1/users/books/:bookId</td> <td>Get An Existing Book Detail by bookId</td></tr>

<tr><td>PUT</td> <td>api/v1/users/books/:bookId</td>  <td> Modify an  Existing Book Detail By Book Id and User Id</td></tr>

<tr><td>DELETE</td> <td>api/v1/users/books/:bookId</td>  <td> Delete an  Existing Book By Book Id and User Id</td></tr>

</table>

## API Spec 

The preferred JSON object to be returned by the API should be structured as follows:
 ### Payload
 - Signup: username, email, password
 - Login: email, password
 - Create a book: title, author, publisher
 - Update a book: title, author, publisher

 ### User Signup Reponse
 ```source-json
{
  status : "success", 
  message : "User Successfully Registered"
}
```

### User LoginReponse
 ```source-json
{
  status : "success", 
  message : "User logged in"
  data: {
      "user": {
        "token": "jwt.token.here",
        "username": "jake",
  }
  } 
}
```

### Create Book Response
 ```source-json
{
  status : "success", 
  message : "Book Succesfully Created"
  data: {
      "books": {
        "id": "jwt.token.here",
        "title": "Book Title"
  }
  } 
}
```

### Get all Books Response
 ```source-json
{
  status : "success", 
  data: {
      "books" : [
           { "id" : 1, "title" : "A blog post", "author" : "Author of Book", "publisher" : "Publisher of Book" },
           { "id" : 2, "title" : "A blog post", "author" : "Author of Book", "publisher" : "Publisher of Book" },
       ]
  }
}
```
### Get a Book Response
 ```source-json
{
  status : "success", 
  data: {
      "book": {
        "id": "jwt.token.here",
        "title": "Book Title",
        "author" : "Author of Book",
        "publisher" : "Publisher of Book",
    }
  } 
}
```

### Update a Book Response
 ```source-json
{
  status : "success", 
  message : "Book Succesfully Updated"
  data: {
      "book": {
        "id": "jwt.token.here",
        "title": "Book Title",
        "author" : "Author of Book",
        "publisher" : "Publisher of Book",
    }
  } 
}
```

### Delete a Book Response
 ```source-json
{
  status : "success", 
  message : "Book Succesfully Deleted"
  data: {
      "book": {
        "id": "jwt.token.here",
        "title": "Book Title",
        "author" : "Author of Book",
        "publisher" : "Publisher of Book",
    }
  } 
}
```
