import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { uploadDetails } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setUploadResponse}) {
  const [empDetails, setEmpDetails] = useState({
    id:"", empName:"", email:"", phno:"", designation:"", image:""
  })
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUpload = async ()=>{
    const {id,empName,email,phno,designation,image} = empDetails
    if(!id || !empName || !email || !phno || !designation || !image){
      toast.warning("Please fill the form completely")
    }else{
      // make api call
      const response = await uploadDetails(empDetails)
      if(response.status>=200 && response.status<300){
        toast.success("Employee details uploaded successfully")
        setEmpDetails({
          id:"", empName:"", email:"", phno:"", designation:"", image:""
        })
        handleClose()
        setUploadResponse(true)
      }else{
        toast.error("Error..! Please Try Again later")
      }
    }
  }
  return (
    <>
     <button onClick={handleShow} className='btn btn-primary m-5 p-3'>Add Employee</button>
     <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Employee Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control onChange={(e)=>setEmpDetails({...empDetails,id:e.target.value})} type="email" placeholder="enter employee id" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control onChange={(e)=>setEmpDetails({...empDetails,empName:e.target.value})} type="text" placeholder="enter employee name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control onChange={(e)=>setEmpDetails({...empDetails,email:e.target.value})} type="text" placeholder="enter employee email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control onChange={(e)=>setEmpDetails({...empDetails,phno:e.target.value})} type="text" placeholder="enter employee pnone number" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control onChange={(e)=>setEmpDetails({...empDetails,designation:e.target.value})} type="text" placeholder="enter employee designation" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control onChange={(e)=>setEmpDetails({...empDetails,image:e.target.value})} type="text" placeholder="enter employee image url" />
            </Form.Group>
       </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleUpload} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer 
      position='top-center'
      autoClose={2000}
      />
    </>
  )
}

export default Add