

import { useState } from 'react';
import './App.css';
import Toolbar from './components/Toolbar';
import NotesList from './components/NotesList';
import NoteEditor from './components/NoteEditor';


function App() {

  const [notes, setNotes] = useState([]);

  const [activeNoteId, setActiveNoteId] = useState(null);

  // filternote zou nu met simpel true of false kunnen omdat wij maar twee knoppen hebben. maar eens je derde knop hebt moet je met namen doen.
  const [filterNote, setFilterNote] = useState('all');






  const handleAddNotes = () => {
    setNotes([
      { id: crypto.randomUUID(), note: '', favorite: false }, ...notes
    ])
  }

  const toggleFavorite = (id) => {

    setNotes(notes.map(note => {
      if (note.id === id) {
        return { ...note, favorite: !note.favorite };
      }
      return note;
    }))
  }


  const handleEditNote = (id, newNote) => {

    setNotes(notes.map(note => {
      if (note.id === id) {
        return { ...note, note: newNote }
      }

      return note;
    }))
  }


  const deleteNote = (id) => {

    setNotes(notes.filter((note) => note.id != id));

  }





  return (

    <div id="app">


      <Toolbar
        addNote={handleAddNotes}
        deleteNote={deleteNote}
        activeNoteId={activeNoteId}
        setActiveNoteId={setActiveNoteId}
        toggleFavorite={toggleFavorite}

        notes={notes}
        showIcons={notes.length > 0}




      />

      <NotesList
        notes={notes}
        setActiveNoteId={setActiveNoteId}
        activeNoteId={activeNoteId}

        filterNote={filterNote}
        setFilterNote={setFilterNote}
        showFavorites={filterNote === 'favorites'}



      />

      <NoteEditor
        notes={notes}


        activeNoteId={activeNoteId}
        handleEditNote={handleEditNote} />
    </div >

  );
}

export default App;
