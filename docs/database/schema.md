# Database Schema - Inkspire

## 1. Overview  
This document outlines the MongoDB schema for **Inkspire**, a digital book lending platform. The system follows a **document-oriented model**, using **embedded documents** and **references** for efficiency and scalability.

---

## 2. Collections & Schema Definitions  

### 2.1 Users Collection (`users`)  
Stores user details, including personal information and account type.  

```json
{
  "userId": "",
  "name": "",
  "email": "",
  "password": "",
  "gender": "",  // ["M", "F"] M : male , F : female
  "type": "",  // ["R", "A"] R : regular , A : admin
}
```

---

### 2.2 Books Collection (`books`)  
Stores details of books available in the library.  

```json
{
  "bookId": "",
  "title": "",
  "description": "", //limit of 500 words
  "publish_year": 1925,
  "genre":[], //multiple genre ids
  "authors": [], //multiple author ids
}
```

---

### 2.3 Borrows Collection (`borrows`)  
Tracks books borrowed by users, including return status.  

```json
{
  "user_id": "",
  "book_id": "",
  "borrow_date": "2025-02-25T12:00:00Z",
  "return_date": "2025-03-10T12:00:00Z",
  "isForcefullyReturned": false  // true if returned forcefully
}
```

---

### 2.4 Authors Collection (`authors`)  
Stores details of book authors.  

```json
{
  "authorId": "",
  "name": ""
}
```

### 2.5 Genre Collection (`genres`)  
Stores available genres.  

```json
{
  "genreId": "",
  "name": ""
}
```

---

## 3. Relationships & References  
- **`borrows.user_id`** → References `users._id`  
- **`borrows.book_id`** → References `books._id`  
- **`books.authors.author_id`** → References `authors._id`  
- **`books.genre.genre_id`** → References `genre._id`
- A book can have **multiple authors**, and an author can have **multiple books** (Many-to-Many).  

---


## 4. Data Validation & Constraints  
- **Users**: Unique `email`, password stored as a **hashed value**.  
- **Books**: `publish_year` must be a valid **past or present year**.  
- **Borrows**: `borrow_date` should be **before `return_date`**.  

---


This document serves as a **detailed schema reference** for the **Inkspire MongoDB** database.
