import React from 'react';
import logo from "../assets/image/logo.png"




const Navbar = () => {
    return(
        <section id="navbar">
    <div class="container">
        <div class="background">
            <img src="image/background.png" alt=" "/>
            <div class="nav_wrapper">
                <div class="nav_logo">
                    <img src="image/logo.png"  alt=" "/>
                </div>
                <div class="nav_menu">
                    <li class="items">HOME </li>
                    <li class="items">PAGES </li>
                    <li class="items">TRAVEL</li>
                    <li class="items">BLOG</li>
                    <li class="items">SHOP</li>
                    <li class="items">LEMENTS</li>
                </div>
                <div class="nav_icon">
                    <div class="one">
                        <div class="circle"> <img src="logo"  alt=" "/> </div>
                    </div>
                    <div class="one">
                         <div class="circle"> <img src="image/Path 2.png" alt=" "/> </div>
                    </div>
                    <div class="one">
                         <div class="circle"> <img src="image/Path 3.png"alt=" "/> </div>
                       
                    </div>
                    <div class="one">
                         <div class="circle">    <img src="image/Path 4.png" alt=" "/> </div>
                    </div>
                </div>
            </div>
            <div class="banner ">
                <div class="banner_heading">
                    <h1>CHOOSE</h1>
                    <h1>THE PERFECT</h1>
                    <h1>DESTINATIONS.</h1>
                </div>


                <div class="banner_pera">
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy </p>
                    <p>nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi </p>
                    <p>enim ad minim veniam, quis nostrud exerci tation.</p>
                </div>


                <div class="banner_button">
                    <div class="btn">
                        <button><img src="image/search.png" alt=" "/>
                             <span>Enter Your Location</span></button>
                    </div>
                    <div class="icon ">
                        <div class="circle"> <img src="image/location.png" alt=" "/> </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
 </section>

    ) 
}


export default Navbar;