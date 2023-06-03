import React, { useEffect, useState } from 'react'
import navIvcon from '../images/bakery-light-1.png'
import '../Home/Home.css'
export default function () {

    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const Handlescroll =()=>{
            const scroll = window.scrollY;
            if  (scroll>80){
                setScrolled(true)
            }
            else{setScrolled(false)}
        }
        window.addEventListener("scroll",Handlescroll);
      return () => {window.removeEventListener("scroll",Handlescroll)}
    }, [])
    
    return (
        <>
            <nav className={`navbar navbar-expand-lg ${scrolled? 'Nav__bg-white':''}`}>
                <div className="container p-2 ">
                    <a className="navbar-brand" href="#">
                        <img className='navIcon ' src={navIvcon} alt="" />

                    </a>
                    <div className="collapse  navbar-collapse" id="navbarSupportedContent">
                        <ul className='navbar-nav ms-auto mb-2 mb-lg-0 '>
                            <li className="nav-item">
                                <a className={`nav-link ${scrolled? 'Nav-text' :'' } ` } aria-current="page" href="#">Home</a>
                    
                            </li>
                           
                            <li className="nav-item">
                                <a className={`nav-link ${scrolled? 'Nav-text' :'' } ` } href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${scrolled? 'Nav-text' :'' } ` } href="#">OurOffer</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${scrolled? 'Nav-text' :'' } ` } href="#">Gallery</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${scrolled? 'Nav-text' :'' } ` } href="#">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${scrolled? 'Nav-text' :'' } ` } href="#">Contact</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}
