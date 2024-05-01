import React from 'react';
import "../features/subscribe.css";

const Subscribe = () => {
  return (
    <>
      <div class="subcribe_main">
      <div class="grid-subcribe-container">
  <div> <h1>Subscribe to our newsletter</h1></div>
  <div><p>Lorem Ipsum is simply dummy text of the printing.</p></div><br />
  <div className="subscribe_box"> <input
                type="text"
                placeholder="Email Address"
                className="email_box_input"
              />
              <input
                className="email_box_btn"
                type="button"
                value="Send"
              /></div>  
 
</div>
</div>

    </>
  )
}

export default Subscribe
