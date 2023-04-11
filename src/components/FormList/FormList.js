import React from 'react';

function Formlist ({title, name, onSubmit, disabled, buttonText, children}) {
    
    
    return (
        <div className="FormList__container">
            <h2 className="Formlist__title">{title}</h2>

            <form name={name} onSubmit={onSubmit} noValidate>
                <div className="FormList__form">
                {children}
                </div>
                <button type ="submit" aria-label="registrationButton" disabled={disabled}
                    className="FormList__button">{buttonText}
                </button>
            </form>
        </div>
    )
}

export default Formlist;