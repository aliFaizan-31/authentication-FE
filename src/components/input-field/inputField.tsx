import React from 'react';

interface InputFieldProps {
    label: string;
    name: string;
    type: string;
    placeholder: string;
    value: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    required: boolean;
}

function InputField({ label, name, type, placeholder, value, handleChange, required }: InputFieldProps) {
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
