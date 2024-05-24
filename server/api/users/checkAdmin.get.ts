import { getUserByToken } from '../data/users'
import { returnEmployeeByID } from '../data/roles'

export default defineEventHandler(async (event) => {
  const getToken = getCookie(event, 'token');
  if(!getToken) {
    return false
  }

  const user = await getUserByToken(getToken);
  if(!user) {
    return false
  }

  const getEmployee = await returnEmployeeByID(Number(user.rolesId));
  if(!getEmployee) {
    return false
  }

  if(getEmployee.administrator === false) {
    return false
  }

  if(getEmployee.administrator === true) {
    return true
  }

})