import React from "react";

function CreateArea(props) {

  const[title, setTitle] = React.useState("");
  const[content, setContent] = React.useState("");  

  function titleHandler(event){
    const titleVal = event.target.value; 
    setTitle(titleVal);
  }

  function contentHandler(event){
    const contentVal = event.target.value;
    setContent(contentVal);
  }

  function submitNote(event){
    props.addNote(title,content);
    setTitle("");
    setContent(""); 
    event.preventDefault(); 
  }

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" value={title} onChange={titleHandler}/>
        <textarea name="content" placeholder="Take a note..." rows="3" value={content} onChange={contentHandler}/>
        <button onClick={submitNote}>
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
