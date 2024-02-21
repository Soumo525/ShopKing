import React, { useEffect } from 'react'

function Contact() {
useEffect (() => {
    window.scrollTo(0, 0);
},[])
    return (
    <div className="max-w-2xl mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold text-center mb-4">Contact Us</h1>
    <p className="text-left">
      <b>Last updated: [20/02/2024]</b>
      <br />
      If you have any questions or concerns about our products or services, please feel free to contact us. We are here to help!
      <br />
      <br />
      <b>Customer Support</b>
      <br />
      For customer support inquiries, please email us at ShopKing.in@gmail.com or call us at [Your Phone Number]. Our customer support team is available [Hours of Operation] to assist you.
      <br />
      <br />
      <b>Business Inquiries</b>
      <br />
      For business inquiries, partnerships, or collaborations, please email us at business@ShopKing.in@gmai.com
      <br />
      <br />
      <b>Visit Us</b>
      <br />
        ShopKing.in
      <br />
      Dhulagori,Howrah,711302
      <br />
      Near P. P. MEMORIAL ACADEMY
      <br />
    </p>
    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3683.935784652931!2d88.18373067411409!3d22.58150493264619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDM0JzUzLjQiTiA4OMKwMTEnMTAuNyJF!5e0!3m2!1sen!2sin!4v1708433253805!5m2!1sen!2sin" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
  </div>
  )
}

export default Contact