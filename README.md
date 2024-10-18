# Comic Book API

## Description

The Comic Book API is a RESTful API that allows users to manage comic book information. It supports CRUD (Create, Read, Update, Delete) operations and provides functionality to filter, sort, and paginate comic books.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Postman Collection](#postman-collection)
- [Installation](#installation)
- [License](#license)

## Features

- Create, read, update, and delete comic books.
- Pagination support for large datasets.
- Filtering options based on attributes like author, year, price, and condition.
- Sorting options (e.g., by price, year, or alphabetically).

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Postman (for API testing)

## API Endpoints

### 1. Create a Comic Book
- **Endpoint**: `POST /api/comic-books`
- **Request Body**:
  ```json
  {
    "bookName": "Batman: The Dark Knight Returns",
    "authorName": "Frank Miller",
    "yearOfPublication": 1986,
    "price": 19.99,
    "discount": 2.50,
    "numberOfPages": 200,
    "condition": "new",
    "description": "A classic Batman graphic novel where Bruce Wayne returns from retirement."
  }
  ```

### 2. Get All Comic Books
- **Endpoint**: `GET /api/comic-books?page=1&limit=5`
- **Response**:
  ```json
  {
    "docs": [...],
    "totalDocs": 10,
    "limit": 5,
    "totalPages": 2,
    "page": 1,
    "hasPrevPage": false,
    "hasNextPage": true,
    "prevPage": null,
    "nextPage": 2
  }
  ```

### 3. Get a Comic Book by ID
- **Endpoint**: `GET /api/comic-books/{id}`
- **Response**:
  ```json
  {
    "bookName": "Batman: The Dark Knight Returns",
    "authorName": "Frank Miller",
    ...
  }
  ```

### 4. Update a Comic Book
- **Endpoint**: `PUT /api/comic-books/{id}`
- **Request Body**:
  ```json
  {
    "price": 17.99,
    "discount": 1.50
  }
  ```

### 5. Delete a Comic Book
- **Endpoint**: `DELETE /api/comic-books/{id}`

## Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/comic-book-api.git
   cd comic-book-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

4. The API will be running on `http://localhost:3000`.

## Postman Collection

A Postman collection is included in this project for testing all API endpoints. Import the collection from the `Comic.postman_collection.json` file.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

