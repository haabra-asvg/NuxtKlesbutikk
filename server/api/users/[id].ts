import { getUserByID } from "../data/users";


export default defineEventHandler(async (event) => {
  if(event.context.params) {
    const id = event.context.params.id;
    const user = await getUserByID(Number(id));
    return user || { error: "User not found!" };
  }
})