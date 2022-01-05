import React, { useState } from 'react'
import styled from 'styled-components'

import { formProps as Props } from '../../types'

const Input = styled.input`
    font-size: 100%;
    padding: 15px;
    border-width: 0;
`;

const placeholder = 'Type a todo, then hit enter!'

const Form = (props: Props) => {
    const [ name, setName ] = useState('');
    const { onAddTodo } = props;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key !== 'Enter') return;

        if (!name) return;

        onAddTodo(name);
        setName('');
    };

    return (
        <Input
            type        = { 'text' }
            value       = { name }
            placeholder = { placeholder }
            onChange    = { handleChange }
            onKeyPress  = { handleKeyPress }
        />
    );
};

export default Form;
