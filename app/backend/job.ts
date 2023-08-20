import { collection, getDocs, limit, query, setDoc, where, doc } from "firebase/firestore";
import { Job, JobType } from "./types";
import { firestore } from "./firebase";

export async function getJobs(amount?: number, type?: JobType, salaryRange?: number[]): Promise<Job[]> {
    const jobsRef = collection(firestore, "jobs");
    const jobsQuery = query(jobsRef, limit(amount || 10), where("type", "==", type ? type.toString() : "Full Time"), where("salary", ">=", salaryRange ? salaryRange[0] : 0), where("salary", "<=", salaryRange ? salaryRange[1] : 1000000));
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