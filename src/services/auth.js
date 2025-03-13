import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from './firebaseConfig'; // Asegúrate de configurar Firebase

const googleProvider = new GoogleAuthProvider();

export async function signInWithGoogle() {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error('Error signing in with Google', error);
    throw error;
  }
}

// Implementación de autenticación con Discord, Steam y Epic Games
export async function signInWithDiscord() {
  // Implementar la lógica de autenticación con Discord
}

export async function signInWithSteam() {
  // Implementar la lógica de autenticación con Steam
}

export async function signInWithEpicGames() {
  // Implementar la lógica de autenticación con Epic Games
}