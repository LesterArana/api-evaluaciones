import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const count = await prisma.professor.count();
  if (count === 0) {
    await prisma.professor.createMany({
      data: [
        { name: 'Ing. Oscar Paz', course: 'Bases de Datos' },
        { name: 'Ing. Carlos Tezo ', course: 'desarrollo web I' },
        { name: 'Ing Mario Lopez', course: 'Redes' }
      ]
    });
  }
  console.log('Seed ok');
}

main().finally(() => prisma.$disconnect());
