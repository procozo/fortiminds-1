// components/SectionHeading.js
import React from 'react';
import { useInView } from 'react-intersection-observer';

const SectionHeading = ({ children, className = '' }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,  // Triggers only once when the element first enters the viewport
        threshold: 0.5,     // Trigger when 50% of the element is in view
    });

    return (
        <h2
            ref={ref}
            className={`${className} ${inView ? 'fade-in' : ''}`}
            style={{ opacity: inView ? 1 : 0, transition: 'opacity 0.5s ease-out' }}
        >
            {children}
        </h2>
    );
};

export default SectionHeading;
