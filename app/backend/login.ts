import { GoogleAuthProvider, UserCredential, getAdditionalUserInfo, signInWithPopup, User as FirebaseUser, createUserWithEmailAndPassword } from "firebase/auth"
import { auth, firestore } from "./firebase";
import { User } from "./types";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";

export async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    const user = await signInWithPopup(auth, provider);
    const loginData = getAdditionalUserInfo(user);

    if (loginData?.isNewUser) {
        return await setUserData(user);
    }

    return await getUserData(user.user);
}

export async function createAccount(email: string, password: string) {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    return await setUserData(user);
}

export async function signInWithEmail(email: string, password: string) {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    return await getUserData(user.user);
}

export async function setUserData(userCredentials: UserCredential): Promise<User> {
    const userDoc = doc(collection(firestore, "users"), userCredentials.user.uid);
    const userData: User = {
        name: userCredentials.user.displayName || "",
        email: userCredentials.user.email || "",
        profilePicture: userCredentials.user.photoURL || "",
        uid: userCredentials.user.uid
    };

    await setDoc(userDoc, userData);
    return userData;
}

const userCache: { [key: string]: User } = {};
export async function getUserData(user: FirebaseUser, refetch: boolean = false): Promise<User | null> {
    if (userCache[user.uid] && !refetch) {
        return userCache[user.uid];
    }

    const userDoc = doc(collection(firestore, "users"), user.uid);
    const userData = await getDoc(userDoc);

    if (userData.exists()) {
        userCache[user.uid] = userData.data() as User;
        return userData.data() as User;
    }

    return null;
}