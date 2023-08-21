import { collection, getDocs, limit, query, setDoc, where, doc, QueryConstraint } from "firebase/firestore";
import { Job, JobType } from "./types";
import { firestore } from "./firebase";

export async function getJobs(amount?: number, ...queryParams: QueryConstraint[]): Promise<Job[]> {
    const jobsRef = collection(firestore, "jobs");
    const jobsQuery = query(jobsRef, limit(amount || 10), ...queryParams);
    const jobs = await getDocs(jobsQuery);

    const jobsList: Job[] = [];
    jobs.forEach((job) => {
        jobsList.push(job.data() as Job);
    });

    return jobsList;
}

export async function postJobListing(job: Job): Promise<void> {
    const jobsRef = doc(collection(firestore, "jobs"), job.id);
    await setDoc(jobsRef, job);
}