import React, { useEffect } from 'react'

function Return() {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[])
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">No Return Policy for Custom-Designed Items</h1>
      <p className="text-left">
        <b>Last updated: [20/02/2024]</b>
        <br />
        Due to the nature of custom-designed items, we do not accept returns, exchanges, or refunds for these products. Each custom-designed item is created specifically for you based on your unique specifications, making it impossible for us to resell or reuse the item.
        <br />
        <br />
        <b>Cancellation</b>
        <br />
        Once an order for a custom-designed item has been placed and confirmed, it cannot be cancelled or modified as the production process begins immediately to fulfill your unique design requirements.
        <br />
        <br />
        <b>Quality Guarantee</b>
        <br />
        We take pride in ensuring that all custom-designed items meet our quality standards. If you believe there is a defect or error in your custom-designed item, please contact us within [number of days, e.g., 7 days] of receiving your order, and we will work with you to address the issue.
        <br />
        <br />
        <b>Contact Us</b>
        <br />
        If you have any questions or concerns regarding our No Return Policy for custom-designed items, please contact us at ShopKing.in@gmail.com.
        <br />
      </p>
    </div>
  )
}

export default Return