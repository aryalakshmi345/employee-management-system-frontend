import React, { useState } from 'react'
import { Button, Card, Dropdown, Form, Modal, Offcanvas } from 'react-bootstrap'
import { deleteADetail, updateEmpDetail } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function DetailCard({displayData,setRemoveResponse,setUpdateServerResponse}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [modalshow, setModalShow] = useState(false);

  const handleMOdalClose = () => setModalShow(false);
  const handleModalShow = () => setModalShow(true);
  
  const [updateDetail, setUpdateDetail] = useState({
    id:displayData?.id, empName:displayData?.empName, email:displayData?.email, phno:displayData?.phno, designation:displayData?.designation, image:displayData?.image
  })

  const handleDelete = async (id)=>{
    // make api call
    await deleteADetail(id)
    setRemoveResponse(true)

  }

  const handleUploadDetails = async()=>{
    const {id,empName,email,phno,designation,image} = updateDetail
    console.log(updateDetail);
    if(!id || !empName || !email || !phno || !designation || !image){
      toast.warning("Please fill the form completely")
    }else{
      // make api call 
      const response = await updateEmpDetail(updateDetail,id)
      if(response.status>=200 && response.status<300){
        setUpdateDetail({
          id:displayData?.id, empName:displayData?.empName, email:displayData?.email, phno:displayData?.phno, designation:displayData?.designation, image:displayData?.image
        })
        handleMOdalClose()
        setUpdateServerResponse(true)
      }else{
        toast.error("Error..! Please Try Again later")
      }
    }
  }
  return (
    <div style={{fontFamily:'Poppins sans-serif'}}>
     <Card  className='p-3 shadow d-flex justify-content-center align-items-center' style={{ width: '18rem' }}>
      <Card.Img onClick={handleShow} style={{borderRadius:'50%', width:'180px', height:'190px'}} variant="top" src={displayData?.image}/>
      
        <Card.Body>
          <Card.Text className='text-center fs-6 fw-bolder mt-3'>{displayData?.empName}</Card.Text>
          <Card.Text className='text-center'>
           {displayData?.designation}
          </Card.Text>
        </Card.Body>
        <hr className='w-100' />
        <div className='d-flex align-items-center justify-content-between'>
              <Button onClick={handleModalShow} className='btn btn-light'><i class="fa-regular fa-pen-to-square fs-6 text-dark"></i></Button>
              <Button onClick={()=>handleDelete(displayData?.id)} className='btn btn-light'><i class="fa-regular fa-trash-can fs-6 text-dark"></i></Button>
        </div>
     
    </Card> 

    <Modal
        show={modalshow}
        onHide={handleMOdalClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control defaultValue={displayData?.id} onChange={(e)=>setUpdateDetail({...updateDetail,id:e.target.value})} type="text" placeholder="enter employee id" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control defaultValue={displayData?.empName} onChange={(e)=>setUpdateDetail({...updateDetail,empName:e.target.value})} type="text" placeholder="enter employee name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control defaultValue={displayData?.email} onChange={(e)=>setUpdateDetail({...updateDetail,email:e.target.value})} type="text" placeholder="enter employee email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control defaultValue={displayData?.phno} onChange={(e)=>setUpdateDetail({...updateDetail,phno:e.target.value})} type="text" placeholder="enter employee pnone number" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control defaultValue={displayData?.designation} onChange={(e)=>setUpdateDetail({...updateDetail,designation:e.target.value})} type="text" placeholder="enter employee designation" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control defaultValue={displayData?.image} onChange={(e)=>setUpdateDetail({...updateDetail,image:e.target.value})}type="text" placeholder="enter employee image" />
            </Form.Group>
       </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleMOdalClose}>
            Close
          </Button>
          <Button onClick={handleUploadDetails} variant="primary">Save Changes</Button>
        </Modal.Footer>
      </Modal>

    <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Full Details</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='d-flex justify-content-center align-items-center flex-column'>
         <img style={{borderRadius:'50%', width:'180px', height:'190px'}} src={displayData?.image} alt="" />
         <p className='fw-bolder mt-5'>{displayData?.empName}</p>
         <p>Employee ID: {displayData?.id}</p>
         <p>{displayData?.designation}</p>
         <p>{displayData?.email}</p>
         <p>{displayData?.phno}</p>
        </Offcanvas.Body>
      </Offcanvas>  
      <ToastContainer 
      position='top-center'
      autoClose={2000}
      />
    </div>
  )
}

export default DetailCard