import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { createGlobalStyle } from 'styled-components';

import Form from '../features/components/Form';
import Header from '../common/components/Header';
import TodoList from '../features/components/TodoList';
import { add, remove, toggle, update, loadTodos } from '../features/redux/actions';


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;


function App() {
    const todoList = useSelector(state => state.rootReducer);
    const dispatch = useDispatch();

    const onAddTodo = (todo) => {
        dispatch(add(todo))
    };

    const onRemoveTodo = (id) => {
        dispatch(remove(id))
    };

    const onToggleTodo = (id) => {
        dispatch(toggle(id))
    };

    const onUpdateTodo = (id, todo) => {
        dispatch(update(id, todo))
    };

    const onLoadTodos = () => {
        dispatch(loadTodos())
    };

    return (
        <>
            <GlobalStyle />
            <Container>
                <Header />
                <Form
                    onAddTodo       = { onAddTodo }
                />
                <TodoList
                    list            = { todoList }
                    onRemoveItem    = { onRemoveTodo }
                    onToggleItem    = { onToggleTodo }
                    onUpdateItem    = { onUpdateTodo }
                    onLoadTodos     = { onLoadTodos }
                />
            </Container>
        </>
    )
}

export default App;