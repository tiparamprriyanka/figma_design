
import React from 'react'
import '../App.css'

const Services = () => {
  return (
    
    <section className="section-container">

<div className="container">
<div className="join-us-today1">
  <p>Join Us Today</p>
  <div className="your-journey-to">
  <h1>Your Journey to Love Starts Here</h1>
  </div>

  <div className="unlock">
  <p> Unlock the Door to Love: Register Now for a Journey of Connections and Compatibility.</p>
  </div>

  <form>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="profile">Profile</label>
          <input type="text" id="profile" name="profile" placeholder='Raghav'/>
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <input type="text" id="gender" name="gender"  placeholder='Your name' />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" placeholder='Your name' />
        </div>
        <div className="form-group">
          <label htmlFor="secondName">Second Name</label>
          <input type="text" id="secondName" name="secondName" placeholder='Your name' />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="text" id="phoneNumber" name="phoneNumber"  placeholder='+91-74659123'/>
        </div>
      </div>

      <button type="submit">Get Started</button>
    </form>



    </div>
  </div>
  </section>
  )
}

export default Services

