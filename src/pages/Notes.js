import React from 'react';

const notesData = [
  { id: 1, title: "Math Notes", description: "Essential Algebra and Calculus.", author: "John Doe", downloadLink: "#" },
  { id: 2, title: "Physics Notes", description: "Intro to Quantum Mechanics.", author: "Jane Smith", downloadLink: "#" },
  { id: 3, title: "Chemistry Notes", description: "Organic Chemistry basics.", author: "Alice Johnson", downloadLink: "#" },
  { id: 4, title: "History Notes", description: "Ancient Civilizations.", author: "Bob Brown", downloadLink: "#" },
  // Add more notes here...
];

const Notes = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">Available Notes</h1>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {notesData.map(note => (
          <div key={note.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1 p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{note.title}</h2>
            <p className="text-gray-600 mb-4">{note.description}</p>
            <p className="text-gray-500 text-sm mb-4">By {note.author}</p>
            <a
              href={note.downloadLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition"
            >
              Preview / Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
