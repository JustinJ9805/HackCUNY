import React, { useState, useRef } from 'react';

const ResumeAiTool = () => {
  const [text, setText] = useState('');
  const fileInput = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("File selected");
  };

  const handleFileUpload = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Sending file");

    if (fileInput.current?.files?.length) {
      const formData = new FormData();
      formData.append('file', fileInput.current.files[0]);
      const response = await fetch('http://localhost:3001/resumeUpload', {
        method: 'POST',
        body: formData,
      });
      const data = await response.text();
      //send to openai endpoint /constructResumeSections
      // const response2 = await fetch('http://localhost:3001/constructResumeSections', {
      //   method: 'POST',
      //   body: "turn this into a structured resume" + data,
      // });
      // const data2 = await response2.text();
      setText(data);
    }
  };

  return (
    <div>
      <form onSubmit={handleFileUpload}>
        <input type="file" ref={fileInput} onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      <div>{text}</div>
    </div>
  );
};

export default ResumeAiTool;