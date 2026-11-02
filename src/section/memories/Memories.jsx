import React from 'react';
import './memories.css'
import background3 from '../../assets/image/background_3.png'
import memories1 from '../../assets/image/memories.png'


const Memories = () => {
    return(
       
<section id="memories">
    <div class="container">
        <div class="background_3">
            <img src={background3} />
            <div class="memories_wrapper">
                <div class="memories_img">
                    <img src={memories1}/>
                </div>
                <div class="memories_content">
                    <h4>FEATURED DESTINATIONS</h4>
                    <div class="head">
                        <h3>TAKE ONLY </h3>
                        <h3>MEMORIES, LEAVE </h3>
                        <h3>ONLY FOOTPRINTS.</h3>

                    </div>
                    <div class="pera">
                         <p>Lorem ipsum dolor sit amet, consectetuer adipiscing </p>
                          <p>elit, sed diam nonummy nibh euismod tincidunt ut </p>
                           <p>laoreet dolore magna aliquam erat volutpat.</p>
                    </div>
                   
                </div>

            </div>
        </div>
    </div>
</section>




    )

}

export default Memories;



