import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  
  const[noteList, setNoteList] = React.useState([{
    title : "Note title", 
    content : "Note content"
  }]); 

  function addNewNote(title,content){
    setNoteList(prevState => {
      return ([...prevState,
      {
        title:title,
        content:content
      }
      ])
    })
    console.log(noteList);
  }

  function deleteNote(id){
    setNoteList(prevList => {
      return prevList.filter((item, index) => {
        return index !== id;
      });
    });
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