import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import NoteService from '../Services/NoteService';


function App() {
  
  const[noteList, setNoteList] = React.useState([]); 
  
  useEffect(()=>{
    NoteService.getNote().then(res => {
      setNoteList(res.data); 
      console.log(res.data);
    });
  },[]);

  function addNewNote(title,content){
    let note = {
      title: title,
      content:content
    }
    console.log(note);
    NoteService.createNote(note).then(res=>{
      setNoteList(prevState => {
        return ([...prevState,
        {
          title:title,
          content:content
        }
        ])
      })
    });
  }

  function deleteNote(id){
    console.log("Delete Request");
    NoteService.deleteNote(id).then(res => {
      setNoteList(prevList => {
        return prevList.filter((item, index) => {
          return index !== id;
        });
      });
    })
  }

  return (
    <div>
      <Header />
      <CreateArea 
        addNote={addNewNote}
      />
      {noteList.map((note,index) => (
        <Note key={index} id={index} title={note.title} content={note.content} deleteNote={deleteNote}/>
      ))}
      <Footer />
    </div>
  );
}

export default App;