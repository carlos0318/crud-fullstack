const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

(async function main() {
  try {
    const missionCommander1 = await prisma.missionCommander.upsert({
      where: { name: "carlo" },
      update: {},
      create: { name: "carlo", username: "carlogilmar", mainStack: "nodejs" },
    });
    const missionCommander2 = await prisma.missionCommander.upsert({
      where: { name: "Fernanda" },
      update: {},
      create: {
        name: "Fernanda",
        username: "FernandaOchoa",
        mainStack: "java",
      },
    });
    const missionCommander3 = await prisma.missionCommander.upsert({
      where: { name: "Romarpla" },
      update: {},
      create: {
        name: "Romarpla",
        username: "romarpla",
        mainStack: "javascript",
      },
    });
    console.log("Create 3 mission commanders");
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
