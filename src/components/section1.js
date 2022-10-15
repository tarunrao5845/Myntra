import React from 'react'
import logo from '../images/section1img.png'
import Login from '../images/loginimg.jpg'
import img from '../images/img2.png'
import Omg from '../images/omg.jpg'


export default function Section1() {
  return (
    <div>
   <div className="container">
      <img className='my-4' src={logo} width="100%"  alt="" />
      </div>  
      {/*                                                  login modal                                                 */}

      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content shadow fixed-bottom" id="losi">
        <div className="modal-header p-0 m-0 mb-2  border-bottom-0">
         <img src={Login} width="100%" alt="" />
       
       

          {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
        </div>

        <div className="modal-body  p-2 pt-0">
        <h4 className='my-4'>Login <small> or </small>Signup</h4>
        <form action="">
          <input class="form-control my-3"type="number" name="number" placeholder='Mobile Number*' />
         
        </form>
        <small className='my-2'>By Continuing ,I agree to the <b>Term of Use</b>& <b>Privacy Policy</b></small> <br />

        <button className='btn btn-danger  rounded-0  px-5 my-3' id='btncont'>CONTINUE</button><br/>
        <small className='my-3'>Have trouble logging in? <b>Get help</b></small>
        </div>
      </div>
    </div>
  </div>
  
{/*                                                           second img                                                        */}
 
  <img className='my-2' src={img} width="100%" alt="" />
  
{/*                                                         OMG image                                                           */}
<div className="container">
<img src={Omg} className="item-center mx-3 mt-2 " width="96%"  alt="" />
</div>





    </div>
  )
}