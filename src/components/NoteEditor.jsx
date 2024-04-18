export default function NoteEditor({ notes, activeNoteId, handleEditNote }) {

    const activeNote = notes.find(note => note.id === activeNoteId) || {};

    return (
        <div id="note-editor">
            <textarea

                placeholder="Nieuwe notitie"
                class="form-control"
                value={activeNote.note || ''}
                onChange={e => handleEditNote(activeNoteId, e.target.value)}
            ></textarea>
        </div>
    )
}