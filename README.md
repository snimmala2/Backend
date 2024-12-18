
# Todo List App - Back-End

This is the back-end API for the Todo List application, built with **Express.js**, **TypeScript**, **Prisma**, and **MySQL**.

---

## Features

- RESTful API for managing tasks.
- CRUD operations: Create, Read, Update, Delete.
- MySQL database integration using Prisma.

---

## Prerequisites

- Node.js v16 or later
- MySQL database
- npm

---

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <https://github.com/snimmala2/Backend>
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Create a `.env` file in the root directory with the following:
   ```env
   DATABASE_URL="mysql://<user>:<password>@<host>:<port>/<database>"
   ```
   Replace `<user>`, `<password>`, `<host>`, `<port>`, and `<database>` with your MySQL credentials.

4. Initialize the database:
   Run Prisma migrations to set up the database schema.
   ```bash
   npx prisma migrate dev --name init
   ```

5. Start the server:
   ```bash
   npm run dev
   ```

6. The API will be available at `http://localhost:3001`.

---

## Scripts

- `npm run dev` - Start the development server.
- `npm run build` - Build the project.
- `npm run start` - Start the production server.

---

## API Endpoints

- **GET /tasks**
  - Fetch all tasks.
- **POST /tasks**
  - Create a new task.
  - Request body:
    ```json
    {
      "title": "Sample Task",
      "color": "blue"
    }
    ```
- **PUT /tasks/:id**
  - Update a task.
  - Request body:
    ```json
    {
      "title": "Updated Task Title",
      "color": "red",
      "completed": true
    }
    ```
- **DELETE /tasks/:id**
  - Delete a task.

---

## Database Schema

The database schema is managed using Prisma. Here's the `Task` model:
```prisma
model Task {
  id          Int      @id @default(autoincrement())
  title       String
  color       String
  completed   Boolean  @default(false)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

---

## Troubleshooting

- **Database Connection Errors**:
  Ensure the `DATABASE_URL` in `.env` is correctly set.
- **API Not Responding**:
  Verify the server is running and the database is accessible.

---

## License

