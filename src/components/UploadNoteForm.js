// src/components/UploadNoteForm.js
import React from 'react';

const UploadNoteForm = () => {
  return (
    <div className="bg-white p-6 rounded shadow mb-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Upload a Note</h3>
      <form>
        <input type="text" placeholder="Title" className="w-full p-2 border border-gray-300 rounded mb-4" />
        <input type="text" placeholder="Description" className="w-full p-2 border border-gray-300 rounded mb-4" />
        <input type="file" className="w-full p-2 border border-gray-300 rounded mb-4" />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Upload</button>
      </form>
    </div>
  );
};

export default UploadNoteForm;
