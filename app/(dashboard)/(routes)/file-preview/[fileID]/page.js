"use client"

import { app } from '@/firebaseConfig.js'
import { getFirestore, updateDoc,doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from 'react'

import Link from "next/link";
import { ArrowLeftSquare } from "lucide-react";
import FileInfo from "./_components/FileInfo";
import FileShare from "./_components/FileShare";

const FilePreview = ({params}) => {
    useEffect(() =>{
        console.log("file id is ",params.fileID);
        params.fileID ? getFileInfo():null ;
    },[])
    const db = getFirestore(app);
    const [file,setFile]= useState();

    const getFileInfo = async()=>{
        const docRef = doc(db, "files", params.fileID );
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setFile(docSnap.data())
          } else {
            console.log("No such document!");
          }
          
    }

    const onPasswordSave = async(password)=>{
        try {
            console.log("password to be saved:", password);
            const docRef = doc(db, "files", params.fileID);
            await updateDoc(docRef, { password: password });
            console.log("password saved is ",password);        
        } catch (error) {
            console.error("Error saving password:", error);
        }
    }

  return (
    <div className="py-10 px-20">
        <Link href ='/upload' className="flex gap-3" ><ArrowLeftSquare/>Go to upload</Link>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-5">
            <FileInfo file={file}/>
            <FileShare file={file} onPasswordSave={(password)=>onPasswordSave(password)}/>
        </div>
    </div>
  )
}

export default FilePreview