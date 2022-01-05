import * as React from 'react'
import styled from 'styled-components'

const Nav = styled.div`
    background-color: skyblue;
    padding: 15px;
`;

const Title = styled.div`
    text-align: center;
    color: #FFFF;
`;

function Header() {
    return (
        <Nav>
            <Title>To-Do List</Title>
        </Nav>
    );
};

export default Header;