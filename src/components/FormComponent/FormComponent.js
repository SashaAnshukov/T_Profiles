

import React from 'react';

function FormComponent ({name, FormComponentInputClassName,  value, onChange, minLength, maxLength, type, nameInput, children}) {

    return (
        <div className="FormComponent__label">
            <h2 className='FormComponent__name'>{name}</h2>
            <div className={FormComponentInputClassName}>
                <input className="FormComponent__input FormComponent__input_text"
                    value={`${value}` || ''} onChange={onChange}
                    required minLength={minLength} maxLength={maxLength} type={type}
                    name ={nameInput}
                />
                {children}
            </div>
        </div>
    )
}

export default FormComponent;