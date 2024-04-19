import Icons from "./Icons";

export default function Toolbar({ addNote, deleteNote, activeNoteId, setActiveNoteId, notes, toggleFavorite, showIcons }) {

    return (
        <div id="toolbar">
            <Icons
                addNote={addNote}
                deleteNote={deleteNote}
                activeNoteId={activeNoteId}
                setActiveNoteId={setActiveNoteId}
                notes={notes}
                toggleFavorite={toggleFavorite}
                showIcons={showIcons}
            />
        </div>
    )
}