'use client'

import useCurrentUser from "@/hooks/useCurrentUser";
import UserContext from "./UserContext";
import LoadingContext from "./LoadingContext";
import { useState } from "react";
import Loading from "@/components/loading/loading";

export function UserContextProvider(
    { children }: { children: React.ReactNode }
) {
    const user = useCurrentUser();

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
}

export function LoadingContextProvider(
    { children }: { children: React.ReactNode }
) {
    const [loading, setLoading] = useState(false);

    function startLoading() {
        setLoading(true);
    }

    function stopLoading() {
        setLoading(false);
    }

    return (
        <LoadingContext.Provider value={{ startLoading, stopLoading }}>
            {loading && <Loading />}
            {children}
        </LoadingContext.Provider>
    );
}