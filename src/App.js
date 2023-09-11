import './App.css';
import React from 'react'
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import {nanoid} from 'nanoid';

function App() {
  const [notes,setNote] = React.useState(()=>JSON.parse(localStorage.getItem("notes")) || []);
  const [currentNoteId,setCurrentNoteId] = React.useState(
    (notes[0] && notes[0].id) ||""
  );

  React.useEffect(()=>{
   localStorage.setItem("notes",JSON.stringify(notes))
  },[notes])

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
      const newArr=[]
      for(let i=0;i<oldVal.length;i++){
         if(oldVal[i].id === currentNoteId ){
          newArr.unshift({...oldVal[i], body:txt})
         }
         else{
          newArr.push(oldVal[i])
         }
      }
      return newArr
   })

    // setNote(oldVal=>{
    //  return  oldVal.map(old=>{
    //     return old.id === currentNoteId 
    //     ? {...old, body:txt}
    //     : old
    //   })
    // })
    
 }


 function deleteNote(noteId){
  
  setNote(oldVal=>{
    let newArr=[]
    for(let i=0;i<oldVal.length;i++){
      if(oldVal[i].id === noteId){
        continue
      }
      else{
        newArr.push(oldVal[i])
      }
    }
    return newArr
  })
 }

 let FCN = findCurrentNote()

  return (
    <div className="App">
      
      <Sidebar 
      createNote={createNote}
      notes={notes}
      currentNote={FCN}
      setCurrentNoteId={setCurrentNoteId}
      deleteNote={deleteNote}
      />
     {notes.length>0 &&
      <Main
      currentNote={FCN}
      updateNote={updateNote}
      />
     }
    </div>
  );
}

export default App;
