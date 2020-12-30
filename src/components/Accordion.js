import React, { useState } from 'react';

const Accordion = ({ faqs }) => {
    const [activeIndex, setActiveIndex] = useState(1);

    const onQuestionClick = (index) => {
        setActiveIndex(index);
    };

    const renderedFaqs = faqs.map((faq, index) => {
        const active = index === activeIndex ? 'active' : '';

        return (
            <div onClick={() => onQuestionClick(index)} className={`faq__item ${active}`}>
                <h2 className="faq__question">{faq.question}</h2>  
                <p className="faq__answer">{faq.answer}</p>
            </div>
        );
    });

    return (
        <div className="faq-container">
            <h1 className="faq__heading">FAQ</h1>
            <div className="faq__items">
                {renderedFaqs}
            </div>
        </div>
    );
};

export default Accordion;