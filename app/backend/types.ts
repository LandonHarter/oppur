export interface User {

    name: string;
    email: string;
    profilePicture: string;
    uid: string;

}

export interface Job {

    id: string;
    name: string;
    description: string;
    type: JobType;
    location: string;
    salary: number;
    company: string;
    skills: string[];
    remote: boolean;
    logo: string;

}

export enum JobType {

    FullTime = 'Full Time',
    PartTime = 'Part Time',

}