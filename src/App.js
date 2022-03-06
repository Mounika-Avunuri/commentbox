import './App.css';
import React, {useState} from 'react';
import { Modal,Button,Form } from 'react-bootstrap';



function App() {
  const initialValues={username:"",comment:"",rating:""}; 
  const[formData,setFormData] = useState(initialValues);

  const handleChange=(e)=>{
    const {name,value} = e.target;
    setFormData({...formData,[name]:value});
  };
  const submitHandler=(e)=>{
    e.preventDefault();
    console.log(formData);
    if(formData.username.length<2){
      alert("username must be greater than 2 characters");
    
    }
    else if (formData.username.length > 15){
      alert("username cannot exceed more than 15 characters");
    }
    else{
      console.log(formData);
      alert(JSON.stringify(formData));
    }

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

  <Form.Select onChange={handleChange} value={formData.rating} name="rating"   aria-label="Default select example">

  <option >1</option>
  <option >2</option>
  <option >3</option>
  <option>4</option>
    <option>5</option>

</Form.Select>
</Form.Group>

  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Your Name</Form.Label>
    <Form.Control type="name" value={formData.username}  name="username" onChange={handleChange} placeholder="Your Name" />
    {console.log(formData)}
{((formData.username.length<2)||(formData.username.length > 15))?<p style={{"color":"red"}}>The username must be greater than 2 characters and less than 15 characters</p>:null}
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Comment</Form.Label>
    <Form.Control as="textarea" name="comment" onChange={handleChange} value={formData.comment} rows={5} />
  </Form.Group>
  <Button variant="primary" type="submit"  name="submit">Submit</Button>

  
</Form>
  </Modal.Body>
    </Modal.Dialog>
    </div>
  );
}
export default App;
