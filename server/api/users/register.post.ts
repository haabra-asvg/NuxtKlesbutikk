import { createUser, getUserByEmail } from '../data/users';
import bcrypt from 'bcrypt';

export default defineEventHandler(async (event) => {
  const { name, email, password, repeat_password } = await readBody(event)

  if(await getUserByEmail(email)) {
    return { error: "Email already exists" }
  }

  if(password !== repeat_password) {
    return { error: "Passwords do not match" }
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  await createUser(name, email, hashedPassword);
  return { success: "User created successfully" }
})