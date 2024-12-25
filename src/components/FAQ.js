import React, { useState } from "react";
import "../styles/FAQ.css";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Yes, you can cancel anytime without any hassle. Your subscription will end at the end of the billing cycle.",
    },
    {
      question: "How does billing work?",
      answer:
        "Billing is done monthly or annually, depending on the plan you select. We offer secure payment options and transparent invoicing.",
    },
    {
      question: "How do I change my account email?",
      answer:
        "You can update your account email from your profile settings. If you encounter any issues, our support team is here to assist you.",
    },
  ];

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-subtitle">
          Everything you need to know about the product and billing.
        </p>
        <div className="faq-items">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "open" : ""}`}
            >
              <div className="faq-question" onClick={() => toggleAccordion(index)}>
                <h3>{item.question}</h3>
                <span className="faq-icon">
                  {openIndex === index ? (
                    <img
                      src={require("../assets/Icon wrap.png")}
                      alt="Collapse"
                      className="faq-toggle-icon"
                    />
                  ) : (
                    <img
                      src={require("../assets/minus-circle.png")}
                      alt="Expand"
                      className="faq-toggle-icon"
                    />
                  )}
                </span>
              </div>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
