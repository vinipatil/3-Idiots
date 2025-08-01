import React, { useState, useEffect } from 'react';

export default function DiaryPage() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem('friend-diary');
    return saved ? JSON.parse(saved) : [];
  });

  const [newNote, setNewNote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    localStorage.setItem('friend-diary', JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (newNote.trim() === '' || author.trim() === '') return;

    const newEntry = {
      id: Date.now(),
      title: `From ${author}`,
      message: newNote.trim(),
      date: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
    };

    setNotes([newEntry, ...notes]);
    setNewNote('');
    setAuthor('');
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat p-4 sm:p-6 md:p-8"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-photo/black-background-with-colorful-flowers-leaves-teachers-day-appreciation-flowers-leaves-colorful-backgrounds-black-color-home-decor-crafts_864588-24867.jpg')",
      }}
    >
      <h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-12 sm:mb-20"
        style={{ fontFamily: '"Dancing Script", cursive' }}
      >
        📓Our Secret Diary – For Each Other📓
      </h1>

      {/* Input Box */}
      <div className="w-full max-w-xl mx-auto mb-10 sm:mb-12 px-4">
        <input
          type="text"
          placeholder="Your name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full p-3 mb-4 rounded-xl border border-pink-300 focus:outline-none focus:ring-2 focus:ring-rose-500 bg-black text-white font-[Dancing_Script] text-base sm:text-lg shadow-md"
          style={{ fontFamily: '"Dancing Script", cursive' }}
        />

        <textarea
          rows="4"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Write your sweet memory here..."
          className="w-full p-4 rounded-xl border border-pink-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-white bg-black font-[Dancing_Script] text-base sm:text-lg shadow-md"
          style={{ fontFamily: '"Dancing Script", cursive' }}
        />

        <button
          onClick={addNote}
          className="mt-4 px-6 py-2 bg-rose-700 hover:bg-purple-600 text-white font-bold rounded-full w-full sm:w-auto"
        >
          Save Note 💌
        </button>
      </div>

      {/* Notes Section */}
      <div className="flex flex-wrap justify-center gap-8 sm:gap-12 px-4">
        {notes.map((note) => (
          <div
            key={note.id}
            className="relative w-full sm:w-[85%] md:w-[45%] lg:w-[30%] p-6 rounded-xl shadow-xl transform hover:rotate-0 transition duration-300 rotate-[-1deg] bg-white bg-cover bg-no-repeat"
            style={{
              backgroundImage:
                'url(https://i.pinimg.com/originals/8b/96/b6/8b96b6fd0e910c3758c8b4d67291d9b7.png)',
              backgroundSize: 'cover',
              wordWrap: 'break-word',
            }}
          >
            <button
              onClick={() => deleteNote(note.id)}
              className="absolute top-2 right-3 text-rose-300 hover:text-rose-500 text-lg"
              title="Delete note"
            >
              ❌
            </button>
            <span className="absolute top-1 left-1 text-2xl">🖋️</span>

            <h3
              className="text-xl sm:text-2xl text-center font-bold text-purple-900 mb-3 mt-4"
              style={{ fontFamily: '"Dancing Script", cursive' }}
            >
              ❤️{note.title}❤️
            </h3>

            <p
              className="text-base sm:text-lg text-gray-700 mb-4 break-words whitespace-pre-wrap"
              style={{ fontFamily: '"Dancing Script", cursive' }}
            >
              {note.message}
            </p>

            <p
              className="text-sm text-right italic text-rose-600"
              style={{ fontFamily: '"Dancing Script", cursive' }}
            >
              {note.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
