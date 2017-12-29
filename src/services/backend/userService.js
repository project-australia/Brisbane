import { userProfile } from '../../../__tests__/fixtures/userProfile'

// TODO: Esse metodo tem que chamar o back end e retornar a representacao de user
export const signUpUser = async (signUpForm) => {
  return { ...userProfile }
}

// TODO: Esse metodo tem que chamar o back end e retornar a representacao de user
export const getUserProfile = async (userId) => {
  return { ...userProfile, id: userId }
}
