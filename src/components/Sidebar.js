import React from 'react'

export default function Sidebar({createNote,notes,currentNote,setCurrentNoteId,deleteNote}) {
    const sidebarElement= notes.map((note)=>(
     <div key={note.id}>

          <div className={`title ${
           note.id === currentNote.id ? "selected-ele" :""
          }`} 
          
          onClick={()=>setCurrentNoteId(note.id)}
          >
          <h4 className='text-snippet'>{note.body.split('\n')[0]}</h4>

          <img src="trash.png" alt="" type="button" className="btn btn-outline-danger btn-sm trash-btn" 
          onClick={()=>{deleteNote(note.id)}}></img>
          </div>
       </div>
    )
    )
  return (
    <div className='sidebar'>
        <div className="sidebar-head">
      <h2 className='sidebar-content side-heading'>Notes</h2>
      <button className="btn btn-warning btn-sm sidebar-content" onClick={createNote}><h5>+</h5></button>
    </div>
        {sidebarElement}

    </div>
  )
}
