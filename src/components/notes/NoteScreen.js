import React from 'react';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        
        <input
          type="text"
          placeholder="Some awesaone title"
          className="notes__title-input"
          autoComplete="off"
        />

        <textarea
          placeholder="what happened today"
          className="notes_textarea"
          autoComplete="off"
        ></textarea>

      <div className="notes_image">
        <img
          src="https://i.pinimg.com/originals/0a/4d/cb/0a4dcb92fa2d3c601b58d72720d6bec4.jpg"
          alt="imagen"
        />

      </div>

      </div>
    </div>
  )
}
