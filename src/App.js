import './App.css';
import React, {useState} from 'react';
import { Modal,Button,Form } from 'react-bootstrap';
function App() {
  const[data,setData] = useState({
username:'',
comment:'',
rating:'',


  });
  const {username,comment,rating} = data;
  const onChange=e=>{
    setData({...data,[e.target.name]:[e.target.value]})
  }
  const submitHandler=e=>{
    e.preventDefault();
    console.log(data);
  }
  return (
    <div>
   <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Submit Comment</Modal.Title>
  </Modal.Header>

  <Modal.Body>
  <Form onSubmit={submitHandler}>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
  <Form.Label >Rating</Form.Label>

  <Form.Select onChange={onChange} value={rating} name="rating"   aria-label="Default select example">

  <option >1</option>
  <option >2</option>
  <option >3</option>
  <option>4</option>
    <option>5</option>

</Form.Select>
</Form.Group>

  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Your Name</Form.Label>
    <Form.Control type="name" value={username}  name="username" onChange={onChange} placeholder="Your Name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Comment</Form.Label>
    <Form.Control as="textarea" name="comment" onChange={onChange} value={comment} rows={5} />
  </Form.Group>
  <Button variant="primary" type="submit" name="submit">Submit</Button>

</Form>
  </Modal.Body>
    </Modal.Dialog>
    </div>
  );
}
export default App;
