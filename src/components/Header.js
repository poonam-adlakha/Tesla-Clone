import React from 'react';
import styled from 'styled-components';

function header() {
  return (
    <Container>
        <a> 
            <img src='./images/logo.svg'></img>
            </a>

        <Menu>
            <a href='#'>Model S</a>
            <a href='#'>Model 3</a>
            <a href='#'>Model X</a>
            <a href='#'>Model Y</a>
            <a href='#'>Solar Roof</a>
            <a href='#'>Solar Panels</a>
        </Menu>
        <RightMenu>
        <a href='#'>Shop</a>
        <a href='#'>Account</a>
        <a href='#'>Menu</a>
        </RightMenu>
    </Container>
  )
}

export default header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    padding: 0 20px;

`
const Menu = styled.div`
    display: flex;
    align-items: center;

    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 20px;
        flex-wrap: nowrap;
    }
`

const RightMenu = styled.div`
     a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
        flex-wrap: nowrap;
    }
`