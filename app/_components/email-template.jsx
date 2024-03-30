import React from 'react';

const button = {
  backgroundColor: ' #3b82f6',
  borderRadius: 8,
  color: '#FFF',
  fontWeight: 'bold',
  padding: '12px 20px',
  textDecoration: 'none', // Remove underline from anchor tag
};

export const EmailTemplate = ({ response }) => {
  const { userName, fileName, fileSize, fileType, shortUrl } = response;
  const filemb = ((fileSize)/1024/1024).toFixed(2);
  return (
    <div className="bg-white flex flex-col font-sans rounded-lg shadow-md px-4 py-6">
      <h2 className="text-xl font-bold">{`${userName} sent you a file`}</h2>
      <p className="mt-2 text-gray-700">
        <b>File name:</b> {fileName}
      </p>
      <p className="mt-2 text-gray-700">
        <b>File size:</b> {filemb }MB 
      </p>
      <p className="mt-2 text-gray-700">
        <b>File type:</b> {fileType}
      </p>
      <a
        href={shortUrl}
        style={button}
        className="block mt-4 w-full text-center self-center p-3"
      >
        Click here to see {'>>>'} 
      </a>
    </div>
  );
};
