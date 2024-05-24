import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function getUsers() {
  return await prisma.users.findMany();
}

export async function getUserByID(id: Number) {
  return await prisma.users.findUnique({
    where: {
      id: Number(id)
    }
  })
}

export async function getUserByEmail(email: string) {
  return await prisma.users.findUnique({
    where: {
      email: String(email)
    }
  })
}

export async function getUserByToken(token: string) {
  return await prisma.users.findUnique({
    where: {
      token: token
    }
  })
}

export async function hashPassword(password: string) {
  return await bcrypt.hash(password, 10);
}

export async function createUser(name: string, email: string, password: string) {
  return await prisma.users.create({
    data: {
      email: email,
      name: name,
      password: password,
      rolesId: 1
    }
  })
}

export async function deleteUserByID(id: Number) {
  const user = await prisma.users.findUnique({
    where: {
      id: Number(id)
    }
  })

  if(!user) {
    throw new Error('User not found');
  }

  return await prisma.users.delete({
    where: {
      id: Number(id)
    }
  })
}