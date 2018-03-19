import Firebase from 'firebase'

export const signInWithEmailAndPassword = async (email, password) => {
  await Firebase.auth().setPersistence(Firebase.auth.Auth.Persistence.LOCAL)
  const firebaseUser = await Firebase.auth().signInWithEmailAndPassword(
    email,
    password
  )
  return validatedUser(firebaseUser)
}

export const createUserWithEmailAndPassword = async (email, password) => {
  const user = await Firebase.auth().createUserWithEmailAndPassword(
    email,
    password
  )
  return sendEmailVerification(user)
}

const validatedUser = async firebaseUser => {
  if (firebaseUser) {
    const { uid, emailVerified, email, phoneNumber, displayName } = firebaseUser
    return { uid, emailVerified, email, phoneNumber, displayName }
  }
}

export const logOut = async () => Firebase.auth().signOut()
export const sendEmailVerification = async user => user.sendEmailVerification()
export const getUserToken = async () => Firebase.auth().currentUser.getIdToken()
export const currentUser = async () => validatedUser(await Firebase.auth().currentUser)
export const sendPasswordResetEmail = async email => Firebase.auth().sendPasswordResetEmail(email)
