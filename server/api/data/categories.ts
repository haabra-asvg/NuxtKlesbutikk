import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function getCategoryByID(id: Number) {
  return await prisma.category.findUnique({
    where: {
      id: Number(id)
    }
  })
}

export async function getCategoryByName(name: String) {
  return await prisma.category.findUnique({
    where: {
      name: String(name)
    }
  })
}

export async function createCategory(name: String) {
  return await prisma.category.create({
    data: {
      name: String(name)
    }
  })
}