const express = require('express');
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/mission-commanders', async (req, res) => {
    const missionCommanders = await prisma.missionCommander.findMany({});
    res.json(missionCommanders);
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});