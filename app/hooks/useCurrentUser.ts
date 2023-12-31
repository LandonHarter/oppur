import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/backend/firebase";
import { User } from "@/backend/types";
import { getUserData } from "@/backend/login";

export default function useCurrentUser() {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (!user) {
                setUser(null);
                return;
            }

            const userData = await getUserData(user);
            setUser(userData);
        });
    }, []);

    return user;
}