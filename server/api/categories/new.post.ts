import { getCategoryByName, createCategory } from '../data/categories'

export default defineEventHandler(async (event) => {
  const { name } = await readBody(event);
  const getCategory = await getCategoryByName(String(name));

  if(getCategory) {
    return { error: "Category already exists!" }
  }
  
  createCategory(String(name));
  return { success: "Category created!" }
})