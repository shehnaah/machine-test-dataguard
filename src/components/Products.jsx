import React from 'react'
import {Button, Table} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Products() {
    let today = new Date()
    let timeStamp = Intl.DateTimeFormat('en-US',{year:'numeric',month:'2-digit',day:'2-digit'}).format(today)
    const url ="https://api.denzo.io/api/cus/v1/products?page=1"

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
  <Table className='border rounded'>
    <thead></thead>
    <tbody>

            <tr className='' style={{border:'1px solid white'}}>
                <td>
                         <Link to={'/productdetails'}><img src={process.env.PUBLIC_URL + 'img/parippu.png'} width={'80px'}  placeholder='1'/> </Link>
    
                </td>
                <td className='mt-5' style={{marginTop:'8px'}}>Parippu vada ₹15
              </td>
                <td className='d-flex justify-content-start'><i class="fa-solid fa-minus me-1 mt-1"></i>
                <input type="text" className='px-1 rounded' style={{width:'30px',border:'2px solid #718341'}} placeholder='1'/>
                <i class="fa-solid fa-plus ms-1 mt-1"></i>
                </td>
            </tr>
    
       <tr className='' style={{border:'1px solid white'}}>
            <td>
            <Link to={'/productdetails'}> <img src={process.env.PUBLIC_URL + 'img/parpp6.png'} width={'80px'}   />  </Link>

            </td>
            <td className='mt-5' style={{marginTop:'8px'}}>Parippu vada ₹15
          </td>
            <td className='d-flex justify-content-start'><i class="fa-solid fa-minus me-1 mt-1"></i>
            <input type="text" className='px-1 rounded' style={{width:'30px',border:'2px solid #718341'}} placeholder='2'/>
            <i class="fa-solid fa-plus ms-1 mt-1"></i>
            </td>
        </tr>
        <tr className='' style={{border:'1px solid white'}}>
            <td>
            <Link to={'/productdetails'}>   <img src={process.env.PUBLIC_URL + 'img/parippu.png'} width={'80px'}  />  </Link>

            </td>
            <td className='mt-5' style={{marginTop:'8px'}}>Parippu vada ₹15
          </td>
            <td className='d-flex justify-content-start'><i class="fa-solid fa-minus me-1 mt-1"></i>
            <input type="text" className='px-1 rounded' style={{width:'30px',border:'2px solid #718341'}}/>
            <i class="fa-solid fa-plus ms-1 mt-1"></i>
            </td>
        </tr>
        <tr className='' style={{border:'1px solid white'}}>
            <td>
            <Link to={'/productdetails'}>   <img src={process.env.PUBLIC_URL + 'img/parpp4.png'} width={'80px'}  />  </Link>

            </td>
            <td className='mt-5' style={{marginTop:'8px'}}>Parippu vada ₹15
          </td>
            <td className='d-flex justify-content-start'><i class="fa-solid fa-minus me-1 mt-1"></i>
            <input type="text" className='px-1 rounded' style={{width:'30px',border:'2px solid #718341'}}/>
            <i class="fa-solid fa-plus ms-1 mt-1"></i>
            </td>
        </tr>
        <tr className='' style={{border:'1px solid white'}}>
            <td>
            <Link to={'/productdetails'}>  <img src={process.env.PUBLIC_URL + 'img/parpp6.png'} width={'80px'}  /> </Link>

            </td>
            <td className='mt-5' style={{marginTop:'8px'}}>Parippu vada ₹15
          </td>
            <td className='d-flex justify-content-start'><i class="fa-solid fa-minus me-1 mt-1"></i>
            <input type="text" className='px-1 rounded' style={{width:'30px',border:'2px solid #718341'}}/>
            <i class="fa-solid fa-plus ms-1 mt-1"></i>
            </td>
        </tr>
        {/* <tr className='' style={{border:'1px solid white'}}>
            <td>
                     <img src={process.env.PUBLIC_URL + 'img/parpp6.png'} width={'80px'}  /> 

            </td>
            <td className='mt-5' style={{marginTop:'8px'}}>Parippu vada ₹15
          </td>
            <td className='d-flex justify-content-start'><i class="fa-solid fa-minus me-1 mt-1"></i>
            <input type="text" className='px-1 rounded' style={{width:'30px',border:'2px solid #718341'}}/>
            <i class="fa-solid fa-plus ms-1 mt-1"></i>
            </td>
        </tr> */}


    </tbody>

</Table>

</div>  
<div className="col-lg-4"></div> 
</div>  
<div className='d-flex p-4 justify-content-around' style={{width:'100%',height:'90px',backgroundColor:'#718341'}}> 
    <div className='footer d-flex justify-content-evenly'>
      <div className="website d-flex flex-column " style={{width:'300px'}}>
      <h5 className='text-light'> 
      Total ₹45</h5>
      
      </div>
      <div className="link  d-flex flex-column " >
<Link to={'/cart'}>
          <Button  style={{textDecoration:'none',color:'#718341',borderRadius:'20px',width:'90px'}} className='btn btn-light'>Cart</Button>
    
</Link>       </div>
        </div>
        
        </div>
   
            </>
        }
      </div>
    </div>
  )
}

export default Products
