// jshint esversion:9
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
     return [
        ...prevNotes,
        newNote
      ];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      // we have to return it in order to set it as the new notes array.
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      {notes.map((noteItem, index) => {
        return (
          <Note 
            key={index} 
            id={index}
            title={noteItem.title} 
            content={noteItem.content}
            onDelete={deleteNote} />  
        )
      })}
      <Footer />
    </div>
  );
}

export default App;

