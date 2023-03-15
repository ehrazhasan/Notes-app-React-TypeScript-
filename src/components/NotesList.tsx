import React from "react";
import { Container } from "react-bootstrap";
import {Note} from '../models/note.model'
import Notes from './Notes'

interface INotesListProps {
    notes: Note[]
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const NotesList: React.FC<INotesListProps> = ({notes, setNotes}) => {
    
    const handleDelete = (id: string) => {

         setNotes(notes.filter(note => note.id !== id));
    };

    return (
    <>
        <h1 className="mx-5 my-3">Notes</h1>

        <div className="p-5">
            
            {
                notes.map((note) => <Notes key={note.id} note={note} handleDelete={handleDelete}/>)
            }
             
        </div>
    </>
  );
};

export default NotesList;
