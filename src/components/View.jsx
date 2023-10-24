import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import DetailCard from './DetailCard'
import { getAllDetails } from '../services/allAPI'

function View({uploadResponse, setUploadResponse}) {
  const [updateServerResponse, setUpdateServerResponse] = useState(false)
  const [removeResponse, setRemoveResponse] = useState(false)
  const [allDetails, setallDetails] = useState({})
  const getEmpDetails = async()=>{
    // make api call 
    const {data} = await getAllDetails()
    setallDetails(data)
  }

  useEffect(()=>{
    getEmpDetails()
    setUploadResponse(false)
    setRemoveResponse(false)
    setUpdateServerResponse(false)
  },[uploadResponse,removeResponse,updateServerResponse])
  return (
    <>
      <Row className='ms-5 mt-3'>
       {
         allDetails.length>0?
         allDetails?.map(item=>(
          <Col className='mb-4' sm={12} md={6} lg={4} xl={3}>
        <DetailCard setRemoveResponse={setRemoveResponse} setUpdateServerResponse={setUpdateServerResponse}  displayData = {item}/>
       </Col>
         ))
       :
       <p>Nothing to Display</p>
       }
      </Row>  
    </>
  )
}

export default View