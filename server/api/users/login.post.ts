import { getUserByEmail } from '../data/users';
import bcrypt from 'bcrypt';

export default defineEventHandler(async (event) => {
  const { email, password } = await readBody(event);

  const user = await getUserByEmail(email);
  if(!user) {
    return { error: "Invalid email or password" }
  }

  const match = await bcrypt.compare(password, user.password);
  if(!match) {
    return { error: "Invalid email or password" }
  }

  setCookie(event, 'token', user.token, { maxAge: 1000 * 60 * 60 * 24 * 7});

  return { success: "Logged in successfully" }
})