import './App.css';
import React, {useState,useEffect} from 'react';
import { Modal,Button,Form } from 'react-bootstrap';
function App() {
  const initialValues={username:"",comment:"",rating:""}; 
  const[formData,setFormData] = useState(initialValues);
  const[formErrors,setFormErrors] = useState({});
  const[isSubmit,setIsSubmit] = useState(false);
  const handleChange=(e)=>{
    console.log(e.target);
    const {name,value} = e.target;
    setFormData({...formData,[name]:value});
    console.log(formData);
  };
  const submitHandler=(e)=>{
    e.preventDefault();
    validate(formData);
    setFormErrors(validate(formData));
    setIsSubmit(true);
  }
  useEffect(()=>{
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit){
      console.log(formData);
    }
  },[formErrors])
  const validate=(values)=>{
const errors={}
if(!values.username){
errors.username = "username is required";
}
else if(values.username<2){
  errors.username.length = "username must be greater than 2 characters";

}
else if (values.username > 10){
  errors.username.length="username cannot exceed more than 10 characters";
}
return errors;
  };
  
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
    <p>{formErrors.username}</p>

  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Comment</Form.Label>
    <Form.Control as="textarea" name="comment" onChange={handleChange} value={formData.comment} rows={5} />
  </Form.Group>
  <Button variant="primary" type="submit" name="submit">Submit</Button>

</Form>
  </Modal.Body>
    </Modal.Dialog>
    </div>
  );
}
export default App;
