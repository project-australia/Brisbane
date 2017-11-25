import Firebase from 'firebase'

export const signInWithEmailAndPassword = async (email, password) => {
  const firebaseUser = await Firebase.auth().signInWithEmailAndPassword(email, password)
  return validatedUser(firebaseUser)
}

export const createUserWithEmailAndPassword = async (email, password) => {
  const user = await Firebase.auth().createUserWithEmailAndPassword(email, password)
  await sendEmailVerification(user)
}

const validatedUser = async (firebaseUser) => {
  const {uid, emailVerified, email, phoneNumber} = firebaseUser
  if (!emailVerified) {
    await sendEmailVerification(user)
    throw (new Error('Email não verificado'))
  }

  return {uid, emailVerified, email, phoneNumber}
}

export const sendEmailVerification = async (user) => { user.sendEmailVerification() }
export const sendPasswordResetEmail = async (email) => { Firebase.auth().sendPasswordResetEmail(email) }
