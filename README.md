# 🧩 Interview Task – Messages App

## 📖 Description
Full-stack recruitment project built with **Next.js**, **Express**, **MySQL**, and **Docker**.  
The application allows users to **create, edit, delete, and view messages** stored in the database.  
Frontend uses **RTK Query** for data fetching and **ShadCN UI** for styling.

## 🚀 Run the project

> 💡 Everything works automatically after one command.

docker compose up --build

| Service        | URL                                            | Description                         |
| -------------- | ---------------------------------------------- | ----------------------------------- |
| 🖥️ Frontend   | [http://localhost:3000](http://localhost:3000) | Next.js app (RTK Query + ShadCN UI) |
| ⚙️ Backend     | [http://localhost:8080](http://localhost:8080) | Express API (Sequelize + MySQL)     |
| 🗄️ phpMyAdmin | [http://localhost:8081](http://localhost:8081) | MySQL database GUI                  |
| 🧩 MySQL       | internal service `db`                          | Used by backend                     |

🧱 Tech Stack

Frontend: Next.js 14, TypeScript, RTK Query, Tailwind CSS, ShadCN UI
Backend: Node.js, Express, Sequelize ORM
Database: MySQL 8
DevOps: Docker & Docker Compose

🧠 Features

Message management (CRUD) via REST API
Form validation (frontend + backend)
Database migrations and seeders (sequelize-cli)
Automatic DB migration & seeding on container startup
Clean UI with ShadCN components

🧰 Development commands

Run inside backend container:
# Apply migrations
npx sequelize-cli db:migrate

# Run all seeders
npx sequelize-cli db:seed:all
