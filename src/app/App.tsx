import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled, { createGlobalStyle } from 'styled-components'

import TodoList from '../features/components/TodoList'
import Form from '../features/components/Form'
import Header from '../common/components/Header'
import { add, load, remove, toggle, update } from '../features/redux/thunks'
import {stateType as State, todoType as Todo} from '../features/types'

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


export default function App () {
    const todoList = useSelector((state: State) => state.rootReducer);
    const dispatch = useDispatch();

    const onAddTodo = (todo: string) => {
        dispatch(add(todo));
    };

    const onRemoveTodo = (todo: Todo) => {
        dispatch(remove(todo))
    };

    const onToggleTodo = (todo: Todo) => {
        dispatch(toggle(todo))
    };

    const onUpdateTodo = (todo: Todo) => {
        dispatch(update(todo))
    };

    const onLoadTodos = () => {
        dispatch(load())
    };

    return (
        <>
            <GlobalStyle />
            <Container>
                <Header />
                <Form
                    onAddTodo    = { onAddTodo }
                />
                <TodoList
                    list         = { todoList }
                    onRemoveItem = { onRemoveTodo }
                    onToggleItem = { onToggleTodo }
                    onUpdateItem = { onUpdateTodo }
                    onLoadTodos  = { onLoadTodos }
                />
            </Container>
        </>
    )
}
