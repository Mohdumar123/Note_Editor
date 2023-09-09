import React from 'react'

export default function Main(props) {

   const [text,setText] = React.useState("")

   function handleChange(event){
      const txt = event.target.value
      setText(oldText=>{
        oldText+=txt
      })
      
      props.updateNote(txt)
   }
  
    console.log(props.currentNote)
    return (
        <div className='main-area'>
            <h2>thoafa</h2>
            <textarea name="text" cols="100" rows="10" onChange={handleChange} value={props.currentNote.body }></textarea>
                
        </div>
    )
}
