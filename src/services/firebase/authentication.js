import { AsyncStorage } from 'react-native'
import Firebase from 'firebase'
const USER_UID_KEY = 'user'

export const signInWithEmailAndPassword = async (email, password) => {
  await Firebase.auth().setPersistence(Firebase.auth.Auth.Persistence.LOCAL) // TODO: Nao ta
  // funcionando, por isso to usando async storage
  const firebaseUser = await Firebase.auth().signInWithEmailAndPassword(
    email,
    password
  )

  const user = await validatedUser(firebaseUser)
  await AsyncStorage.setItem(USER_UID_KEY, user.uid)
  return user
}

export const createUserWithEmailAndPassword = async (email, password) => {
  const user = await Firebase.auth().createUserWithEmailAndPassword(
    email,
    password
  )
  return sendEmailVerification(user)
}

const validatedUser = firebaseUser => {
  if (firebaseUser) {
    const { uid, emailVerified, email, phoneNumber, displayName } = firebaseUser
    return { uid, emailVerified, email, phoneNumber, displayName }
  }
}

export const logOut = async () => {
  await Firebase.auth().signOut()
  await AsyncStorage.removeItem(USER_UID_KEY)
}

export const currentUserUid = async () => {
  const currentUser = await Firebase.auth().currentUser
  let user = validatedUser(currentUser)

  if (!user) {
    return AsyncStorage.getItem(USER_UID_KEY)
  }

  return user.uid
}

export const sendEmailVerification = async user => user.sendEmailVerification()
export const getUserToken = async () => Firebase.auth().currentUser.getIdToken()
export const sendPasswordResetEmail = async email =>
  Firebase.auth().sendPasswordResetEmail(email)
