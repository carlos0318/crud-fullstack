# CRUD Fullstack

### Installation:
1. Clone the repository.
2. Create a new database in postgres.
3. Run the following commands in the terminal: `cd server`
4. Run the following commands in the terminal: `npm install`
5. Run the following commands in the terminal: `npx prisma migrate dev --name init` (for creating the table)
6. Create inside the server folder a file called `.env` with the following content: `DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/DATABASENAME?schema=public"` (replace USER, PASSWORD and DATABASENAME with your credentials)
6. Run the following commands in the terminal: `npm prisma/seed.js` (for enter the data in the database)
7. Run the following commands in the terminal: `npm start`
8. In another terminal, run the following commands: `cd client`
9. Run the following commands in the terminal: `npm install`
10. Run the following commands in the terminal: `npm start`

## Server
API server for CRUD application. 

### Dependencies
* [Express](https://expressjs.com/): Node.js web framework, used for routing.
* [Prisma](https://www.prisma.io/): Used for database management.
* [Cors](https://www.npmjs.com/package/cors): Used for allow cross-origin resource sharing.

### Endpoints:

| Endpoint | URL | Description | Method |
| --- | --- | --- | --- |
| `/mission-commanders/` | http://localhost:3000/mission-commanders | Endpoint for all mission commanders. | GET |
| `/mission-commanders/:id` | http://localhost:3000/mission-commanders/:id | Endpoint for a specific mission commander. | GET |
| `/mission-commanders/` | http://localhost:3000/mission-commanders/ | Endpoint for create a new mission commander. | POST |
| `/mission-commanders/:id` | http://localhost:3000/mission-commanders/:id | Endpoint for update a specific mission commander. | PUT |
| `/mission-commanders/:id` | http://localhost:3000/mission-commanders/:id | Endpoint for delete a specific mission commander. | DELETE |