import React from 'react';

const notes = [
  { id: 1, title: "Math Notes", description: "Algebra and Calculus essentials.", author: "John Doe" },
  { id: 2, title: "Physics Notes", description: "Quantum Mechanics introduction.", author: "Jane Doe" },
  // Add more notes here...
];

const Home = () => (
  <div className="py-10 bg-gray-50 min-h-screen">
    <h2 className="text-center text-4xl font-bold text-indigo-600 mb-10">Explore Notes</h2>
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {notes.map(note => (
        <div key={note.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold mb-2 text-gray-800">{note.title}</h3>
          <p className="text-gray-600 mb-4">{note.description}</p>
          <p className="text-gray-500 text-sm">By {note.author}</p>
          <button className="mt-4 inline-block bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600">
            View Note
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default Home;
