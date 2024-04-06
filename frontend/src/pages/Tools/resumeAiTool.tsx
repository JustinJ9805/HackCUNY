import React, { useState, useRef } from 'react';

const ResumeAiTool = () => {
  const [pdfUrl, setPdfUrl] = useState('');
  const [processedText, setProcessedText] = useState('');
  const fileInput = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("File selected");
    // Removed the immediate setting of PDF URL here to ensure it's done post-upload
  };

  const handleFileUpload = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Sending file");

    if (fileInput.current?.files?.length) {
      const file = fileInput.current.files[0];
      if (file.type !== "application/pdf") {
        alert("Please select a PDF file.");
        return; // Stop the function if the file isn't a PDF
      }

      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await fetch('http://localhost:3001/resumeUpload', {
          method: 'POST',
          body: formData,
        });
        if (response.ok) {
          // Only set the PDF URL after confirming the file has been successfully uploaded
          setPdfUrl(URL.createObjectURL(file));
          const data = await response.json();
          setProcessedText(data.data);
        } else {
          // Handle server errors or unsuccessful uploads here
          alert("Failed to upload the resume. Please try again.");
        }
      } catch (error) {
        console.error("Upload error:", error);
        alert("An error occurred during the upload. Please check your connection and try again.");
      }
    }
  };

  return (
    <div>
      <div className='px-4 py-2'>
        <form onSubmit={handleFileUpload}>
          <input type="file" accept="application/pdf" ref={fileInput} onChange={handleFileChange} />
          <button type='submit' className='bg-blue-500 hover:bg-blue-400 text-white p-2 px-4 rounded-3xl my-2 ml text-sm'>UPLOAD</button>
        </form>
      </div>
      <div className='flex h-screen'> {/* This ensures the container takes the full height of the screen */}
        {/* Menu on the left side, taking up 50% width */}
        <div className='w-1/2 p-4 shadow-lg'>
          <h3 className='text-lg font-semibold mb-4'>menu should go here - endpoint to create stuff for it should also be here</h3>
          <button className='bg-blue-500 hover:bg-blue-400 text-white p-2 px-4 rounded-3xl my-2 ml text-sm'>Edit Resume</button>
          <button className='bg-blue-500 hover:bg-blue-400 text-white p-2 px-4 rounded-3xl my-2 ml text-sm'>Save Changes</button>
          <button className='bg-blue-500 hover:bg-blue-400 text-white p-2 px-4 rounded-3xl my-2 ml text-sm'>Delete Resume</button>
          {/* Additional menu items can be added here */}
        </div>
        {/* PDF display on the right side, also taking up 50% width */}
        <div className='w-1/2'>
          {pdfUrl && (
            <iframe title='resumePDF' src={pdfUrl} style={{ width: '100%', height: '100vh', overflow: 'hidden' }}></iframe>
          )}
        </div>
      </div>
      {processedText && (
        <div className='p-4'>
          <h3 className='text-lg font-semibold mb-4'>Processed Text</h3>
          <p>{processedText}</p>
        </div>
      )}
    </div>
  );
};

export default ResumeAiTool;
