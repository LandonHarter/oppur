import { User } from "@/backend/types";
import { createContext } from "react";

const UserContext = createContext<User | null>(null);
export default UserContext;