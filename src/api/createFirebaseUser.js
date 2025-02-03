import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config';

async function createFirebaseUser(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log('User created:', user);
    return user;
  } catch (error) {
    console.error(error.code, error.message);
    
    if (error.code === 'auth/email-already-in-use') {
      console.log("EMAIL ALREADY IN USE");
    } else if (error.code === 'auth/invalid-email') {
      console.log("EMAIL INVALID");
    } else if (error.code === 'auth/weak-password') {
      console.log("WEAK PASSWORD");
    }

    throw error;
  }
}

export default createFirebaseUser;
