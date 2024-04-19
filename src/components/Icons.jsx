export default function Icons({ addNote, deleteNote, activeNoteId, toggleFavorite, notes, showIcons }) {

    const isFavorite = notes.find(note => note.id === activeNoteId)?.favorite;




    const handleFavoriteClick = () => {
        toggleFavorite(activeNoteId);
    }
    return (
        <>

            <i className="glyphicon glyphicon-plus"
                onClick={addNote}></i>

            {showIcons && (
                <>

                    <i
                        className={`glyphicon glyphicon-star ${isFavorite ? 'starred' : ''}`}
                        onClick={handleFavoriteClick}

                    ></i>
                    <i className="glyphicon glyphicon-remove"
                        onClick={() => deleteNote(activeNoteId)}></i>
                </>
            )}

        </>
    )
}