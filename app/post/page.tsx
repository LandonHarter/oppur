'use client'

import RequireDesktop from "@/components/desktop";
import styles from "./styles.module.css";
import { useContext, useState } from "react";
import UserContext from "@/context/UserContext";
import { collection, doc, setDoc } from "firebase/firestore";
import { firestore, storage } from "@/backend/firebase";
import LoadingContext from "@/context/LoadingContext";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export default function PostPage() {
    const user = useContext(UserContext);
    const { startLoading, stopLoading } = useContext(LoadingContext);

    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [description, setDescription] = useState('');
    const [salary, setSalary] = useState('');
    const [skills, setSkills] = useState('');
    const [location, setLocation] = useState('');
    const [email, setEmail] = useState('');
    const [type, setType] = useState('Full Time');
    const [image, setImage] = useState<{
        blob: Blob | null,
        url: string
    }>({
        blob: null,
        url: 'No Image Uploaded'
    });

    async function uploadFile(file: File) {
        startLoading();

        const storageRef = ref(storage, `images/${file.name}`);
        await uploadBytes(storageRef, file);

        const url = await getDownloadURL(storageRef);
        setImage({
            blob: file,
            url
        });

        stopLoading();
    }

    async function postJob() {
        if (name === '' || company === '' || description === '' || salary === '' || skills === '' || location === '' || email === '' || image.url === 'No Image Uploaded') {
            alert('Please fill out all fields.');
            return;
        }

        startLoading();

        const newJobRef = doc(collection(firestore, "jobs"));
        await setDoc(newJobRef, {
            name,
            company,
            description,
            salary,
            skills: skills.split(','),
            location,
            remote: false,
            email: email,
            type,
            logo: image.url
        });

        setName('');
        setCompany('');
        setDescription('');
        setSalary('');
        setSkills('');
        setLocation('');
        setEmail('');
        setType('');
        setImage({
            blob: null,
            url: 'No Image Uploaded'
        });

        stopLoading();
    }

    /*
    if (!user) {
        return (
            <div className={styles.container}>
                <h1 style={{
                    fontFamily: 'Inter Bold',
                    fontSize: '56px',
                    color: 'var(--text600)',
                    textAlign: 'center'
                }}>Must be signed in to continue.</h1>
            </div>
        )
    }*/
    return (
        <>
            <div className={styles.desktop}><RequireDesktop /></div>
            <div className={styles.mobile}>
                <h1 style={{
                    marginTop: 30,
                    marginBottom: 20,
                    fontFamily: 'Inter Bold',
                    fontSize: '56px',
                    color: 'var(--text600)',
                }}>Post Job</h1>
                <div className={styles.form}>
                    <div className={styles.input_group}>
                        <label className={styles.input_label}>Job Position</label>
                        <input className={styles.input_field} placeholder="Ex. Full Stack Dev" value={name} onChange={(e) => {
                            setName(e.target.value);
                        }} />
                    </div>
                    <div className={styles.input_group}>
                        <label className={styles.input_label}>Company</label>
                        <input className={styles.input_field} placeholder="Ex. Microsoft" value={company} onChange={(e) => {
                            setCompany(e.target.value);
                        }} />
                    </div>
                    <div className={styles.input_group}>
                        <label className={styles.input_label}>Description</label>
                        <textarea className={styles.input_field} maxLength={150} placeholder="Short description under 150 characters" style={{
                            resize: 'none',
                            minHeight: 100
                        }} value={description} onChange={(e) => {
                            setDescription(e.target.value);
                        }} />
                    </div>
                    <div className={styles.input_group}>
                        <label className={styles.input_label}>Salary</label>
                        <input className={styles.input_field} placeholder="Ex. 100,000-110,000" value={salary} onChange={(e) => {
                            setSalary(e.target.value);
                        }} />
                    </div>
                    <div className={styles.input_group}>
                        <label className={styles.input_label}>Skills</label>
                        <input className={styles.input_field} placeholder="Ex. Typescript,React,CSS" value={skills} onChange={(e) => {
                            setSkills(e.target.value);
                        }} />
                    </div>
                    <div className={styles.input_group}>
                        <label className={styles.input_label}>Location</label>
                        <input className={styles.input_field} placeholder="Ex. Salt Lake City, UT" value={location} onChange={(e) => {
                            setLocation(e.target.value);
                        }} />
                    </div>
                    <div className={styles.input_group}>
                        <label className={styles.input_label}>Job Type</label>
                        <select className={styles.type} onChange={(e) => {
                            setType(e.target.value);
                        }}>
                            <option>Full Time</option>
                            <option>Part Time</option>
                        </select>
                    </div>
                    <div className={styles.input_group}>
                        <label className={styles.input_label}>Contact Email</label>
                        <input className={styles.input_field} placeholder="Ex. apply@company.com" value={email} onChange={(e) => {
                            setEmail(e.target.value);
                        }} />
                    </div>
                    <div className={styles.input_group}>
                        <label className={styles.input_label}>Logo/Image</label>
                        <div className={styles.image_upload}>
                            <div className={styles.image_upload_content}>
                                <p style={{
                                    fontFamily: 'Inter Bold',
                                    fontSize: '14px',
                                    color: 'var(--text600)',
                                    whiteSpace: 'nowrap',
                                }}>{image.url}</p>
                            </div>
                            <label style={{
                                fontFamily: 'Inter Bold',
                                fontSize: '14px',
                                marginLeft: 10
                            }} className={styles.image_upload_button} htmlFor="image-upload" onClick={() => {

                            }}>Upload</label>
                            <input type="file" id="image-upload" style={{ display: 'none' }} onChange={(e) => {
                                if (!e.target.files || !e.target.files[0]) return;
                                const file = e.target.files[0];
                                uploadFile(file);
                            }} />
                        </div>
                    </div>
                    <button className={styles.post} onClick={() => postJob()}>Post</button>
                </div>
            </div>
        </>
    );
}