"use client";

import { UserButton, useUser } from "@clerk/nextjs";
// import { useUser } from "@clerk/clerk-react";
import React, { useState } from "react";
import UploadForm from "./_components/UploadForm";
import { app } from '@/firebaseConfig.js'
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { doc, setDoc,getFirestore } from "firebase/firestore";
import UploadComplete from "./_components/UploadComplete";
import { generateRandomString } from "@/app/utils/random";
import { useRouter } from "next/navigation";


const Upload = () => {
  const router = useRouter()
  const [progress, setProgress] = useState();
  const storage = getStorage(app);
  const db  = getFirestore(app);
  const handleUpload = (file) => {
    const storageRef = ref(storage, "file-upload/" + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file, file.type);
    console.log("bhenkebhosde file ", file);
    
    
    uploadTask.on("state_changed", (snapshot) => {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      setProgress(progress);
      if (progress == 100) {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          saveInfo(file,downloadURL)
        }).catch((error) => {"downloadURL error",error});
      }
    });
  };
  
  const [filedocId, setFiledocId] = useState();
  // const [loading,setLoading]= useState(false);
  const {user} = useUser();
  const saveInfo = async(file,fileUrl) => {
    console.log("saveinfo mai ghus gye");
    const docId = generateRandomString().toString();
    
    try {
      await setDoc(doc(db, "files", docId), {
        fileName:file.name,
        fileSize:file.size,
        fileType:file.type,
        fileUrl:fileUrl,
        userEmail:user?.primaryEmailAddress.toString(),
        userName:user?.fullName.toString(),
        password:'',
        id:docId,
        shortUrl:process.env.NEXT_PUBLIC_BASE_URL+'f/'+docId
      })
      setFiledocId(docId);
      console.log("file saved successfully");
      router.push('/file-preview/' + docId);
    } catch (error) {
      console.log("error while saveingo()",error);
    } 
  }
  
  const handleuploadcomplete =()=>{
    // setLoading(true);
    
  }
  return (
    
    progress==100?(<UploadComplete handleuploadcomplete={handleuploadcomplete}/> 
    
    ):(<div className=" p-5 px-8 md:px-28">
      <h2 className="text-center text-[20px] m-5 mx-auto">
        Start
        <strong className="text-primary"> Uploading </strong>files and{" "}
        <strong className="text-primary"> Share </strong> it
      </h2>
      
      {progress==100 ?(<div className="flex justify-center items-center m-150"><UploadComplete/></div> ) :(<UploadForm
        handleUpload={(file) => handleUpload(file)}
        progress={progress}
      />)}
    </div>)
  );
};

export default Upload;
