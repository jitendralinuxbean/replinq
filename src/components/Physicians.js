import React from 'react'
import AdminLeftMenu from './backend/AdminLeftMenu';


const Physicians = () => {
    return (
    
    <>
    <div className="offcanvas offcanvas-start" id="demo">
       <AdminLeftMenu />
      </div>
      
      <div className="rightpane mynotif">
                <div className="container">
                  <div className='row justify-content-center'>
                    <div className='col-md-8 text-center'>
                    <img src="\images\physicianHero.png" width={'323'} alt='' /> 
                     <h2>Welcome to the Replinq physician portal. Follow the prompts below to add physicians to your profile. Surgeon schedules will then be reflected in your live calendar.</h2>                 
                    </div>
                  </div>
                  <div className='row justify-content-center mt-4'>
                    <div className='col-md-8 text-center'>
                    <form className=''>
                        <div class="row">
                            <div class="col-4 col-md-5">
                            <select class="form-select">
                                <option>Select State</option>
                                <option>State 1</option>
                                <option>State 2</option>
                                <option>State 3</option>
                            </select>
                            </div>
                            <div class="col-4 col-md-5">
                                <input type="text" class="form-control" placeholder="Type Physician Name" name="" />
                            </div>
                            <div class="col-4 col-md-2">
                                <button className='btn btn-physearch'>Search</button>
                            </div>
                        </div>
                     </form>

                    <div className='row mt-5'>
                        <div className='col-md-12'>
                        <div className="upschedulebox m-0">
                                <div className="uphdr">
                                    
                                    <div className="dr-name phyname"><b>Dr. Sarah Jonas</b> <span className='d-block text-start'>Radiologist</span></div>
                                    <div className="ms-auto">
                                        <a href='#' className='a-g-link' data-bs-toggle="modal" data-bs-target="#removephysicians"><i className='fa fa-trash'></i> Remove</a>
                                        </div>

                                        
                                    <div className="modal smallsize" id="removephysicians">
                                        <div className="modal-dialog">
                                            <div className="modal-content"> 
                                                    <div className="modal-body">
                                                    <button type="button" class="btn-close loginmdl" data-bs-dismiss="modal"></button>
                                                        <div className='row'>
                                                         <div className='modalWrap'>
                                                            <div className='removehdr'>

                                                                <a href='#' className='active'>Color</a>
                                                                <a href='#'>Notifications</a>

                                                            </div>

                                                           
                                                            <div className='addmodalbdy'>
                                                                <h4>Physician</h4>
                                                                
                                                                <div class="dr-name p-0 d-flex">
                                                                
                                                                <div className='addnamephy'>                                                                
                                                                <b><span class="dot-box2"></span> Dr. Sarah Jonas </b>
                                                                <span>(Radiologist)</span>
                                                                </div>
                                                                </div>
                                                                
                                                                <div className='colorbox'>
                                                                    <h4>Color</h4>
                                                                  <div className='selctClr'>
                                                                  <div>
                                            <input id="radio-1" class="radio-custom" name="radio-group" type="radio" />
                                            <label for="radio-1" class="radio-custom-label rc1"></label>
                                        </div>
                                        <div>
                                            <input id="radio-2" class="radio-custom"name="radio-group" type="radio" />
                                            <label for="radio-2" class="radio-custom-label rc2"></label>
                                        </div>
                                        <div>
                                            <input id="radio-3" class="radio-custom" name="radio-group" type="radio" />
                                            <label for="radio-3" class="radio-custom-label rc3"></label>
                                        </div>

                                        <div>
                                            <input id="radio-4" class="radio-custom" name="radio-group" type="radio"  />
                                            <label for="radio-4" class="radio-custom-label rc4"></label>
                                        </div>
                                        <div>
                                            <input id="radio-5" class="radio-custom"name="radio-group" type="radio" checked />
                                            <label for="radio-5" class="radio-custom-label rc5"></label>
                                        </div>
                                        <div>
                                            <input id="radio-6" class="radio-custom" name="radio-group" type="radio" />
                                            <label for="radio-6" class="radio-custom-label rc6"></label>
                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                           <div className='text-center'><input type='button' class='btn btn-primary' value='Update'></input></div> 
                                                            </div>

                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="myphy-boxleft text-start phyaddprfile">
                                    <div className='row'>
                                        <div className='col-1 text-end mb-3'><i className="fa fa-building"></i></div>
                                        <div className='col-11 mb-3 ps-0'>Northshore Skokie Hospital</div>

                                        <div className='col-1 text-end'><i className="fa fa-building"></i></div>
                                        <div className='col-11 ps-0'>Saint Francis Hospital</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='row mt-5'>
                        <div className='col-md-12'>
                        <div className="upschedulebox m-0">
                                <div className="uphdr">
                                    
                                    <div className="dr-name phyname"><b>Sarah Jonas</b> <span className='d-block align-left'>Cardiologist</span></div>
                                    <div className="ms-auto">
                                        <a href='#' className='a-g-link'><i className='fa fa-plus'></i> Add to Profile</a>
                                        </div>
                                </div>

                                <div className="myphy-boxleft text-start phyaddprfile">
                                    <div className='row'>
                                        <div className='col-1 text-end mb-3'><i className="fa fa-building"></i></div>
                                        <div className='col-11 mb-3 ps-0'>Facility 1- sadipscing elitr, sed diam nonumy eirmod dolor sit amet, consetetur</div>

                                        <div className='col-1 text-end'><i className="fa fa-building"></i></div>
                                        <div className='col-11 ps-0'>Facility 2- eirmod dolor sit amet, consetetur , consetetur</div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                    <div className='row mt-5 justify-content-end'>
                        <div className='col text-end'>
                        <button className='btn btn-primary' type="button">Continue</button>
                        </div>
                    </div>
                   
                    </div>
                  </div>

                </div>
      </div>

    </>

 )

};
  
export default Physicians;
