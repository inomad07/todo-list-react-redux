import React, { useState } from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const Input = styled.input`
    font-size: 100%;
    padding: 15px;
    border-width: 0;
`;

const Form = (props) => {
    const [ text, setText ] = useState('');
    const { placeholder, onAddTodo } = props;

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key !== "Enter") return;

        if (!text) {
            setTimeout(() => toastr.error("Cannot create todo!"), 0);
            return;
        }

        onAddTodo(text);
        setTimeout(() => toastr.success("Todo successfully created!"), 0);
        setText('');
    };

    return (
        <Input
            type={"text"}
            value={text}
            placeholder={placeholder}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
        />
    );
};

Form.propTypes = {
    placeholder: PropTypes.string,
    onAddTodo: PropTypes.func
};

export default Form;