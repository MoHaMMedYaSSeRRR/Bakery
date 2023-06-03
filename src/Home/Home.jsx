import React from 'react'
import '../Home/Home.css'
import whoImage from '../images/one.jpg'
import locationImage from '../images/full-2-800x640.jpg'
import backingitem1 from '../images/ben-garratt-134774-600x500.jpg'
import backingitem2 from '../images/stas-ovsky-123540-600x500.jpg'
import backingitem3 from '../images/clem-onojeghuo-206832-600x500.jpg'
import footericon from '../images/bakery-light-1.png'

import Nav from './Nav'


export default function Home() {
  return (
    <>

      <div className='home'>

        <div className="layer">
          <Nav />
          <div className="homeContent">
            <div>
              <h4>Welcome to</h4>
              <h1>Family Bakery</h1>
              <p>We're the biggest, best equipped and most advanced Bakery in the greater<br /> Los Angeles area.
              </p>
              <button className='btn1'> Learn More </button>
              <button className='btn2'> Contact US </button>
              <a href="#who-we-are">
                <div className="mouse-dot position-absolute">
                  <span></span>
                </div>
              </a>
            </div>
          </div>
        </div>

      </div>

      <div className="whoWeAre mt-5" id='who-we-are'>
        <div className="container d-flex justify-content-around">
          <div className="who-image">
            <img src={whoImage} alt="" />
          </div>
          <div className="who-details">
            <h3> Who we are? </h3>
            <p> We have been operating for over 30 years and are Members of The Federation of Master Builders. We work on projects big and small from small residential extensions to full house. We are so happy with this theme. Everyday it make our lives better </p>
            <p>
              <span> <i className="fa-sharp fa-solid fa-heart"></i> </span>
              We care about environment.
            </p>
            <p>
              <span> <i className="fa-sharp fa-solid fa-heart"></i> </span>
              We are trusted by hundreds of clients.

            </p>
            <p>
              <span> <i className="fa-sharp fa-solid fa-heart"></i> </span>
              Social media loves us!

            </p>
            <p>
              <span> <i className="fa-sharp fa-solid fa-heart"></i> </span>
              This list is super easy to create.

            </p>
          </div>
        </div>
      </div>

      <div className="location">
        <div className="container d-flex ">
          <div className="location-details">
            <div>
              <h2>  Our Location</h2>
              <p>We have been operating for over 30 years and are Members of The Federation of Master Builders. We work on projects big and small from small residential extensions to full house. We are so happy with this theme. Everyday it make our lives better.
              </p>
              <p>Story on projects big and small from small residential extensions to full house. We are so happy with this theme. Everyday it make our lives better.</p>

            </div>
          </div>
          <div className="location-image">
            <img src={locationImage} alt="" />
          </div>

        </div>
      </div>

      <div className="baking mt-5">
        <div className="container  text-center mt-5">
          <h2>Our Baking </h2>
          <p>Learn more about them. We have worked truly hard to make them perfect for every use.</p>
          <div className="items d-flex">
            <div className="baking-item ">
              <img src={backingitem1} alt="" />
              <h5>Superior Breads</h5>
              <p>Proin interdum, ante ut sollicitudin commodo, tellus quam sagittis libero, at semper mauris velit a velit. Phasellus commodo turpis et lacinia posuere.</p>
            </div>
            <div className="baking-item">
              <img src={backingitem2} alt="" />
              <h5>Bagels</h5>
              <p>Proin interdum, ante ut sollicitudin commodo, tellus quam sagittis libero, at semper mauris velit a velit. Phasellus commodo turpis et lacinia posuere.</p>
            </div>
            <div className="baking-item">
              <img src={backingitem3} alt="" />
              <h5>Cookies</h5>
              <p>Proin interdum, ante ut sollicitudin commodo, tellus quam sagittis libero, at semper mauris velit a velit. Phasellus commodo turpis et lacinia posuere.</p>
            </div>
          </div>

        </div>
      </div>

      <div className="contact">
        <div className="container">
          <div className="contact-details">
            <h2>
              Contact Information</h2>
            <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <p className='mt-5'>Our contact details:</p>
            <p>
              <i className="fa-solid fa-location-dot"></i>Manchester St 123-78B, Random 713, UK
            </p>
            <p>
              <i className="fa-solid fa-phone"></i>+46 123 456 789
            </p>


            <p>
              <i className="fa-solid fa-headphones"></i>+37 431 456 789
            </p>
            <p>
              <i className="fa-sharp fa-solid fa-envelope"></i> hello@sitename.com
            </p>

          </div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54605.41428132927!2d29.9697585563675!3d31.19749397163511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c30695c08535%3A0xfa139ddaade9ffd3!2z2YPYp9ix2YHZiNixINin2YTYp9iz2YPZhtiv2LHZitmHINiz2YrYqtmKINiz2YbYqtix!5e0!3m2!1sar!2seg!4v1679464408670!5m2!1sar!2seg"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>

      <div className="aboutus">
        <div className="container">
          <div className="about ">
            <h3> About Us</h3>
            <p>I am text block. Click edit button to change this text.
              Lorem ipsum dolor sit amet, consectetur. I am text block.
              Click edit button to change this text. Lorem ipsum dolor sit amet,
              consectetur.</p>

            <p className='mt-4'>We are the champions! We are the most amazing theme of all time, yeah.</p>
          </div>

          <div className="about">
            <h3>Why we are special?</h3>
            <ul>
              <li>Our magical recipe.</li>
              <li>We care about environment.</li>
              <li>We are trusted by hundreds of clients.</li>
              <li>Social media loves us!</li>
              <li>This list is super easy to create.</li>


            </ul>
          </div>

          <div className="about">
            <h3>Opening Hours</h3>
            <ul>
              <li>Monday 10AM - 9PM</li>
              <li>Tuesday 10AM - 9PM</li>
              <li>Wednesday 10AM - 9PM</li>
              <li>Thursday 10AM - 10PM</li>
              <li>Friday 10AM - 10PM</li>
              <li>Weekends 10AM - 11PM</li>

            </ul>
          </div>
          <div className="about">
            <h3>Contact Details</h3>
            <ul>
              <li className='pb-3'>
                <i className="fa-solid fa-location-dot "></i>Manchester Road 123-78B,<br /> Silictown 7854MD, Great Country            </li>
              <li className='pb-3'>
                <i className="fa-solid fa-phone"></i>+46 123 456 789
              </li>


              <li className='pb-3'>
                <i className="fa-solid fa-headphones"></i>+37 431 456 789
              </li>
              <li className='pb-3'>
                <i className="fa-sharp fa-solid fa-envelope"></i> hello@sitename.com
              </li>

            </ul>
          </div>

        </div>
      </div>


      <div className="footer">
        <div className="container">
          <div className="footer-img">
            <img src={footericon} alt="" />
          </div>
          <div className="footer-details">
            <p className='mt-3'>Copyright 2017. All rights reserved.</p>

            <ul>
              <li> <i className="fa-brands facebook fa-facebook-f"></i> </li>
              <li><i className="fa-brands googleplus fa-google-plus-g"></i></li>
              <li><i className="fa-brands linkedin fa-linkedin-in"></i></li>
              <li><i className="fa-brands twitter fa-twitter"></i></li>

            </ul>


          </div>

        </div>
      </div>




    </>
  )
}
