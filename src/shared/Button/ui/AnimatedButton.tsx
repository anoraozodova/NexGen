
import React from 'react';
import './button.css'



export const AnimatedButton: React.FC = () => {
    return (
        <>
            <button className="learn-more">
                <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                </span>
                <span className="button-text">Start a Project</span>
            </button>

        </>
    );
};