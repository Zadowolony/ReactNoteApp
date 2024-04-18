export default function Icons({ addNote, addFavorite, deleteNote, activeNote }) {
    return (
        <>
            <i className="glyphicon glyphicon-plus"
                onClick={addNote}></i>
            {/* <!-- voeg "starred" className toe voor actieve status --> */}
            <i
                className="glyphicon glyphicon-star"
                onClick={() => addFavorite(activeNote)}
            ></i>
            <i className="glyphicon glyphicon-remove"
                onClick={() => deleteNote(activeNote)}></i>
        </>
    )
}