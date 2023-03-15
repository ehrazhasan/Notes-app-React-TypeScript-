import React, {useRef, useState} from "react";
import { Alert, Button, Form } from "react-bootstrap";
import {Note} from '../models/note.model'

interface ICreateNotesProps {
    notes: Note[],
    setNotes:React.Dispatch<React.SetStateAction<Note[]>>
}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = ({notes, setNotes}) => {

  const [error, setError] = useState<string>("");

  const inputTitleRef = useRef<HTMLInputElement | null>(null);
  const inputAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const inputColorRef = useRef<HTMLInputElement | null>(null);


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if(inputTitleRef.current!.value === "" || inputAreaRef.current!.value === "") {
        return setError("All the fields are mandatory!");
    }

    setError("");
    setNotes([...notes, {
        id: new Date().toISOString(),
        title: inputTitleRef.current!.value,
        text: inputAreaRef.current!.value,
        color:inputColorRef.current!.value,
        date: new Date().toISOString()
    }])

    inputTitleRef.current!.value = "";
    inputAreaRef.current!.value = "";
    inputColorRef.current!.value = "#dfdfdf"
  };


  return (
    <>
        <h1 className="mx-5 mt-3">Create Notes</h1>  
        {error && <Alert variant="danger"> {error} </Alert>}
        <Form className="m-5" onSubmit={(e) => handleSubmit(e)}>
            <Form.Group className="mb-3" >
                <Form.Label htmlFor="title">Enter Title</Form.Label>
                <Form.Control type="text" id="title" placeholder="Enter Title" ref={inputTitleRef}></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label htmlFor="text">Enter Text</Form.Label>
                <Form.Control as="textarea"  id="text" placeholder="Enter Text" rows={3} ref={inputAreaRef}></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="color">Pick Color</Form.Label>
                <Form.Control type="color" id="color" title="Choose your color" defaultValue="#dfdfdf" ref={inputColorRef}></Form.Control>
            </Form.Group> 
            <Button type="submit" className="mt-3" variant="primary" >Submit</Button>
        </Form>
    </>
  );
};

export default CreateNotes;
