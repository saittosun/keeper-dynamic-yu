// jshint esversion:9
import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: '',
    content: ''
  });

  function handleChange(event) {
    const {name, value} = event.target;
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(e) {
    props.onAdd(note);
    setNote({
      title: '',
      content: ''
    });
    e.preventDefault();
  }

  function handleExpanded() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input 
          name="title"
          value={note.title} 
          onChange={handleChange}
          placeholder="Title" />
        )}
        <textarea 
          name="content" 
          value={note.content}
          onClick={handleExpanded}
          onChange={handleChange}
          placeholder="Take a note..." 
          rows={isExpanded ? 3 : 1} />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
