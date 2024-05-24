import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getRoleByID(id: Number) {
  return await prisma.roles.findUnique({
    where: {
      id: Number(id)
    }
  })
}

export async function returnEmployeeByID(id: Number) {
  return await prisma.roles.findUnique({
    where: {
      id: Number(id)
    }
  })
}