import React from 'react';
import './destination.css'
import background_2 from '../../assets/image/background_2.png'
import vedio from '../../assets/image/vedio.png'
import Path29 from '../../assets/image/Path 29.png'
import Path28 from '../../assets/image/Path 28.png'
import Path40 from '../../assets/image/Path 40.png'








const Destination = () => {
    return(
        <section id="destination">
    <div class="container">
        <div class="background_2">
            <img src={background_2}/>
                <div class="destination_wrapper">
                        <div class="top">
                          <div class="top_contact">
                             <h5>FEATURED DESTINATION</h5>
                             <div class="head">
                                 <h2>CHOOSE</h2>
                                 <h2>THE PERFECT</h2>
                                 <h2>ACCOMMODATION.</h2>
                             </div>
                             <div class="pera">
                             <p>Lorem ipsum dolor sit amet, consectetuer adipiscing </p>
                             <p>elit, sed diam nonummy nibh euismod tincidunt ut </p>
                             <p>laoreet dolore magna aliquam erat volutpat.</p>
                          </div>
                          </div>
                         <div class="top_image">
                             <img src={vedio}/>
                         </div>
                     </div>
                     <div class="bottom">
                        <div class="content">
                            <h6>TRAVEL LOCATION</h6>
                            <span>★★★★★</span>
                        </div>
                        <div class="stick"></div>
                        <div class="price">
                            <div class="one">Tour Price</div>
                            <div class="two">$12,599</div>
                        </div>
                        <div class="btn6">
                            <button>BOOK NOW</button>
                        </div>
                     </div>
{/* <!--   ==============================special package start================== --> */}
                     <div class="package">
                        <h2>Special Package</h2>
                       <div class="pera">
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh </p>
                        <p>euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                       </div>
                       <div class="box_wrapper">
                        <div class="box">
                            <div class="content">
                                <h3>STARTER</h3>
                                <h4>$9</h4>
                                <h5>Per Month</h5>
                            </div>
                            <div class="items">
                                <div class="item">
                                    <img src={Path28}/>
                                    <h6>International Air Ticket.</h6>

                                </div>
                                <div class="item">
                                    <img src={Path28}/>
                                    <h6>Daily Continental Breakfast.</h6>
                                </div>
                                <div class="item">
                                    <img src={Path28}/>
                                    <h6>Lunch And Dinner</h6>

                                </div>
                                <div class="item">
                                    <img src={Path28}/>
                                    <h6>City Tour with Guide</h6>
                                </div>
                                <div class="item">
                                    <img src={Path29}/>
                                    <h6>09 Nights Hotel</h6>

                                </div>
                                <div class="item">
                                    <img src={Path29}/>
                                    <h6>Desert Safari & BBQ Dinner</h6>
                                </div>
                                
                            </div>


                            <div class="btn1"> <button>GET STARTED</button></div>
                        </div>


                        <div class="box">
                            <div class="content">
                                <h3>STANDARD</h3>
                                <h4>$199</h4>
                                <h5>Per Month</h5>
                            </div>
                            <div class="items">
                                <div class="item">
                                    <img src={Path28}/>
                                    <h6>International Air Ticket.</h6>

                                </div>
                                <div class="item">
                                    <img src={Path28}/>
                                    <h6>Daily Continental Breakfast.</h6>
                                </div>
                                <div class="item">
                                    <img src={Path28}/>
                                    <h6>Lunch And Dinner</h6>

                                </div>
                                <div class="item">
                                    <img src={Path28}/>
                                    <h6>City Tour with Guide</h6>
                                </div>
                                <div class="item">
                                    <img src={Path29}/>
                                    <h6>09 Nights Hotel</h6>

                                </div>
                                <div class="item">
                                    <img src={Path29}/>
                                    <h6>Desert Safari & BBQ Dinner</h6>
                                </div>
                                
                            </div>


                            <div class="btn2"><button>GET STARTED</button></div>
                        </div>



                        <div class="box">
                            <div class="content3">
                                <h3>STARTER</h3>
                                <h4>$9</h4>
                                <h5>Per Month</h5>
                            </div>
                            <div class="items">
                                <div class="item">
                                    <img src={Path40}/>
                                    <h6>International Air Ticket.</h6>

                                </div>
                                <div class="item">
                                    <img src={Path40}/>
                                    <h6>Daily Continental Breakfast.</h6>
                                </div>
                                <div class="item">
                                    <img src={Path40}/>
                                    <h6>Lunch And Dinner</h6>

                                </div>
                                <div class="item">
                                    <img src={Path40}/>
                                    <h6>City Tour with Guide</h6>
                                </div>
                                <div class="item">
                                    <img src={Path40}/>
                                    <h6>09 Nights Hotel</h6>

                                </div>
                                <div class="item">
                                    <img src={Path40}/>
                                    <h6>Desert Safari & BBQ Dinner</h6>
                                </div>
                                
                            </div>


                            <div class="btn3"><button>GET STARTED</button></div>
                        </div>
                        
                       </div>
                         <div class=" travel_available">
                            <div class="one">4 Days Trial Available</div>
                            <div  class="one">4 Days Trial Available</div>
                            <div  class="one">4 Days Trial Available</div>


                         </div>
                     </div>
            </div>
      </div>
    </div>
 </section>
    )
}




export default Destination;