"use client";

import { app } from "@/firebaseConfig";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import FileItem from "./_components/FileItem";
import Link from "next/link";
import Image from "next/image";
import logo from '../../../public/logo.svg'

const ReceivedPreview = ({ params }) => {
  const [file, setFile] = useState();
  useEffect(() => {
    console.log(params.fileID);
    params.fileID && getFileInfo();
  }, []);
  const db = getFirestore(app);

  const getFileInfo = async () => {
    const docRef = doc(db, "files", params.fileID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setFile(docSnap.data());
      console.log("Document data:", docSnap.data());
    } else {
      console.log("No such document!");
    }
  };
  return (
    <div className="bg-gray-100 h-screen w-full flex justify-center items-center flex-col gap-4">
      <Link href='/' ><Image src={logo} width={150} height={100}/></Link>
      <FileItem  file={file} />
    </div>
  );
};

export default ReceivedPreview;
