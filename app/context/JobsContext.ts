import { Job } from "@/backend/types";
import { createContext } from "react";
const JobsContext = createContext<{ likedJobs: Job[], setLikedJobs: Function }>({
    likedJobs: [],
    setLikedJobs: () => { }
});
export default JobsContext;