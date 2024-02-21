import React, { useEffect } from 'react'

function Terms() {
  useEffect (() => {
    window.scrollTo(0, 0);
  },[])
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">Terms of Service</h1>
      <p className="text-left">
        <b>Last updated: [20/02/2024]</b>
        <br />
        Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the ShopKing.in website (the "Service") operated by ShopKing ("us", "we", or "our").
        <br />
        Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
        <br />
        By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
        <br />
        <br/>
        <b>Purchases</b>
        <br />
        If you wish to purchase any product or service made available through the Service ("Purchase"), you may be asked to supply certain information relevant to your Purchase including, without limitation, your name, address, payment information, and email address.
        <br />
        <br />
        <b>Subscriptions</b>
        <br />
        Some parts of the Service are billed on a subscription basis ("Subscription(s)"). You will be billed in advance on a recurring and periodic basis ("Billing Cycle"). Billing cycles are set on a monthly or annual basis, depending on the type of subscription plan you select when purchasing a Subscription.
        <br />
        <br />
        <b>Content</b>
        <br />
        Our Service allows you to post, link, store, share, and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for the Content that you post on or through the Service, including its legality, reliability, and appropriateness.
        <br />
        <br />
        <b>Changes</b>
        <br />
        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
        <br />
        <br />
        <b>Contact Us</b>
        <br />
        If you have any questions about these Terms, please contact us at ShopKing.in@gmail.com.
      </p>
    </div>
  )
}

export default Terms