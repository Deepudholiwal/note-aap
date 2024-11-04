// src/components/NoteCard.js
import React from 'react';

const NoteCard = ({ note }) => {
  return (
    <div className="bg-white p-4 rounded shadow text-center">
      <h4 className="text-lg font-bold text-gray-800">{note.title}</h4>
      <p className="text-gray-600 mt-2">{note.description}</p>
      <a href={note.downloadLink} className="mt-4 inline-block bg-green-500 text-white py-2 px-4 rounded">Download</a>
    </div>
  );
};

export default NoteCard;
