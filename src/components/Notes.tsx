import React from 'react';
import { Button, Card } from 'react-bootstrap';
import {Note} from '../models/note.model'

interface INotesProps {
    note: Note
    handleDelete: (id: string) => void
}

const Notes: React.FC<INotesProps> = ({note, handleDelete}) => {

  return (
    <>
        <Card className='my-2'>
            <Card.Body style={{background:note.color}}>
                <Card.Title> {note.title} </Card.Title>
                <Card.Text> {note.text} </Card.Text>
                <Card.Subtitle className="text-muted"> {note.date} </Card.Subtitle>
                <Button className="mt-3" variant="danger" onClick={() => handleDelete(note.id)}>Delete</Button>
            </Card.Body>
        </Card>
    </>
  );
};

export default Notes;