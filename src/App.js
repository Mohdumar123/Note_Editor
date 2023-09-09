import './App.css';
import React from 'react'
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import {nanoid} from 'nanoid';

function App() {
  const [notes,setNote] = React.useState([]);
  const [currentNoteId,setCurrentNoteId] = React.useState(
    (notes[0] && notes[0].id) ||""
  );

 function createNote(){
     const newNote= {
      id : nanoid() ,
      body:"# Start taking note here"
     }
     setNote(prevNote=>{
      return [newNote,...prevNote]
     })

     setCurrentNoteId(newNote.id)
 }

 function findCurrentNote() {
  return notes.find(note => {
      return note.id === currentNoteId
  }) || notes[0]
}


 function updateNote(txt){
  
    setNote(oldVal=>{
     return  oldVal.map(old=>{
        return old.id === currentNoteId 
        ? {...old, body:txt}
        : old
      })
    })
    
 }


  return (
    <div className="App">
      
      <Sidebar 
      createNote={createNote}
      notes={notes}
      currentNote={findCurrentNote()}
      setCurrentNoteId={setCurrentNoteId}
      />
     {currentNoteId && notes.length>0 &&
      <Main
      currentNote={findCurrentNote()}
      updateNote={updateNote}
      />
     }
    </div>
  );
}

export default App;
