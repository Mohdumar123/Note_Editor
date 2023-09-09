import React from 'react'

export default function Sidebar({createNote,notes,currentNote,setCurrentNoteId}) {
    const sidebarElement= notes.map((note,index)=>(
     <div key={note.id}>

          <div className={`title ${
           note.id === currentNote.id ? "selected-ele" :""
          }`} 
          
          onClick={()=>setCurrentNoteId(note.id)}
          >
          <h4>Note {index+1}</h4>
          </div>

       </div>
    )
    )
  return (
    <div>
        <div className="sidebar-head">
      <h2 className='sidebar-content'>Notes</h2>
      <button className="btn btn-warning btn-sm sidebar-content" onClick={createNote}><h5>+</h5></button>
    </div>
        {sidebarElement}

    </div>
  )
}
