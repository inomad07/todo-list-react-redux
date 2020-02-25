import React, { useState } from "react";
import './input.css';

const Input = ({ placeholder, onSubmitEditing }) => {
    const [ value, setValue ] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key !== "Enter") return;

        if (!value) return; // Don't submit if empty

        onSubmitEditing(value);
        setValue('');
    };

    return (
        <input
            type        = { "text" }
            value       = { value }
            placeholder = { placeholder }
            onChange    = { handleChange }
            onKeyPress  = { handleKeyPress }
        />
    );
};

export default Input;
