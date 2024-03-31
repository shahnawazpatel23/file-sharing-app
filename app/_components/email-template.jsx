import React from 'react';

const button = {
  backgroundColor: '#3b82f6', 
  borderRadius: 8,
  color: '#FFF',
  fontWeight: 'bold',
  padding: '12px 20px',
  textDecoration: 'none',
};

export const EmailTemplate = ({ response }) => {
  const { userName, fileName, fileSize, fileType, shortUrl } = response;
  console.log("response in email template",response)
  const fileMB = ((fileSize) / 1024 / 1024).toFixed(2); // Convert bytes to MB with 2 decimals

  return (
    <div className="bg-white shadow-md rounded-lg px-8 py-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">{`${userName} sent you a file`}</h2>
        <div className="flex items-center space-x-2">
          <p className="text-gray-500 text-sm">{fileMB} MB</p>
          <p className="text-gray-500 text-sm">{fileType}</p>
        </div>
      </div>
      <hr className="my-4 border-gray-200" />
      <p className="text-gray-700 mt-4 mb-6">
        <b>File name:</b> {fileName}
      </p>
      <a
        href={shortUrl}
        style={button}
        className="block w-full text-center self-center p-3"
      >
        Click here to see {'>>>'}
      </a>
    </div>
  );
};
