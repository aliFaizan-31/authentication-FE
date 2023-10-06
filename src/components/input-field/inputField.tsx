import React from 'react';

function InputField({ label, name, type, placeholder, value, handleChange, required }: any) {
    return (
        <div className='mb-10'>
            <label className='display-block'>{label}</label>
            <input
                className='input-field'
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                required={required}
            />
        </div>
    );
}

export default InputField;
