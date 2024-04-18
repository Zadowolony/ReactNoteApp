

import { useState } from 'react';
import './App.css';
import Toolbar from './components/Toolbar';
import NotesList from './components/NotesList';
import NoteEditor from './components/NoteEditor';


function App() {

  const [notes, setNotes] = useState([]);

  const [currentNote, setCurrentNote] = useState('')

  const [favorites, setFavorites] = useState([]);

  const [showFavorites, setShowFavorites] = useState(false);

  const [activeNoteId, setActiveNoteId] = useState(null);



  const handleAddNotes = (note) => {
    setNotes([
      { id: crypto.randomUUID(), note }, ...notes
    ])
  }

  const handleEditNote = (id, newNote) => {

    setNotes(notes.map(note => {
      if (note.id === id) {
        return { ...note, note: newNote }
      }

      return note;
    }))
  }

  const handleAddFavorites = (noteId) => {

    const noteToAdd = notes.find(note => note.id === noteId);
    if (noteToAdd && !favorites.some(fav => fav.id === noteId)) {
      setFavorites([...favorites, { ...noteToAdd }]);
    }

  }

  const deleteNote = (id) => {

    setNotes(notes.filter((note) => note.id != id));



  }







  return (

    <div id="app">


      <Toolbar
        addNote={handleAddNotes}
        addFavorite={handleAddFavorites}
        deleteNote={deleteNote}
        activeNoteId={activeNoteId}
      />

      <NotesList
        notes={notes}
        currentNote={currentNote}
        onEditNote={handleEditNote}
        favorites={favorites}
        showFavorites={showFavorites}
        setShowFavorites={setShowFavorites}
        setActiveNoteId={setActiveNoteId}
        activeNoteId={activeNoteId}



      />

      <NoteEditor
        notes={notes}
        currentNote={currentNote}
        editCurrentNote={setCurrentNote}
        activeNoteId={activeNoteId}
        handleEditNote={handleEditNote} />
    </div >

  );
}

export default App;
