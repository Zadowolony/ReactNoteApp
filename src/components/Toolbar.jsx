import Icons from "./Icons";

export default function Toolbar({ addNote, addFavorite, deleteNote, activeNoteId }) {

    return (
        <div id="toolbar">
            <Icons
                addNote={addNote}
                addFavorite={addFavorite}
                deleteNote={deleteNote}
                activeNote={activeNoteId} />
        </div>
    )
}