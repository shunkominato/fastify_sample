import { getRepository } from 'typeorm'
import { User } from '../../../orm/src/entity/User'


export const getUserList = async () => {
  const user = await getRepository(User).find()
  return user
}