import { collection, getDocs, limit, query, setDoc, where, doc, QueryConstraint } from "firebase/firestore";
import { Job, JobType } from "./types";
import { firestore } from "./firebase";

export async function getJobs(amount?: number, salaryRange?: number[], ...queryParams: QueryConstraint[]): Promise<Job[]> {
    const jobsRef = collection(firestore, "jobs");
    const jobsQuery = query(jobsRef, limit(amount || 10), where("salary", ">=", salaryRange ? salaryRange[0] : 0), where("salary", "<=", salaryRange ? salaryRange[1] : 1000000), ...queryParams);
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

export async function recommendJobs(likedJobs: Job[]) {
    const mostLikedTags: string[] = [];
    const tagCount: { [key: string]: number } = {};
    likedJobs.forEach((job) => {
        const tags = job.skills;
        tags.forEach((tag) => {
            if (tagCount[tag]) {
                tagCount[tag]++;
            } else {
                tagCount[tag] = 1;
            }
        });
    });
    mostLikedTags.sort((a, b) => {
        return tagCount[b] - tagCount[a];
    });

    let minSalary = 0;
    likedJobs.forEach((job) => {
        minSalary = Math.max(minSalary, job.salary);
    });

    const remoteCount = likedJobs.filter((job) => {
        return job.remote;
    }).length;
    const inpersonCount = likedJobs.length - remoteCount;
    const remote = remoteCount > inpersonCount;

    const partTimeCount = likedJobs.filter((job) => {
        return job.type === JobType.PartTime;
    }).length;
    const fullTimeCount = likedJobs.length - partTimeCount;
    const type = partTimeCount > fullTimeCount ? JobType.PartTime : JobType.FullTime;

    const jobs = await getJobs(10, type, [minSalary, 1000000], where("remote", "==", remote));
    return jobs;
}