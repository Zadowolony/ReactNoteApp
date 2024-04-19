import { useState } from "react"

export default function NotesList({ notes, setActiveNoteId, activeNoteId, showFavorites, setFilterNote }) {


    const filteredNotes = showFavorites ? notes.filter(note => note.favorite) : notes;




    const handleNoteClick = (id) => {
        setActiveNoteId(id);
    }



    return (
        <div id="notes-list">
            <div id="list-header">
                <h2>{showFavorites ? 'Favorites' : 'Notes'}</h2>

                <div className="btn-group btn-group-justified">
                    <div className="btn-group">
                        {/* <!-- voeg "active" className for actieve knop --> */}
                        <button
                            type="button"
                            className={`btn btn-default ${!showFavorites ? 'active' : ''}`}
                            onClick={() => setFilterNote('all')}
                        >All notes</button>
                    </div>

                    <div className="btn-group">
                        <button
                            type="button"
                            className={`btn btn-default ${showFavorites ? 'active' : ''}`}
                            onClick={() => setFilterNote('favorites')}

                        >Favorites</button>
                    </div>
                </div>
            </div>

            <div className="container">

                <div className="list-group">


                    {filteredNotes.map(note => (
                        <button
                            key={note.id}
                            type="button"
                            className={`list-group-item ${activeNoteId === note.id ? 'active' : ''}`}
                            onClick={() => handleNoteClick(note.id)}>

                            {note.note === '' ? (
                                <h4><i>Nieuw Notitie</i></h4>
                            ) : (
                                <h4 className="list-group-item-heading">
                                    {note.note.length > 29 ? note.note.slice(0, 29) + '...' : note.note}
                                </h4>
                            )
                            }

                        </button>
                    ))
                    }




                </div>

            </div>

        </div >
    )
}