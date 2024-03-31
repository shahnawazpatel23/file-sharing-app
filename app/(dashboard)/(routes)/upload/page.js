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
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';
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
  
  const docId = generateRandomString().toString();
  const saveInfo = async(file,fileUrl) => {
    console.log("saveinfo mai ghus gye");
    
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
        shortUrl: 'https://file-sharing-app-lyart-gamma.vercel.app/f/'+docId
      }).then(()=>setFiledocId(docId))
      ;
      console.log("file saved successfully");
    } catch (error) {
      console.log("error while saveingo()",error);
    } 
  }
  
  const handleuploadcomplete =()=>{
    // setLoading(true);
    router.push(baseUrl+'file-preview/' + docId);
    
  }
  return (
    
    
      <div>
      {progress==100 ?(<div className="flex justify-center items-center m-150"><UploadComplete handleuploadcomplete={handleuploadcomplete}/></div> ) :(<UploadForm
        handleUpload={(file) => handleUpload(file)}
        progress={progress}
      />)}
    </div>
  );
};

export default Upload;
