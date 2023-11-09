import React from 'react'
import {Button,Card} from 'react-bootstrap';

function ProductDetails() {
  return (
    <div className='row d-flex justify-content-center mt-5'>
      <Card style={{ width: '18rem' }}>
            <img src={process.env.PUBLIC_URL + 'img/parippu.png'} style={{width:'100%', height:'200px'}}  /> 

      <Card.Body>
        <Card.Text>
        <div className='d-flex justify-content-between'>
           <div>
                <h6 className=''>Parippu vada <br/> ₹15
                  </h6>
           </div>
                <div className='d-flex justify-content-start'><i class="fa-solid fa-minus me-1 mt-2"></i>
                <input type="text" className='p-1 rounded' style={{width:'30px',border:'2px solid #718341',height:'30px'}} placeholder='1'/>
                <i class="fa-solid fa-plus ms-1  mt-2"></i>
                </div>
        </div>
        <p className='mt-2 text-start'>Eponymous star projector can show the twinking stars on the ceiling and bedroom.</p>
        </Card.Text>
      </Card.Body>
    </Card>
    <div className='d-flex p-4 justify-content-around mt-5' style={{width:'100%',height:'90px',backgroundColor:'#718341'}}> 
  <div className='footer d-flex justify-content-evenly'>
    <div className="website d-flex flex-column " style={{width:'300px'}}>
    <h5 className='text-light'> 
    Total ₹300</h5>
    
    </div>
    <div className="link  d-flex flex-column " style={{width:'300px'}}>
    <Button  style={{textDecoration:'none',color:'#718341',borderRadius:'20px',width:'190px'}} className='btn btn-light'>Place order</Button>
     </div>
      </div>
      
      </div>

    </div>
  )
}

export default ProductDetails
