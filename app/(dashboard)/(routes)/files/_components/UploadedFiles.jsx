"use client"

import { collection, getDocs, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { app } from '@/firebaseConfig.js'


const UploadedFiles = () => {
    useEffect(()=>{
        getFiles()
    },[])
    const db = getFirestore(app);
    const [fileArray,setFileArray] = useState([]);
    const getFiles = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "files"));
            const files = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setFileArray(files);
            console.log("file array is ",fileArray);
        } catch (error) {
            console.error("Error fetching files:", error);
        }
    };
    return fileArray ? (
        <div className="container mx-auto px-4 mt-4">
            <h2 className="text-center font-bold text-[20px] text-gray-600 mb-3">Uplaoded Files</h2>
          <div className="grid gap-4">
            {fileArray.map((file) => (
              <div key={file.id} className="grid grid-cols-4 items-center gap-4 p-4 bg-white shadow-md rounded-md">
                <div className="col-span-1">
                <h2 className="truncate">{file.fileName}</h2>
                </div>
                <div className="hidden lg:flex col-span-1 lg:text-center">
                  <h3>{file.fileType}</h3>
                  
                </div>
                <div className="col-span-1 text-center">
                  
                  <h3 className="">{file.shortUrl}</h3>
                </div>
                <div className="hidden  lg:flex col-span-1 lg:justify-end">
                  <h3>{`${((file.fileSize) / 1024 / 1024).toFixed(2)}MB`}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="container mx-auto px-4 text-center text-gray-600 border border-blue-300 p-4 rounded-md">
          <strong className="text-2xl">Start uploading files on cloud and share it!</strong>
        </div>
      );
      };

export default UploadedFiles;
