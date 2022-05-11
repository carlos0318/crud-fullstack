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
});

app.get('/mission-commanders/:id', async (req, res) => {
    const { id } = req.params;
    const missionCommander = await prisma.missionCommander.findUnique({ where: { id: parseInt(id) } });
    res.json(missionCommander);
});

app.post('/mission-commanders', async (req, res) => {
    const { name, username, mainStack } = req.body;
    await prisma.missionCommander.create({ data: { name, username, mainStack } });

    const message = `Mission commander ${name} created`;
    res.json({message});
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});