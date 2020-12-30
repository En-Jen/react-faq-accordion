import './FaqCard.css';
import React from 'react';
import Accordion from './Accordion';

const FaqCard = (props) => {
    return (
        <section className="faq">
            <div className="faq__illustrations">
                <div className="faq__image"></div>
                <div className="faq__bg"></div>
            </div>
            <Accordion faqs={props.faqs} />
        </section>
    );
};

export default FaqCard;