# 🐘 PostgreSQL Todo API

A fully functional Todo CRUD API built using **Node.js**, **Express**, and **PostgreSQL** with proper folder structure and best practices. 💼

---

## 🚀 Features

- ✅ Create, Read, Update, Delete todos
- 📦 PostgreSQL integration using `pg` module
- 🧠 MVC architecture (Model-View-Controller)
- 🎯 Clean and maintainable code structure
- 🛡️ Centralized error handling
- 🧪 Input validation middleware
- 📂 Organized folder structure for scalability

---

## 📁 Folder Structure

```
📂src
 ┣ 📂config            # DB configs and SQL seed data
 ┣ 📂controllers       # Route handlers / logic
 ┣ 📂middlewares       # Error & validation middlewares
 ┣ 📂models            # Database interaction logic
 ┣ 📂routes            # API route definitions
 ┣ 📂utils             # Common utility classes & functions
 ┣ 📂validations       # Input validation logic
 ┣ 📜app.js            # Express app setup
 ┣ 📜constants.js      # Constants like payload size, etc.
 ┗ 📜index.js          # App entry point
.env                   # Environment variables
.env.sample            # Sample env file
```

---

## 📦 Installation

```bash
git clone https://github.com/ANKITKUMARBARIK/PostgreSQL_todo_API.git
cd PostgreSQL_todo_API
npm install
```
> ⚙️ Configure your `.env` file based on `.env.sample`

---

## 🧪 API Endpoints

| Method | Endpoint        | Description          |
|--------|------------------|----------------------|
| GET    | `/todos`         | Get all todos        |
| GET    | `/todos/:id`     | Get todo by ID       |
| POST   | `/todos`         | Create a new todo    |
| PATCH  | `/todos/:id`     | Update a todo        |
| DELETE | `/todos/:id`     | Delete a todo        |

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- PostgreSQL
- pg module
- Joi (for validation)
- dotenv

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## 📃 License

[GNU](LICENSE)

---

> Made with 🖤 by ankit