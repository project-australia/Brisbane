import Firebase from 'firebase'

export const signInWithEmailAndPassword = async (email, password) => {
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
  const { uid, emailVerified, email, phoneNumber, displayName } = firebaseUser
  return { uid, emailVerified, email, phoneNumber, displayName }
}

export const getUserToker = async () => Firebase.auth().currentUser.getIdToken()
export const sendEmailVerification = async user => user.sendEmailVerification()
export const sendPasswordResetEmail = async email =>
  Firebase.auth().sendPasswordResetEmail(email)
