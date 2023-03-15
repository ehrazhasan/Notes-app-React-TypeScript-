import React, {useState} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import CreateNotes from './components/CreateNotes';
import Header from './components/Header';
import NotesList from './components/NotesList';
import {Note} from './models/note.model'

function App() {
  
  const [notes, setNotes] = useState<Note[]>([
      {
        id: (new Date()).toISOString(),
        title: "Meetings",
        color:"#dfdfdf",
        text: "There is meeting to attend tomorrow.",
        date:  (new Date()).toISOString()
      },
    ]
  );

  return (
    <> 
      <Header />

      <Container>
        <Row>
          <Col>
            <NotesList notes={notes} setNotes={setNotes}/> 
          </Col>
        </Row>
        <Row>
          <Col>
          <CreateNotes notes={notes} setNotes={setNotes}/> 
          </Col>
        </Row>
      </Container>

      
      
    </>
  );
}

export default App;
