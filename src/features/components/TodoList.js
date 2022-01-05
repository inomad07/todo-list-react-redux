import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import toastr from 'toastr'
import "toastr/build/toastr.min.css"

const List = styled.div`
    display: flex;
    flex-direction: column;
`;

const Item = styled.div`
    background-color: whitesmoke;
    margin-bottom: 5px;
    padding: 15px;
`;

const TodoList = (props) => {
    const [ text, setText ] = useState("");
    const [ todoId, setId ] = useState("");
    const { list, onRemoveItem, onToggleItem, onUpdateItem } = props;

    const onTextChange = (e) => {
        setText(e.target.value);
    };

    const editItem = (todo) => {
        setId(todo.id);
        setText(todo.text);
    };

    const saveItem = () => {
        onUpdateItem(todoId, text);
        setTimeout(() => toastr.success("Todo successfully updated!"), 0);
        setId('');
        setText('');
    };

    const removeItem = (id) => {
        onRemoveItem(id);
        setTimeout(() => toastr.success("Todo successfully removed!"), 0);
    };

    const renderItem = (todo) => {
        if (todoId === todo.id) {
            return (
                <span>
                    <input
                        type     = "text"
                        value    = { text }
                        onChange = { onTextChange }
                    />
                    <button onClick={saveItem}>Edit</button>
                </span>
            );
        }

        return (<span onDoubleClick={() => editItem(todo)}>{todo.text}</span>)
    };

    const toggle = (todo) => {
        onToggleItem(todo.id)
        if(!todo.done) {
            return setTimeout(() => toastr.success("Todo successfully toggled!"), 0);
        }
        setTimeout(() => toastr.success("Todo successfully untoggled!"), 0);
    }

    return (
        <List>
            {list.map(todo => (
                <Item key={todo.id}
                    style={{textDecoration: todo.done ? 'line-through' : 'none'}}
                >
                    {renderItem(todo)}&nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={() => toggle(todo)}>Toggle</button>
                    <button onClick={() => removeItem(todo.id)}>Delete</button>
                </Item>
            ))}
        </List>
    );
};


TodoList.propTypes = {
    list:         PropTypes.array,
    onRemoveItem: PropTypes.func,
    onToggleItem: PropTypes.func,
    onUpdateItem: PropTypes.func,
};

export default TodoList;