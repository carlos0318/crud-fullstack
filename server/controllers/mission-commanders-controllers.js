const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getMissionCommanders = async (req, res) => {
    const missionCommanders = await prisma.missionCommander.findMany({});
    res.json(missionCommanders);
}

const getMissionCommander = async (req, res) => {
    const { id } = req.params;
    const missionCommander = await prisma.missionCommander.findUnique({ where: { id: parseInt(id) } });
    res.json(missionCommander);
}

const createMissionCommander = async (req, res) => {
    const { name, username, mainStack } = req.body;
    await prisma.missionCommander.create({ data: { name, username, mainStack } });

    const message = `Mission commander ${name} created`;
    res.json({message});
}

const updateMissionCommander = async (req, res) => {
    const { id } = req.params;
    const { name, username, mainStack } = req.body;
    await prisma.missionCommander.update({ where: { id: parseInt(id) }, data: { name, username, mainStack } });

    const message = `Mission commander ${name} updated`;
    res.json({message});
}

const deleteMissionCommander = async (req, res) => {
    const { id } = req.params;
    await prisma.missionCommander.delete({ where: { id: parseInt(id) } });

    const message = `Mission commander deleted`;
    res.json({message});
}

module.exports = {
    getMissionCommanders,
    getMissionCommander,
    createMissionCommander,
    updateMissionCommander,
    deleteMissionCommander
}