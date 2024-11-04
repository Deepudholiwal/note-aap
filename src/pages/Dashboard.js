import React, { useState } from 'react';

const Dashboard = () => {
  const [notes, setNotes] = useState([]);
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleUpload = (e) => {
    e.preventDefault();

    if (file && title) {
      const newNote = {
        id: Date.now(),
        title,
        file,
        downloadUrl: URL.createObjectURL(file), // Temporary URL for preview purposes
      };

      setNotes([...notes, newNote]);
      setFile(null);
      setTitle("");
    } else {
      alert("Please provide a title and upload a file.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">My Notes</h1>
      
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Upload a New Note</h2>
        <form onSubmit={handleUpload} className="bg-white p-6 rounded-lg shadow-md space-y-4 mb-8">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={handleTitleChange}
            className="w-full p-3 border border-gray-200 rounded-md outline-none focus:ring-2 focus:ring-purple-300"
          />
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full p-3 border border-gray-200 rounded-md outline-none focus:ring-2 focus:ring-purple-300"
            accept=".pdf"
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
          >
            Upload Note
          </button>
        </form>

        <h2 className="text-2xl font-semibold mb-4">My Uploaded Notes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {notes.map(note => (
            <div key={note.id} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{note.title}</h3>
              <p className="text-gray-500 mb-4">Uploaded PDF</p>
              <a
                href={note.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition"
              >
                Preview / Download
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
