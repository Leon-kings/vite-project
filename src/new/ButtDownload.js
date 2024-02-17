import React from 'react';

function DownloadButton() {
  const handleDownload = async () => {
    // Fetch the file from the backend
    const response = await fetch('/download');
    const blob = await response.blob();
    // Create a URL for the blob
    const downloadUrl = window.URL.createObjectURL(blob);
    // Create a temporary <a> element and trigger the download
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.setAttribute('download', 'filename.txt'); // Set the file name
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  };

  return (
    <button onClick={handleDownload}>Download File</button>
  );
}

export default DownloadButton;
