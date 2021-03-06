import React, { Component } from "react"
import "./contacts.scss"
import { graphql, useStaticQuery } from "gatsby";

const Contacts = () => {
  const data = useStaticQuery(graphql`
  query {
    contactsBgOne: file(relativePath: { eq: "contacts-bg-one.png" }) {
      publicURL
    },
    contactsYellowBgGrid: file(relativePath: { eq: "contacts-yellow-bg-grid.svg" }) {
      publicURL
    },
    contactsBrownImg: file(relativePath: { eq: "contacts-brown-img.svg" }) {
      publicURL
    },
    contactsCircles: file(relativePath: { eq: "contacts-circles.svg" }) {
      publicURL
    },
    contactsBgTwo: file(relativePath: { eq: "contacts-bg-two.png" }) {
      publicURL
    },
    locationImg: file(relativePath: { eq: "location.svg" }) {
      publicURL
    },
    telImg: file(relativePath: { eq: "tel.svg" }) {
      publicURL
    },
    emailImg: file(relativePath: { eq: "email.svg" }) {
      publicURL
    },
    reachUsIcons: file(relativePath: { eq: "reach-us-icons.svg" }) {
      publicURL
    },
    contactForm: file(relativePath: { eq: "contact-form.png" }) {
      publicURL
    }
  }
`)

  return (
    <div className="contacts-container">
      <img className="contacts-yellow-bg-grid" src={data.contactsYellowBgGrid.publicURL}/>
      <img className="contacts-brown-img" src={data.contactsBrownImg.publicURL}/>
      <img className="contacts-circles" src={data.contactsCircles.publicURL}/>
      {/* <img className="contacts-bg-one" src={data.contactsBgOne.publicURL}/> */}
      <img className="contacts-bg-two" src={data.contactsBgTwo.publicURL}/>
      <div className="contacts-left-right-container container">
        <div className="contacts-left">
          <h5 className="contacts-pre-title">get in touch</h5>
          <h2 className="contacts-title">Let’s work together</h2>
            <div className="contacts-left-content">
              <img className="contacts-left-content-img" id="location-img" src={data.locationImg.publicURL}/>
              <div className="location-text">
                <p className="location-text-p contacts-left-content-text">201 S. Capitol Ave</p>
                <p className="location-text-p contacts-left-content-text">Suite 1100</p>
                <p className="location-text-p contacts-left-content-text">Indianapolis, IN 46225</p>
              </div>
            </div>
            <div className="contacts-left-content">
              <img className="contacts-left-content-img" src={data.telImg.publicURL}/>
              <p className="contacts-left-content-text">Tel: (317) 378-7300</p>
            </div>
            <div className="contacts-left-content">
              <img className="contacts-left-content-img" src={data.emailImg.publicURL}/>
              <p className="contacts-left-content-text">Email: info@email.com</p>
            </div>
            <div className="reach-us-content">
              <p className="reach-us-title">Reach us here</p>
              <div className="reach-us-icons-container">
                <div className="reach-us-icons">
                  <img src={data.reachUsIcons.publicURL}/>
                  {/* <a href="#">
                    <img className="instagram" src={data.reachUsIcons.publicURL}/>
                  </a> */}
                  {/* <a href="#">
                    <img className="pinterest" src={data.reachUsIcons.publicURL}/>
                  </a>
                  <a href="#">
                    <img className="facebook" src={data.reachUsIcons.publicURL}/>
                  </a>
                  <a href="#">
                    <img className="twitter" src={data.reachUsIcons.publicURL}/>
                  </a>
                  <a href="#">
                    <img className="linkedin" src={data.reachUsIcons.publicURL}/>
                  </a> */}
                </div>
              </div>
            </div>
        </div>
        <div className="contacts-right">
          <div className="contact-form-container">
            <div className="contact-form-top">
              <p className="contact-form-title">We'd love to hear from you!</p>
            </div>
            <div className="contact-form-user-data">
              <input className="user-data" type="text" placeholder="Full name"/>
              <input className="user-data" type="text" placeholder="Email"/>
              <input className="user-data" type="text" placeholder="Phone"/>
              <input id="message" className="user-data" type="text" placeholder="Message"/>
              <button className="user-data-btn">Submit</button>
            </div>
          </div>
          {/* <img className="contact-form-img" src={data.contactForm.publicURL}/> */}
        </div>
      </div>
    </div>
  )
}

export default Contacts
