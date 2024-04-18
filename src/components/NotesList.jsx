import { useState } from "react"

export default function NotesList({ notes, currentNote, favorites, showFavorites, setShowFavorites, setActiveNoteId, activeNoteId }) {



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
                            onClick={() => setShowFavorites(false)}>All notes</button>
                    </div>

                    <div className="btn-group">
                        <button
                            type="button"
                            className={`btn btn-default ${showFavorites ? 'active' : ''}`}
                            onClick={() => setShowFavorites(true)}
                        >Favorites</button>
                    </div>
                </div>
            </div>

            <div className="container">

                <div className="list-group">

                    {showFavorites ? (
                        favorites.map((favorite, index) => (
                            <button
                                key={favorite.id}
                                type="button"
                                className={`list-group-item ${activeNoteId === favorite.id ? 'active' : ''}`}
                                onClick={() => handleNoteClick(favorite.id)}>
                                <h4 className="list-group-item-heading">
                                    {favorite.favorite}
                                </h4>
                            </button>
                        ))
                    ) : (
                        notes.map((note, index) => (
                            <button
                                key={note.id}
                                type="button"
                                className={`list-group-item ${activeNoteId === note.id ? 'active' : ''}`}
                                onClick={() => handleNoteClick(note.id)}>
                                <h4 className="list-group-item-heading">
                                    {currentNote}
                                </h4>
                            </button>
                        ))
                    )}





                </div>

            </div>

        </div >
    )
}