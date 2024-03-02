import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const Input: React.FC<InputProps> = ({ label, ...inputProps }) => {
    return (
        <div className="flex flex-col mb-4 w-full">
            <label className='body-bold mb-2'>{label}</label>
            <input
                {...inputProps}
                className="w-full p-3 border border-gray-300 ease duration-300 hover:border-magenta outline-magenta/0 outline focus:outline-magenta/50 outline-offset-0 outline-4 rounded-lg"
            />
        </div>
    );
};

export default Input;
