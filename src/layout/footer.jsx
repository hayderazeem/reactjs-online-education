import React from 'react'
import Logo from '../assets/logo.png'
import "../layout/footer.css"
const Footer = () => {
    return (
        <footer>
            <div className="page_width">
                <div className="inner_footer">
                <div className="logo"><img src={Logo} alt="" />
        <p className="footer_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy a type specimen book.</p>
      </div>
      <div className="footer_c1">
        <h2>Company</h2>
        <ul>
          <li>About Us</li>
          <li>How to work?</li>
          <li>Populer Course</li>
          <li>Service</li>
        </ul>
      </div>
      <div className="footer_c1">
        <h2>Courses</h2>
        <ul>
          <li>Categories</li>
          <li>Ofline Course</li>
          <li>Vidio Course</li>
        </ul>
      </div>
      <div className="footer_c1">
        <h2>Support</h2>
        <ul>
          <li>FAQ</li>
          <li>Help Center</li>
          <li>Career</li>
          <li>Privacy</li>
        </ul>
      </div>
      <div className="footer_c5">
        <h2>Contact Info</h2><br />
        <ul>
          <li>+0913-705-3875</li><br />
          <li>ElizabethJ@jourrapide.com</li>
        </ul><br />
        <p>4808 Skinner Hollow Road </p>
        <p> Creek, OR 97429</p>
      </div>
    </div>
  </div>
  <br /><br />
  <hr />
  <p className="footer_copyright">BookStore All Right Reserved, 2022</p>
              
        </footer>
    )
}

export default Footer