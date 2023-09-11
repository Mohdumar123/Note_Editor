import React from 'react'

export default function Main({currentNote,updateNote}) {

//    const [text,setText] = React.useState("")

   function handleChange(event){
      const txt = event.target.value      
       updateNote(txt)
   }
  
    // console.log(currentNote)
    return (
        <div className='main-area'>
            <h2>Notes</h2>
            <textarea className="textNote" name="text" cols="100" rows="10" onChange={handleChange} value={currentNote.body}></textarea>
                
        </div>
    )
}
