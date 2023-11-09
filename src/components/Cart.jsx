import React from 'react'
import {Button, Table} from 'react-bootstrap';

function Cart() {
    let today = new Date()
    let timeStamp = Intl.DateTimeFormat('en-US',{year:'numeric',month:'2-digit',day:'2-digit'}).format(today)

  return (
    <div>
    <div>
      {
          <>
              <h3>{timeStamp}</h3>
<div className='row'>
<div className="col-lg-4"></div> 
<div className="col-lg-4">      
<h2 className='mt-5'>Canteen </h2>
<Table className='mt-5'>
  <thead></thead>
  <tbody>
      <tr className=''>
          <td>
          <img src={process.env.PUBLIC_URL + 'img/parippu.png'} width={'80px'}  /> 
          </td>
          <td className=''>Parippu vada 
        </td>
          <td className='d-flex justify-content-start'><i class="fa-solid fa-minus me-1 mt-1"></i>
          <input type="text" className='px-1 rounded' style={{width:'30px',border:'2px solid #718341'}} placeholder='1'/>
          <i class="fa-solid fa-plus ms-1 mt-1"></i>
          </td>
      </tr>
      <tr className=''>
          <td>
          <img src={process.env.PUBLIC_URL + 'img/parpp6.png'} width={'80px'}  /> 
          </td>
          <td className=''>Parippu vada 
        </td>
          <td className='d-flex justify-content-start'><i class="fa-solid fa-minus me-1 mt-1"></i>
          <input type="text" className='px-1 rounded' style={{width:'30px',border:'2px solid #718341'}} placeholder='2'/>
          <i class="fa-solid fa-plus ms-1 mt-1"></i>
          </td>
      </tr>


  </tbody>

</Table>

</div>  
<div className="col-lg-4"></div> 
</div>  
<div className='d-flex p-4 justify-content-around mt-5' style={{width:'100%',height:'90px',backgroundColor:'#718341'}}> 
  <div className='footer d-flex justify-content-evenly'>
    <div className="website d-flex flex-column " style={{width:'300px'}}>
    <h5 className='text-light'> 
    Total ₹45</h5>
    
    </div>
    <div className="link  d-flex flex-column " style={{width:'300px'}}>
    <Button  style={{textDecoration:'none',color:'#718341',borderRadius:'20px',width:'190px'}} className='btn btn-light'>Place order</Button>
     </div>
      </div>
      
      </div>
 
          </>
      }
    </div>
  </div>

  )
}

export default Cart
