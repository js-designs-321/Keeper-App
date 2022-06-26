import React from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {

  const[title, setTitle] = React.useState("");
  const[content, setContent] = React.useState("");  
  const[expand, setExapand] = React.useState(false); 

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

  function expandHandler(){
    setExapand(true);
  }

  return (
    <div>
      <form className="create-note">
        {
          expand && <input
            name="title"
            placeholder="Title"
            value={title}
            onChange={titleHandler}
          /> 
        }
        <textarea
          name="content"
          placeholder="Take a note..."
          rows = {expand ? "3" : "1"}
          value={content}
          onChange={contentHandler}
          onClick={expandHandler}
        />
        <Zoom in={expand}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
